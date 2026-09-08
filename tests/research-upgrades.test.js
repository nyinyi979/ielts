import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { test } from 'node:test'
import { runInNewContext } from 'node:vm'

test('research notes settle after DOM changes and update on navigation', () => {
  const source = readFileSync(new URL('../public/research-upgrades.js', import.meta.url), 'utf8')
  const sections = []
  const listeners = {}
  let observer
  let pending = false
  let ready = false
  const window = {
    location: { hash: '' },
    addEventListener: (name, callback) => { listeners[name] = callback },
  }
  const jumpbar = {
    insertAdjacentElement: (_, section) => { sections.push(section); pending = true },
  }
  const document = {
    documentElement: {},
    querySelector: (selector) => selector === '.jumpbar' ? (ready ? jumpbar : null) : sections[0],
    querySelectorAll: () => [...sections],
    createElement: () => ({
      set innerHTML(html) {
        const section = {
          id: html.match(/id="([^"]+)"/)[1],
          classList: { add() {} },
          remove() { sections.splice(sections.indexOf(section), 1); pending = true },
        }
        this.firstElementChild = section
      },
    }),
  }
  runInNewContext(source, {
    window, document, setTimeout: (callback) => callback(),
    MutationObserver: class {
      constructor(callback) { observer = callback }
      observe() {}
    },
  })
  const settle = () => {
    let callbacks = 0
    while (pending) {
      assert.ok(++callbacks < 10, 'observer must settle rather than indefinitely mutating the DOM')
      pending = false
      observer()
    }
  }
  assert.equal(sections.length, 0)
  ready = true
  pending = true
  settle()
  assert.equal(sections[0].id, 'research-writing')
  const original = sections[0]
  pending = true // React renders an unrelated control, such as the timer.
  settle()
  assert.equal(sections[0], original)

  for (const page of ['reading', 'listening', 'speaking', 'writing']) {
    window.location.hash = `#/${page}`
    listeners.hashchange()
    settle()
    assert.equal(sections.length, 1)
    assert.equal(sections[0].id, `research-${page}`)
  }

  // React can replace the page subtree after the hashchange callback.
  sections[0].remove()
  settle()
  assert.equal(sections.length, 1)
  assert.equal(sections[0].id, 'research-writing')
})
