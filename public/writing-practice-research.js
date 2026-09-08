(() => {
  const habits = [
    ['Task response','Answer every part of the prompt. State a clear position when one is required and keep it consistent.'],
    ['Idea development','Prefer two well-explained ideas to a long list. Ask “why?”, “so what?” and “for example?” before moving on.'],
    ['Paragraph control','Give each paragraph one clear job. A paragraph should develop an idea, not merely contain several topic-related sentences.'],
    ['Cohesion','Use reference, repetition of key terms and logical sentence order before adding a linking phrase. Avoid connector chains.'],
    ['Vocabulary','Choose precise, natural collocations. Do not replace a common word just to sound advanced.'],
    ['Grammar','Use complex structures only when they improve meaning. Protect a high proportion of error-free sentences.']
  ]

  const typeFocus = {
    'Agree / Disagree':'Write your exact degree of agreement before drafting. Both body paragraphs should support that same position; a concession is optional, not compulsory.',
    'Discuss Both Views':'Explain each side as strongly as a real supporter would. Then make your own judgement explicit rather than hiding it in the conclusion.',
    'Problem / Solution':'Make the solution answer the cause/problem you identified. Generic measures lose force when the causal link is missing.',
    'Advantages / Disadvantages':'If the task asks whether one side outweighs the other, compare significance explicitly; do not merely list pros and cons.',
    'Two-Part Question':'Give both questions adequate space. A useful default is one body paragraph per question unless the logic clearly suggests another structure.',
    'Mock Test':'Treat this exactly like test day: 5 minutes to plan, about 32 minutes to draft and the final minutes to check your known error patterns.'
  }

  function sourceBlock(){
    return `<div class="research-source-mini"><b>Why these notes:</b> synthesised from official IELTS Writing criteria, IELTS Liz lessons on planning/overview/development, and recurring advice in high-band r/IELTS experience reports. <a href="https://ielts.org/take-a-test/preparation-resources/writing-test-resources" target="_blank" rel="noreferrer">Official criteria</a> · <a href="https://ieltsliz.com/ielts-writing-task-2/" target="_blank" rel="noreferrer">IELTS Liz</a> · <a href="https://www.reddit.com/r/IELTS/" target="_blank" rel="noreferrer">r/IELTS</a></div>`
  }

  function upgradeDays(){
    document.querySelectorAll('.day').forEach((day, index) => {
      if(day.querySelector('.daily-research')) return
      const badges = [...day.querySelectorAll('.badge')].map(x => x.textContent.trim())
      const type = badges.find(x => typeFocus[x]) || (index === 29 ? 'Mock Test' : '')
      const box = document.createElement('div')
      box.className = 'daily-research'
      box.innerHTML = `<div class="daily-research-title"><span>Day ${index+1} study lens</span><b>${type || 'High-band writing'}</b></div>
        <p>${typeFocus[type] || 'Plan the exact paragraph jobs before writing, then compare your decisions with the model rather than memorising its sentences.'}</p>
        <div class="daily-checks">${habits.map(([a,b]) => `<div><b>${a}</b><span>${b}</span></div>`).join('')}</div>
        <div class="model-rewrite"><b>After reading the model:</b> close it, rewrite only the weakest paragraph in your own words, and deliberately fix one recurring error from your personal error log.</div>`
      const h3 = day.querySelector('h3')
      h3?.insertAdjacentElement('beforebegin', box)
    })
    const root = document.querySelector('main')
    if(root && !document.querySelector('.research-source-mini')) root.insertAdjacentHTML('beforeend', sourceBlock())
  }

  const style = document.createElement('style')
  style.textContent = `.daily-research{margin:18px 0 22px;padding:17px;border:1px solid var(--line);border-radius:15px;background:linear-gradient(135deg,var(--blue-2),var(--surface));}.daily-research-title{display:flex;gap:9px;align-items:center;justify-content:space-between;flex-wrap:wrap}.daily-research-title span{font-size:11px;font-weight:900;text-transform:uppercase;letter-spacing:.06em;color:var(--blue)}.daily-research-title b{font-size:13px}.daily-research>p{margin:7px 0 13px!important;font-size:13px}.daily-checks{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px}.daily-checks>div{padding:10px 11px;border:1px solid var(--line);border-radius:11px;background:var(--surface)}.daily-checks b{display:block;font-size:12px;margin-bottom:3px}.daily-checks span{display:block;font-size:11px;line-height:1.45;color:var(--muted)}.model-rewrite{margin-top:10px;padding:10px 12px;border-radius:10px;background:var(--green-2);color:var(--muted);font-size:12px}.model-rewrite b{color:var(--green)}.research-source-mini{max-width:1180px;margin:20px auto 0;padding:15px 18px;border:1px solid var(--line);border-radius:13px;color:var(--muted);font-size:12px;background:var(--surface)}.research-source-mini a{color:var(--blue);font-weight:800;text-decoration:none}@media(max-width:700px){.daily-checks{grid-template-columns:1fr}}`
  document.head.append(style)
  window.addEventListener('DOMContentLoaded', () => setTimeout(upgradeDays, 0))
  new MutationObserver(upgradeDays).observe(document.documentElement,{childList:true,subtree:true})
  upgradeDays()
})()
