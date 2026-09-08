(() => {
  const SOURCE_LINKS = `
    <div class="source-strip"><strong>Research base</strong><div class="source-links">
      <a href="https://ielts.org/take-a-test/preparation-resources/writing-test-resources" target="_blank" rel="noreferrer">Official IELTS marking guidance</a>
      <a href="https://ieltsliz.com/ielts-writing-task-2/" target="_blank" rel="noreferrer">IELTS Liz · Task 2</a>
      <a href="https://ieltsliz.com/ielts-writing-task-1-lessons-and-tips/" target="_blank" rel="noreferrer">IELTS Liz · Task 1</a>
      <a href="https://www.reddit.com/r/IELTS/" target="_blank" rel="noreferrer">Reddit · r/IELTS experience reports</a>
    </div></div>`

  const notes = {
    writing: `
      <section class="research-upgrade" id="research-writing">
        <div class="research-upgrade-head"><small>Research-informed upgrade</small><h2>What actually moves Writing from Band 6 → 7 → 8 → 9</h2><p>The same pattern appears in official descriptors, IELTS Liz guidance and high-scoring candidate reports: stronger writing is clearer, more selective and more controlled — not simply more complicated.</p><div class="research-kicker"><span>Task first</span><span>Develop fewer ideas</span><span>Natural cohesion</span><span>Accuracy over rarity</span></div></div>
        <div class="research-upgrade-body">
          <div class="band-ladder">
            <div class="band-step"><b>Band 6</b><span>Relevant overall, but some ideas are insufficiently developed; cohesion or vocabulary can feel mechanical; grammar errors are noticeable.</span></div>
            <div class="band-step"><b>Band 7</b><span>Clear position and progression, logically organised paragraphs, developed support, good range with some errors that do not reduce clarity.</span></div>
            <div class="band-step"><b>Band 8</b><span>All task requirements handled well; ideas are extended and supported; cohesion is skilful; vocabulary is precise and flexible; most sentences are error-free.</span></div>
            <div class="band-step"><b>Band 9</b><span>Fully developed response with effortless progression, highly precise language and consistently controlled grammar. Nothing sounds forced or pre-learned.</span></div>
          </div>
          <div class="research-grid" style="margin-top:13px">
            <div class="research-card"><h3>Task 2: use the 5-minute plan</h3><ol><li>Underline every command and question.</li><li>Decide your exact position before writing.</li><li>Choose only 2 main ideas you can explain deeply.</li><li>For each idea, write a reason and a consequence/example.</li><li>Check that every paragraph has one job.</li></ol></div>
            <div class="research-card"><h3>Task 1: overview before details</h3><ol><li>Ignore small numbers first.</li><li>Identify the dominant trend, biggest contrast, top/bottom or overall transformation.</li><li>Write 2 overview features.</li><li>Group details by comparison, not by the visual's left-to-right order.</li></ol></div>
            <div class="research-card"><h3>Stop chasing “Band 9 vocabulary”</h3><p>High scorers repeatedly report that accurate, natural collocation beats obscure synonyms. Use common academic words precisely, vary only when the alternative fits naturally, and avoid memorised connector chains.</p></div>
            <div class="research-card"><h3>Rewrite after feedback</h3><p>The fastest improvement loop is not endless full essays. Write → mark the exact weakness → rewrite the weakest paragraph → reuse the corrected pattern in a new task. Keep an error bank for your own grammar and collocation mistakes.</p></div>
          </div>
          <div class="research-note"><b>High-band self-check:</b> Can a reader identify your answer to the task in the introduction? Does every body paragraph explain why the point matters? Can you delete a connector without breaking the logic? Are most complex sentences genuinely easier to read than two separate sentences? If not, simplify.</div>
          ${SOURCE_LINKS}
        </div>
      </section>`,
    reading: `
      <section class="research-upgrade" id="research-reading">
        <div class="research-upgrade-head"><small>Band-building note</small><h2>Reading: train evidence location, not just speed</h2><p>High scores usually come from disciplined question-type decisions and ruthless review of why an answer was wrong.</p></div>
        <div class="research-upgrade-body">
          <div class="research-grid">
            <div class="research-card"><h3>Passage order is optional</h3><p>If Passage 3 repeatedly destroys your score, practise it alone and occasionally attempt it first. The goal is to build the hardest skill while fresh, then return to normal test order once accuracy improves.</p></div>
            <div class="research-card"><h3>T/F/NG evidence rule</h3><p>TRUE = same meaning, FALSE = opposite meaning, NOT GIVEN = the passage never settles the exact claim. Do not convert “not mentioned” into FALSE.</p></div>
            <div class="research-card"><h3>Headings: summarise before options</h3><p>Write a 3–6 word summary of the paragraph's purpose before choosing. This prevents one attractive keyword from hijacking the answer.</p></div>
            <div class="research-card"><h3>Review by error cause</h3><p>Label each miss: wrong location, paraphrase missed, logic error, instruction/form error, or time pressure. Your next drill should target the category, not simply repeat another full test.</p></div>
          </div>
          <div class="research-note"><b>Band 8/9 habit:</b> after every passage, collect 5 question-wording ↔ passage-wording paraphrase pairs. This directly trains the mechanism IELTS uses to hide answers.</div>
          ${SOURCE_LINKS}
        </div>
      </section>`,
    listening: `
      <section class="research-upgrade" id="research-listening">
        <div class="research-upgrade-head"><small>Band-building note</small><h2>Listening: prediction + distractor control + instant recovery</h2><p>Listening scores rise when you learn to stay ahead of the recording and stop one missed answer from becoming three.</p></div>
        <div class="research-upgrade-body"><div class="research-grid">
          <div class="research-card"><h3>Predict before audio arrives</h3><p>For every gap, predict grammar and semantic type: number, place, noun, adjective, name, date. This sharply narrows what you need to hear.</p></div>
          <div class="research-card"><h3>Listen past the first plausible answer</h3><p>Correction language such as “actually”, “rather”, “we changed it to” and “I thought… but…” is often where the real answer appears.</p></div>
          <div class="research-card"><h3>Never chase a lost answer</h3><p>Guess and move your eyes to the next item. Maintaining your place is more valuable than mentally replaying something the recording has already left behind.</p></div>
          <div class="research-card"><h3>Use transcripts only after a real attempt</h3><p>Mark the exact paraphrase, distractor and pronunciation feature that beat you, then replay until you can hear it without text.</p></div>
        </div><div class="research-note"><b>Final form check:</b> spelling, plural/singular, word limit and number format can turn correct understanding into a lost mark.</div>${SOURCE_LINKS}</div>
      </section>`,
    speaking: `
      <section class="research-upgrade" id="research-speaking">
        <div class="research-upgrade-head"><small>Band-building note</small><h2>Speaking: fluent development beats memorised “fancy” language</h2><p>Strong candidates sound responsive and flexible. They answer the exact question, extend naturally and recover smoothly when they need to reformulate.</p></div>
        <div class="research-upgrade-body"><div class="research-grid">
          <div class="research-card"><h3>Part 1</h3><p>Answer + one reason/detail. Do not turn a simple personal question into a memorised mini-speech.</p></div>
          <div class="research-card"><h3>Part 2</h3><p>Use the preparation minute to create a story line: context → 2–3 concrete details → feeling/result. Specific details reduce pauses.</p></div>
          <div class="research-card"><h3>Part 3</h3><p>Use claim → why → example/contrast → consequence. This creates genuine development without long memorised frames.</p></div>
          <div class="research-card"><h3>Pronunciation</h3><p>Prioritise intelligibility, stress, chunking and connected speech. An accent is not a problem if the listener can follow you comfortably.</p></div>
        </div><div class="research-note"><b>Repair is a skill:</b> “What I mean is…” or “Let me put that another way…” is better than freezing after a grammar mistake.</div>${SOURCE_LINKS}</div>
      </section>`
  }

  function mount(){
    const page = window.location.hash.replace(/^#\/?/, '') || 'writing'
    // Observer callbacks also run for our own insertion. Keep the current
    // section in place so those callbacks settle without another mutation.
    const existing = document.querySelector('.research-upgrade.injected')
    if (existing?.id === `research-${page}`) return
    document.querySelectorAll('.research-upgrade.injected').forEach(x => x.remove())
    const html = notes[page]
    if(!html) return
    const jump = document.querySelector('.jumpbar')
    if(!jump) return
    const holder = document.createElement('div')
    holder.className = 'injected'
    holder.innerHTML = html
    const section = holder.firstElementChild
    section.classList.add('injected')
    jump.insertAdjacentElement('afterend', section)
  }
  window.addEventListener('hashchange', () => setTimeout(mount, 0))
  window.addEventListener('DOMContentLoaded', mount)
  new MutationObserver(mount).observe(document.documentElement,{childList:true,subtree:true})
  mount()
})()
