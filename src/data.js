export const wordBanks = [
  {
    id: 'post-writing-check',
    title: 'Post-writing grammar & final check',
    skill: 'Writing Task 1 + Task 2',
    core: ['verbs & agreement', 'articles', 'singular/plural', 'sentence boundaries', 'word form', 'task coverage'],
    more: [
      'people are ✓ / people is ✗',
      'the number of students is ✓ / are ✗',
      'many people ✓ / much people ✗',
      'much information ✓ / many informations ✗',
      'advice ✓ / advices ✗',
      'research ✓ / researches ✗ when used generally',
      'a major problem ✓ / major problem ✗ when a singular countable noun needs an article',
      'technology is useful ✓ / the technology is useful ✗ when speaking generally',
      'can improve ✓ / can improves ✗',
      'by reducing ✓ / by reduce ✗',
      'has increased ✓ / has increase ✗',
      'Although X is useful, it has drawbacks ✓ / Although X is useful, but it has drawbacks ✗',
      'This causes pollution. It also increases costs. ✓ / This causes pollution, it also increases costs. ✗',
      'contribute to ✓ / contribute for ✗',
      'result in an increase ✓ / result to an increase ✗',
      'a solution to the problem ✓ / solution for the problem ✗ in most IELTS contexts',
      'have an impact on ✓ / impact to ✗',
      'fewer cars ✓ / less cars ✗',
      'the number of people ✓ / the amount of people ✗'
    ],
    patterns: [
      '1. VERBS — circle mentally every main verb: does it agree with the subject, use the right tense, and follow modals with the base form?',
      '2. NOUNS — check singular/plural, countable/uncountable nouns, and whether singular countable nouns need a/an/the.',
      '3. SENTENCES — check every long sentence for a real main clause; remove comma splices, fragments, and double connectors such as “Although … but …”.',
      '4. WORD FORM — check noun/verb/adjective forms around common families: economy/economic, benefit/beneficial, develop/development, effect/effective.',
      '5. PREPOSITIONS — scan your repeated academic phrases: contribute to, result in, result from, responsible for, impact on, solution to, increase in.',
      '6. COMPARISONS — check than/as … as, fewer vs less, number vs amount, and that the comparison actually names both sides clearly.',
      '7. SPELLING & PUNCTUATION — check capitals, full stops, repeated words, obvious spelling mistakes, and missing commas after introductory clauses where needed.',
      '8. TASK RESPONSE — re-read the prompt: did you answer every question, keep a clear position where required, and avoid adding a new main idea in the conclusion?',
      '9. PARAGRAPHS — each body paragraph should have one clear job, explanation, and enough development; delete an off-topic sentence rather than keeping it for length.',
      '10. TASK-SPECIFIC — Academic Task 1: confirm a clear overview and accurate units/tenses. General Task 1: confirm all bullet points and suitable tone. Task 2: confirm the required opinion is unmistakable.'
    ],
    note: 'Use this as a final 3–5 minute scan, not as a reason to rewrite the whole answer. Check one error family at a time; targeted passes catch more mistakes than simply rereading from the first sentence.'
  },
  {
    id: 'advantage',
    title: 'Advantage / benefit',
    skill: 'Writing Task 2',
    core: ['advantage', 'benefit', 'positive aspect', 'strength'],
    more: ['merit', 'upside', 'beneficial effect', 'positive outcome', 'be advantageous', 'be beneficial', 'bring benefits', 'offer an advantage'],
    patterns: ['One major advantage is that …', 'A further benefit is that …', 'This can be beneficial because …', 'The main strength of this approach is …'],
    note: 'Use “advantage” and “benefit” most often. “Merit” is acceptable but can sound formal; do not force “demerit” as the opposite.'
  },
  {
    id: 'disadvantage',
    title: 'Disadvantage / drawback',
    skill: 'Writing Task 2',
    core: ['disadvantage', 'drawback', 'negative aspect', 'limitation'],
    more: ['downside', 'shortcoming', 'adverse effect', 'negative consequence', 'be detrimental', 'pose a problem', 'create difficulties'],
    patterns: ['A major drawback is that …', 'One limitation is …', 'This may have an adverse effect on …', 'The main downside is …'],
    note: '“Drawback” is natural and useful. “Demerit” is grammatically possible but is much less natural in most IELTS essays.'
  },
  {
    id: 'cause',
    title: 'Cause / reason / factor',
    skill: 'Writing Task 2',
    core: ['cause', 'reason', 'factor', 'because', 'because of'],
    more: ['stem from', 'arise from', 'be driven by', 'be attributable to', 'contribute to', 'be responsible for', 'underlying factor', 'root cause'],
    patterns: ['One major factor is that …', 'This problem largely stems from …', 'Another reason is the fact that …', 'Several factors contribute to this situation.'],
    note: 'Keep cause and effect direction correct: A causes B; B results from A.'
  },
  {
    id: 'solution',
    title: 'Solution / policy action',
    skill: 'Writing Task 2',
    core: ['solution', 'measure', 'step', 'address', 'tackle'],
    more: ['mitigate', 'alleviate', 'curb', 'regulate', 'enforce', 'subsidise', 'invest in', 'raise awareness', 'implement', 'intervention'],
    patterns: ['One possible measure would be to …', 'Governments could tackle this by …', 'A practical way to address the issue is to …', 'This problem could be mitigated through …'],
    note: 'Match the actor to the solution: government regulates; schools educate; companies redesign; individuals change behaviour.'
  },
  {
    id: 'result',
    title: 'Result / consequence',
    skill: 'Writing Task 2',
    core: ['therefore', 'as a result', 'consequently', 'lead to', 'result in'],
    more: ['give rise to', 'contribute to', 'have an impact on', 'bring about', 'enable', 'allow', 'encourage', 'discourage', 'prevent'],
    patterns: ['As a result, …', 'This can lead to …', 'Consequently, …', 'The result is that …'],
    note: 'Do not use a result connector when the next sentence is merely another unrelated reason.'
  },
  {
    id: 'opinion',
    title: 'Opinion / position',
    skill: 'Writing Task 2 + Speaking',
    core: ['I believe that', 'I agree that', 'I disagree that', 'in my view'],
    more: ['I would argue that', 'I am convinced that', 'on balance, I believe', 'I largely agree, although …', 'I find this view more convincing'],
    patterns: ['I completely agree with this view because …', 'On balance, I believe that …', 'Although both sides have merit, I would argue that …'],
    note: 'A clear first-person position is allowed in IELTS Task 2. Impersonal language is a style option, not an official ban on “I”.'
  },
  {
    id: 'discussion',
    title: 'Discussion / two views',
    skill: 'Writing Task 2',
    core: ['some people argue that', 'others believe that', 'on the one hand', 'on the other hand'],
    more: ['supporters of this view', 'advocates of', 'proponents of', 'contend that', 'maintain that', 'a competing view is that'],
    patterns: ['Supporters of this view argue that …', 'By contrast, advocates of the alternative view contend that …'],
    note: 'Present each view fairly before evaluating it. Do not turn “discuss both views” into two lists of advantages and disadvantages unless that is what the views actually are.'
  },
  {
    id: 'hedging',
    title: 'Hedging / cautious claims',
    skill: 'Writing Task 2',
    core: ['may', 'can', 'often', 'tend to', 'in many cases'],
    more: ['is likely to', 'appears to', 'could potentially', 'to some extent', 'generally', 'in certain circumstances'],
    patterns: ['This may encourage …', 'People often tend to …', 'In many cases, this can result in …'],
    note: 'Use hedging when a claim is not universally true. Avoid weakening every sentence unnecessarily.'
  },
  {
    id: 'increase',
    title: 'Increase / upward trend',
    skill: 'Writing Task 1',
    core: ['rise', 'increase', 'grow', 'climb'],
    more: ['surge', 'jump', 'soar', 'an upward trend', 'a rise', 'an increase', 'growth'],
    patterns: ['X rose from 20 to 35.', 'There was a sharp increase in X.', 'X surged to a peak of 80.'],
    note: 'Use “to” for the final value and “by” for the amount of change.'
  },
  {
    id: 'decrease',
    title: 'Decrease / downward trend',
    skill: 'Writing Task 1',
    core: ['fall', 'decline', 'drop'],
    more: ['decrease', 'plunge', 'plummet', 'a downward trend', 'a fall', 'a decline', 'a reduction'],
    patterns: ['X fell from 50 to 30.', 'The figure declined gradually.', 'There was a substantial drop of 20.'],
    note: '“Plunge/plummet” imply a large, rapid decrease; do not use them for a small change.'
  },
  {
    id: 'stable',
    title: 'Stable / fluctuation / peak',
    skill: 'Writing Task 1',
    core: ['remain stable', 'remain unchanged', 'fluctuate', 'peak at'],
    more: ['level off', 'plateau', 'stay constant', 'fluctuate between', 'reach a peak of', 'bottom out at'],
    patterns: ['X remained stable at around 40.', 'X fluctuated between 20 and 30.', 'X peaked at 95 in 2010.'],
    note: '“Peak” can be a verb (“peaked at 90”) or a noun (“reached a peak of 90”).'
  },
  {
    id: 'degree',
    title: 'Degree / speed of change',
    skill: 'Writing Task 1',
    core: ['slightly', 'gradually', 'steadily', 'sharply', 'significantly'],
    more: ['marginally', 'moderately', 'considerably', 'substantially', 'dramatically', 'a slight rise', 'a gradual increase', 'a sharp fall'],
    patterns: ['X rose slightly.', 'There was a gradual increase in X.', 'X fell sharply.'],
    note: 'Choose an adverb that matches the actual size/speed of the visual change.'
  },
  {
    id: 'comparison',
    title: 'Comparison / contrast',
    skill: 'Writing Task 1 + Task 2',
    core: ['while', 'whereas', 'compared with', 'by contrast', 'higher/lower than'],
    more: ['similarly', 'likewise', 'in comparison', 'twice as high as', 'roughly double', 'respectively', 'as opposed to'],
    patterns: ['X was higher than Y.', 'X reached 60%, whereas Y stood at 35%.', 'The figures were 20% and 30%, respectively.'],
    note: '“On the contrary” is not a general synonym for “however”; use it when correcting/reversing a previous claim.'
  },
  {
    id: 'proportion',
    title: 'Proportion / share',
    skill: 'Writing Task 1',
    core: ['account for', 'make up', 'represent', 'the majority of', 'a minority of'],
    more: ['a large proportion of', 'a small fraction of', 'approximately half', 'nearly a third', 'just over a quarter', 'three-quarters'],
    patterns: ['Women accounted for 55% of the total.', 'Nearly a third of respondents chose X.', 'X represented the smallest share.'],
    note: 'Use “number” for countable nouns and “amount” for uncountable nouns.'
  },
  {
    id: 'map',
    title: 'Map / location / change',
    skill: 'Writing Task 1',
    core: ['to the north of', 'in the centre of', 'adjacent to', 'opposite', 'was built', 'was replaced by'],
    more: ['to the east/west/south of', 'along', 'beside', 'was converted into', 'gave way to', 'was demolished', 'was extended', 'was retained'],
    patterns: ['A new car park was built to the east of the station.', 'The old market was replaced by a shopping complex.', 'The lake remained unchanged.'],
    note: 'Use past tense for completed changes and future forms for planned development.'
  },
  {
    id: 'process',
    title: 'Process / sequence',
    skill: 'Writing Task 1',
    core: ['initially', 'next', 'after this', 'then', 'finally'],
    more: ['subsequently', 'once this stage is complete', 'after which', 'is collected', 'is transported', 'is heated', 'is filtered', 'the cycle repeats'],
    patterns: ['Initially, the raw material is collected.', 'It is then transported to …, after which …', 'Finally, the finished product is delivered to …'],
    note: 'Man-made processes often favour the passive; natural life cycles often sound more natural in the active voice.'
  },
  {
    id: 'speaking-like',
    title: 'Speaking: likes / dislikes',
    skill: 'Speaking Part 1',
    core: ['I like', 'I enjoy', 'I’m fond of', 'I’m keen on'],
    more: ['I’m a big fan of', 'I’m really into', 'I’m not much of a fan of', 'I can’t really stand', 'it gets on my nerves'],
    patterns: ['In general, I’m quite fond of … In particular, … because …', 'I’m not much of a fan of … mainly because …'],
    note: 'Natural spoken vocabulary is better than forced idioms. Use one or two idiomatic phrases accurately rather than many.'
  },
  {
    id: 'speaking-buytime',
    title: 'Speaking: buy time / repair',
    skill: 'Speaking Parts 1–3',
    core: ['That’s an interesting question.', 'I haven’t really thought about that before.', 'What I mean is …'],
    more: ['Off the top of my head, I’d say …', 'It’s difficult to say, but …', 'Let me put that another way …', 'What I’m trying to say is …'],
    patterns: ['That’s an interesting question. I think …', 'What I mean is that …', 'Let me put that another way: …'],
    note: 'Use these briefly. Long memorised fillers can hurt natural fluency.'
  },
  {
    id: 'directions',
    title: 'Listening: directions / map language',
    skill: 'Listening',
    core: ['next to', 'opposite', 'behind', 'in front of', 'on the left/right', 'north/south/east/west'],
    more: ['at the end of', 'on the corner', 'beyond', 'just past', 'between', 'along the path', 'on a bend', 'to the north-east of'],
    patterns: ['Start from the entrance.', 'It is just past the café on the right.', 'It is on the bend in the path.'],
    note: 'In map questions, orient yourself first, track the speaker’s starting point, and expect distractors between similar locations.'
  },
  {
    id: 'reading-signals',
    title: 'Reading: paraphrase signals',
    skill: 'Reading',
    core: ['cause ↔ lead to', 'important ↔ significant', 'problem ↔ issue', 'increase ↔ rise/growth'],
    more: ['mainly ↔ primarily', 'only ↔ solely', 'despite ↔ although', 'because of ↔ due to', 'prevent ↔ stop/avoid', 'require ↔ need', 'decline ↔ decrease'],
    patterns: ['Question keyword → predict synonym → scan → close-read around the match.'],
    note: 'IELTS often tests meaning through paraphrase. Do not wait for identical wording.'
  },
]

export const topicBanks = [
  {
    title: 'Universal idea lenses',
    ideas: [
      'Access and equality: ask who gains access, who may be excluded, and whether the policy narrows or widens existing gaps.',
      'Cost and affordability: consider the price for individuals, businesses and taxpayers, then compare short-term expense with long-term savings.',
      'Quality and effectiveness: a cheaper or faster option is not automatically better if outcomes become less reliable or less personal.',
      'Freedom versus regulation: individual choice can encourage flexibility, while rules may be justified when private choices create harm for others.',
      'Convenience versus unintended effects: saving time or effort can improve daily life but may also create dependency, inactivity or weaker social contact.',
      'Short term versus long term: an immediate benefit may create later costs, while an expensive reform may produce lasting gains.',
      'Individual versus government responsibility: decide which actor has the resources, authority and incentives to solve the problem effectively.',
      'Economic versus social value: higher productivity or revenue should be weighed against health, fairness, community and environmental effects.',
      'Scale and reach: ask how many people are affected, how strongly they are affected, and whether the impact is reversible.',
      'Prevention versus cure: stopping a problem early is often cheaper and more effective than dealing with its consequences later.'
    ],
    words: ['access', 'affordability', 'long-term impact', 'public interest', 'individual choice', 'regulation', 'cost-effective', 'social consequences', 'equal opportunity', 'preventive measure']
  },
  {
    title: 'Education',
    ideas: [
      'Equal access: affordable schools, scholarships and digital access can reduce the effect of family income on educational opportunity.',
      'Academic versus practical learning: theory builds analytical ability, while work-related skills can make students more employable and independent.',
      'Teachers versus technology: digital tools can personalise practice and widen access, but guidance, motivation and feedback still depend heavily on good teachers.',
      'Assessment: examinations are efficient for standardised comparison, yet projects and continuous assessment may measure deeper understanding and practical ability.',
      'Curriculum choice: a broad core gives young people common foundations, while some choice can increase motivation and support different strengths.',
      'Higher-education funding: public subsidies can widen opportunity and create a skilled workforce, but unlimited funding may place a heavy burden on taxpayers.',
      'Early intervention: improving literacy, numeracy and study habits in childhood can prevent larger educational gaps later.',
      'International study: studying abroad can build independence and cross-cultural skills, although high costs and brain drain may be concerns.'
    ],
    words: ['curriculum', 'tuition fees', 'equal access', 'learning outcomes', 'vocational training', 'critical thinking', 'continuous assessment', 'teacher guidance', 'digital literacy', 'higher education']
  },
  {
    title: 'Technology & AI',
    ideas: [
      'Efficiency: automation can perform repetitive tasks faster and reduce human error, allowing workers to focus on judgement, creativity and interpersonal work.',
      'Job disruption: new technology can replace some roles, so retraining and adaptable skills are important during labour-market transitions.',
      'Access to information: online tools make learning and services easier to reach, but unequal devices, connectivity and skills can deepen the digital divide.',
      'Privacy: data-driven services offer convenience and personalisation, yet weak safeguards can expose users to surveillance, profiling or misuse of personal information.',
      'Human interaction: remote communication connects people across distance, but excessive substitution for face-to-face contact may weaken relationships or social skills.',
      'Education and AI: AI can generate explanations and feedback quickly, but students still need to verify information and develop independent reasoning.',
      'Regulation: rules should target high-risk uses and accountability without blocking useful innovation unnecessarily.',
      'Dependence and distraction: constant access to devices can save time while also encouraging fragmented attention and reduced physical activity.'
    ],
    words: ['automation', 'artificial intelligence', 'digital divide', 'data privacy', 'algorithmic decision-making', 'technological innovation', 'digital literacy', 'cybersecurity', 'online platform', 'human oversight']
  },
  {
    title: 'Environment & energy',
    ideas: [
      'Government action: environmental problems cross individual boundaries, so regulation, infrastructure and pricing policies can create change at scale.',
      'Individual action: household choices matter most when convenient low-carbon alternatives are available and affordable.',
      'Business incentives: firms respond to taxes, standards, subsidies and consumer demand, so policy can make cleaner production financially attractive.',
      'Renewable energy: cleaner power can reduce emissions and dependence on imported fuels, although grids and storage may require major investment.',
      'Transport: reliable public transport and walkable cities can reduce congestion, air pollution and household transport costs.',
      'Consumption and waste: repair, reuse and producer responsibility can reduce landfill and the demand for raw materials.',
      'Biodiversity: protecting habitats can preserve ecosystems that support food, water and climate resilience, even when conservation restricts some development.',
      'Long-term trade-off: environmental measures may impose short-term costs but can avoid larger health, disaster and resource costs later.'
    ],
    words: ['carbon emissions', 'renewable energy', 'fossil fuels', 'environmental regulation', 'biodiversity', 'habitat loss', 'sustainable consumption', 'waste management', 'public transport', 'energy efficiency']
  },
  {
    title: 'Health & lifestyle',
    ideas: [
      'Prevention: exercise, vaccination, screening and healthier diets can reduce disease before expensive treatment is required.',
      'Personal responsibility: individuals control many daily habits, but their choices are shaped by income, education, working hours and the local food environment.',
      'Government role: public campaigns, food standards and accessible facilities can make healthy behaviour easier without removing personal choice.',
      'Mental health: social isolation, financial stress and overwork can harm well-being, so prevention includes social and workplace conditions as well as medical care.',
      'Healthcare access: universal or subsidised services can improve early treatment, though governments must manage cost and capacity carefully.',
      'Work-life balance: excessive working hours may raise short-term output but can increase burnout, absence and staff turnover.',
      'Children and habits: schools and families can build lifelong routines through physical activity, nutrition education and limits on harmful marketing.',
      'Technology and health: digital tools can improve access to advice and monitoring, while too much sedentary screen time can create new risks.'
    ],
    words: ['preventive healthcare', 'sedentary lifestyle', 'balanced diet', 'mental well-being', 'public health campaign', 'healthcare access', 'early intervention', 'chronic disease', 'work-life balance', 'health literacy']
  },
  {
    title: 'Work & economy',
    ideas: [
      'Job satisfaction: pay matters, but autonomy, purpose, progression and workplace culture also affect motivation and retention.',
      'Remote work: flexible work can reduce commuting and widen recruitment, while weaker collaboration or blurred boundaries may reduce its benefits for some roles.',
      'Automation: productivity gains can lower costs and create new industries, but workers in routine jobs may need retraining and transition support.',
      'Skills: education systems and employers should emphasise transferable skills because specific technical knowledge can become outdated quickly.',
      'Minimum standards: wage and safety rules protect workers, although poorly designed regulation can raise costs for small employers.',
      'Economic growth: higher output can fund services and jobs, but growth is less valuable if gains are highly unequal or cause major environmental damage.',
      'Entrepreneurship: easier access to finance and simpler administration can encourage new businesses, innovation and competition.',
      'Work-life balance: shorter or more flexible schedules can improve well-being and retention when productivity is measured by results rather than hours alone.'
    ],
    words: ['labour market', 'productivity', 'job security', 'career progression', 'workforce', 'remote work', 'vocational skills', 'staff retention', 'economic growth', 'living wage']
  },
  {
    title: 'Government & public services',
    ideas: [
      'Budget priorities: governments should compare social benefit, urgency and long-term return rather than funding projects simply because they are visible or popular.',
      'Public goods: transport, sanitation, education and basic healthcare often justify public funding because their benefits extend beyond the direct user.',
      'Targeted versus universal support: targeted programmes cost less, while universal services are simpler and avoid excluding people just above an eligibility threshold.',
      'Taxation: taxes fund shared services and can discourage harmful behaviour, but very high or complex taxes may reduce incentives or encourage avoidance.',
      'Local versus national decisions: local authorities understand community needs, while national coordination can improve consistency and economies of scale.',
      'Evidence and evaluation: policies should be tested against measurable outcomes and adjusted when they fail rather than maintained for political reasons.',
      'Private-sector involvement: competition can improve efficiency, but essential services still need standards, accountability and access protections.',
      'Prevention spending: early investment in education, health and infrastructure can be cheaper than responding later to crime, illness or system failure.'
    ],
    words: ['public expenditure', 'tax revenue', 'public services', 'social welfare', 'infrastructure', 'policy intervention', 'cost-effectiveness', 'public funding', 'accountability', 'long-term investment']
  },
  {
    title: 'Crime & justice',
    ideas: [
      'Deterrence: predictable enforcement may prevent crime more effectively than extremely harsh punishment that offenders do not expect to receive.',
      'Rehabilitation: education, addiction treatment and job skills can reduce reoffending by addressing causes that prison alone may not change.',
      'Public safety: serious or violent offenders may require imprisonment to protect others even when rehabilitation is also offered.',
      'Youth crime: early support through schools, families and community programmes can address exclusion before criminal behaviour becomes established.',
      'Root causes: poverty alone does not cause crime, but unemployment, addiction, weak social support and lack of opportunity can increase risk in some communities.',
      'Victims: justice systems should consider compensation, protection and psychological support rather than focusing only on offenders.',
      'Technology and policing: surveillance and data tools can improve detection, but they require strong safeguards against misuse and unfair profiling.',
      'Alternatives to prison: community service or supervised treatment can be cheaper and more constructive for some non-violent offences.'
    ],
    words: ['deterrence', 'rehabilitation', 'reoffending', 'law enforcement', 'public safety', 'criminal justice system', 'community service', 'youth crime', 'prison sentence', 'crime prevention']
  },
  {
    title: 'Cities, housing & transport',
    ideas: [
      'Public transport: frequent, reliable networks can reduce car dependence only when they are competitive in time, cost and convenience.',
      'Road building: extra road capacity may ease a bottleneck temporarily, but it can also encourage more driving if alternatives remain weak.',
      'Housing supply: allowing denser development near jobs and transport can improve affordability, although infrastructure and design must keep pace.',
      'Urban sprawl: low-density expansion can offer larger homes but usually increases travel distances, infrastructure costs and land consumption.',
      'Walkability: safe pavements, cycling routes and mixed-use neighbourhoods can improve health, local business activity and accessibility.',
      'Green space: parks improve recreation and urban cooling, so cities should protect access even where land values are high.',
      'Congestion pricing: charging scarce road space can reduce traffic and fund alternatives, but fairness depends on providing viable transport choices.',
      'Regional development: creating jobs and services outside major cities can reduce pressure on housing and transport in overcrowded centres.'
    ],
    words: ['traffic congestion', 'public transport network', 'housing affordability', 'urban planning', 'high-density development', 'urban sprawl', 'commuter', 'pedestrian infrastructure', 'green space', 'regional development']
  },
  {
    title: 'Children & family',
    ideas: [
      'Parental influence: families shape habits and values early, but schools and peers become increasingly important as children grow older.',
      'Independence: age-appropriate freedom can build judgement and confidence, while complete lack of supervision can expose children to avoidable risks.',
      'Screen time: digital media can support learning and social contact, but passive or excessive use may displace sleep, exercise and face-to-face interaction.',
      'Childcare: affordable childcare can support parental employment and early learning, though quality and staff-to-child ratios matter more than availability alone.',
      'Advertising to children: younger audiences may not recognise persuasive intent, which strengthens the case for limits on marketing harmful products.',
      'Homework and pressure: practice can consolidate learning, but excessive workload may reduce motivation and leave too little time for rest or play.',
      'Shared responsibility: parents, schools, platforms and government each control different parts of a child’s environment, so no single actor can solve every problem.',
      'Role models: adults influence behaviour more effectively through consistent example than through rules they do not follow themselves.'
    ],
    words: ['parental guidance', 'child development', 'peer influence', 'parental supervision', 'early childhood', 'screen time', 'social skills', 'childcare', 'academic pressure', 'role model']
  },
  {
    title: 'Media, advertising & consumerism',
    ideas: [
      'Information value: journalism can hold institutions accountable and inform citizens, but speed and competition can reward sensational or incomplete coverage.',
      'Social media: platforms lower barriers to communication and publishing, while algorithms can amplify misinformation, outrage or narrow information bubbles.',
      'Advertising: marketing helps consumers discover products and funds media, but manipulative claims or targeting of vulnerable groups may justify regulation.',
      'Consumerism: rising consumption can support jobs and choice, yet status-driven purchasing can increase debt, waste and environmental pressure.',
      'Influencers: personal recommendations may feel authentic, which makes transparent disclosure of paid promotion especially important.',
      'Media literacy: teaching people to check sources and recognise persuasion can be more durable than trying to ban every misleading message.',
      'Children: younger users need stronger protections because they have less ability to judge commercial intent and online risk.',
      'Public-interest media: independent public broadcasting can provide educational and cultural content that may be under-supplied by purely commercial outlets.'
    ],
    words: ['media literacy', 'misinformation', 'advertising regulation', 'consumer behaviour', 'targeted advertising', 'commercial pressure', 'public interest', 'social media platform', 'sponsored content', 'consumer culture']
  },
  {
    title: 'Culture & globalisation',
    ideas: [
      'Cultural exchange: international contact can broaden perspectives and spread ideas, food, art and knowledge across societies.',
      'Cultural loss: global brands and dominant languages may weaken smaller traditions if local communities lack incentives to preserve them.',
      'Tradition versus change: traditions can create identity and continuity, but practices should still be questioned when they conflict with safety, equality or individual rights.',
      'Language learning: a shared international language can improve mobility and business, while multilingual education helps protect local identity and cognitive flexibility.',
      'Migration: migrants can fill skill gaps and enrich communities, while rapid population change may pressure housing and services if planning is weak.',
      'Local culture: funding museums, festivals and heritage sites can preserve culture while supporting education and tourism.',
      'Global competition: exposure to international markets can improve quality and choice, but small local producers may struggle against large firms.',
      'Identity: people can adopt global habits without abandoning local identity; cultural change is often additive rather than a simple replacement.'
    ],
    words: ['cultural identity', 'cultural exchange', 'globalisation', 'local traditions', 'cultural heritage', 'multilingualism', 'international mobility', 'cultural diversity', 'global market', 'preserve traditions']
  },
  {
    title: 'Tourism & travel',
    ideas: [
      'Economic benefit: tourism creates demand for accommodation, transport, food and local services, which can diversify regional economies.',
      'Seasonal dependence: tourism jobs may be insecure when destinations depend heavily on one season or one source market.',
      'Overtourism: excessive visitor numbers can raise rents, crowd public spaces and damage the experience of residents and tourists alike.',
      'Conservation funding: entrance fees and tourism revenue can finance protected areas when funds are transparently reinvested.',
      'Environmental cost: aviation, cruise travel and resource-intensive resorts can create emissions and local pollution.',
      'Cultural exchange: direct contact can increase understanding, but staged or commercialised experiences may reduce culture to a product.',
      'Visitor management: timed entry, tourist taxes and capacity limits can protect sensitive destinations without banning tourism entirely.',
      'Domestic tourism: encouraging travel within a country can spread spending to less-developed regions and reduce dependence on international arrivals.'
    ],
    words: ['tourism industry', 'local economy', 'overtourism', 'seasonal employment', 'cultural exchange', 'visitor numbers', 'tourist tax', 'protected area', 'heritage site', 'sustainable tourism']
  },
  {
    title: 'Society, equality & population',
    ideas: [
      'Income inequality: some differences in earnings reflect skills and responsibility, but extreme gaps can reduce social mobility and access to essentials.',
      'Equal opportunity: policy can focus on fair access to education, healthcare and employment rather than guaranteeing identical outcomes.',
      'Ageing populations: longer lives are a success, yet pension, healthcare and workforce systems may need reform as the worker-to-retiree ratio changes.',
      'Population growth: larger populations can expand markets and labour supply, while rapid growth can strain housing, schools and infrastructure.',
      'Gender equality: removing barriers can widen the talent pool and individual freedom, while practical support such as childcare may be necessary for formal rights to translate into real opportunity.',
      'Community: strong local networks can reduce isolation and improve informal support, especially for older people and newcomers.',
      'Social mobility: access to quality education, transport and professional networks can matter as much as direct income support.',
      'Rural-urban divide: investment in digital access, transport and services can reduce the need for people to move simply to obtain basic opportunities.'
    ],
    words: ['income inequality', 'equal opportunity', 'social mobility', 'ageing population', 'population growth', 'social cohesion', 'gender equality', 'public services', 'rural community', 'demographic change']
  },
  {
    title: 'Science & research',
    ideas: [
      'Public funding: basic research may deserve government support because its benefits are uncertain, long-term and difficult for one company to capture.',
      'Applied research: private investment can turn discoveries into useful products quickly, although commercial incentives may neglect low-profit public needs.',
      'Risk and regulation: new technologies should be assessed in proportion to their potential harm rather than accepted or banned simply because they are new.',
      'Medical research: potential health benefits can be substantial, but consent, privacy and humane treatment remain essential ethical limits.',
      'Space exploration: scientific knowledge and spin-off technology may justify some spending, while critics can reasonably compare it with urgent needs on Earth.',
      'International collaboration: sharing facilities, data and expertise can reduce duplication and help solve problems that cross national borders.',
      'Scientific literacy: the public needs enough understanding of evidence and uncertainty to evaluate health, environmental and technology claims.',
      'Long-term value: research often produces unexpected benefits, so immediate commercial return is not the only useful measure of success.'
    ],
    words: ['scientific research', 'public funding', 'innovation', 'ethical standards', 'evidence-based', 'medical research', 'technological development', 'international collaboration', 'research funding', 'long-term benefit']
  },
]
