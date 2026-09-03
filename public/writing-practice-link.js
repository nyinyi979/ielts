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
      <a class="practice-card" href="./writing-practice-30-day.html" aria-label="Open the 30-day IELTS Academic Writing Band 7 to 7.5 practice pack">
        <div>
          <span class="badge badge-blue">Band 7–7.5 plan</span>
          <h3>30-Day Academic Writing Practice</h3>
          <p>Open the daily Task 1 visuals and Task 2 essay questions, with timed practice and Band 7–7.5 checklists.</p>
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
