(() => {
  const CTA_ID = 'writing-practice-cta'

  function currentPage() {
    return window.location.hash.replace(/^#\/?/, '') || 'writing'
  }

  function mountPracticeLink() {
    const existing = document.getElementById(CTA_ID)

    if (currentPage() !== 'writing') {
      existing?.remove()
      return
    }

    if (existing) return

    const jumpbar = document.querySelector('.jumpbar')
    if (!jumpbar) return

    const wrapper = document.createElement('div')
    wrapper.id = CTA_ID
    wrapper.className = 'practice-grid'
    wrapper.style.marginTop = '18px'
    wrapper.innerHTML = `
      <a class="practice-card" href="./writing-practice-30-day-researched.html" aria-label="Open the researched 30-day IELTS Academic Writing Band 7 to 9 practice pack">
        <div>
          <span class="badge badge-blue">Band 7–9 researched edition</span>
          <h3>30-Day Academic Writing Practice</h3>
          <p>Daily Task 1 visuals and Task 2 prompts with newly rewritten model essays, planning-first practice, high-band checklists and a rewrite-after-feedback routine.</p>
        </div>
        <span aria-hidden="true" style="font-size:1.4rem;line-height:1">→</span>
      </a>
    `

    jumpbar.insertAdjacentElement('afterend', wrapper)
  }

  window.addEventListener('hashchange', () => setTimeout(mountPracticeLink, 0))
  window.addEventListener('DOMContentLoaded', mountPracticeLink)

  const observer = new MutationObserver(mountPracticeLink)
  observer.observe(document.documentElement, { childList: true, subtree: true })

  mountPracticeLink()
})()
