import React, { useState,useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import './model.css'; 

const DebateCourse = () => {
  const navigate = useNavigate();
  const [currentModule, setCurrentModule] = useState(0);
  const [completedModules, setCompletedModules] = useState([]);
  const [quizPassed, setQuizPassed] = useState(false);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  


  const modules = {
    1: {
      title: "Module 1: Understanding Motions and Case Building",
      description: `
        <h3>Module 1</h3>
        <h4>What is motion?</h4>
        <p>Motion: a statement that is given to you before a debate that you have to argue in favor or against depending on your teams' side.</p>
         <h4>Approaching Motion:</h4>
    <p>To understand a motion, make sure to analyse both the wording and the structure of the motion. Identify the variables at hand and their relationship and develop a three-part argument that supports your own interpretation of the motion.</p>

    <h4>Motion Categories</h4>
    <p>There are two broad categories of motions. However, many motions fall within both.</p>
    <ul>
      <li><strong>VALUE</strong><br>These motions ask the teams to analyze the benefits or detriments of a given concept or variable against their own criteria.<br><em>Ex. THBT the Arab Spring has done more harm than good</em></li>
      <li><strong>POLICY</strong><br>Policy motions ask debaters to create an actual policy or framework that will improve or solve a certain economic, political, or social situation given in the motion to be debated. For the following motion both sides would want to reach gender equality, so the debate is about which side's policy, or mechanism to achieve that goal, is better.<br><em>Ex: This house would create quotas for women in high public offices.</em></li>
    </ul>

    <h4>The Wording of the Motions:</h4>
    <p>"This House" refers to a world-wide governing body that governs all or most of the countries worldwide, or what each country's government or people would or should do.</p>
    <p>What goes after "This House" is what matters the most. Different verbs (believes, would, should, regrets, supports) will dictate what the motion is asking you to do, and in what way you should approach it. You should know how the following verbs change the meaning of the motion:</p>
      <ol>
      <li><strong>THIS HOUSE BELIEVES THAT (THBT)</strong><br>This is the simplest kind of motion. It means that you need to argue in favour (if you are proposition) or against (if you are opposition).<br><em>Ex: THBT it is immoral for individuals who have met their basic needs to not donate any excess wealth to social programs.</em><br>You would need to argue why what you're saying is correct or incorrect; why it is immoral or it is not immoral.</li>
      <li><strong>THIS HOUSE WOULD (THW)</strong><br>This motion is asking you to go one step further than you would with a believes motion. In a "believes" motion, you only argue why or why not something is correct. In a "would" motion, you do have to argue why something is right or wrong, but you also have to do something yourself. "Would" calls for ACTION apart from belief.<br>For this type of motions the teams need to develop a mechanism: a plan that explains in detail how you would do what the motion is saying you would do.<br><em>Ex. THW legalize prostitution.</em><br>Not only should you argue why legalizing prostitution is a good idea, but state how you would do it.<br><strong>Note:</strong> if a motion is written as "This House Believes That... should..." then you have to do the same as a "would" motion.</li>
      <li><strong>THIS HOUSE REGRETS (THR)</strong><br>The teams have to evaluate a past action based on its present effects; either say why its occurrence was beneficial or detrimental for a certain group of people.<br><em>Ex: THR the globalization of the Day of the Dead.</em><br>You have to look at the effects of the globalization of the Day of the Dead and argue if they're good or bad.</li>
      <li><strong>THIS HOUSE SUPPORTS (THS)</strong><br>The teams have to argue why a certain action is right or wrong based on evidence.<br><em>Ex: THS the trend of marrying at a later age.</em><br>You have to substantiate your support for the trend. This means that you have to provide both analysis and evidence to define how you support the trend.</li>
    </ol>
         <h4>Burden of proof:</h4>
    <ul>
      <li>The obligation of a party in a dispute to provide sufficient evidence for their position.</li>
      <li>In a debate, the side making a claim or advocating for a change bears the burden of proof.</li>
      <li>Burden of proof requires the affirmative side to present a prima facie case, meaning sufficient evidence to establish a claim or warrant further discussion.</li>
    </ul>

    <h4>Burden of proof in argumentation:</h4>
    <ul>
      <li>Burden of proof applies to any argument where there is a disagreement between two parties.</li>
      <li>The party making a positive claim (asserting that something is true) bears the burden of proof.</li>
      <li>Failing to meet the burden of proof means the claim can be dismissed without needing to be disproven.</li>
    </ul>

    <h4>Assigning burden of proof:</h4>
    <ul>
      <li>In most debates, the affirmative team has the initial burden of proof to advocate for a change from the status quo.</li>
      <li>Burden of proof can also be assigned based on the specific type of claim being made (value, fact, policy).</li>
      <li>Some arguments, such as counterplans or kritiks, can shift the burden of proof to the negative team.</li>
    </ul>

         <h4>Shifting the burden of proof:</h4>
    <ul>
      <li>In some cases, debaters may attempt to shift the burden of proof to gain a strategic advantage.</li>
      <li>Shifting the burden of proof involves making arguments that force the opposing side to defend their position.</li>
      <li>Successfully shifting the burden of proof can put pressure on the other team and give the shifting team more ground to attack their opponent's case.</li>
    </ul>

    <h4>What is the case building?</h4>
    <p>Case building is the time to build a case or time for preparation just before the debate takes place. Each team is required to prepare debate material and arguments to be presented.</p>

    <h4>1) The Introduction:</h4>
    <p>An Introduction identifies the resolution, identifies the side (“Pro” / “Con”), and presents a thesis that previews the arguments of the Constructive.</p>
    <ul>
      <li>Reading the resolution helps the judge know what the topic is!</li>
      <li>Identifying your side (“Pro” / “Con”) tells the judge what position your team will take.</li>
      <li>A clear thesis previews your contentions.</li>
    </ul>
    <p>An Introduction should take no more than 15 – 20 seconds.</p>
    <h4>2) Framework:</h4>
    <p>Framework tells the judge how to evaluate the arguments in the debate.</p>
    <ul>
      <li>Framework often refers to the wording of the resolution.</li>
      <li>Common Frameworks include:
        <ul>
          <li><strong>Cost-benefit analysis:</strong> The judge should weigh the costs and benefits of the topic.</li>
          <li><strong>Utilitarianism:</strong> The judge should prioritize the greatest good for the greatest number.</li>
          <li><strong>Human Rights:</strong> The judge has a moral obligation to uphold human dignity.</li>
          <li><strong>National Security:</strong> The judge should prioritize the national security of the United States.<br>This is common on topics of government policy.</li>
        </ul>
      </li>
    </ul>
    <p>Framework should take no more than 15 – 20 seconds. Framework arguments will develop during the debate.</p>

    <h4>3) Contentions:</h4>
    <p>Contentions are arguments for or against the resolution. Most cases have 2 – 3 contentions.</p>
    <ul>
      <li>A Contention is structured like a paragraph. It includes:
        <ul>
          <li>A topic sentence identifying the argument.</li>
          <li>Research / evidence proving the argument is true.</li>
          <li>A concluding statement restating the argument or explaining why it’s important (the impact).</li>
        </ul> </li>
    </ul>
    <p>Contentions should take up MOST of the speech.</p>

    <h4>4) Conclusion:</h4>
    <ul>
      <li>The Conclusion summarizes your contentions, restates your thesis, and urges the judge to vote for your side.</li>
      <li>Summarizing your contentions helps the judge identify your arguments.</li>
      <li>Restating your thesis crystallizes your position.</li>
      <li>Urging the judge to vote for your side is a no-brainer. It’s why they’re there!</li>
      <li>A Conclusion should be no more than 15 – 20 seconds. It’s very short.</li>
    </ul>
      `,
      quiz: {
        question: "Which motion type requires a plan or mechanism for implementation?",
        options: [
          { text: "THBT", correct: false },
          { text: "THW", correct: true },
          { text: "THR", correct: false }
        ]
      }
    },
    2: {
      title: "Module 2: Framing and Strategic Structure",
      description: `
        <h3>Module 2</h3>
        <h4>What is Framing?</h4>
        <ul>
          <li>Framing refers to the way information is presented to shape perception and influence the interpretation of messages.</li>
           <li>This technique is often used in speeches and debates to highlight specific aspects of an argument while downplaying others, thereby guiding the audience's understanding and emotional response.</li>
      <li>Effective framing can turn a simple idea into a powerful narrative, creating an impactful connection with listeners.</li>
    </ul>

    <h4>Timeframes:</h4>
    <ul>
      <li>A timeframe refers to the specific duration or period allocated for a particular activity or process.</li>
      <li>In the context of debates, especially policy debates, timeframes help define when arguments must be presented, how long each speaker has to present their case, and the overall structure of the debate rounds.</li>
    </ul>

    <h4>Key concept:</h4>
    <ul>
      <li>In policy debates, each round is structured with a specific timeframe that dictates how long each speech lasts, typically ranging from 5 to 8 minutes.</li>
      <li>Timeframes are crucial for ensuring that both teams have equal opportunity to present their arguments and respond to opponents.</li>
      <li>Each speaker must adhere to their allotted timeframe, and failure to do so can result in penalties or loss of speaking time.</li>
      <li>Debaters often practice managing their time effectively to ensure they cover all necessary points without running out of time.</li>
      <li>Timeframes also include preparation periods between speeches where debaters can strategize and plan their next moves.</li>

    <h4>Actors:</h4>
    <ul>
      <li>Actor Analysis involves looking at the chief actors or individuals/groups affected by the resolution.</li>
      <li>For instance if the debate was about education, the actors could be students, teachers, and society; you might also use teachers, school administration, or employers.</li>
      <li>Don't have too many groups – 2 to 4 is usually best.</li>
      <li>It can be a good way of expanding an argument that only has one reason, but it is also useful in other situations.</li>
    </ul>

    <h4>Stakeholders:</h4>
    <ul>
      <li>Stakeholders are any group of people who would have some interest in, or be affected by, the outcome of a debate.</li>
      <li>It is important to identify relevant stakeholders for your debate topic because it makes it easier to construct your principled arguments around real people, and to consider how your mechanisms for change would affect them.</li>
    </ul>

    <p>Examples of stakeholders for Education debates, in order of priority, include:</p>
    <ul>
      <li>Students</li>
      <li>Teachers</li>
      <li>Parents</li>
      <li>The wider community.</li>
    </ul>
    <h4>Narrative Setting:</h4>
    <ul>
      <li>A narrative introduction is a storytelling technique used to engage the audience by starting a speech or presentation with a compelling story or personal anecdote.</li>
      <li>This approach captures attention and establishes an emotional connection, setting the stage for the main message and providing context that resonates with listeners.</li>
    </ul>

    <h4>Key points:</h4>
    <ul>
      <li>Narrative introductions help create an emotional connection between the speaker and the audience, making the message more relatable.</li>
      <li>Using a personal story can enhance credibility, as it demonstrates authenticity and vulnerability from the speaker.</li>
      <li>Effective narrative introductions often include vivid imagery and descriptive language to draw listeners into the story.</li>
      <li>This technique can also provide context or background information relevant to the main argument of the speech.</li>
      <li>Narrative introductions are particularly powerful in persuasive speeches, as they can motivate and inspire action by appealing to shared experiences or emotions.</li>
    </ul>

    <h4>Frame Control Battles:</h4>
    <h5>1. Frame Control: The Real Battlefield</h5>
    <ul>
      <li>Debates are not always won by better arguments, but by controlling the frame of discussion.</li>
      <li>The frame determines how arguments are interpreted, what’s seen as valid, and what gets ignored.</li>
 <li>Once a frame is established, only arguments that align with it are taken seriously.</li>
    </ul>

    <h5>2. The Power of Exclusion</h5>
    <ul>
      <li>Arguments, statistics, or facts outside the frame are often dismissed as irrelevant or manipulative.</li>
      <li>Frame control allows a debater to filter the debate, shaping what counts as logic or truth.</li>
    </ul>

    <h5>3. Morality as a Framing Tool</h5>
    <ul>
      <li>Frames can be built on moral foundations, positioning one side as ethically right.</li>
      <li>Opposing views are then perceived not just as wrong—but as immoral.</li>
      <li>This makes rebuttals seem like defensive justifications for unethical beliefs.</li>
    </ul>

    <h5>4. Tribalism and Group Identity</h5>
    <ul>
      <li>Frames can appeal to shared values and group loyalty.</li>
      <li>This triggers a “we vs. them” mindset, reinforcing the in-group’s beliefs.</li>
      <li>Counter-arguments from outside the frame are often rejected as threats to identity.</li>
    </ul>
<h5>5. Strategic Implications in Debate</h5>
    <ul>
      <li>Controlling the frame gives debaters an upper hand, making it harder for opponents to shift focus.</li>
      <li>A strong frame turns every argument into reinforcement—and dismisses the opposition by design.</li>
     </ul>
        
      `,
      quiz: {
        question: "Which of the following best describes the purpose of framing in debate?",
        options: [
          { text: "To extend preparation time", correct: false },
          { text: "To shape perception and guide interpretation of arguments", correct: true },
          { text: "To strictly follow the debate format", correct: false }
        ]
      }
    },
  3: {
  title: "Module 3: Stakeholders and Impact",
  description: `
    <h3>Module 3</h3>

    <h4>Stakeholders and its impact:</h4>
    <ul>
      <li>Policy debates are about making things happen in the real world. Those things happen to people. The people are called stakeholders. What happens to them is called impact.</li>
      <li>Understanding the impact that the action proposed by the motion will have on various groups of people will help you to define and defend your case more effectively if you are the proposition, and to attack it more successfully if you are the opposition. This process is called stakeholder impact analysis.</li>
    </ul>

    <h4>How does stakeholder impact analysis work?</h4>
    <p>Let’s take the popular motion ‘This house would make all schools co-educational.’</p>
    <ol>
      <li>School students</li>
      <li>Parents</li>
      <li>Teachers</li>
      <li>Employers</li>
      <li>The government</li>
    </ol>

    <ul>
      <li><strong>School students</strong> – They would all have to attend co-educational schools.</li>
      <li><strong>Parents</strong> – They would no longer have the choice of sending their children to single-sex schools.</li>
      <li><strong>Teachers</strong> – Those who had only worked in single-sex schools (or preferred working in single-sex schools) would have to learn the different skills required for teaching both boys and girls.</li>
      <li><strong>The government</strong> – Changing single-sex schools to mixed schools would take up a great deal of the Department for Education’s time and money.</li>
      <li><strong>Employers</strong> – Eventually, everyone in the country would have attended a co-educational school.</li>
    </ul>

    <p>Now, once you’ve decided stakeholders and impact, place the stakeholders in rank order as to how important you consider their interests to be. There isn’t a right answer to this exercise, but how your ranking comes out reveals how you will approach the debate.</p>

    <h4>Impact comparison:</h4>
    <p>The most important part of your arguments to compare are your impacts. If you’re affirmative, it’s what will happen if we don’t pass the plan. For the negative, it’s what happens if we do pass the plan. It’s how the judge will decide whether doing the plan is a good idea.</p>

    <p><strong>Let’s look at two example impacts:</strong></p>

    <p>Team A’s plan is to destroy all nuclear weapons to prevent future nuclear wars. Their impact is:</p>
    <ul>
      <li><strong>Assertion:</strong> Nuclear war kills millions of humans…</li>
      <li><strong>Reasoning:</strong> …because nuclear blasts create a nuclear winter…</li>
      <li><strong>Evidence:</strong> …proven by Carl Sagan’s 1983 book that explained how these weapons would alter the climate and cause crop failures, leading to starvation.</li>
    </ul>

    <p>Team B argues that nuclear weapons deter countries from going to war because of the threat of destruction. Without them, bigger countries would invade smaller countries and abuse their human rights. Team B’s impact is:</p>
    <ul>
      <li><strong>Assertion:</strong> Wars cause human rights abuses…</li>
      <li><strong>Reasoning:</strong> …because countries try to impose their will on others…</li>
      <li><strong>Evidence:</strong> …proven by research conducted by the United Nations Council on Human Rights.</li>
    </ul>

    <ul>
      <li><strong>Magnitude:</strong> the size or scale of an impact.</li>
      <li><strong>Risk:</strong> the probability of the impact.</li>
      <li><strong>Timeframe:</strong> the amount of time the impact needs to take place.</li>
    </ul>

    <p>Let’s use our hypothetical global warming impact to create a MR. T, or an impact overview:</p>

    <p><strong>Nuclear war is the most important impact in the debate round. It outweighs their human rights for three reasons.</strong></p>
    <ol>
      <li><strong>Magnitude:</strong> Nuclear war has a higher magnitude because if one happened, every human would starve in a nuclear winter, and we couldn’t have human rights in the first place.</li>
      <li><strong>Risk:</strong> A nuclear war is likelier because China, the United States, and Russia are increasingly at odds with one another, and a small miscalculation could cause conflict.</li>
      <li><strong>Timeframe:</strong> A nuclear war is faster since it only takes a few minutes for each country to launch their nuclear weapons, and they would need more time to launch an invasion without them.</li>
    </ol>
  `,
  quiz: {
    question: "In stakeholder impact analysis, what are stakeholders?",
    options: [
      { text: "Individuals affected by the outcome of the motion", correct: true },
      { text: "Debaters who win the round", correct: false },
      { text: "Judges who evaluate the debate", correct: false }
    ]
  }
},


4: {
  title: "Module 4: Clash and Argument Structuring",
  description: `
    <h3>Module 4</h3>

    <h4>What is clash?</h4>
    <ul>
      <li>Clash is vital to debate.</li>
      <li>Interact with the other team</li>
      <li>Simply put, clash is pointing out the differences between your arguments and your opposition's arguments</li>
      <li>Basically it is your offensive tactic</li>
      <li>Better to stumble a bit on your clash, then have no clash at all</li>
    </ul>

    <h4>What to clash?</h4>
    <ul>
      <li>You trying to convince to your judge's that you're right and you have to prove why your opponents are wrong</li>
      <li>Clash with every MAJOR notion, assertion (statement without reason), argument, example and statistic or anything else that will bring the other team down</li>
      <li>Don't judge your opponents, it's not your role to inform the judges that they went over their time or that they were stuttering</li>
      <li>You're pointing out flaws with their case</li>
    </ul>

    <h4>Creating conflict between sides:</h4>
    <ol>
      <li>In debate, conflict arises when both sides hold divergent aspirations, values, or beliefs, often rooted in fundamentally different worldviews.</li>
      <li>The objective is not to resolve these differences, but to amplify them strategically—making the clash of ideas clear and compelling for the audience.</li>
      <li>A skilled debater identifies these opposing foundations and frames the discussion to expose contradictions, provoke ideological tension, and force the opponent into a defensive stance.</li>
      <li>This conflict becomes the engine of the debate, driving deeper analysis and more persuasive arguments on both sides.</li>
    </ol>

    <h4>Pre-empting the opposition:</h4>
    <ul>
      <li>Pre-empting means ‘to take action to prevent something happening’ and in debate is all about covering the opposition’s points (and undermining them) before they get the opportunity to make them.</li>
      <li>By making a table and thinking about both sides of the argument properly, you will already have an idea of the opposition's arguments, that you can pre-empt.</li>
    </ul>

    <h4>How to structure your pre-emptions?</h4>
    <p>Structure your points in a way that shows you have thought about their point of view already, that you understand it, but you can help them see an alternative way. Be polite and constructive when talking about their arguments.</p>
    <ul>
      <li><strong>Don’t say:</strong><br>I know you’re going to say something about numbers and you can stop right there because I’ve already thought about it.</li>
      <li><strong>Do say:</strong><br>I understand that you believed that the numbers are important in this argument, however I would like to suggest that…</li>
    </ul>

    <h4>Linking your arguments:</h4>
    <p>In debate, argumentation is the foundation of every speech. In order to be successful at debate, developing the skills to make a persuasive, organized argument is key.</p>

    <h4>Label:</h4>
    <p>Before developing an argument you need to tell the judges what your argument is about. A label should clarify to your judges the main idea of your argument in less than a sentence.</p>

    <h4>Explain:</h4>
    <p>Once you’ve told the judges what your argument is about, you need to explain what exactly you meant. This section of your argument is also referred to as analysis. It is very important that as you explain your argument you walk your judge logically through the steps of your point. Your ultimate goal is to show the judges why your argument is true.</p>

    <h4>Example:</h4>
    <p>After explaining why your argument is true, it is very useful to provide an example or evidence to support your claim. In a prepared motion, you might use statistics or a very specific example. But in an impromptu round, it is unlikely that you know tons about the topic. If you do, that’s great! Otherwise, using general examples or linking your argument to another idea can be just as useful. Make sure to explain why your example is relevant; if you don’t tie it to your argument, the example doesn’t serve a purpose.</p>

    <h4>Tieback:</h4>
    <p>A tie back is a few sentences explaining what makes your argument so important to the round and why it belongs in your case. Think of it as the concluding sentence in a written paragraph.</p>
  `,
  quiz: {
    question: "What is 'clash' in a debate context?",
    options: [
      { text: "A friendly discussion", correct: false },
      { text: "Pointing out the differences between your arguments and your opponents’", correct: true },
      { text: "Judging your opponent’s mistakes", correct: false }
    ]
  }
},


5: {
  title: "Module 5: Strategic Preparation and Flowing",
  description: `
    <h3>Module 5</h3>

    <h4>Strategic Preparation:</h4>
    <ul>
      <li> Develop the resolution to be debated.</li>
      <li> Organize the teams.</li>
      <li> Establish the rules of the debate, including timelines.</li>
      <li> Research the topic and prepare logical arguments.</li>
      <li> Gather supporting evidence and examples for position taken.</li>
      <li> Anticipate counter arguments and prepare rebuttals.</li>
      <li> Team members plan order and content of speaking in debate.</li>
      <li> Prepare room for debate.</li>
      <li> Establish expectations, if any, for assessment of debate.</li>
    </ul>

    <h4>Quick Preparation time:</h4>

    <h5>Quick Outlines:</h5>
    <ul>
      <li>Give everyone a topic and set a timer for 4 minutes for them to silently outline 2–3 arguments on both sides.</li>
      <li>Repeat with a new topic, but this time set a timer for 3 minutes to outline both sides.</li>
      <li>Keep repeating with new topics, but reduce the outline preparation time each time.</li>
    </ul>

    <h5>Goal and variations:</h5>
    <ul>
      <li>Practice quick outlining skills and avoiding perfectionism.</li>
      <li>This activity can be done in any size group or in pairs. By yourself, you will need to prepare index cards with debate topics and set the timer for yourself.</li>
    </ul>

    <h4>Flowing cases:</h4>

    <h5>What is a flow?</h5>
    <p>The debate flow is an organization of notes that keeps track of and help development of all of the arguments made in a debate.</p>

    <h5>A good flow will:</h5>
    <ul>
      <li>Provide an organized presentation</li>
      <li>Help to develop the speeches</li>
      <li>Enable clash</li>
      <li>Show the development of arguments</li>
      <li>Help a team/debater win</li>
      <li>Help a judge know who wins</li>
      <li>Provide a record of the debate</li>
      <li>Silence is Consent</li>
    </ul>

    <h5>SOME RULES FOR FLOWING:</h5>
    <ul>
      <li>One argument per page</li>
      <li>Two colors – one for aff, one for neg</li>
      <li>One column for each speech</li>
      <li>Lots of room/space</li>
      <li>Shorthand symbols</li>
      <li>Substance of an argument, not word for word</li>
      <li>Flow every argument in round</li>
    </ul>
  `,
  quiz: {
    question: "What is one rule for effective flowing in debate?",
    options: [
      { text: "Use only one color for all notes", correct: false },
      { text: "Write down every word spoken", correct: false },
      { text: "One argument per page with shorthand symbols", correct: true }
    ]
  }
},

6: {
  title: "Module 6: Arguing Both Sides and Mental Agility Games",
  description: `
    <h3>Module 6</h3>

    <h4>Arguing both sides:</h4>
    <ul>
      <li>There are two sides to every argument.</li>
      <li>The two sides are called the pro-side and the con-side.</li>
      <li>The pro-side will speak in favor of the topic of the argument or what we call the claim being made.</li>
      <li>The con-side will be speaking against the claim being made in the argument.</li>
      <li>There is no third position of an argument like, “I don’t know.”</li>
      <li>You are either for or against the claim.</li>
      <li>When you clash against an argument you are taking the con side of the argument.</li>
    </ul>

    <h4>Mental agility games:</h4>

    <h5>1: If I Ruled the World…</h5>
    <ul>
      <li>Purpose: Practice making clear claims and speaking confidently in front of a group.</li>
      <li>Claim Matters: It’s not just what you say, but how meaningful and defensible your statement is.</li>
      <li>Choose Wisely: Pick something you believe in—not just safe, funny, or overly complex ideas.</li>
      <li>Delivery Counts:</li>
      <ul>
        <li>Speak with either a playful or calm soothing voice (avoid aggressive/assertive tones).</li>
        <li>Use downward inflection to show confidence.</li>
      </ul>
      <li>Posture: Stand tall with shoulders back to boost confidence.</li>
      <li>Eye Contact: Speak to one person at a time to connect, then switch smoothly.</li>
      <li>Use as Warm-Up: A great tool to test and improve both message and delivery.</li>
    </ul>

    <h5>2: The Why Game</h5>
    <ul>
      <li>Purpose: Test your ability to justify a claim under pressure by repeatedly answering “Why?”</li>
      <li>How It Works:</li>
      <ul>
        <li>Re-state your claim from Game 1.</li>
        <li>Audience asks “Why?”—again and again.</li>
        <li>You must justify your statement each time.</li>
      </ul>
      <li>What It Reveals:</li>
      <ul>
        <li>Surface-level claims fall apart quickly.</li>
        <li>Depth of knowledge, clarity, and reasoning are tested.</li>
        <li>Shows your ability to stay calm and choose your argument line.</li>
      </ul>
      <li>Common Trap:</li>
      <ul>
        <li>Rambling answers or weak reasoning leads to mental shutdown.</li>
        <li>Most people lose track without realizing they’re not being contradicted—just challenged.</li>
      </ul>
      <li>Skill Building:</li>
      <ul>
        <li>Practice conscious choices in explanations.</li>
        <li>Improve tone, posture, and eye contact under pressure.</li>
        <li>Analyze recordings to identify rabbit holes and alternative routes.</li>
      </ul>
      <li>Key Insight: You're often your own biggest opponent — control the direction, don’t just react.</li>
      <li>Use Case: Great for practicing real-life issues and strengthening argument structure.</li>
    </ul>

    <h5>3: Speed Debating</h5>
    <ul>
      <li>Setup:</li>
      <ul>
        <li>Participants sit in pairs (like speed dating).</li>
        <li>Each pair gets a sheet with opposing propositions.</li>
        <li>Time-limited rounds (1–5 mins), then rotate to a new partner and topic.</li>
      </ul>
      <li>How It Works:</li>
      <ul>
        <li>Flip the paper → each debater argues their assigned side.</li>
        <li>Everyone eventually argues both sides of each topic (steelman practice).</li>
        <li>One claim + one explanation per turn mimics fast chess structure.</li>
      </ul>
      <li>Benefits:</li>
      <ul>
        <li>Low-pressure environment: individual discussions in a noisy room.</li>
        <li>Trains quick thinking, calm delivery, and adaptability.</li>
        <li>Encourages balanced thinking by debating from both perspectives.</li>
      </ul>
      <li>Game Progressions:</li>
      <ul>
        <li>Ease difficulty by</li>
        <li>1)Allowing more time,</li>
        <li>2)Letting participants pick/prepare topics in advance.</li>
        <li>Use as a brainstorming tool: capture key arguments after each round.</li>
      </ul>
      <li>Ideal For:</li>
      <ul>
        <li>Warm-ups, icebreakers, or wrap-ups.</li>
        <li>Practicing claims (Game 1) + justifications (Game 2) in a fast-paced format.</li>
      </ul>
    </ul>
  `,
  quiz: {
    question: "What is the purpose of the 'Why Game'?",
    options: [
      { text: "To speed up response time in arguments", correct: false },
      { text: "To justify a claim under pressure by answering 'Why?'", correct: true },
      { text: "To challenge others with complex ideas", correct: false }
    ]
  }
}

  };
  const loadModule = (id) => {
     setCurrentModule(id);
     setQuizPassed(false);
   };
 
   const checkAnswer = (moduleId, optionIndex, isCorrect) => {
     setSelectedAnswers(prev => ({
       ...prev,
       [moduleId]: {
         selectedIndex: optionIndex,
         isCorrect
       }
     }));
     setQuizPassed(isCorrect);
   };
 
   const markComplete = (id) => {
     if (!completedModules.includes(id) && quizPassed) {
       setCompletedModules([...completedModules, id]);
     }
   };
 
   const progress = useMemo(() => {
   return (completedModules.length / Object.keys(modules).length) * 100;
 }, [completedModules, modules]);
 
    const nextModule = () => {
  if (currentModule < Object.keys(modules).length) {
    loadModule(currentModule + 1);
    window.scrollTo({ top: 0, behavior: 'smooth' }); 
  }
};
 
   const prevModule = () => {
     if (currentModule > 1) {
       loadModule(currentModule - 1);
     }
   };
 
   const handleSoftRefresh = () => {
   setCurrentModule(0);  
   setSelectedAnswers({}); 
   setQuizPassed(false);
   setCompletedModules([]); 
   };
   
   const renderModuleContent = () => {
     if (currentModule === 0) {
       return (
         <div className="card">
           <h3>Welcome to Your Debate Journey on Opponix!</h3>
           <em>
             <p>This course is your first step into the exciting world of debate where ideas are tested, perspectives are shared, and minds are sharpened.</p>
             <p style={{textIndent: "20px"}}>Whether you're here to boost your confidence, improve your public speaking, or simply learn how to think more critically, you've come to the right place.</p>
             <p style={{textIndent: "20px"}}>In each module, you'll explore key debate concepts, strategies, and real-life examples. You'll gain the tools to form strong arguments, listen actively, and respond thoughtfully.</p>
             <p>Let's get started and remember: In debate, it's not just about having the loudest voice, but the clearest ideas and the most open mind.</p>
           </em>
         </div>
       );
     }
 
     const mod = modules[currentModule];
     return (
       <div className="card" id={`module-${currentModule}`}>
         <h3>{mod.title}</h3>
         <div dangerouslySetInnerHTML={{ __html: mod.description }} />
         <div className="quiz-section">
           <h4>Quick Test</h4>
           <p>{mod.quiz.question}</p>
           {mod.quiz.options.map((opt, index) => (
             <button 
               key={index}
                className={`quiz-btn ${
                 selectedAnswers[currentModule]?.selectedIndex === index 
                   ? selectedAnswers[currentModule]?.isCorrect 
                     ? 'correct' 
                     : 'wrong'
                   : ''
               }`}
                onClick={() => {
       const isCorrectAnswer = opt.correct;
       checkAnswer(currentModule, index, isCorrectAnswer);
     }}
     disabled={selectedAnswers[currentModule]}
   >
     {opt.text}
             </button>
           ))}
           <div className="quiz-feedback">
             {selectedAnswers[currentModule]?.isCorrect ? "✅ Correct!" : ""}
             
           </div>
         </div>
         <button 
           className="complete-btn" 
           id="completeBtn" 
           onClick={() => markComplete(currentModule)} 
           disabled={!quizPassed}
         >
           ✅ Mark as Complete
         </button>
         <div className="nav-container">
           <button 
             className="nav-btn" 
             onClick={prevModule} 
             disabled={currentModule === 1}
           >
             ← Previous
           </button>
           <button 
             className="nav-btn" 
             onClick={nextModule} 
             disabled={currentModule === Object.keys(modules).length}
           >
             Next →
           </button>
            <button 
     className="nav-btn"
     onClick={handleSoftRefresh}
     style={{ backgroundColor: '#e74c3c', marginLeft: 'auto' }}>↻ Reset</button>
         </div>
       </div>
     );
   };
 
   return (
     <div className="debate-course-page">
     <div className="app">
       <div className="sidebar">
         <h2>Introduction to Debate 2</h2> 
       
         <ul className="module-list">
           {Object.entries(modules).map(([id, module]) => (
             <li key={id} onClick={() => loadModule(parseInt(id))}>
               Module {id}: <br/>{module.title.split(":")[1]}
             </li>
           ))}      
         </ul> 
      </div>
       <div className="content">
         <div className="progress-bar-container">
           <div 
             className="progress-bar-fill" 
             style={{ width: `${progress}%` }}
           ></div>
         </div>
         {renderModuleContent()}
       </div>
     </div>
   </div>
   );
 };
 
 export default DebateCourse;