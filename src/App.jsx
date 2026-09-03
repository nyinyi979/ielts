import React, { useEffect, useMemo, useState } from 'react'
import { topicBanks, wordBanks } from './data.js'
import { academicTask1Templates, generalTask1Templates, task2Templates } from './writingTemplates.js'

const NAV = [
  { id: 'writing', label: 'Writing', icon: 'pen' },
  { id: 'reading', label: 'Reading', icon: 'book' },
  { id: 'listening', label: 'Listening', icon: 'headphones' },
  { id: 'speaking', label: 'Speaking', icon: 'mic' },
]

const PRACTICE = {
  writing: [
    { name: 'IELTS.org Academic sample tests', url: 'https://ielts.org/take-a-test/preparation-resources/sample-test-questions/academic-test', label: 'Official', note: 'Use these first for authentic Task 1 and Task 2 prompts and official familiarisation.' },
    { name: 'IELTS.org General Training sample tests', url: 'https://ielts.org/take-a-test/preparation-resources/sample-test-questions/general-training-test', label: 'Official', note: 'Practise authentic letter prompts as well as General Training Task 2 essays.' },
    { name: 'How IELTS Writing is marked', url: 'https://ielts.org/take-a-test/preparation-resources/writing-test-resources', label: 'Official', note: 'Official explanations of Task Achievement/Response, Coherence and Cohesion, vocabulary and grammar.' },
    { name: 'British Council free practice & mocks', url: 'https://takeielts.britishcouncil.org/prepare/ielts-free-practice-mock-tests', label: 'Official partner', note: 'Timed Academic Writing practice plus IELTS Ready resources.' },
    { name: 'IDP official practice tests', url: 'https://ielts.idp.com/about/practice-tests/new-practice-tests', label: 'Official partner', note: 'Skill-specific IELTS practice tasks with answer material and familiarisation.' },
    { name: 'Cambridge Write & Improve', url: 'https://www.cambridgeenglish.org/learning-english/free-resources/write-and-improve/', label: 'Supplement', note: 'Useful for grammar, spelling and revision feedback. Do not treat its feedback as an IELTS band score.' },
  ],
  reading: [
    { name: 'IELTS.org Academic sample tests', url: 'https://ielts.org/take-a-test/preparation-resources/sample-test-questions/academic-test', label: 'Official', note: 'Authentic Academic Reading question types and answer keys.' },
    { name: 'British Council free practice & mocks', url: 'https://takeielts.britishcouncil.org/prepare/ielts-free-practice-mock-tests', label: 'Official partner', note: 'Full-length Reading practice for speed, accuracy and timing.' },
    { name: 'IDP official practice tests', url: 'https://ielts.idp.com/about/practice-tests/new-practice-tests', label: 'Official partner', note: 'Question-type practice including headings, completion and T/F/NG.' },
    { name: 'IDP computer familiarisation', url: 'https://ielts.idp.com/thailand/prepare/ielts-familiarisation-tests', label: 'Official partner', note: 'Useful if you will take IELTS on computer; practise the screen workflow before test day.' },
  ],
  listening: [
    { name: 'IELTS.org Academic sample tests', url: 'https://ielts.org/take-a-test/preparation-resources/sample-test-questions/academic-test', label: 'Official', note: 'Official recordings, transcripts and answer keys across major question types.' },
    { name: 'British Council free practice & mocks', url: 'https://takeielts.britishcouncil.org/prepare/ielts-free-practice-mock-tests', label: 'Official partner', note: 'Timed Listening practice with different accents and common task formats.' },
    { name: 'IDP official practice tests', url: 'https://ielts.idp.com/about/practice-tests/new-practice-tests', label: 'Official partner', note: 'Includes completion, multiple choice and Listening familiarisation.' },
    { name: 'IDP computer familiarisation', url: 'https://ielts.idp.com/thailand/prepare/ielts-familiarisation-tests', label: 'Official partner', note: 'Practise the on-screen experience before test day if you are taking IELTS on computer.' },
  ],
  speaking: [
    { name: 'IELTS.org Speaking sample tasks', url: 'https://ielts.org/take-a-test/preparation-resources/sample-test-questions/academic-test', label: 'Official', note: 'Use official Part 1, Part 2 and Part 3 materials to simulate the real interview.' },
    { name: 'British Council free practice & mocks', url: 'https://takeielts.britishcouncil.org/prepare/ielts-free-practice-mock-tests', label: 'Official partner', note: 'Speaking prompts and mock-style preparation resources.' },
    { name: 'IDP official practice tests', url: 'https://ielts.idp.com/about/practice-tests/new-practice-tests', label: 'Official partner', note: 'Part-based practice and familiarisation from an IELTS partner.' },
    { name: 'YouGlish pronunciation search', url: 'https://youglish.com/', label: 'Supplement', note: 'Hear real examples of word stress, connected speech and regional pronunciation in context.' },
  ],
}

const SCORE_BANDS = [
  { min: 39, band: 9 }, { min: 37, band: 8.5 }, { min: 35, band: 8 },
  { min: 32, band: 7.5 }, { min: 30, band: 7 }, { min: 26, band: 6.5 },
  { min: 23, band: 6 }, { min: 18, band: 5.5 }, { min: 16, band: 5 },
  { min: 13, band: 4.5 }, { min: 11, band: 4 }, { min: 0, band: '<4' },
]

function Icon({ name, size = 20 }) {
  const common = { width: size, height: size, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.9, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true }
  const paths = {
    pen: <><path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z"/></>,
    book: <><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z"/></>,
    headphones: <><path d="M4 14a8 8 0 0 1 16 0"/><path d="M18 19a2 2 0 0 0 2-2v-3h-4v5Z"/><path d="M6 19a2 2 0 0 1-2-2v-3h4v5Z"/></>,
    mic: <><rect x="9" y="2" width="6" height="12" rx="3"/><path d="M5 10a7 7 0 0 0 14 0"/><path d="M12 17v5"/><path d="M8 22h8"/></>,
    sun: <><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/></>,
    moon: <><path d="M21 12.8A9 9 0 1 1 11.2 3 7 7 0 0 0 21 12.8Z"/></>,
    external: <><path d="M14 3h7v7"/><path d="m10 14 11-11"/><path d="M21 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5"/></>,
    chevron: <path d="m6 9 6 6 6-6"/>,
    search: <><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></>,
    check: <path d="m5 12 4 4L19 6"/>,
    clock: <><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></>,
    target: <><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/></>,
    reset: <><path d="M3 12a9 9 0 1 0 3-6.7L3 8"/><path d="M3 3v5h5"/></>,
    copy: <><rect x="9" y="9" width="11" height="11" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></>,
  }
  return <svg {...common}>{paths[name]}</svg>
}

function usePage() {
  const get = () => {
    const value = window.location.hash.replace(/^#\/?/, '')
    return NAV.some((x) => x.id === value) ? value : 'writing'
  }
  const [page, setPage] = useState(get)
  useEffect(() => {
    const onHash = () => setPage(get())
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [])
  const go = (id) => { window.location.hash = `/${id}` }
  return [page, go]
}

function useTheme() {
  const initial = () => {
    const saved = localStorage.getItem('ielts-theme')
    if (saved === 'light' || saved === 'dark') return saved
    return window.matchMedia?.('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  }
  const [theme, setTheme] = useState(initial)
  useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem('ielts-theme', theme)
  }, [theme])
  return [theme, () => setTheme((x) => x === 'dark' ? 'light' : 'dark')]
}

function Badge({ children, tone = 'blue' }) { return <span className={`badge badge-${tone}`}>{children}</span> }
function Card({ title, eyebrow, children, className = '' }) { return <section className={`card ${className}`}>{eyebrow && <div className="card-eyebrow">{eyebrow}</div>}{title && <h3>{title}</h3>}{children}</section> }
function Callout({ title, children, tone = 'blue' }) { return <div className={`callout callout-${tone}`}><strong>{title}</strong><div>{children}</div></div> }
function Template({ title, children }) { return <div className="template"><div className="template-title">{title}</div><div>{children}</div></div> }
function Stat({ value, label }) { return <div className="stat"><div>{value}</div><span>{label}</span></div> }

function Accordion({ title, subtitle, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen)
  return <div className={`accordion ${open ? 'open' : ''}`}>
    <button className="accordion-button" onClick={() => setOpen((x) => !x)} aria-expanded={open}>
      <span><strong>{title}</strong>{subtitle && <small>{subtitle}</small>}</span><span className="chevron"><Icon name="chevron" size={18}/></span>
    </button>
    {open && <div className="accordion-body">{children}</div>}
  </div>
}

function DataTable({ columns, rows }) {
  return <div className="table-wrap"><table><thead><tr>{columns.map((x) => <th key={x}>{x}</th>)}</tr></thead><tbody>{rows.map((row, i) => <tr key={i}>{row.map((x, j) => <td key={j}>{x}</td>)}</tr>)}</tbody></table></div>
}

function SkillHero({ icon, kicker, title, intro, stats, tags }) {
  return <header className="skill-hero">
    <div className="hero-copy"><div className="hero-kicker"><span className="hero-icon"><Icon name={icon} size={19}/></span>{kicker}</div><h1>{title}</h1><p>{intro}</p><div className="tag-row">{tags.map((x) => <Badge key={x.label} tone={x.tone}>{x.label}</Badge>)}</div></div>
    <div className="hero-stats">{stats.map((x) => <Stat key={x.label} {...x}/>)}</div>
  </header>
}

function JumpBar({ items }) { return <nav className="jumpbar" aria-label="Page sections">{items.map((x) => <a key={x.id} href={`#${x.id}`}>{x.label}</a>)}</nav> }
function SectionTitle({ id, number, title, text }) { return <div className="section-title" id={id}><span>{number}</span><div><h2>{title}</h2>{text && <p>{text}</p>}</div></div> }

function PracticeGrid({ skill }) {
  return <div className="practice-grid">{PRACTICE[skill].map((x) => <a className="practice-card" key={x.url} href={x.url} target="_blank" rel="noreferrer"><div><Badge tone={x.label === 'Supplement' ? 'amber' : 'green'}>{x.label}</Badge><h3>{x.name}</h3><p>{x.note}</p></div><Icon name="external" size={19}/></a>)}</div>
}

function WordBankCard({ bank }) {
  const [open, setOpen] = useState(false)
  return <Card className="word-card" title={bank.title} eyebrow={bank.skill}>
    <div className="chips">{bank.core.map((x) => <span className="chip chip-core" key={x}>{x}</span>)}</div>
    <button className="expand-button" onClick={() => setOpen((x) => !x)}>{open ? 'Show less' : 'Expand more'}<Icon name="chevron" size={16}/></button>
    {open && <div className="word-more"><h4>More choices</h4><div className="chips">{bank.more.map((x) => <span className="chip" key={x}>{x}</span>)}</div><h4>Sentence patterns</h4><ul>{bank.patterns.map((x) => <li key={x}>{x}</li>)}</ul><div className="usage-note"><b>Usage:</b> {bank.note}</div></div>}
  </Card>
}

function WordExplorer({ mode }) {
  const [query, setQuery] = useState('')
  const banks = useMemo(() => wordBanks.filter((bank) => {
    const skill = bank.skill.toLowerCase()
    const fits = skill.includes(mode.toLowerCase()) || (mode === 'writing' && skill.includes('writing')) || (mode === 'speaking' && skill.includes('speaking'))
    const haystack = [bank.title, bank.skill, ...bank.core, ...bank.more].join(' ').toLowerCase()
    return fits && haystack.includes(query.toLowerCase())
  }), [mode, query])
  return <><label className="searchbox"><Icon name="search" size={18}/><input value={query} onChange={(e) => setQuery(e.target.value)} placeholder={`Search ${mode} language…`} /></label><div className="word-grid">{banks.map((b) => <WordBankCard key={b.id} bank={b}/>)}</div>{banks.length === 0 && <p className="empty">No matching language bank. Try a simpler keyword.</p>}</>
}

function PracticeTimer({ presets }) {
  const [seconds, setSeconds] = useState(presets[0] * 60)
  const [running, setRunning] = useState(false)
  const [chosen, setChosen] = useState(presets[0])
  useEffect(() => {
    if (!running) return
    const id = setInterval(() => setSeconds((s) => {
      if (s <= 1) { clearInterval(id); setRunning(false); return 0 }
      return s - 1
    }), 1000)
    return () => clearInterval(id)
  }, [running])
  const choose = (m) => { setChosen(m); setSeconds(m * 60); setRunning(false) }
  const mm = String(Math.floor(seconds / 60)).padStart(2, '0')
  const ss = String(seconds % 60).padStart(2, '0')
  return <Card title="Practice timer" eyebrow="TRAIN UNDER TEST CONDITIONS" className="timer-card">
    <div className="timer-time">{mm}:{ss}</div>
    <div className="timer-presets">{presets.map((m) => <button key={m} className={chosen === m ? 'active' : ''} onClick={() => choose(m)}>{m} min</button>)}</div>
    <div className="timer-actions"><button className="primary-btn" onClick={() => setRunning((x) => !x)}>{running ? 'Pause' : 'Start'}</button><button className="ghost-btn" onClick={() => { setRunning(false); setSeconds(chosen * 60) }}><Icon name="reset" size={16}/>Reset</button></div>
  </Card>
}

function MasteryChecklist({ skill, items }) {
  const key = `ielts-mastery-${skill}`
  const [done, setDone] = useState(() => {
    try { return JSON.parse(localStorage.getItem(key) || '{}') } catch { return {} }
  })
  useEffect(() => { localStorage.setItem(key, JSON.stringify(done)) }, [done, key])
  const completed = items.filter((_, i) => done[i]).length
  return <Card title="Mastery checklist" eyebrow={`${completed}/${items.length} READY`} className="mastery-card">
    <div className="progress-track"><span style={{ width: `${(completed / items.length) * 100}%` }} /></div>
    <div className="mastery-list">{items.map((x, i) => <label key={x} className={done[i] ? 'done' : ''}><input type="checkbox" checked={!!done[i]} onChange={() => setDone((d) => ({ ...d, [i]: !d[i] }))}/><span>{x}</span></label>)}</div>
  </Card>
}

function ScoreEstimator({ label }) {
  const [raw, setRaw] = useState('30')
  const n = Math.max(0, Math.min(40, Number(raw) || 0))
  const band = SCORE_BANDS.find((x) => n >= x.min)?.band ?? '<4'
  return <Card title={`${label} raw-score guide`} eyebrow="APPROXIMATE CONVERSION" className="score-card">
    <div className="score-row"><label>Correct answers<input type="number" min="0" max="40" value={raw} onChange={(e) => setRaw(e.target.value)} /></label><div className="band-result"><span>Band</span><strong>{band}</strong></div></div>
    <p className="microcopy">Average conversion only; exact cut-offs can vary slightly between tests. Never leave an answer blank just because you are unsure.</p>
  </Card>
}

function ExaminerGrid({ items }) {
  return <div className="examiner-grid">{items.map((x) => <Card key={x.title} title={x.title} eyebrow="EXAMINER LENS"><p>{x.text}</p><div className="do-line"><b>Train:</b> {x.train}</div></Card>)}</div>
}

function CopyTemplateButton({ template }) {
  const [copied, setCopied] = useState(false)
  const copy = async () => {
    const text = `${template.title}\n\n${template.plan.map(([label, line]) => `${label}\n${line}`).join('\n\n')}\n\nExaminer note: ${template.examiner}`
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1800)
    } catch {
      setCopied(false)
    }
  }
  return <button className="copy-btn" onClick={copy} aria-label={`Copy ${template.title} template`}><Icon name={copied ? 'check' : 'copy'} size={16}/>{copied ? 'Copied' : 'Copy template'}</button>
}

function TemplateCollection({ templates }) {
  return <div className="template-collection">{templates.map((template, index) => <Accordion key={template.title} title={template.title} subtitle={`${template.tag} · ${template.useWhen}`} defaultOpen={index === 0}>
    <div className="template-toolbar"><Badge>{template.tag}</Badge><CopyTemplateButton template={template}/></div>
    <div className="paragraph-plan">{template.plan.map(([label, text]) => <div className="paragraph-step" key={label}><span>{label}</span><p>{text}</p></div>)}</div>
    <Callout title="Examiner note" tone="amber">{template.examiner}</Callout>
  </Accordion>)}</div>
}

function WritingTemplateLibrary() {
  const groups = [
    { id: 'academic', label: 'Academic Task 1', count: academicTask1Templates.length, templates: academicTask1Templates },
    { id: 'general', label: 'General Task 1', count: generalTask1Templates.length, templates: generalTask1Templates },
    { id: 'task2', label: 'Task 2 essays', count: task2Templates.length, templates: task2Templates },
  ]
  const [active, setActive] = useState('academic')
  const selected = groups.find((group) => group.id === active)
  return <div className="template-library">
    <div className="template-tabs" role="tablist" aria-label="Writing template groups">{groups.map((group) => <button key={group.id} role="tab" aria-selected={active === group.id} className={active === group.id ? 'active' : ''} onClick={() => setActive(group.id)}><span>{group.label}</span><b>{group.count}</b></button>)}</div>
    <div className="template-library-intro"><div><strong>{selected.label}</strong><span>Choose the closest task, replace every bracketed prompt, and change the wording to fit the question.</span></div><Badge tone="green">{selected.count} adaptable frameworks</Badge></div>
    <TemplateCollection templates={selected.templates}/>
  </div>
}

function WritingPage() {
  const essayTypes = [
    ['Advantages / disadvantages', 'Discuss both sides', 'Do not invent a personal position unless the prompt asks for it.'],
    ['Causes/problems + solutions', 'Answer both halves', 'Make each solution address a real cause/problem you identified.'],
    ['Two-part question', 'Answer Q1 + Q2', 'Usually give each question a clear body-paragraph job.'],
    ['Agree / disagree', 'Take a position', 'State it clearly and keep it consistent.'],
    ['Positive / negative', 'Evaluate the trend', 'Decide the overall direction of your judgement and support it.'],
    ['Discuss both views + opinion', 'Explain both + decide', 'Present both views fairly, then make your own position clear.'],
    ['Outweigh', 'Compare significance', 'Discuss both sides and explicitly say which matters more.'],
    ['Mixed expository + opinion', 'Answer facts + position', 'Do not let the factual half hide the required opinion.'],
  ]
  return <>
    <SkillHero icon="pen" kicker="Academic + General Training" title="Writing" intro="Write for the examiner: answer the exact task, organise clearly, develop relevant ideas and use accurate language. Use the templates as flexible paragraph jobs, never as a memorised script." stats={[{value:'60',label:'minutes total'},{value:'150+',label:'Task 1 minimum'},{value:'250+',label:'Task 2 minimum'},{value:'2×',label:'Task 2 weight'}]} tags={[{label:'Examiner criteria',tone:'green'},{label:'23 full templates',tone:'blue'},{label:'Copy & adapt',tone:'amber'}]} />
    <JumpBar items={[{id:'w-score',label:'What earns marks'},{id:'w-library',label:'All templates'},{id:'w-task1',label:'Academic Task 1'},{id:'w-general',label:'General Task 1'},{id:'w-task2',label:'Task 2'},{id:'w-language',label:'Language'},{id:'w-drill',label:'Training'}]} />

    <SectionTitle id="w-score" number="01" title="What the examiner rewards" text="Your job is not to sound 'advanced'. Your job is to be relevant, clear, sufficiently developed and accurately controlled." />
    <ExaminerGrid items={[
      { title:'Task Achievement / Response', text:'Task 1: select key features and report them accurately. Task 2: answer every part, develop a clear position when required, and support main ideas.', train:'Before writing, turn every question mark or command into a paragraph job.' },
      { title:'Coherence & Cohesion', text:'Ideas should progress logically, paragraphs should have a clear central purpose, and linking should feel natural rather than mechanical.', train:'Outline paragraph purpose in 3–5 words before drafting.' },
      { title:'Lexical Resource', text:'Range matters, but precision, collocation, spelling and word formation matter more than rare vocabulary.', train:'Learn small function-based word sets and reuse them accurately.' },
      { title:'Grammar Range & Accuracy', text:'Use a mix of simple and complex structures with frequent error-free sentences. Complexity without control does not help.', train:'Practise 5–6 reliable complex patterns until automatic.' },
    ]}/>

    <SectionTitle id="w-library" number="02" title="Complete writing template library" text="Select your test and task type. Each framework shows the job of every paragraph, useful starter language and the mistake an examiner would notice first." />
    <Callout title="Use templates safely" tone="blue">Memorise the <b>structure</b>, not entire sentences. Replace every bracketed part, answer the exact prompt, and vary the language naturally. A template cannot rescue an unclear overview, missing bullet point or underdeveloped idea.</Callout>
    <WritingTemplateLibrary />

    <SectionTitle id="w-task1" number="03" title="Academic Task 1 — visual report" text="The safest default is four paragraphs: Introduction → Overview → Details 1 → Details 2. No separate conclusion is needed." />
    <Callout title="Decision engine" tone="green">Classify the visual first: <b>dynamic</b> → change language; <b>static</b> → comparison/proportion; <b>process</b> → sequence; <b>map/plan</b> → location and change. Then choose two overview features and two detail groups.</Callout>
    <DataTable columns={['Visual type','Activate','Overview question']} rows={[
      ['Line / bar / table over time','change + comparison','What rises/falls most? What is highest/lowest? Any crossover or striking contrast?'],
      ['Static bar / pie / table','comparison + proportion','Who is largest/smallest? What are the main rankings and gaps?'],
      ['Multiple visuals','mixed language','What relationship connects the visuals? Which comparisons matter most?'],
      ['Process','sequence + passive/active','How many broad stages? Where does it begin and end? Is it cyclical?'],
      ['Map / plan / comparison diagram','location + change + passive','What is the overall transformation? What was added, removed, replaced or retained?'],
    ]}/>
    <Accordion title="Universal Task 1 template" subtitle="adapt the language to the visual" defaultOpen>
      <Template title="Introduction">The [chart/graph/table/diagram/maps] [shows/illustrates/compares] [what] [where, if relevant] [time period, if given].</Template>
      <Template title="Overview">Overall, [main trend / dominant feature / overall transformation]. In addition, [second major feature].</Template>
      <Template title="Details 1">Group 1 → key figures/features → meaningful comparison.</Template>
      <Template title="Details 2">Group 2 → remaining key figures/features → meaningful comparison.</Template>
    </Accordion>
    <Accordion title="How to choose a strong overview" subtitle="the skill students most often under-train" defaultOpen>
      <ol><li>Ignore tiny details and numbers at first.</li><li>Ask what you would tell someone who could only hear two facts about the visual.</li><li>Dynamic: overall direction, largest movement, top/bottom, convergence/divergence or crossover.</li><li>Static: dominant/minor groups, ranking, biggest gap or clear similarity.</li><li>Process: broad stage count + beginning/end. Map: overall development + most noticeable change.</li></ol>
    </Accordion>
    <div className="two-grid">
      <Accordion title="Dynamic charts" subtitle="change over time"><Template title="Pattern">At the beginning of the period, A stood at [x], compared with B at [y]. A then rose/fell [slightly/steadily/sharply] to [z], whereas B remained relatively stable. By [year], A had [final trend], while B [final trend].</Template><DataTable columns={['Function','Safe choices']} rows={[["Increase","rise, increase, grow, climb; surge for a large rapid rise"],["Decrease","fall, decline, drop; plunge/plummet for a large rapid fall"],["Stable","remain stable/unchanged, level off"],["Fluctuate","fluctuate between/around"],["Peak","peak at; reach a peak of"]]}/></Accordion>
      <Accordion title="Static charts / tables" subtitle="comparison at one time"><Template title="Pattern">A accounted for [x]%, compared with B at [y]%. C was roughly twice as high as D, at [x] and [y], respectively.</Template><p>Use <b>account for, make up, represent, the majority/minority, approximately, just over/under, higher/lower than, twice as high as</b>.</p></Accordion>
      <Accordion title="Process diagrams" subtitle="man-made or natural"><Template title="Overview">Overall, the process consists of [number] main stages, beginning with [first stage] and ending with [last stage].</Template><Template title="Body">Initially, [input] is [processed]. It is then [next step], after which [next stage]. Once this stage is complete, [next stage]. Finally, [output/end point].</Template><p>Man-made processes often favour passive forms; natural life cycles often sound more natural in active voice.</p></Accordion>
      <Accordion title="Maps / plans" subtitle="before-after or proposed development"><Template title="Overview">Overall, the area became [more developed/residential/accessible], with the most noticeable changes being [A] and [B]. [C], however, remained largely unchanged.</Template><Template title="Details">In [earlier year], [feature] was located [place]. By [later year], it had been replaced by / converted into [new feature], while a new [feature] had been constructed [location].</Template></Accordion>
    </div>
    <Accordion title="Task 1 precision traps" subtitle="easy marks to protect"><DataTable columns={['Meaning','Correct pattern','Example']} rows={[["Final value","rise/fall TO","rose to 80"],["Amount of change","rise/fall BY","rose by 20"],["Start → end","FROM A TO B","rose from 60 to 80"],["Noun amount","an increase OF","an increase of 20"],["Peak","peak AT / reach a peak OF","peaked at 90"],["Range","fluctuate BETWEEN A AND B","between 4% and 7%"]]}/></Accordion>

    <SectionTitle id="w-general" number="04" title="General Training Task 1 — letter" text="Your opening purpose, coverage of all three bullet points, letter format and consistent tone are central to Task Achievement." />
    <div className="three-grid">
      <Card title="Formal" eyebrow="UNKNOWN PERSON"><p><b>Use:</b> Dear Sir or Madam / Dear Mr or Ms [Surname].</p><p><b>Tone:</b> polite, direct and impersonal. Avoid slang and emotional exaggeration.</p><div className="do-line"><b>Close:</b> Yours faithfully (no name) or Yours sincerely (named person).</div></Card>
      <Card title="Semi-formal" eyebrow="KNOWN PROFESSIONAL CONTACT"><p><b>Use:</b> Dear Mr or Ms [Surname].</p><p><b>Tone:</b> respectful and warm. Natural first-person language is appropriate.</p><div className="do-line"><b>Close:</b> Kind regards or Yours sincerely.</div></Card>
      <Card title="Informal" eyebrow="FRIEND OR RELATIVE"><p><b>Use:</b> Dear [First name].</p><p><b>Tone:</b> friendly and personal. Contractions and natural phrasal verbs are welcome.</p><div className="do-line"><b>Close:</b> Best wishes, All the best or Take care.</div></Card>
    </div>
    <Accordion title="Universal letter planning method" subtitle="one clear purpose + three fully developed bullets" defaultOpen>
      <div className="process-row">{['Identify reader','Choose tone','State purpose','Develop bullet 1','Develop bullet 2','Develop bullet 3','Check sign-off'].map((x,i)=><div className="process-step" key={x}><span>{i+1}</span>{x}</div>)}</div>
      <Template title="Reliable five-part shape">Greeting → short purpose paragraph → one developed paragraph for each bullet point → suitable sign-off. Combine two bullets only when the message remains easy to follow.</Template>
      <Callout title="Examiner check" tone="amber">If a bullet uses a plural such as <b>suggestions</b> or <b>problems</b>, provide more than one. Extend each bullet with a reason, detail, consequence or example.</Callout>
    </Accordion>

    <SectionTitle id="w-task2" number="05" title="Task 2 — essay" text="Task 2 is shared by Academic and General Training. Decode the prompt before generating ideas because the command wording decides your structure." />
    <Callout title="Prompt decoder" tone="green"><b>T</b> = topic. <b>Q</b> = exact question(s). <b>SF</b> = any special limitation. Then decide whether the task asks for information, an opinion, or both. If a position is required, state it clearly and keep it consistent.</Callout>
    <DataTable columns={['Question type','Your job','Examiner check']} rows={essayTypes}/>
    <Accordion title="Universal essay architecture" subtitle="four paragraphs is a strong default" defaultOpen>
      <DataTable columns={['Paragraph','Purpose']} rows={[["Introduction","Paraphrase/address the topic + direct thesis/answer."],["Body 1","One clear paragraph purpose + main idea(s) + support."],["Body 2","Second clear paragraph purpose + main idea(s) + support."],["Body 3 (optional)","Use only when a third distinct job improves clarity."],["Conclusion","Restate position or summarise answers. No new main idea."]]}/>
      <Template title="Body development">Topic sentence → Main idea → Reason/explanation → Example (if useful) → Result/impact → second related idea (if needed).</Template>
    </Accordion>
    <Accordion title="GSM + REAR" subtitle="fast planning systems" defaultOpen>
      <p><b>GSM:</b> General thesis = broadly states what you will address; Specific = previews actual main points; Mixed = combines the two and is most useful when the prompt has two distinct parts.</p>
      <p><b>REAR:</b> Reason → Example → Addition → Result. Use it as a menu for development, not a rigid formula.</p>
      <Template title="REAR example">A major advantage of remote work is that employees can save commuting time. This is because they no longer need to travel to an office every day. For example, a worker who previously spent two hours commuting can use that time for family or exercise. As a result, work-life balance may improve.</Template>
    </Accordion>
    <Accordion title="Templates by question type" subtitle="memorise the jobs, not the whole sentences">
      <Template title="Advantages / disadvantages">[Paraphrase]. While this development offers several benefits, it also has drawbacks that should be considered. → Body 1 benefits → Body 2 drawbacks → Conclusion summarises both.</Template>
      <Template title="Causes + solutions">[Paraphrase problem]. Several factors contribute to this situation, but a number of measures could be taken to address it. → Causes → Solutions → Conclusion.</Template>
      <Template title="Agree / disagree">[Paraphrase claim]. I [completely/mostly] agree/disagree because [reason 1] and [reason 2]. → Reason 1 → Reason 2 → Restate position.</Template>
      <Template title="Discuss both views + opinion">While some people argue that [A], others believe [B]. In my view, [position]. → Explain A → Explain B + your evaluation → Conclusion.</Template>
      <Template title="Outweigh">Although [weaker-side point], I believe the [advantages/disadvantages] are more significant overall. → Weaker side → Stronger side → Explicit outweigh conclusion.</Template>
      <Template title="Two-part / mixed">[Paraphrase]. [Direct answer to Q1], and I believe [direct answer/position for Q2]. → One body paragraph per question is usually the clearest default.</Template>
    </Accordion>
    <Callout title="Idea rule" tone="amber">Choose ideas you can <b>explain</b>. One relevant, well-developed idea is stronger than three shallow points. Examples should illustrate the idea, not replace explanation.</Callout>

    <SectionTitle id="w-language" number="06" title="Word choices and idea banks" text="Learn a small core set first. Expand only after the core language is accurate and automatic." />
    <WordExplorer mode="writing" />
    <Accordion title="Topic idea banks" subtitle="use these when your mind goes blank in Task 2">
      {topicBanks.map((t) => <div className="topic-bank" key={t.title}><h4>{t.title}</h4><div className="topic-bank-grid"><div><b>Idea angles</b><ul>{t.ideas.map((x) => <li key={x}>{x}</li>)}</ul></div><div><b>Useful vocabulary</b><div className="chips">{t.words.map((x) => <span className="chip" key={x}>{x}</span>)}</div></div></div></div>)}
    </Accordion>

    <SectionTitle id="w-drill" number="07" title="Training system" text="Do not only write full essays. Isolate the skill that lost the mark, drill it, then return to full tasks." />
    <div className="two-grid"><PracticeTimer presets={[20,40,60]}/><MasteryChecklist skill="writing" items={["I can identify every Task 2 question type quickly.","I can write a Task 1 overview without copying details.","I can group Task 1 data logically instead of describing everything.","I can develop a Task 2 main idea with reason + result/example.","I can state and maintain a clear opinion when required.","I can proofread my common grammar and spelling errors in the final minutes."]}/></div>
    <Accordion title="Best weekly Writing routine" defaultOpen><ol><li><b>2 × Task 1 overview drills:</b> write only introduction + overview in 5 minutes.</li><li><b>2 × Task 1 grouping drills:</b> plan Body 1/Body 2 without writing the full report.</li><li><b>2 × Task 2 planning drills:</b> identify prompt type, position and two developed ideas in 5 minutes.</li><li><b>1 × full Task 1</b> under 20 minutes.</li><li><b>1 × full Task 2</b> under 40 minutes.</li><li>Rewrite only the weakest paragraph after feedback.</li></ol></Accordion>

    <SectionTitle id="w-practice" number="08" title="Websites to practise Writing" text="Use official tasks for test realism. Use supplementary tools only for language feedback." />
    <PracticeGrid skill="writing" />
  </>
}

function ReadingPage() {
  const qtypes = [
    ['T/F/NG','Evidence','TRUE = supported; FALSE = contradicted; NOT GIVEN = insufficient information.'],
    ['Y/N/NG','Writer view','Same logic, but judge the writer’s claim/opinion rather than simple factual information.'],
    ['Matching headings','Main idea','Read the paragraph for purpose and central idea, not one matching keyword.'],
    ['Matching information/features','Scanning','Use names, dates and distinctive nouns as anchors; expect paraphrase.'],
    ['Completion','Exact wording','Predict word class, locate the line, copy only the allowed number of words.'],
    ['Multiple choice','Meaning','Eliminate distractors with evidence; do not choose an option because one word matches.'],
    ['Sentence endings','Meaning + grammar','Match both logic and grammar; use passage evidence, not common sense.'],
    ['Short answers','Precision','Answer only what is asked and obey the word limit exactly.'],
  ]
  return <>
    <SkillHero icon="book" kicker="Academic IELTS" title="Reading" intro="Reading is an evidence test, not a vocabulary contest. The fastest students know when to survey, skim, scan and close-read instead of reading every line at the same speed." stats={[{value:'60',label:'minutes'},{value:'3',label:'passages'},{value:'40',label:'questions'},{value:'0',label:'extra transfer min'}]} tags={[{label:'Evidence first',tone:'green'},{label:'Paraphrase',tone:'blue'},{label:'Timing',tone:'amber'}]} />
    <JumpBar items={[{id:'r-system',label:'Core system'},{id:'r-qtypes',label:'Question types'},{id:'r-errors',label:'Error clinic'},{id:'r-score',label:'Score guide'},{id:'r-training',label:'Training'},{id:'r-practice',label:'Practice sites'}]} />

    <SectionTitle id="r-system" number="01" title="The Reading system" text="Different question types require different reading speeds. Control your attention instead of reading the whole passage in detail first." />
    <div className="process-row">{['Survey layout','Skim main idea','Read questions','Predict paraphrase','Scan for anchor','Close-read evidence','Answer + check'].map((x,i)=><div className="process-step" key={x}><span>{i+1}</span>{x}</div>)}</div>
    <ExaminerGrid items={[
      { title:'Accuracy beats speed', text:'A fast wrong answer is still wrong. Read closely once you locate the relevant area.', train:'Time the locating phase separately from the evidence-check phase.' },
      { title:'Paraphrase recognition', text:'Questions often express the same meaning with different vocabulary or grammar.', train:'After every test, record the question phrase ↔ passage phrase pair.' },
      { title:'Strict evidence', text:'Your background knowledge is irrelevant. T/F/NG and Y/N/NG are decided only by the passage.', train:'Underline the exact words that prove or disprove your answer.' },
      { title:'Instruction control', text:'Word limits, answer count and singular/plural form can decide whether a correct idea earns a mark.', train:'Circle the instruction line before starting each question set.' },
    ]}/>
    <Callout title="Timing model" tone="amber">A useful starting point is roughly <b>15–17 minutes for Passage 1, 19–20 for Passage 2, and 23–25 for Passage 3</b>, including answer checking. Adjust to your strengths, but protect time for the final passage.</Callout>

    <SectionTitle id="r-qtypes" number="02" title="Question-type playbook" text="Choose the strategy from the question type, not from habit." />
    <DataTable columns={['Question family','What it tests','Best first move']} rows={qtypes}/>
    <Accordion title="T/F/NG and Y/N/NG decision tree" subtitle="the most common logic trap" defaultOpen>
      <div className="three-grid"><Card title="TRUE / YES"><p>The passage clearly supports the statement or claim, even if the wording is different.</p></Card><Card title="FALSE / NO"><p>The passage gives information that directly contradicts the statement or claim.</p></Card><Card title="NOT GIVEN"><p>The passage does not provide enough information to decide. Do not infer beyond the text.</p></Card></div>
      <Template title="Fast check">Can I point to a sentence that proves it? → TRUE/YES. Can I point to a sentence that proves the opposite? → FALSE/NO. If neither is possible → NOT GIVEN.</Template>
    </Accordion>
    <Accordion title="Matching headings" subtitle="main idea, not keyword matching"><ol><li>Read the paragraph first sentence, last sentence and turning points.</li><li>Ask: “What job does this paragraph do?”</li><li>Summarise it in 3–6 words before looking at headings.</li><li>Eliminate headings that describe only one detail or example.</li><li>Re-check unused headings at the end.</li></ol></Accordion>
    <Accordion title="Completion tasks" subtitle="notes, table, summary, sentence and flow-chart"><ol><li>Read the title/headings to predict the section of the passage.</li><li>Predict grammar: noun? adjective? number? singular/plural?</li><li>Scan for paraphrased context, not the exact words around the gap.</li><li>Copy only the permitted words from the passage.</li><li>Check that the completed sentence is grammatical and meaningful.</li></ol></Accordion>
    <Accordion title="Multiple choice" subtitle="how to beat distractors"><ol><li>Turn the question stem into a simple information target.</li><li>Find the relevant passage area before deeply reading options if possible.</li><li>For each option, ask: fully supported, partly true, contradicted, or not stated?</li><li>Reject options that use a true detail to answer the wrong question.</li></ol></Accordion>

    <SectionTitle id="r-errors" number="03" title="Error clinic" text="Your error type tells you what to practise next. Do not just record the correct answer." />
    <div className="two-grid">
      <Card title="If you chose NOT GIVEN too often"><p>You may be failing to recognise paraphrase or stopping before the evidence sentence. Drill synonym recognition and read 1–2 sentences around the match.</p></Card>
      <Card title="If headings are weak"><p>You may be matching details instead of paragraph purpose. Summarise each paragraph in your own words before viewing choices.</p></Card>
      <Card title="If completion answers are wrong"><p>Check three things separately: location, word limit, grammar. Many “comprehension” errors are actually form errors.</p></Card>
      <Card title="If Passage 3 collapses"><p>Your early passages are taking too long. Practise hard stop-points and move on from one stubborn question after a controlled attempt.</p></Card>
    </div>
    <Accordion title="Error log categories"><div className="chips">{['wrong location','paraphrase missed','T/F/NG logic','writer-view confusion','detail mistaken for main idea','word limit','grammar around gap','changed a correct answer','time pressure','over-reading'].map((x)=><span className="chip" key={x}>{x}</span>)}</div></Accordion>
    <Accordion title="Reading language bank" subtitle="paraphrase signals"><WordExplorer mode="reading"/></Accordion>

    <SectionTitle id="r-score" number="04" title="Raw-score guide" text="Academic Reading has 40 questions and each correct answer receives one mark before conversion to a band score." />
    <ScoreEstimator label="Academic Reading" />

    <SectionTitle id="r-training" number="05" title="Training system" text="Alternate full tests with question-type drills so you improve the cause of mistakes, not only your stamina." />
    <div className="two-grid"><PracticeTimer presets={[20,40,60]}/><MasteryChecklist skill="reading" items={["I can explain TRUE vs FALSE vs NOT GIVEN without guessing.","I can identify a paragraph’s main idea before choosing a heading.","I predict word class before completion questions.","I recognise paraphrases instead of waiting for identical words.","I move on from one difficult question before it destroys my timing.","I finish all 40 questions with time to check instructions and spelling."]}/></div>
    <Accordion title="Best weekly Reading routine" defaultOpen><ol><li>1 full 60-minute test.</li><li>2 × 20-minute passage drills under pressure.</li><li>1 question-type session focused only on your weakest family.</li><li>Create 10 paraphrase pairs from mistakes.</li><li>Redo missed questions 48 hours later without looking at the key.</li></ol></Accordion>

    <SectionTitle id="r-practice" number="06" title="Websites to practise Reading" text="Use official materials to build reliable timing and question-type habits." />
    <PracticeGrid skill="reading" />
  </>
}

function ListeningPage() {
  const qtypes = [
    ['Form / note / table / summary completion','Predict word class + context; follow questions in order; obey the word limit.'],
    ['Multiple choice','Read options before listening; identify what differs between them; expect paraphrase and correction.'],
    ['Matching','Track who/what each option refers to; listen for acceptance, rejection and changed decisions.'],
    ['Map / plan / diagram','Orient from the starting point and fixed landmarks; follow direction language continuously.'],
    ['Choose TWO / THREE','Keep listening after the first correct idea; rejected options are often mentioned convincingly.'],
    ['Short answer','Predict answer type and write only the requested information.'],
  ]
  return <>
    <SkillHero icon="headphones" kicker="IELTS Listening" title="Listening" intro="Listening rewards prediction, attention control and recovery. You hear each recording once, so train yourself to recognise paraphrase, ignore distractors and keep moving after one missed answer." stats={[{value:'≈30',label:'minutes audio'},{value:'4',label:'parts'},{value:'40',label:'questions'},{value:'1×',label:'recording only'}]} tags={[{label:'Prediction',tone:'blue'},{label:'Distractors',tone:'amber'},{label:'Spelling',tone:'green'}]} />
    <JumpBar items={[{id:'l-system',label:'Core system'},{id:'l-qtypes',label:'Question types'},{id:'l-distractors',label:'Distractors'},{id:'l-score',label:'Score guide'},{id:'l-training',label:'Training'},{id:'l-practice',label:'Practice sites'}]} />

    <SectionTitle id="l-system" number="01" title="The Listening loop" text="The best time to improve an answer is before the audio reaches it: read ahead and predict what can fit." />
    <div className="process-row">{['Read ahead','Predict grammar','Predict topic words','Listen for paraphrase','Reject distractor','Confirm final answer','Check form'].map((x,i)=><div className="process-step" key={x}><span>{i+1}</span>{x}</div>)}</div>
    <ExaminerGrid items={[
      { title:'Prediction', text:'A blank gives grammatical information before you hear the answer.', train:'Write N / V / adj / number beside gaps during practice.' },
      { title:'Paraphrase', text:'The recording often expresses the question idea using different wording.', train:'After review, note question wording ↔ audio wording.' },
      { title:'Distractor resistance', text:'Speakers mention alternatives, reject them, correct themselves or change plans.', train:'Underline correction language in transcripts after each test.' },
      { title:'Answer form', text:'Spelling, singular/plural and word limits can cost marks even when you understood the recording.', train:'Do a 30-second form-only check at the end of each section.' },
    ]}/>
    <Callout title="Recovery rule" tone="amber">If you miss one answer, <b>guess, mark it mentally and move on</b>. The questions continue in order. Losing your place can cost several marks; one uncertain answer costs only one.</Callout>

    <SectionTitle id="l-qtypes" number="02" title="Question-type playbook" />
    <DataTable columns={['Question family','What to do']} rows={qtypes}/>
    <Accordion title="Map / plan labelling" subtitle="orient → anchor → track" defaultOpen><ol><li>Find north, entrance/start point and fixed landmarks before the audio begins.</li><li>Predict the route direction if possible.</li><li>Track location phrases: next to, opposite, beyond, at the end of, on the bend, just past, to the north-east of.</li><li>Keep your finger/eyes on the map as the speaker moves; do not jump between labels.</li><li>Expect a location to be mentioned and rejected before the correct one is confirmed.</li></ol></Accordion>
    <Accordion title="Multiple choice" subtitle="listen for differences, not entire options"><ol><li>Read the stem and underline how A/B/C differ.</li><li>Listen for the concept, not exact option wording.</li><li>Watch for “but”, “actually”, “rather”, “instead”, “I thought… but…”, “we decided…”.</li><li>Do not choose an option merely because the speaker said its keywords.</li></ol></Accordion>
    <Accordion title="Completion tasks" subtitle="form, note, table, summary, flow-chart"><ol><li>Predict word class and likely semantic type.</li><li>Follow question order.</li><li>Write the exact word/number that fits the gap.</li><li>Check spelling, plural/singular and maximum word count.</li></ol></Accordion>

    <SectionTitle id="l-distractors" number="03" title="Distractor language you must recognise" text="Real Listening answers often appear after a correction, contrast or rejected alternative." />
    <div className="two-grid">
      <Card title="Correction signals"><div className="chips">{['actually','no, it was…','I mean…','rather','instead','sorry, that should be…','we changed it to…'].map((x)=><span className="chip" key={x}>{x}</span>)}</div><p>Do not stop writing after the first plausible detail. Listen until the speaker finishes the thought.</p></Card>
      <Card title="Decision / matching signals"><div className="chips">{['I’ll do that','leave it to me','I wouldn’t mind','that suits me','I’m not keen','maybe you could…','we’ll both…'].map((x)=><span className="chip" key={x}>{x}</span>)}</div><p>These expressions often decide who is responsible for a topic or which choice is finally accepted.</p></Card>
    </div>
    <Accordion title="Listening language bank" subtitle="maps and direction phrases"><WordExplorer mode="listening"/></Accordion>

    <SectionTitle id="l-score" number="04" title="Raw-score guide" text="Listening has 40 questions; each correct answer receives one mark before conversion to a band score." />
    <ScoreEstimator label="Listening" />

    <SectionTitle id="l-training" number="05" title="Training system" text="The transcript is most useful after a real first attempt. Use it to discover why the audio beat you." />
    <div className="two-grid"><PracticeTimer presets={[10,20,30]}/><MasteryChecklist skill="listening" items={["I read ahead and predict word class before the recording reaches the gap.","I keep listening after the first plausible answer.","I can recognise correction and rejection language.","I can follow map directions without losing the starting point.","I recover immediately after missing one question.","I check spelling, singular/plural and word limits before finalising answers."]}/></div>
    <Accordion title="Three-pass review after a Listening test" defaultOpen><ol><li><b>Pass 1 — Answer key:</b> mark wrong/uncertain answers only.</li><li><b>Pass 2 — Transcript:</b> find the exact answer phrase, the paraphrase and any distractor.</li><li><b>Pass 3 — Replay:</b> listen again without the transcript and confirm you can now hear the decisive language.</li></ol></Accordion>

    <SectionTitle id="l-practice" number="06" title="Websites to practise Listening" text="Practise once under test conditions before opening transcripts or answer explanations." />
    <PracticeGrid skill="listening" />
  </>
}

function SpeakingPage() {
  return <>
    <SkillHero icon="mic" kicker="IELTS Speaking" title="Speaking" intro="The examiner is listening for natural, developed English—not memorised speeches. Build answers that are clear, flexible and easy to understand across all three parts." stats={[{value:'11–14',label:'minutes'},{value:'3',label:'parts'},{value:'1',label:'minute Part 2 prep'},{value:'2',label:'minutes long turn'}]} tags={[{label:'Fluency',tone:'blue'},{label:'Natural language',tone:'green'},{label:'Pronunciation',tone:'amber'}]} />
    <JumpBar items={[{id:'s-score',label:'What earns marks'},{id:'s-p1',label:'Part 1'},{id:'s-p2',label:'Part 2'},{id:'s-p3',label:'Part 3'},{id:'s-language',label:'Language'},{id:'s-training',label:'Training'},{id:'s-practice',label:'Practice sites'}]} />

    <SectionTitle id="s-score" number="01" title="What the examiner rewards" text="Your band reflects performance across the whole interview, so consistency matters more than one perfect answer." />
    <ExaminerGrid items={[
      { title:'Fluency & Coherence', text:'Speak at length with logical development. Some hesitation or self-correction is normal; it should not repeatedly break the flow.', train:'Record 60–90 second answers and count idea-search pauses versus language-search pauses.' },
      { title:'Lexical Resource', text:'Use vocabulary flexibly and paraphrase when needed. Natural collocations are more valuable than forced idioms.', train:'Build phrase banks by topic and function, not isolated “advanced words”.' },
      { title:'Grammar Range & Accuracy', text:'Use both simple and complex structures with enough accuracy that mistakes do not dominate the answer.', train:'Practise conditionals, relative clauses, comparison and concession in spoken answers.' },
      { title:'Pronunciation', text:'Be easy to understand and use stress, rhythm and intonation effectively. Accent is not the target; intelligibility is.', train:'Shadow short clips, then record yourself and compare stress placement.' },
    ]}/>

    <SectionTitle id="s-p1" number="02" title="Part 1 — familiar topics" text="Answer directly, then extend naturally. Two or three useful sentences are better than a long memorised mini-speech." />
    <DataTable columns={['Question family','Useful answer shape','Example opening']} rows={[
      ['Description / types','2–3 clear points','There are a couple of things I’d mention…'],
      ['Likes / dislikes','General → specific → reason','In general, I’m quite keen on… In particular…'],
      ['Habits / Yes-No','Answer + situation/contrast','Usually, yes, especially when…'],
      ['Past / childhood','Direct past answer + detail + reflection','When I was younger, I used to…'],
      ['Compare / prefer','Choose + reason + contrast','I’d probably choose X because… although Y…'],
      ['Future','Likely plan + reason / condition','I’d like to… provided that…'],
    ]}/>
    <Template title="Natural Part 1 shape">Direct answer → one reason/detail → specific example or contrast (only if useful).</Template>
    <Callout title="Avoid this" tone="amber">Do not use a long “buy-time” phrase before every answer. A brief “That’s interesting” is fine occasionally; repeated memorised fillers make speech sound less natural.</Callout>

    <SectionTitle id="s-p2" number="03" title="Part 2 — Long Turn" text="Use the one-minute preparation to build a route through the talk, not to write sentences." />
    <div className="process-row">{['Underline topic','Choose familiar example','Check tense','Write 4–6 keywords','Add 1 story/detail','Start directly'].map((x,i)=><div className="process-step" key={x}><span>{i+1}</span>{x}</div>)}</div>
    <Template title="2-minute structure">What/who/where → When/how you know it → Main detail 1 → Main detail 2 → memorable example/story → why it matters to you.</Template>
    <Accordion title="Cue-card categories" subtitle="recycle language across them" defaultOpen><div className="chips">{['people','places','objects','activities','events','experiences','decisions','media','skills'].map((x)=><span className="chip" key={x}>{x}</span>)}</div><p>Choose something familiar that gives you enough language and detail. You do not need to treat each bullet on the card as a separate paragraph.</p></Accordion>
    <Accordion title="If you run out of ideas"><ul><li>Add a specific memory: what happened, who was there, how you felt.</li><li>Compare before vs after.</li><li>Explain why the person/place/object mattered.</li><li>Describe one concrete feature in more detail.</li><li>Add a consequence: what changed because of the experience?</li></ul></Accordion>

    <SectionTitle id="s-p3" number="04" title="Part 3 — analytical discussion" text="Move from personal experience to society, causes, comparison, consequences and possible solutions." />
    <DataTable columns={['Question type','Strong answer frame']} rows={[
      ['Types','There are several types. The most common is … Another is …'],
      ['Past vs present','The main difference is … whereas … A second change is …'],
      ['Future','I think … is likely to … because … However, this may depend on …'],
      ['Advantages','One major benefit is … This matters because … For example …'],
      ['Disadvantages','The main drawback is … This can lead to …'],
      ['Problems / solutions','A key problem is … One practical way to address it would be …'],
      ['Opinion','I would say … mainly because … For instance … Having said that …'],
    ]}/>
    <Template title="Part 3 development">Position → Why → Example / wider consequence → qualification or second point.</Template>
    <Callout title="Development target" tone="green">In practice, aim for substantially more development than Part 1. The exact number of sentences is not scored; relevance, fluency and development are.</Callout>

    <SectionTitle id="s-language" number="05" title="Speaking language bank" text="Learn phrases that sound like speech. If it feels like something you would only write in an essay, it may be too formal for Speaking." />
    <WordExplorer mode="speaking" />
    <Accordion title="Pronunciation priorities" subtitle="clarity before accent imitation"><ul><li>Correct word stress in longer words.</li><li>Sentence stress on key meaning words and contrasts.</li><li>Intonation that signals completion, contrast and attitude.</li><li>Connected speech without swallowing important sounds.</li><li>Practise any recurring sound problems that reduce intelligibility.</li></ul></Accordion>

    <SectionTitle id="s-training" number="06" title="Training system" text="Speaking improves fastest when you record, diagnose one weakness, and immediately answer the same question again." />
    <div className="two-grid"><PracticeTimer presets={[1,2,14]}/><MasteryChecklist skill="speaking" items={["I answer Part 1 directly without long memorised fillers.","I can plan a Part 2 talk with keywords in one minute.","I can speak close to two minutes on a familiar Part 2 topic.","I develop Part 3 answers with reasons and consequences/examples.","I paraphrase naturally when I cannot remember an exact word.","My recurring pronunciation errors do not reduce intelligibility."]}/></div>
    <Accordion title="The best self-recording loop" defaultOpen><ol><li>Answer once without stopping.</li><li>Listen and mark only 1–2 issues: fluency, vocabulary, grammar or pronunciation.</li><li>Write three better phrases or structures.</li><li>Answer the same question again immediately.</li><li>Repeat the question 2–3 days later to check whether the improvement transferred.</li></ol></Accordion>

    <SectionTitle id="s-practice" number="07" title="Websites to practise Speaking" text="Use official prompts for exam realism and YouGlish only as a pronunciation supplement." />
    <PracticeGrid skill="speaking" />
  </>
}

function App() {
  const [page, go] = usePage()
  const [theme, toggleTheme] = useTheme()
  const content = { writing: <WritingPage/>, reading: <ReadingPage/>, listening: <ListeningPage/>, speaking: <SpeakingPage/> }[page]
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'instant' }) }, [page])

  return <div className="app-shell">
    <header className="topbar"><div className="topbar-inner">
      <button className="brand" onClick={() => go('writing')} aria-label="IELTS Master Guide"><span className="brand-mark">I</span><span className="brand-copy"><b>IELTS Master Guide</b><small>examiner-led four-skill training</small></span></button>
      <nav className="desktop-nav" aria-label="Main navigation">{NAV.map((x)=><button key={x.id} onClick={()=>go(x.id)} className={page===x.id?'active':''}><Icon name={x.icon} size={17}/>{x.label}</button>)}</nav>
      <button className="theme-toggle" onClick={toggleTheme} aria-label={`Switch to ${theme==='dark'?'light':'dark'} mode`} title={`Switch to ${theme==='dark'?'light':'dark'} mode`}><Icon name={theme==='dark'?'sun':'moon'} size={19}/></button>
    </div></header>
    <main className="content">{content}<footer><p>IELTS Master Guide · examiner criteria + practical training systems + official practice resources.</p></footer></main>
    <nav className="mobile-nav" aria-label="Mobile navigation">{NAV.map((x)=><button key={x.id} onClick={()=>go(x.id)} className={page===x.id?'active':''}><Icon name={x.icon} size={20}/><span>{x.label}</span></button>)}</nav>
  </div>
}

export default App
