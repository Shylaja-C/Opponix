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
      title: "Module 1: Introduction to Debate",
      
      description: `
        <h3>Introduction to Debate</h3>

        <h4>What is debate?</h4>
        <ul>
          <li>A debate is a discussion between sides with different views.</li>
          <li>Persons speak for or against something before making a decision.</li>
          <li>Debates are a means of encouraging:</li>
          <ul>
            <li>critical thinking</li>
            <li>personal expression</li>
            <li>tolerance of others' opinions</li>
          </ul>
        </ul>

        <h4>The history of debating:</h4>
        <p>
          Debating dates back to the intellectual exchanges of Ancient Greece and India.
          Socrates (c. 470–399 BC) used probing questions to uncover flawed reasoning,
          while Cicero, in 63 BC, gained fame for exposing corruption in Roman politics—both ultimately paying with their lives.
        </p>
        <p>
          In 1858, the Lincoln-Douglas debates set a new standard in rhetorical precision,
          influencing modern political debates. The first televised debate occurred in 1956,
          but the 1960 Nixon–Kennedy debate became iconic—radio listeners favored Nixon,
          while TV viewers saw Kennedy as the winner, highlighting the power of body language in persuasive communication.
        </p>

        <h4>Why are Debating Skills Important...</h4>
        <ul>
          <li>
            While you may not have formal debates in public (unless you want to be a politician)
            a lot of the skills needed in debating are useful for campaigning and challenging perceptions.
          </li>
          <li>
            The skills gained through learning how to debate successfully can also be useful in all areas of your life,
            such as: explaining to people what you need to lead an independent life.
          </li>
        </ul>

        <h4>Types of debate:</h4>
        <p><strong>1) Formal Debate</strong></p>
        <ul>
          <li>When the session begins, speeches focus on stating country positions and offering recommendations for action.</li>
          <li>After blocs have met, speeches focus on describing bloc positions to the entire body.</li>
          <li>Delegates now make statements describing their draft resolutions to the committee.</li>
          <li>Delegates try to garner more support through formal speeches and invite others to offer their ideas.</li>
          <li>Delegates make statements supporting or disagreeing with specific draft resolutions</li>
        </ul>
        <p><strong>2) Informal Debate</strong></p>
        <ul>
          <li>After several countries state their positions, the committee breaks for caucuses (often in blocs) to develop regional positions.</li>
          <li>Writing begins as countries work together to compose draft resolutions.</li>
          <li>Countries and groups meet to gather support for specific draft resolutions.</li>
          <li>Delegates finalize draft resolutions.</li>
          <li>
            Draft-resolution sponsors build greater support for their resolution and look to incorporate others' ideas
            through friendly amendments.
          </li>
        </ul>

        <h4>Benefits of debate:</h4>
        <ul>
          <li><strong>Confidence</strong> – Belief in themselves and their abilities, and the desire to participate in all classes.</li>
          <li><strong>Curiosity</strong> – The passion of discovery through effective tools for research, organization and presentation.</li>
          <li><strong>Critical Thinking</strong> – How to explore the world through the lens of an inquisitive mind</li>
          <li><strong>Communication</strong> – Oral & written skills and strategies for lively yet respectful discussions & disagreements.</li>
          <li><strong>Control</strong> – Eliminate the fears of public speaking.</li>
          <li><strong>Creativity</strong> – The desire to explore, create and invent.</li>
          <li><strong>Camaraderie</strong> – Meet like-minded peers at tournaments and build healthy bonds of competition.</li>
          <li><strong>Leadership</strong> – Self-motivation and the ability to delegate assignments and manage peers.</li>
        </ul>
      `,
      quiz: {
        question: "Which of the following is a benefit of debate?",
        options: [
          { text: "Confidence and Creativity", correct: true },
          { text: "Copying others' ideas", correct: false },
          { text: "Avoiding public speaking", correct: false }
        ]
      }
    },
    2: {
      title: "Module 2: What is Argument?",
      description: `
        <h3>What is Argument?</h3>
        <p>An argument is a claim that is supported by reasons or evidence.</p>

        <h3>How to build a strong argument?</h3>

        <h4>Claim</h4>
        <p>Claim - Your basic belief about a particular topic, issue, event, or idea.</p>

        <h4>Reasons</h4>
        <p>An explanation that shows why the claim is true.</p>

        <h4>Evidence</h4>
        <p>Facts, statistics, expert research, and primary witnesses.</p>

        <h4>Warrant</h4>
        <p>An "If... then..." statement that shows the relationship between the evidence and reason.</p>

        <h4>Counterclaim</h4>
        <p>What the people who disagree with you would say.</p>

        <h4>Rebuttal</h4>
        <p>Evidence that disproves the other side of the argument.</p>

        <h3>Structure of a strong argument of a debate:</h3>

        <h4>1. Opening Statements (1 minute each)</h4>
        <p>
          Like an introduction to a formal paper, introduce yourself/team and the topic you will be debating.
          Tell what you are going to argue during the debate (like a thesis statement) and tell why your position should win.
        </p>

        <h4>2. Oral Arguments (2 minutes each)</h4>
        <p>
          Like the body of a formal paper, present the evidence that proves your position is correct.
          This argument should be very factual and persuasive.
          Opinions not backed by facts could be used to show the weakness of your case, so be careful!
        </p>

        <h4>3. Rebuttal Arguments (2 minute each)</h4>
        <p>
          Presentment of counter evidence that shows: false, inaccurate, misrepresented, or weak points in the opposition's argument.
        </p>

        <h4>4. Cross Examinations (Open 5 minutes)</h4>
        <p>
          As each team finishes its rebuttal, the other team has time to ask questions about the evidence presented
          in order to prove the invalidity of the argument or continue to counter arguments.
        </p>

        <h4>5. Closing Arguments (1 minute)</h4>
        <p>
          Like the closing paragraph of a formal paper, summarize the key points you presented.
          Conclude with a persuasive argument that will win the debate for you even if you are losing based on facts!
        </p>

        <h3>Example of debate</h3>
        <h4>ACADEMIC EXCELLENCE IS THE ONLY REQUIREMENT FOR A SUCCESSFUL CAREER.</h4>

        <h4>FOR THE MOTION:</h4>
        <p>
          "The beautiful thing about learning is that no one can take it from you."<br><br>
          Respected judges and my worthy opponents, I stand before you all to speak in favour of the motion: 
          "Academic excellence is the only requirement for a successful career".
        </p>
        <p>
          Right to Education is the fundamental right of every child in the age group of six to fourteen years.
          The education system in the primary years is designed so as to provide basic knowledge of each subject 
          and help the youth of today to choose their subject of interest for its deeper study that can only be provided 
          effectively through universities. It plays a key role in the development of society and nation.
          Information cannot be converted into knowledge without education. Education makes us capable of interpreting things, among other things.
        </p>
        <p>
          It helps in raising future leaders by providing them clear understanding and developing decision making abilities.
          It makes them resourceful and competent. Excellence in academics prepares children for the competition ahead 
          and teaches them to work hard as well.
        </p>
        <p>
          Moreover, Excellency will ensure admission to the best universities for higher education that provide exposure 
          and a kick start to their career. To conclude, I would say that one who has it's academic future choices sorted out, 
          has it's career planned out.
        </p>
        <p><strong>"The goal of education is the advancement of knowledge and the dissemination of truth."</strong></p>
        <p>Thank you.</p>

        <h4>AGAINST THE MOTION:</h4>
        <p>
          Good morning, ladies and gentlemen! My topic for the day is "Academic excellence is the only requirement for a successful career" 
          and I choose to speak against the motion.
        </p>
        <p>
          "The goal of education is to raise the leaders of tomorrow". But my question is, 
          How is it that most of the leaders of today happen to be college dropouts? 
          This is because having degrees cannot ensure success. It fails to impart the life skills and polish personality of an individual. 
          They can surely give you an overview of a subject but fail to provide an overview of how the world works. 
          It does not ensure skills and competencies. It tells people what to think instead of how to think and the end results is that, 
          the society now has just robots who have switched their minds off only to believe what is being taught.
        </p>
        <p>
          One's attitude towards life is what brings success. Undoubtedly, academic Excellencies can provide you degrees 
          or may even land you at a job, but, your success depends upon how you think, behave, walk, talk and present yourself.
          It has been rightly said,
        </p>
        <p><strong>"Education produces great employees in the market, not employers".</strong></p>
        <p>Thank you.</p>

        <h3>Fact vs Opinion</h3>

        <h4>Facts</h4>
        <p>
          A fact is a statement that can be proven to be true by the use of evidence. 
          Factual statements are true in all cases and for all people; in other words, facts are universal.
        </p>
        <p>Some examples include:</p>
        <ul>
          <li>Dogs are mammals.</li>
          <li>Albany is the capital of New York.</li>
          <li>Mount Everest is the tallest mountain on Earth.</li>
        </ul>
        <p>
          Each of these statements is true. Furthermore, each statement is verifiable and not debatable,
          provided that definitions are agreed upon. Put simply, evidence exists that could potentially prove or disprove each claim.
        </p>

        <h4>Opinions</h4>
        <p>
          Opinions, unlike facts, are neither true nor false. 
          An opinion can express a belief, attitude, value, judgment, or feeling.
        </p>
        <p>Some examples include:</p>
        <ul>
          <li>Dogs are the best mammals in existence.</li>
          <li>Albany is the most interesting city in New York.</li>
          <li>World War II was a terrible war.</li>
        </ul>
        <p>
          Each of these statements expresses an opinion. Note that each is debatable. 
          In other words, one can potentially agree or disagree with (debate) a statement of opinion.
        </p>
      `,
      quiz: {
        question: "Which of these is part of a strong argument?",
        options: [
          { text: "Claim, Evidence, Rebuttal", correct: true },
          { text: "Guess, Shout, Exit", correct: false },
          { text: "Only your opinion", correct: false }
        ]
      }
    },
    3: {
      title: "Module 3: Debate Formats and Structures",
      description: `
        <h3>Overview of debate</h3>
        <p>A debate is a structured argument where two sides—Pro (agree) and Con (disagree)—present opposing views on a topic. Each side uses evidence and examples to persuade the audience. The goal is to convince listeners of their stance. In formal settings, a mediator decides the winner, while informal debates continue until one side concedes. A well-structured, clearly written debate leaves a lasting impact.</p>

        <h3>British Parliamentary Debate (BPD)</h3>

        <h4>STRUCTURE:</h4>
        <p>Four teams compete in each debate:</p>
        <ul>
          <li>1) Opening Government (OG)</li>
          <li>2) Opening Opposition (OO)</li>
          <li>3) Closing Government (CG)</li>
          <li>4) Closing Opposition (CO)</li>
        </ul>
        <p>Each team has two speakers, totaling eight participants.</p>

        <h4>ROLES:</h4>
        <ul>
          <li>→ Opening Teams: Introduce the main arguments for or against the motion.</li>
          <li>→ Closing Teams: Provide new perspectives or extensions to the debate, differentiating their contributions from their opening counterparts.</li>
        </ul>

        <h4>SPEAKING TIME:</h4>
        <p>Each speaker has 7 minutes and Points of Information (POIs) can be offered between the 1st and 6th minutes of a speech.</p>

        <h4>PREPARATION:</h4>
        <p>Debaters receive the motion 15 minutes before the debate, requiring quick thinking and adaptability.</p>

        <h3>Asian Parliamentary Debate (APD)</h3>

        <h4>STRUCTURE:</h4>
        <p>Two teams compete:</p>
        <ul>
          <li>1) Government (proposing the motion)</li>
          <li>2) Opposition (opposing the motion)</li>
        </ul>
        <p>Each team has three speakers.</p>

        <h4>ROLES:</h4>
        <ul>
          <li>Prime Minister/Leader of Opposition: Define the motion and present the team's case.</li>
          <li>Deputy Prime Minister/Deputy Leader of Opposition: Reinforce the team's arguments and rebut the opposing side.</li>
          <li>Government/Opposition Whip: Summarize the debate and highlight the team's key points.</li>
        </ul>

        <h4>SPEAKING TIME:</h4>
        <p>Each speaker has 7 minutes and POIs are allowed between the 1st and 6th minutes of a speech.</p>

        <h4>PREPARATION:</h4>
        <p>Similar to BPD, debaters receive the motion shortly before the debate, emphasizing impromptu speaking skills.</p>

        <h3>The Lincoln-Douglas Format</h3>
        <p>The Lincoln-Douglas format is an open style of debate that's often used in high school and college. It's named after the famous series of debates between Abraham Lincoln and Stephen Douglas.</p>
        <p>The participants in this format agree on time limits and topics beforehand. It's a structured pattern that allows people to bring in their rebuttals and perspectives openly.</p>
        <p>The debate lasts around 40-45 minutes.</p>
        <p>The speaker makes the case, and then there's cross-examination. After that, there's a short rebuttal session, and the debate ends with a final rebuttal.</p>

        <h3>Debate structure</h3>
        <ul>
          <li>1) Primary Affirmation — 7 minutes for speaking and 2 minutes for queries</li>
          <li>2) Primary Negation — 5 minutes for speaking and 2 minutes for queries</li>
          <li>3) Secondary Affirmation — 7 minutes for speaking and 2 minutes for queries</li>
          <li>4) Secondary Negation — 5 minutes for speaking and 2 minutes for queries</li>
          <li>5) Floor Speeches — Guests are Encouraged to Speak! 2 in the affirmative, 2 in the negative, alternating 4 minutes for speaking, 2 minutes for queries</li>
          <li>6) Affirmation Crystallization — 2 minutes for speaking, delivered by the secondary affirmative speaker, no queries</li>
          <li>7) Negation Crystallization — 2 minutes for speaking, delivered by the secondary negative speaker, no queries</li>
        </ul>

        <h3>Speaker Roles</h3>
        <p>Each speaker has a few specific jobs to do in the debate:</p>
        <ul>
          <li>First affirmative: define key terms in topic, context for topic, outline model, outline team line and key arguments, provide team split, develop 2-3 substantive arguments</li>
          <li>First negative: outline negative stance in the debate, team line and key arguments, provide team split, rebut arguments of first affirmative, develop substantive arguments for own case</li>
          <li>Second affirmative: rebut attacks on first speaker's material, rebut arguments made by first negative, develop more substantive arguments for affirmative team</li>
          <li>Second negative: rebut arguments made by second affirmative, continue rebuttal of first affirmative, develop more substantive arguments for negative</li>
          <li>Third affirmative: rebuttal of first two negative speakers, MAY provide more substantial material for affirmative (not required)</li>
          <li>Third negative: pure rebuttal speech - no new material allowed</li>
          <li>Summaries: Recap major issues and arguments in the debate, "spin" the debate for each side, "biased adjudication"</li>
        </ul>

        <h3>Timing</h3>
        <ul>
          <li>INTRODUCTIONS BY THE CHAIRPERSON — minutes 0-5</li>
          <li>OPENING PRESENTATIONS — minutes 5-20</li>
          <li>JUDGES' QUESTIONS — minutes 20-35</li>
          <li>AUDIENCE QUESTIONS & TEAM EXCHANGES — minutes 35-50</li>
          <li>FINAL REMARKS — minutes 50-55</li>
          <li>FEEDBACK AND COMMENTS FROM THE JUDGES — minutes 55-65</li>
          <li>AUDIENCE VOTE AND THE JUDGES' DECISION — minutes 65-70</li>
        </ul>

        <h3>Scoring</h3>
        <ol>
          <li>Judges generally score the speakers looking at this criteria:</li>
          <li><strong>Content / Matter</strong> – What the debaters say, their arguments and evidence, the relevance of their arguments.</li>
          <li><strong>Style / Manner</strong> – How the debaters speak, including the language and tone used.</li>
          <li><strong>Strategy / Method</strong> – The structure of the speech, the clarity and responding to other's arguments.</li>
        </ol>
      `,
      quiz: {
        question: "How many teams participate in a British Parliamentary Debate?",
        options: [
          { text: "2", correct: false },
          { text: "4", correct: true },
          { text: "3", correct: false }
        ]
      }
    },
    4: {
      title: "Module 4: Public Speaking Essentials",
      description: `
        <h3>Public Speaking Essentials</h3>
        <ul>
          <li><strong>1) Practice Makes Perfect:</strong> Rehearse your speech multiple times. Try practicing in front of a mirror or record yourself to improve your delivery and body language.</li>
          <li><strong>2) Know Your Audience:</strong> Tailor your message to be relatable and engaging for your classmates. This makes your presentation more impactful and memorable.</li>
          <li><strong>3) Stay Organized:</strong> Use cue cards or a clear outline to keep your thoughts organized. This helps you stay on track and reduces anxiety.</li>
          <li><strong>4) Deep Breaths:</strong> Take a moment to breathe deeply before you start. This calms your nerves and prepares your mind for a stellar performance.</li>
          <li><strong>5) Embrace Mistakes:</strong> Everyone slips up. If you stumble, keep going. Your confidence in handling mistakes can impress your audience even more than a flawless speech!</li>
        </ul>

        <h3>Voice Modulation</h3>
        <p>Voice modulation refers to the ability to change the pitch (high or low), tone (quality), volume (loud or soft), and speed (fast or slow) of your voice. This dynamic range is crucial for keeping your audience engaged and for emphasizing important aspects of your message.</p>

        <h3>Tone</h3>
        <p>Tone refers to the emotional quality of your voice. It can be warm, cold, friendly, or authoritative. The right tone can build rapport with your audience and make your message more persuasive.</p>

        <h3>Pauses</h3>
        <p>We tend to rush through our speech because of this. You should be conscious about your speech and give a few pauses which can greatly improve your speech and its impact.</p>

        <h3>Eye Contact</h3>
        <ul>
          <li>Establishes connection and engagement with the audience.</li>
          <li>Conveys confidence and sincerity in your message.</li>
          <li>Helps to gauge audience reactions and adjust delivery accordingly.</li>
        </ul>

        <h3>Body Language</h3>
        <p>Body Language is the communication of personal feelings, emotions, attitudes, thoughts through body movements — gestures, postures, facial expressions, walking styles, positions & distance — either consciously or involuntarily. It's not only your tongue you communicate with, but also you speak with your body movements and gestures.</p>

        <h3>Overcoming Stage Fear</h3>
        <ul>
          <li>1. Prepare and Practice Thoroughly</li>
          <li>2. Breathing and Relaxation Techniques</li>
          <li>3. Positive Visualisation</li>
          <li>4. Start Small and Gradually Increase Exposure</li>
          <li>5. Focus on the Message and Not the Audience</li>
          <li>6. Use Body Language Effectively</li>
          <li>7. Handle Mistakes Positively</li>
        </ul>
      `,
      quiz: {
        question: "What is the purpose of voice modulation in public speaking?",
        options: [
          { text: "To confuse the audience", correct: false },
          { text: "To emphasize key points and keep the audience engaged", correct: true },
          { text: "To speak as quickly as possible", correct: false }
        ]
      }
    },
    5: {
      title: "Module 5: Rebuttals and Refutation",
      description: `
        <h3>Listening Skill</h3>
        <p>One of the most important skills in debate is the ability to listen carefully and strategically. In debate, listening involves:</p>
        <ul>
          <li>1) Making sure you actually understand the other person's argument</li>
          <li>2) Digesting the main point of the other person's argument</li>
          <li>3) Coming up with clarifying questions to solidify your understanding</li>
          <li>4) Selective note-taking on the distinct ideas mentioned by the other person</li>
          <li>5) Knowing when the other person is just repeating something said before</li>
          <li>6) Mentally drawing connections to your own arguments</li>
          <li>7) Making choices about where you might focus your upcoming responses</li>
        </ul>

        <h3>Refutation</h3>
        <p>Refutation is the skill of responding to opposing arguments while strengthening your own. Effective debaters follow a clear structure:</p>
        <ol>
          <li><strong>Signal</strong> – Identify the specific claim you're responding to, ensuring clarity in the debate flow.</li>
          <li><strong>State</strong> – Present your counterclaim clearly and concisely.</li>
          <li><strong>Support</strong> – Justify your point with evidence or logical reasoning.</li>
          <li><strong>Summarize</strong> – Highlight why your argument matters and how it challenges the opponent's position.</li>
        </ol>
        <p>This structure helps maintain clarity, persuade the audience, and leave a strong impact.</p>

        <h3>Rebuttal</h3>
        <ul>
          <li>• Rebuttal is disagreeing with the opposition's points</li>
          <li>• Everyone does rebuttal except First Affirmative</li>
          <li>• During the debate you need to listen very carefully to the opposition so that you can state the point that the opposition has made and explain why it is wrong</li>
        </ul>

        <p>There are four main techniques of rebuttal:</p>

        <h4>1. THERE IS NO EVIDENCE</h4>
        <p>The opposition has said something with no evidence to support it.</p>

        <h4>2. THERE IS NO GOOD EVIDENCE</h4>
        <p>There are three main ways to attack the other person's evidence:</p>
        <ul>
          <li>(a) Facts are wrong</li>
          <li>(b) Unreliable evidence</li>
          <li>(c) Evidence not useful or relevant</li>
        </ul>

        <h5>2(a) Facts are wrong</h5>
        <p>The opposition has made a claim where they have used incorrect information or facts.</p>

        <h5>2(b) Unreliable evidence</h5>
        <p>The opposition has used evidence that is unreliable.</p>

        <h5>2(c) The evidence is not useful or relevant</h5>
        <p>The opposition has used evidence that is not useful or relevant and has no real connection to the topic.</p>

        <h4>3. THE REASONS AREN'T LOGICAL</h4>
        <p>The opposition has said something that doesn't make sense or uses a fallacy.</p>

        <h4>4. IT'S TRUE BUT...</h4>
        <p>The opposition has said something that is true, but there are other factors which need to be considered.</p>
      `,
      quiz: {
        question: "What is the purpose of a rebuttal in debate?",
        options: [
          { text: "To agree politely with your opponent", correct: false },
          { text: "To disagree by refuting their points with logic or evidence", correct: true },
          { text: "To summarize your own arguments", correct: false }
        ]
      }
    },
    6: {
      title: "Module 6: Practice & Performance",
      description: `
        <h3>Debate Speech Format</h3>
        <ol>
          <li><strong>Opening Statements</strong><br>
            Affirming Side: 5 minutes<br>
            Opposing Side: 5 minutes
          </li>
          <li><strong>Rebuttals (No New Arguments)</strong><br>
            Affirming Side: 3 minutes<br>
            Opposing Side: 3 minutes
          </li>
          <li><strong>Cross-Examination</strong><br>
            Affirming Side to Opposing Side: 3 minutes<br>
            Opposing Side to Affirming Side: 3 minutes
          </li>
          <li><strong>Second Rebuttals (if applicable)</strong><br>
            Affirming Side: 2 minutes<br>
            Opposing Side: 2 minutes
          </li>
          <li><strong>Closing Statements</strong><br>
            Affirming Side: 4 minutes<br>
            Opposing Side: 4 minutes
          </li>
        </ol>
        <p><strong>Question and Answer Session</strong> (entire debate)</p>

        <h3>What is a Hook?</h3>
        <p>A hook is a statement or question used at the beginning of a speech or piece of writing to catch the interest of the audience.</p>

        <h3>Types of Hooks</h3>
        <ol>
          <li><strong>The fact/statistic hook</strong><br>
            These are especially great if they draw from current events.<br>
            Example: "On March 16, a series of mass shootings targeting several massage parlors in Atlanta triggered warnings across of anti-Asian sentiment and a call to action to..."
          </li>
          <li><strong>Strong statement/declaration hook</strong><br>
            Lead with a strong declaration.<br>
            Example: "Homeless people in major cities are currently being treated as objects – or perhaps worse, trash. Major cities across America must enact policy to immediately address the issue of homelessness..."
          </li>
          <li><strong>Interesting/Rhetorical question hook</strong><br>
            Try to make the audience think.<br>
            Example: "Why are Americans becoming conditioned to accepting that school shootings are the new normal?"
          </li>
          <li><strong>The story hook</strong><br>
            Tell a short story!<br>
            Example: "When I was young, my mother always told me one thing: if you have nothing nice to say, say nothing at all. Hate speech across college campuses in America is..."
          </li>
          <li><strong>The quotation hook</strong><br>
            These do become quite cliché, but may work.<br>
            Example: Martin Luther King once said that "Injustice anywhere is a threat to justice everywhere."
          </li>
        </ol>

        <h3>Opening Statement</h3>
        <ul>
          <li>1. I strongly believe that...</li>
          <li>2. The topic we are discussing today is...</li>
          <li>3. I would like to argue that...</li>
          <li>4. It is my firm belief that...</li>
          <li>5. We stand in favor of...</li>
        </ul>

        <h3>Argument Sequencing</h3>
        <p>To order a sequence of arguments:</p>
        <p><em>firstly - secondly - finally<br>
        to begin/start with - next - lastly<br>
        first of all and also let me begin by pointing out<br>
        in addition to this furthermore / moreover / besides<br>
        Essentially, the problem is<br>
        to top it all<br>
        basically</em></p>

        <h3>Closing Statements</h3>
        <ol>
          <li><strong>Brief summary of your main points</strong><br>
            "Throughout this debate, I have talked about the benefits of target language input on English language learners."
          </li>
          <li><strong>Show how you refuted the other sides points</strong><br>
            "The benefits of learning the language faster outweigh the downsides of overwhelming students. English students will improve their language faster and if they really want to learn English, they will not be unmotivated and just give up."
          </li>
          <li><strong>Recommend a course of action</strong> – motivate your audience to respond to your ideas<br>
            "Now it's time to put these ideas in action. Let's make it a rule that all English teachers must use only English in their language classrooms. Students will be speaking fluently in no time!"
          </li>
        </ol>

        <h3>Conclusion</h3>
        <p>The conclusion is your final chance to leave a lasting impression. Use powerful tactics like a call to action, striking quote, fact, rhetorical question, or a compelling prediction or recommendation. A memorable phrase or slogan can also capture your message's essence. Choose a tactic that's relevant and impactful—avoid clichés or repetition that weaken your close.</p>
      `,
      quiz: {
        question: "Which of the following is NOT a recommended hook in a debate opening?",
        options: [
          { text: "A strong statistic", correct: false },
          { text: "A friendly insult", correct: true },
          { text: "A rhetorical question", correct: false }
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
        <h2>Introduction to Debate</h2> 
      
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