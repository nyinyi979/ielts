export const wordBanks = [
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
    title: 'Education',
    ideas: ['access and equality', 'quality of teaching', 'motivation', 'critical thinking', 'practical skills', 'technology as support rather than automatic replacement', 'cost and public funding'],
    words: ['curriculum', 'tuition fees', 'academic performance', 'learning outcomes', 'personalised learning', 'teacher guidance', 'digital literacy']
  },
  {
    title: 'Technology',
    ideas: ['efficiency and convenience', 'access to information', 'automation', 'privacy', 'social isolation', 'digital divide', 'productivity versus distraction'],
    words: ['automation', 'digital access', 'data privacy', 'face-to-face interaction', 'technological advancement', 'online platform', 'screen time']
  },
  {
    title: 'Environment',
    ideas: ['individual behaviour', 'business incentives', 'government regulation', 'public transport', 'renewable energy', 'biodiversity', 'waste and consumption'],
    words: ['carbon emissions', 'renewable energy', 'environmental regulation', 'habitat loss', 'sustainable consumption', 'waste management']
  },
  {
    title: 'Health',
    ideas: ['prevention versus treatment', 'diet', 'exercise', 'mental health', 'public awareness', 'healthcare access', 'work-life balance'],
    words: ['sedentary lifestyle', 'balanced diet', 'preventive healthcare', 'public health campaign', 'well-being', 'healthcare system']
  },
  {
    title: 'Work & economy',
    ideas: ['remote work', 'productivity', 'job security', 'automation', 'skills training', 'work-life balance', 'commuting costs'],
    words: ['labour market', 'remote work', 'job satisfaction', 'productivity', 'financial security', 'career development', 'workforce']
  },
  {
    title: 'Cities & transport',
    ideas: ['congestion', 'housing affordability', 'public transport', 'urban planning', 'pollution', 'access to services', 'cycling/walking infrastructure'],
    words: ['traffic congestion', 'public transport network', 'urban planning', 'housing shortage', 'commuter', 'pedestrian area']
  },
  {
    title: 'Government & crime',
    ideas: ['prevention', 'rehabilitation', 'punishment', 'public safety', 'fairness', 'budget priorities', 'education and opportunity'],
    words: ['law enforcement', 'rehabilitation', 'deterrence', 'public safety', 'criminal justice system', 'government expenditure']
  },
  {
    title: 'Children, family & media',
    ideas: ['parental guidance', 'education', 'role models', 'screen time', 'advertising', 'independence', 'social skills'],
    words: ['parental supervision', 'peer influence', 'child development', 'media exposure', 'social skills', 'family life']
  },
  {
    title: 'Globalisation & travel',
    ideas: ['cultural exchange', 'economic opportunity', 'tourism pressure', 'language learning', 'international business', 'environmental cost', 'open-mindedness'],
    words: ['cultural exchange', 'international exposure', 'global economy', 'tourism industry', 'cross-cultural understanding', 'overseas study']
  },
]
