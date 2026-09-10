import { wordBanks } from './data.js'

const speakingTopicBanks = [
  {
    id: 'speaking-extend',
    title: 'Speaking: extend an answer naturally',
    skill: 'Speaking Parts 1–3',
    core: ['mainly because', 'especially when', 'for example', 'so I tend to', 'which means that'],
    more: ['one reason is that', 'what I like most is', 'the main thing for me is', 'a good example would be', 'that is probably why', 'as a result', 'on top of that', 'at the same time'],
    patterns: [
      'Direct answer → reason: “Yes, definitely. I use it quite a lot, mainly because …”',
      'Answer → example: “I’m quite into … For example, last weekend I …”',
      'Answer → contrast: “Usually I …, although when I’m busy I tend to …”',
      'Answer → result: “It saves me a lot of time, which means that I can …”'
    ],
    note: 'For Part 1, two or three developed sentences are usually enough. Extend with a real reason, example, contrast or result instead of repeating the same idea.'
  },
  {
    id: 'speaking-opinion-nuance',
    title: 'Speaking: opinions & nuance',
    skill: 'Speaking Parts 2–3',
    core: ['I think', 'personally', 'in my view', 'it depends', 'to some extent'],
    more: ['I’d say that', 'I tend to think', 'from my perspective', 'generally speaking', 'in most cases', 'there are exceptions', 'I can see both sides', 'I’m not entirely convinced that'],
    patterns: [
      '“Generally speaking, I think …, although there are exceptions.”',
      '“It depends on the situation. For younger people, …, whereas older people may …”',
      '“I agree to some extent, but I wouldn’t say that this is true in every case.”'
    ],
    note: 'Part 3 answers often sound stronger when you avoid absolute claims such as “everyone” or “always”. Qualify broad opinions when needed.'
  },
  {
    id: 'speaking-compare',
    title: 'Speaking: compare & contrast',
    skill: 'Speaking Parts 1–3',
    core: ['compared with', 'whereas', 'while', 'similar to', 'different from'],
    more: ['in contrast', 'by comparison', 'the main difference is', 'have more in common', 'tend to be more', 'not as … as', 'much more likely to', 'roughly the same'],
    patterns: [
      '“Compared with the past, people are much more likely to …”',
      '“The main difference is that X …, whereas Y …”',
      '“They have quite a lot in common, especially when it comes to …”'
    ],
    note: 'Useful for past-versus-present, young-versus-old, city-versus-countryside and country comparisons. Make the comparison explicit rather than describing two sides separately.'
  },
  {
    id: 'speaking-cause-effect',
    title: 'Speaking: causes, effects & solutions',
    skill: 'Speaking Part 3',
    core: ['because', 'one reason is', 'lead to', 'result in', 'a good way to'],
    more: ['be caused by', 'stem from', 'contribute to', 'have an impact on', 'encourage people to', 'make it easier to', 'one possible solution is', 'the government could', 'schools could', 'individuals can'],
    patterns: [
      '“I think one of the main reasons is that … This can lead to …”',
      '“The problem partly stems from …, so one practical solution would be to …”',
      '“Governments could …, while individuals can also …”'
    ],
    note: 'For Part 3, explain the mechanism. Saying “because of technology” is weaker than explaining exactly how technology changes behaviour or access.'
  },
  {
    id: 'speaking-time-change',
    title: 'Speaking: past, present & future',
    skill: 'Speaking Parts 1–3',
    core: ['used to', 'these days', 'nowadays', 'over the years', 'in the future'],
    more: ['when I was younger', 'back then', 'has become more common', 'has changed quite a lot', 'is becoming increasingly', 'is likely to', 'might become', 'I can imagine that', 'in the long run'],
    patterns: [
      '“When I was younger, I used to …, but these days I tend to …”',
      '“It has changed quite a lot over the years, mainly because …”',
      '“In the future, I imagine it will become more … because …”'
    ],
    note: 'These patterns let you show tense range naturally. Keep the tense tied to a real time reference rather than changing tense just to sound complex.'
  },
  {
    id: 'speaking-part2-story',
    title: 'Speaking Part 2: describe & tell a story',
    skill: 'Speaking Part 2',
    core: ['the first thing I’d mention is', 'what happened was', 'what stood out was', 'I remember', 'overall'],
    more: ['to give you some background', 'at the time', 'a little while later', 'eventually', 'the thing I remember most clearly', 'what made it memorable was', 'I was particularly impressed by', 'looking back', 'if I had the chance'],
    patterns: [
      'Background → “To give you some background, this happened when …”',
      'Detail → “What stood out most was … because …”',
      'Story → “At first … A little while later … Eventually …”',
      'Reflection → “Looking back, I think it was memorable because …”'
    ],
    note: 'Part 2 becomes easier when you tell a simple story instead of treating every cue-card bullet as a separate mini-answer.'
  },
  {
    id: 'speaking-home-hometown',
    title: 'Topic: home, hometown & neighbourhood',
    skill: 'Speaking Topic Bank',
    core: ['residential area', 'city centre', 'neighbourhood', 'convenient', 'peaceful', 'crowded'],
    more: ['close to public transport', 'within walking distance', 'a close-knit community', 'green space', 'local amenities', 'a lively atmosphere', 'heavy traffic', 'cost of living', 'a good place to settle down', 'has changed a lot'],
    patterns: [
      '“I live in a fairly quiet residential area, but it’s still close to …”',
      '“What I like most about my hometown is … because …”',
      '“The area has changed quite a lot over the years, particularly …”'
    ],
    note: 'Useful for home, accommodation, hometown, neighbourhood, city life and countryside questions. Add one specific local detail to avoid a generic answer.'
  },
  {
    id: 'speaking-work-study',
    title: 'Topic: work & study',
    skill: 'Speaking Topic Bank',
    core: ['workload', 'deadline', 'assignment', 'practical skills', 'career', 'challenging'],
    more: ['work-life balance', 'job satisfaction', 'career prospects', 'gain experience', 'develop skills', 'work under pressure', 'meet a deadline', 'heavy workload', 'field of study', 'hands-on experience', 'keep up with', 'feel motivated'],
    patterns: [
      '“I’m currently studying …, and what I enjoy most is …”',
      '“It can be quite demanding when I have several deadlines at once.”',
      '“In the long run, I’d like to work in … because …”'
    ],
    note: 'Use concrete verbs such as gain experience, meet deadlines and develop skills rather than repeatedly saying work/study is “good” or “difficult”.'
  },
  {
    id: 'speaking-free-time',
    title: 'Topic: hobbies, weekends & free time',
    skill: 'Speaking Topic Bank',
    core: ['spare time', 'unwind', 'hobby', 'outdoors', 'socialise', 'routine'],
    more: ['switch off', 'clear my head', 'take my mind off work', 'keep active', 'catch up with friends', 'stay in', 'go out', 'take up a hobby', 'lose track of time', 'do something creative'],
    patterns: [
      '“In my spare time, I usually … because it helps me unwind.”',
      '“I took it up a few years ago, and I’ve stuck with it because …”',
      '“If I have a busy week, I normally prefer to … at the weekend.”'
    ],
    note: 'Useful for hobbies, weekends, sports, music, art, reading and relaxation. Natural phrasal verbs work well here when you already know how to use them.'
  },
  {
    id: 'speaking-people-relationships',
    title: 'Topic: people, friends & family',
    skill: 'Speaking Topic Bank',
    core: ['get along with', 'supportive', 'reliable', 'outgoing', 'reserved', 'sense of humour'],
    more: ['have a lot in common', 'keep in touch', 'look up to', 'easy to talk to', 'open-minded', 'down-to-earth', 'considerate', 'dependable', 'strong bond', 'spend quality time', 'give good advice'],
    patterns: [
      '“I’d describe him/her as …, mainly because …”',
      '“We get along really well because we have … in common.”',
      '“One thing I really admire about this person is …”'
    ],
    note: 'For “describe a person” questions, combine a personality adjective with evidence. “She is reliable because she always…” is much stronger than a list of adjectives.'
  },
  {
    id: 'speaking-travel-transport',
    title: 'Topic: travel, holidays & transport',
    skill: 'Speaking Topic Bank',
    core: ['public transport', 'commute', 'traffic', 'destination', 'sightseeing', 'get around'],
    more: ['rush hour', 'traffic congestion', 'reliable service', 'affordable fare', 'daily commute', 'travel abroad', 'local cuisine', 'tourist attraction', 'off the beaten track', 'breathtaking scenery', 'broaden my horizons', 'well-connected'],
    patterns: [
      '“I normally get around by … because …”',
      '“The main problem with transport in my city is …”',
      '“What I enjoyed most about the trip was …, especially …”'
    ],
    note: 'Works for transport, holidays, tourism and places. Avoid forcing travel clichés; use them only if they match an experience you can actually describe.'
  },
  {
    id: 'speaking-food-health',
    title: 'Topic: food, health & exercise',
    skill: 'Speaking Topic Bank',
    core: ['balanced diet', 'home-cooked food', 'exercise regularly', 'keep fit', 'healthy habit', 'fast food'],
    more: ['eat out', 'cut down on', 'stay active', 'sedentary lifestyle', 'nutritious', 'processed food', 'portion size', 'get enough sleep', 'mental well-being', 'build a routine', 'relieve stress', 'physically demanding'],
    patterns: [
      '“I try to … regularly because it helps me …”',
      '“I enjoy eating out occasionally, but most of the time I prefer …”',
      '“One habit I’d like to improve is … because …”'
    ],
    note: 'Health questions do not require medical vocabulary. Everyday collocations used accurately are more useful than technical terms.'
  },
  {
    id: 'speaking-tech-media',
    title: 'Topic: technology, phones & media',
    skill: 'Speaking Topic Bank',
    core: ['device', 'app', 'social media', 'online', 'convenient', 'screen time'],
    more: ['stay connected', 'keep up to date', 'scroll through', 'video call', 'online platform', 'user-friendly', 'save time', 'digital skills', 'privacy', 'depend too much on', 'get distracted', 'face-to-face interaction'],
    patterns: [
      '“I mainly use my phone for …, especially when …”',
      '“The biggest advantage is convenience, although … can be a downside.”',
      '“Compared with a few years ago, people now … much more often.”'
    ],
    note: 'Useful for phones, computers, internet, social media, news and communication. Explain what the technology enables rather than repeatedly calling it “advanced”.'
  },
  {
    id: 'speaking-education',
    title: 'Topic: education & learning',
    skill: 'Speaking Topic Bank',
    core: ['subject', 'course', 'teacher', 'practical', 'academic', 'learning'],
    more: ['learning environment', 'practical skills', 'critical thinking', 'memorise information', 'learn at my own pace', 'hands-on learning', 'stay motivated', 'receive feedback', 'academic pressure', 'online learning', 'lifelong learning', 'pick up a skill'],
    patterns: [
      '“I learn best when … because …”',
      '“A good teacher should be able to … as well as …”',
      '“Online learning is convenient, but it can be difficult to …”'
    ],
    note: 'Useful across school, university, teachers, courses, skills and online education. Part 3 often asks how education has changed or what schools should teach.'
  },
  {
    id: 'speaking-environment-city',
    title: 'Topic: environment, cities & public spaces',
    skill: 'Speaking Topic Bank',
    core: ['pollution', 'green space', 'public transport', 'waste', 'crowded', 'environment'],
    more: ['air quality', 'traffic congestion', 'recycle', 'reduce waste', 'renewable energy', 'pedestrian area', 'urban development', 'public space', 'environmentally friendly', 'raise awareness', 'protect natural areas', 'quality of life'],
    patterns: [
      '“One environmental issue in large cities is …, mainly because …”',
      '“A practical way to improve the situation would be to …”',
      '“Having more green space can improve people’s quality of life because …”'
    ],
    note: 'Useful for environment, parks, transport, cities and government-policy questions. In Part 3, connect a problem to a realistic cause or solution.'
  },
  {
    id: 'speaking-culture-entertainment',
    title: 'Topic: culture, books, films & entertainment',
    skill: 'Speaking Topic Bank',
    core: ['traditional', 'popular', 'entertaining', 'performance', 'story', 'culture'],
    more: ['cultural heritage', 'local tradition', 'live performance', 'plot', 'character', 'documentary', 'thought-provoking', 'easy to relate to', 'keep a tradition alive', 'pass down', 'popular culture', 'creative industry'],
    patterns: [
      '“What I liked most about the film/book was …”',
      '“It was quite thought-provoking because it made me think about …”',
      '“I think traditions remain important because …, although …”'
    ],
    note: 'Works for books, films, music, art, festivals and traditions. You do not need specialist artistic vocabulary; describe your reaction and why you had it.'
  },
  {
    id: 'speaking-shopping-money',
    title: 'Topic: shopping, money & advertising',
    skill: 'Speaking Topic Bank',
    core: ['affordable', 'expensive', 'save money', 'buy online', 'advertising', 'customer'],
    more: ['good value for money', 'compare prices', 'impulse purchase', 'shop around', 'special offer', 'brand loyalty', 'online shopping', 'customer service', 'influence buying decisions', 'waste money on', 'budget', 'essential purchase'],
    patterns: [
      '“I usually shop around before buying … because …”',
      '“Online shopping is convenient, but one drawback is …”',
      '“Advertising can influence people by …, particularly when …”'
    ],
    note: 'Useful for shopping habits, possessions, money, brands and advertising. For Part 3, move from your own habits to broader consumer behaviour.'
  },
  {
    id: 'speaking-society-government',
    title: 'Topic: society, government & change',
    skill: 'Speaking Part 3 Topic Bank',
    core: ['public services', 'government', 'community', 'opportunity', 'responsibility', 'quality of life'],
    more: ['equal access', 'social pressure', 'public funding', 'local authority', 'living standards', 'ageing population', 'younger generation', 'social change', 'public awareness', 'individual responsibility', 'long-term investment', 'benefit society as a whole'],
    patterns: [
      '“I think the government has a role to play because …”',
      '“Individuals are partly responsible, but large-scale change usually requires …”',
      '“In the long term, this could improve … by …”'
    ],
    note: 'This is mainly for abstract Part 3 questions. Keep answers conversational: one clear point, explanation and example is better than sounding like a memorised essay.'
  }
]

const existingIds = new Set(wordBanks.map((bank) => bank.id))
wordBanks.push(...speakingTopicBanks.filter((bank) => !existingIds.has(bank.id)))
