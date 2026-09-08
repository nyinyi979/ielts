const visuals=[
{title:'UK transport modal share, 1952–2014',file:'UK_transport_modal_share_from_1952-2014.png',question:'The line graph shows the percentage share of passenger transport in the UK by mode from 1952 to 2014. Summarise the main features and make comparisons where relevant.',source:'https://commons.wikimedia.org/wiki/File:UK_transport_modal_share_from_1952-2014.png',credit:'Wikimedia Commons · CC BY-SA 4.0'},
{title:'Carbon footprint of travel by mode',file:'Carbon-footprint-travel-mode_(OWID_0123).png',question:'The chart compares the carbon footprint of different forms of passenger transport, measured in grams of CO₂-equivalent per passenger kilometre. Summarise the main features and make comparisons where relevant.',source:'https://commons.wikimedia.org/wiki/File:Carbon-footprint-travel-mode_(OWID_0123).png',credit:'Our World in Data · CC BY 4.0'},
{title:'Manufacturing process of EV batteries',file:'Manufacturing_schematic.png',question:'The diagram illustrates the manufacturing process for electric-vehicle batteries. Summarise the main stages of the process.',source:'https://commons.wikimedia.org/wiki/File:Manufacturing_schematic.png',credit:'Kianpu34593 / Wikimedia Commons · CC BY-SA 4.0'},
{title:'Production and quality-control flow',file:'ProductionProcessFlowChart.png',question:'The flow chart shows how product D is made from purchased parts A and B and plastic part C, including quality-control stages. Summarise the process from incoming materials to shipment.',source:'https://commons.wikimedia.org/wiki/File:ProductionProcessFlowChart.png',credit:'Wikimedia Commons · CC BY-SA 3.0'},
{title:'Population of Hawkchurch Parish, Devon',file:'Geography_chart_for_population.jpg',question:'The chart shows the population of Hawkchurch Parish in Devon as recorded by censuses from 1881 to 2011. Summarise the main trends and make comparisons where relevant.',source:'https://commons.wikimedia.org/wiki/File:Geography_chart_for_population.jpg',credit:'Wikimedia Commons · reusable Creative Commons media'},
{title:'Age distribution of walking and cycling',file:'Age_distribution_of_walking_and_cycling_across_England_%26_Wales,_Switzerland,_Netherlands,_California,_2013.jpg',question:'The charts compare walking and cycling across different age groups in England and Wales, Switzerland, the Netherlands and California in 2013. Summarise the main features and make comparisons where relevant.',source:'https://commons.wikimedia.org/wiki/File:Age_distribution_of_walking_and_cycling_across_England_%26_Wales,_Switzerland,_Netherlands,_California,_2013.jpg',credit:'Wikimedia Commons · reusable Creative Commons media'},
{title:'Gender distribution of cycling',file:'Gender_distribution_of_cycling_in_England_%26_Wales,_Switzerland,_Netherlands,_California,_2013.png',question:'The chart compares cycling by gender in England and Wales, Switzerland, the Netherlands and California in 2013. Summarise the main features and make comparisons where relevant.',source:'https://commons.wikimedia.org/wiki/File:Gender_distribution_of_cycling_in_England_%26_Wales,_Switzerland,_Netherlands,_California,_2013.png',credit:'Wikimedia Commons · CC BY 4.0'},
{title:'Annual traffic deaths by age in the Netherlands',file:'Annual_traffic_deaths_by_age_Netherlands_1950-2020.png',question:'The chart shows annual road deaths in the Netherlands from 1950 to 2020, divided by age group. Summarise the main changes and make comparisons where relevant.',source:'https://commons.wikimedia.org/wiki/File:Annual_traffic_deaths_by_age_Netherlands_1950-2020.png',credit:'Wikimedia Commons · public-domain chart'},
{title:'Melbourne public transport patronage',file:'Melbourne_metropolitan_public_transport_patronage_from_1994.png',question:'The chart shows annual public transport patronage in Melbourne by mode from 1994 to 2018. Summarise the main trends and make comparisons where relevant.',source:'https://commons.wikimedia.org/wiki/File:Melbourne_metropolitan_public_transport_patronage_from_1994.png',credit:'Triptothecottage / Wikimedia Commons · CC BY-SA 4.0'},
{title:'Railroad miles in the United States',file:'Chart_railroad_miles_per_year.png',question:'The chart shows the total miles of railroad track in existence in the United States between 1832 and 1899. Summarise the main trends and make comparisons where relevant.',source:'https://commons.wikimedia.org/wiki/File:Chart_railroad_miles_per_year.png',credit:'CharlesTrenton / Wikimedia Commons · CC BY-SA 3.0'},
{title:'Electric and plug-in hybrid vehicles, 2019',file:'Battery-plugin-hybrid-vehicles_(OWID_0082).png',question:'The chart compares the share of new passenger vehicles that were battery-electric or plug-in hybrid in selected countries in 2019. Summarise the main features and make comparisons where relevant.',source:'https://commons.wikimedia.org/wiki/File:Battery-plugin-hybrid-vehicles_(OWID_0082).png',credit:'Our World in Data · CC BY 4.0'},
{title:'Passenger capacity of transport modes',file:'Passenger_Capacity_of_different_Transport_Modes.png',question:'The chart compares the passenger-carrying capacity of different urban transport modes per hour. Summarise the main features and make comparisons where relevant.',source:'https://commons.wikimedia.org/wiki/File:Passenger_Capacity_of_different_Transport_Modes.png',credit:'Transformative Urban Mobility Initiative / Wikimedia Commons · CC BY-SA 4.0'},
{title:'Road space requirements for 30 people',file:'Road_Space_Requirements.png',question:'The diagram compares the amount of road space needed to move 30 people by car, bicycle and bus. Summarise the main differences.',source:'https://commons.wikimedia.org/wiki/File:Road_Space_Requirements.png',credit:'Transformative Urban Mobility Initiative / Wikimedia Commons · CC BY-SA 4.0'},
{title:'Microfabrication process',file:'Fabrication_diagram.png',question:'The diagram shows the sequence of steps used to microfabricate a chip. Summarise the main stages of the process.',source:'https://commons.wikimedia.org/wiki/File:Fabrication_diagram.png',credit:'Mgcastellano / Wikimedia Commons · public domain'},
{title:'Computer-integrated manufacturing',file:'Computer_Integrated_Manufacturing_diagram.png',question:'The diagram illustrates the main components and information flows in computer-integrated manufacturing. Summarise the main features and explain how the parts are connected.',source:'https://commons.wikimedia.org/wiki/File:Computer_Integrated_Manufacturing_diagram.png',credit:'Blsilva / Wikimedia Commons · public domain'}
];

const T2=[
['Agree / Disagree','Some people think universities should focus mainly on practical subjects that improve employment prospects. To what extent do you agree or disagree?'],
['Discuss Both Views','Some people believe students learn better in groups, while others think they learn more effectively alone. Discuss both views and give your own opinion.'],
['Problem / Solution','Many people use mobile phones while driving despite laws against it. Why does this happen, and what can be done to reduce the problem?'],
['Advantages / Disadvantages','More young people are moving from rural areas to cities for study and work. Do the advantages outweigh the disadvantages?'],
['Two-Part Question','Advertising appears to influence consumers less than it did in the past. Why might this be happening? Is this a positive or negative development?'],
['Agree / Disagree','Governments should spend more money on public transport than on building new roads. To what extent do you agree or disagree?'],
['Discuss Both Views','Some people think historic buildings should be preserved, while others believe they should be replaced with modern buildings. Discuss both views and give your opinion.'],
['Problem / Solution','Employees in many countries are working longer hours and experiencing greater stress. What causes this, and what can employers do?'],
['Advantages / Disadvantages','An increasing number of people work from home. Do the advantages outweigh the disadvantages?'],
['Two-Part Question','Many people spend large amounts of money trying to look younger. Why is this happening? Is this a positive or negative trend?'],
['Agree / Disagree','Children should begin formal education at a very young age. To what extent do you agree or disagree?'],
['Discuss Both Views','Some people think governments should fund arts and culture, while others believe this money should be spent on essential public services. Discuss both views and give your opinion.'],
['Problem / Solution','Traffic congestion is getting worse in many cities. What are the main causes, and what solutions can governments introduce?'],
['Advantages / Disadvantages','More people are choosing to have children later in life. Do the advantages outweigh the disadvantages?'],
['Two-Part Question','Developing countries are investing heavily in tourism. Why is this happening? Is this a positive or negative development?'],
['Agree / Disagree','The best way to reduce youth crime is to teach parents better parenting skills. To what extent do you agree or disagree?'],
['Discuss Both Views','Some people think team sports are more beneficial, while others prefer individual sports. Discuss both views and give your opinion.'],
['Problem / Solution','Noise pollution is increasing in many urban areas. What are the causes, and what measures could reduce it?'],
['Advantages / Disadvantages','Some students take part-time jobs while studying. Do the advantages outweigh the disadvantages?'],
['Two-Part Question','People change jobs and careers more often than in the past. Why is this happening? Is this a positive or negative development?'],
['Agree / Disagree','Modern communication technology has weakened real human relationships. To what extent do you agree or disagree?'],
['Discuss Both Views','Some people believe international tourism promotes understanding between cultures, while others think it damages local traditions. Discuss both views and give your opinion.'],
['Problem / Solution','Many adults know that regular exercise is important but still do not exercise enough. Why is this the case, and what can be done?'],
['Advantages / Disadvantages','More companies are employing older workers. Do the advantages outweigh the disadvantages?'],
['Two-Part Question','University students often find independent study more difficult than school study. Why does this happen? What can universities do to help?'],
['Agree / Disagree','Governments should make public transport free in order to reduce traffic congestion. To what extent do you agree or disagree?'],
['Discuss Both Views','Some people believe traditional culture should be protected, while others think cultural change is a natural part of modern life. Discuss both views and give your opinion.'],
['Problem / Solution','Plastic packaging is increasing around the world. What problems does this cause, and what can governments and consumers do?'],
['Advantages / Disadvantages','Many cities are creating more bicycle lanes and reducing space for cars. Do the advantages outweigh the disadvantages?'],
['Mock Test','Some people believe success in life mainly depends on hard work, while others think money and appearance are more important. Discuss both views and give your own opinion.']
];

function imageUrl(file){return 'https://commons.wikimedia.org/wiki/Special:Redirect/file/'+file}
function wordCount(text){return text.trim().split(/\s+/).length}
function paragraphs(text){return text.split(/\n\n+/).map(p=>`<p>${p}</p>`).join('')}
function task2Lesson(type){
  if(type==='Agree / Disagree') return 'Notice how the position is clear in the introduction and remains consistent. The counterpoint is acknowledged without weakening the main answer.';
  if(type==='Discuss Both Views') return 'Both views receive genuine explanation before the writer gives a clear judgement. Neither side is reduced to a one-line straw man.';
  if(type==='Problem / Solution') return 'The solutions answer the causes or problems already identified. This direct cause-to-solution link is stronger than listing unrelated ideas.';
  if(type==='Advantages / Disadvantages') return 'Both sides are developed, but the essay explicitly decides which side carries more weight rather than leaving the judgement implied.';
  if(type==='Two-Part Question') return 'Both questions are answered directly and receive enough development. The essay does not spend 80% of its space on the first half of the prompt.';
  return 'The response explains both positions fairly, then makes a clear judgement. Ideas are developed rather than presented as a list.';
}
function modelAccordion(label,text,lesson,kind){
  const count=wordCount(text);
  return `<details class="model-answer"><summary><span>${label}</span><span class="wc">${count} words</span></summary><div class="model-body">${paragraphs(text)}<div class="learn"><b>What to learn from it</b><p>${lesson}</p><p class="small-note">This is a study model, not an official IELTS-rated script. Do not memorise it word for word; copy the decisions: clear position/overview, selective detail, natural paragraphing and precise language.</p></div></div></details>`;
}

const root=document.getElementById('days');
for(let i=0;i<30;i++){
  const v=visuals[i%visuals.length];
  const t=T2[i];
  const t1=window.IELTS_TASK1_MODELS[i%window.IELTS_TASK1_MODELS.length];
  const t2=window.IELTS_TASK2_MODELS[i];
  const s=document.createElement('section');
  s.className='card day';
  s.innerHTML=`
    <h2>Day ${i+1}</h2>
    <div class="badges"><span class="badge">Task 1 · 20 min</span><span class="badge">Task 2 · 40 min</span><span class="badge">${t[0]}</span></div>
    <h3>Academic Writing Task 1</h3>
    <div class="visual"><img loading="lazy" src="${imageUrl(v.file)}" alt="${v.title}"><div class="credit">Source: <a href="${v.source}" target="_blank" rel="noreferrer">${v.credit}</a></div></div>
    <p class="task"><b>Question:</b> ${v.question}</p>
    <p class="tip">Before reading the model: spend 2 minutes finding the overview yourself. For a chart, identify the dominant trend, highest/lowest points and useful comparisons. For a process, identify the broad stages and start/end points.</p>
    ${modelAccordion('Read Task 1 model answer · Band 8 target',t1,'The response gives an immediate overview, groups information instead of describing every item, and uses approximate figures only where they help the comparison.','task1')}
    <div class="task-divider"></div>
    <h3>Academic Writing Task 2</h3>
    <p class="task"><b>${t[1]}</b></p>
    <p class="tip">Before reading the model: decide your position and write two main-idea sentences. Then compare your plan with the answer below.</p>
    ${modelAccordion('Read Task 2 model essay · Band 8 target',t2,task2Lesson(t[0]),'task2')}
    <div class="focus"><b>Band 7 → 8 → 9:</b> Band 7 is already clear and well developed. Moving higher is less about rare vocabulary and more about selecting ideas precisely, extending them naturally, controlling cohesion and making complex grammar look effortless rather than forced.</div>`;
  root.append(s);
}