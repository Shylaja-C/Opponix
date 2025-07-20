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
  title: "Module 1: Responsibilities of a Debate Judge",
  description: `
    <h3>Module 1</h3>

    <h4>Responsibilities of a debate judge:</h4>
    <ul>
      <li>In the context of debate, a judge is an individual responsible for evaluating the arguments presented by each side and determining the winner of the debate round based on criteria like clarity, persuasion, and adherence to the rules.</li>
      <li>Judges play a crucial role in ensuring fairness and objectivity in the competitive debate setting, influencing how debaters approach their arguments and strategies.</li>
      <li>Their decisions are often guided by the rules and formats established for specific debate styles.</li>
    </ul>

    <p>The judge serves three main purposes during the debate round:</p>
    <ol>
      <li><strong>Tournament official:</strong> The judge keeps time, sees that all tournament rules are followed, and helps keep the tournament on time and the experience positive for the competitors and the host school.</li>
      <li><strong>Source of constructive feedback for the competitors:</strong> The judge should comment of areas of strength and areas for improvement for the students.</li>
      <li><strong>The person who determines the winner of each debate.</strong></li>
    </ol>

    <h4>The role of Judges in debates:</h4>
    <ul>
      <li>Judges in debates may come from various backgrounds, including experienced debaters, coaches, or educators, which can influence their judging style and criteria.</li>
      <li>Judges assess not only the content of arguments but also factors like delivery, engagement with the opponent's points, and overall persuasive effectiveness.</li>
      <li>Each debate format may have specific judging criteria that emphasize different aspects of performance, such as teamwork in public forum debates or individual argumentation in policy debates.</li>
      <li>Judges typically provide oral or written feedback after rounds, helping debaters improve their skills and understanding of effective argumentation.</li>
      <li>The judge's decision is final in a debate round, which underscores the importance of presenting well-structured and compelling arguments to sway their evaluation.</li>
    </ul>

    <h4>The Guiding Ethics of Debate Adjudication</h4>
    <p>Three principles should guide the adjudicators’ appraisal of a debate:</p>
    <ol>
      <li>An adjudicator should be tabula rasa (a blank slate) in her orientation toward the proposition.</li>
      <li>An adjudicator should operate under the principle of non-intervention.</li>
      <li>An adjudicator is first and foremost an educator helping others improve their skills.</li>
    </ol>

    <h5>1. Tabula Rasa</h5>
    <ul>
      <li>The adjudicator must set aside preferences and embrace the artifice of impartiality.</li>
      <li>Adjudicators must avoid deciding the round based on what they believed before the round occurred rather than what occurred in the round.</li>
      <li>A tabula rasa orientation is an ideal toward which an adjudicator should strive, but such impartiality will likely never be achieved.</li>
    </ul>

    <h5>2. Non-Intervention</h5>
    <ul>
      <li>Non-intervention means one simple thing: adjudicators should let the debaters do the debating.</li>
      <li>Adjudicators should not complete arguments, connect points, or fabricate strategy.</li>
      <li>An adjudicator must never render the debater’s efforts irrelevant.</li>
      <li>Adjudicators should consider all arguments made to avoid inserting themselves into the round.</li>
    </ul>

    <h5>3. Education</h5>
    <ul>
      <li>Debating is one of the most intellectually stimulating activities an individual may undertake.</li>
      <li>Skill development in persuasive communication and critical thinking will enhance a student’s academic experience.</li>
      <li>Decisions should honor the energy debaters expend and offer constructive criticism to help improve their skills.</li>
    </ul>
  `,
  quiz: {
    question: "What are the three main responsibilities of a debate judge?",
    options: [
      { text: "Judging, arguing, and moderating", correct: false },
      { text: "Tournament official, feedback provider, winner determiner", correct: true },
      { text: "Writing topics, debating, and timekeeping", correct: false }
    ]
  }
},


2: {
  title: "Module 2: Marking Criteria",
  description: `
    <h3>Module 2</h3>

    <h4>Marking Criteria</h4>
    <ul>
      <li> A debate is judged on three criteria:</li>
      <ul>
        <li>Style (40%)</li>
        <li>Content (40%)</li>
        <li>Strategy (20%)</li>
      </ul>
      <li> Marks for reply/summary speeches are halved</li>
      <li> Half marks are the lowest fraction allowed</li>
    </ul>

    <h4>Style</h4>
    <ul>
      <li> Style is about how well a speaker communicates.</li>
      <li> That is, leaving aside content and strategy, how engaging and persuasive is the speaker?</li>
      <li> There is no one ideal style. Different speakers will achieve effective style in different ways.</li>
      <li> Variety is generally an important part of effective style.</li>
      <li> Two types of style:</li>
      <ul>
        <li>Visual style (hand gestures, eye contact, movement, etc.)</li>
        <li>Verbal style (pace, intonation, volume, etc.)</li>
      </ul>
    </ul>

    <h4>Content</h4>
    <ul>
      <li> Content concerns the strength of a speaker’s arguments.</li>
      <li> This is not the same as whether the adjudicator personally agrees with the argument.</li>
      <li> Content covers both a speaker’s own arguments and rebuttal of the opposition’s arguments.</li>
      <li> A speaker with strong content will present arguments and rebuttal that are:</li>
      <ul>
        <li>Logical,</li>
        <li>Well explained,</li>
        <li>Supported by examples, statistics, etc., where relevant.</li>
      </ul>
    </ul>

    <h4>Strategy</h4>
    <ul>
      <li> Identification of important issues in the debate</li>
      <li> Prioritization of issues in the debate</li>
      <li> Can/May be indicated by the effective use of time</li>
      <li> We can think of strategy in terms of ‘role fulfillment’: a speaker has good strategy if he or she has performed his or her roles well — as a speaker in the debate AND as a member of a team.</li>
    </ul>

    <h4>Scoring the Debate</h4>
    <ul>
      <li> The scoring range is 69 (lowest) – 81 (highest)</li>
      <li> An average speech is 75</li>
      <li> At the end of the debate, the margin of the team total scores should reflect the closeness of the debate</li>
      <ul>
        <li>Close decision: 0.5 - 3 points</li>
        <li>Clear decision: 4 – 7 points</li>
        <li>Very clear decision: 8 – 12 points</li>
      </ul>
      <li> Priority should be given: Decision > Margin > Individual Scores</li>
    </ul>

    <h4>Scoring Range Explained</h4>
    <ul>
      <li><strong> 69: Improvement needed</strong><br>Lowest possible speaker score. Spoke for less than two minutes. Non-existent.</li>

      <li><strong> 70 – 71: Pass</strong><br>Incredibly weak speech, no structure, little relevance, didn’t understand WSDC rules, fundamentally weak argument, and glaring problems in style, structure and content. Very rare.</li>

      <li><strong> 72 – 73: Competent</strong><br>Attempts to engage and refute. May have partial analysis but none of it is particularly strong, may have significant style issues, some good ideas but generally outweighed by weaknesses in the speech.</li>

      <li><strong> 74: Satisfactory</strong><br>Slightly below average. Speaks to time, moments of effective style and argumentation, shows some understanding of the issues but unable to effectively persuade. With a few minor adjustments, this speaker would have been fine.</li>

      <li><strong> 75: Good</strong><br>Average speech at a tournament. Speaker role fulfilled, some persuasive arguments, has a clear grasp of strategy, good style with some flaws, which are overcome by the strengths.</li>

      <li><strong> 76: Very Good</strong><br>A really solid speech. Good case development, good rebuttals. May still have some loose ends, some arguments or rebuttals could have been better fleshed out to be made more compelling/persuasive.</li>

      <li><strong> 77 – 78: Extremely Good</strong><br>Really high quality speech. You would expect this speaker to be in the knockout rounds. Excellent strategic calls with regard to issues in the debate. Logic is rigorous, clear and well explained alongside detailed and rich content.</li>

      <li><strong> 79 – 80: Excellent</strong><br>Crystal clear conclusions can be drawn. All elements are pulled together seamlessly. Consistently brilliant from start to finish. Likely to be best speaker at the tournament. One of the best speeches you’ve ever heard, or will ever hear. Very rare.</li>

      <li><strong> 81: Exceptional</strong><br>The best public speech you’ve heard in your life. Non-existent.</li>
    </ul>
  `,
  quiz: {
    question: "What are the three main marking criteria in debate scoring?",
    options: [
      { text: "Style, Content, Strategy", correct: true },
      { text: "Logic, Voice, Dress Code", correct: false },
      { text: "Clarity, Humor, Teamwork", correct: false }
    ]
  }
},

3: {
  title: "Module 3: Flowing Techniques",
  description: `
    <h3>Module 3</h3>

    <h4>Flowing techniques</h4>

    <h5>What Is Flowing?</h5>
    <ul>
      <li>Flowing is a method of taking notes during the round.</li>
    </ul>

    <h5>When should I flow?</h5>
    <ul>
      <li>1)Any time you are not speaking!</li>
      <ul>
        <li>This includes your opponent’s speeches, your partner’s speeches, and your partner’s crossfires.</li>
      </ul>
    </ul>

    <h5>Why is flowing helpful?</h5>
    <ul>
      <li>Flowing ensures that you are listening carefully to your opponent’s speeches.</li>
      <li>Flowing helps you keep track of all the arguments.</li>
      <li>Flowing helps you know what to extend in later speeches of the debate.</li>
    </ul>

    <h4>Advanced Flowing techniques</h4>
    <ul>
      <li>1)Use a different sheet of paper for the pro and con side.</li>
      <li>2)Create four vertical columns.</li>
      <ul>
        <li>Each column represents a different speech.</li>
        <li>Line up responses to an argument so that you easily know what to extend.</li>
      </ul>
      <li>3)Leave extra space.</li>
      <ul>
        <li>Leave room for framework at the top of the constructive speech.</li>
        <li>Leave space between each contention because there might be several responses to one contention.</li>
      </ul>
      <li>4)Advanced Flowing</li>
      <ul>
        <li>Pre-flow your own constructive speech before the round.</li>
        <ul>
          <li>a)This allows the second speaker to focus on thinking of responses to your opponent’s constructive speech while the first speaker reads the constructive speech.</li>
        </ul>
        <li>Use symbols and abbreviations to write down all the content in a quicker way.</li>
        <li>Flow each side in a different color to create more visual separation.</li>
      </ul>
    </ul>

    <h4>Effective note-taking</h4>
    <ul>
      <li>Abbreviate, abbreviate, abbreviate. Then make sure you remember what your abbreviations were.</li>
      <li>Develop symbols that you and your partner can read.</li>
      <li>Shorten words to 1-2 syllables.</li>
      <li>Eliminate vowels.</li>
      <li>Use different colored pens to distinguish between your and your opponents arguments.</li>
      <li>Label any major points with stars or circles to make sure you don't miss them when you are speaking.</li>
      <li>Always write on only one side of the paper to avoid forgetting arguments on the back of the page.</li>
      <li>Use lines and arrows to connect arguments.</li>
    </ul>

    <h4>Flowing: A visual guide to argument tracking</h4>
    <ul>
      <li>Flowing enhances a debater's ability to track arguments by providing a clear visual representation of the debate's structure.</li>
      <li>With a flow sheet, debaters can see which arguments have been introduced, responded to, or dropped at any given time.</li>
      <li>This allows them to focus on key points during their speeches and make informed strategic decisions based on what has been established in previous speeches.</li>
    </ul>

    <h4>Enhancing Rebuttal Effectiveness through Flowing</h4>
    <ul>
      <li>Flowing plays a crucial role in preparing for rebuttals as it allows debaters to see all sides of the arguments laid out before them.</li>
      <li>By analyzing their flow sheets, debaters can prioritize which points need addressing and decide how best to counter their opponents’ claims.</li>
      <li>The clarity gained from effective flowing enables debaters to adapt their strategies dynamically, ensuring they respond effectively to the most impactful arguments while also reinforcing their case.</li>
    </ul>
  `,
  quiz: {
    question: "What is the main purpose of flowing in a debate?",
    options: [
      { text: "To keep time for the debate", correct: false },
      { text: "To track and respond to arguments effectively", correct: true },
      { text: "To avoid taking turns speaking", correct: false }
    ]
  }
},

4: {
  title: "Module 4: Comparative and Clash",
  description: `
    <h3>Module 4</h3>

    <h4>What is Comparative?</h4>
    <ul>
      <li>Comparative is a debate word that means comparing and weighing arguments in a debate. It is a strategy that debaters will use to show how they have won the debate.</li>
      <li>Similar to clash, comparative is a way to take down your opponents arguments or case stance, however, you can do this without actually proving their case “wrong”. You compare the “worlds” that each side represents, and then you prove why yours is better.</li>
    </ul>

    <h4>Steps for a Basic Comparative</h4>
    <ol>
      <li>Write out a fair representation of both sides. This can be with either:
        <ul>
          <li>Two opposing arguments</li>
          <li>Your two opposing cases/case stances</li>
        </ul>
      </li>
      <li>Deal with your opponents best case scenario</li>
      <li>Explain the impacts of each side</li>
      <li>Give your judges a choice</li>
    </ol>

    <h4>What is the ‘point of clash’?</h4>
    <ul>
      <li>The ‘point of clash’ is the essence of the debate. It is where the fundamental disagreement between the two sides lies. All the other disagreements simply derive from that first disagreement.</li>
      <li>You could think of it as the hinge of a debate. As with the hinge of a door or a window, it is the part that all the other parts are attached to. It is also the part that stays still to allow the other parts to move.</li>
    </ul>

    <h4>Comparing arguments at the point of clash</h4>
    <ul>
      <li>Debating is a competitive activity. Two teams clash against each other, and one comes out the winner.</li>
      <li>But it isn’t only the teams that are clashing. It’s also the ideas. That’s where ‘the point of clash’ comes from.</li>
    </ul>

    <h4>Debaters use several weighing mechanisms:</h4>
    <ol>
      <li><strong>Magnitude:</strong><br>
        Magnitude is about how big or important an impact is. It asks the question: “How much does this matter?” For example, saving a life has a greater magnitude than saving money.
      </li>
      <li><strong>Scope:</strong><br>
        Scope refers to how many people or things are affected. It answers the question: “How wide-reaching is this impact?” A global effect has a larger scope than a local one.
      </li>
      <li><strong>Reversibility:</strong><br>
        Reversibility considers whether an effect can be undone. It asks: “Can we go back to how things were before?” Death is irreversible, while many economic changes can be reversed.
      </li>
      <li><strong>Time-Frame:</strong><br>
        Time-frame looks at when an impact will happen and how long it will last. It answers: “When will this occur and for how long?” Some effects are immediate but short-lived, others may take time to appear but last for generations.
      </li>
      <li><strong>Probability:</strong><br>
        Probability assesses how likely something is to happen. It asks: “What are the chances this will actually occur?” A highly probable small impact might outweigh a less probable large impact.
      </li>
    </ol>

    <h4>Application of the Weighing Mechanisms</h4>

    <h5>1. Magnitude</h5>
    <ul>
      <li>●Pro Argument (Support Nuclear Sharing):<br>
      France extending its nuclear deterrent to the EU lowers the likelihood of a large‑scale conventional or nuclear attack on any member‑state.</li>
      <li>●Con Argument (Oppose Nuclear Sharing):<br>
      Expanding access to nuclear weapons raises the risk of accidental launch, escalation, or proliferation, threatening catastrophic humanitarian and environmental harm.</li>
    </ul>

    <h5>2. Scope</h5>
    <ul>
      <li>Pro Argument:<br>
      A shared French deterrent protects every EU member, strengthens NATO’s eastern flank, and contributes to global non‑proliferation by discouraging individual states from seeking their own arsenals.</li>
      <li>Con Argument:<br>
      Nuclear sharing implicates civilian populations across Europe, neighboring regions, and even distant countries that could suffer fallout or economic shocks from heightened tensions.</li>
    </ul>

    <h5>3. Reversibility</h5>
    <ul>
      <li>Pro Argument:<br>
      Legal frameworks for nuclear sharing (basing rights, dual‑key arrangements, deployment levels) can be modified or terminated if found counterproductive.</li>
      <li>Con Argument:<br>
      A nuclear detonation, radiation release, or the diffusion of weapons expertise cannot be undone; humanitarian and ecological damage is permanent.</li>
    </ul>

    <h5>4. Time‑Frame</h5>
    <ul>
      <li>Pro Argument:<br>
      Deterrent benefits begin as soon as the sharing mechanism is operational and persist as long as the umbrella remains credible.</li>
      <li>Con Argument:<br>
      Crisis instability—heightened alert levels, arms races, or pre‑delegation of launch authority—can materialize immediately and endure for generations.</li>
    </ul>

    <h5>5. Probability</h5>
    <ul>
      <li>Pro Argument:<br>
      Historical evidence (e.g., NATO’s Cold‑War nuclear posture) suggests that robust deterrence makes actual nuclear use highly improbable while significantly lowering the likelihood of major conventional war.</li>
      <li>Con Argument:<br>
      Empirical studies of complex systems and near‑miss incidents (e.g., Cuban Missile Crisis, 1983 Able Archer) show that the probability of accidental or miscalculated nuclear use, though low, is non‑zero and accumulates over time.</li>
    </ul>

    <h4>BP vs AP Debate Format:</h4>

    <h5>BP Debate Format:</h5>
    <ul>
      <li>In British Parliamentary, four teams (OG, OO, CG, CO) with two speakers each compete not only across the aisle but also against their own side.</li>
    </ul>

    <h5>Closing Opposition Whip (BP)</h5>
    <ul>
      <li>Second speaker of Closing Opposition. Responds to all Government teams and sometimes OO.</li>
      <li>Must justify why their team's extension adds more value than Opening Opposition.</li>
      <li>No new arguments, but fresh perspectives or framing of existing ideas are essential to win.</li>
    </ul>

    <h5>Reply Speech (BP)</h5>
    <ul>
      <li>Given by the 1st or 2nd speaker of each team.</li>
      <li>It’s a biased, mini-judgment on why your team deserves to win the entire debate.</li>
      <li>No new arguments, but must cleverly summarize contributions and position your team as uniquely impactful.</li>
    </ul>

    <h5>AP Debate Format:</h5>
    <ul>
      <li>In Asian Parliamentary, two teams (Government and Opposition) with three speakers each debate a motion.</li>
    </ul>

    <h5>Opposition Whip (AP)</h5>
    <ul>
      <li>The final speaker for the Opposition.</li>
      <li>Rebuts Prime Minister and Deputy Prime Minister, defends LO and DLO, and reinforces team arguments.</li>
      <li>No new arguments allowed, but deeper analysis and stronger framing are expected to wrap up the Opposition case effectively.</li>
    </ul>

    <h5>Reply Speech (AP)</h5>
    <ul>
      <li>Delivered by 1st or 2nd speaker from either team.</li>
      <li>Acts as a biased summary of the debate — highlighting your side’s victories and minimizing losses.</li>
      <li>No new arguments, but new examples are allowed to make the case feel fresh and persuasive.</li>
    </ul>
  `,
  quiz: {
    question: "Which weighing mechanism assesses how likely an impact is to happen?",
    options: [
      { text: "Magnitude", correct: false },
      { text: "Scope", correct: false },
      { text: "Probability", correct: true }
    ]
  }
},

5: {
  title: "Module 5: Constructive Feedback and Bias",
  description: `
    <h3>Module 5</h3>

    <h4>What is constructive feedback?</h4>
    <ul>
      <li>Constructive feedback is clear, specific, and balanced communication that provides actionable insights to individuals regarding their performance or behavior.</li>
      <li>It aims to help individuals identify areas for improvement, develop their skills, and foster positive growth.</li>
      <li>Unlike criticism, constructive feedback focuses on solutions and encouragement rather than solely pointing out shortcomings.</li>
    </ul>

    <h4>Purpose of constructive feedback:</h4>
    <ul>
      <li>The main purpose of constructive feedback is to guide individuals toward improvement by highlighting areas where they can grow and provide actionable suggestions.</li>
      <li>It focuses on helping people improve their performance or behavior in a supportive manner.</li>
      <li>Instead of pointing out flaws, constructive feedback encourages development, boosts confidence, and fosters a culture of continuous learning and improvement.</li>
      <li>The ultimate goal of feedback is to promote progress while maintaining trust and respect.</li>
    </ul>

    <h4>How to give feedback:</h4>
    <ul>
      <li>The manner of feedback delivery is also important for its effectiveness.</li>
      <li>Feedback should be delivered in a dialogic, interactive, and collaborative way, where the feedback giver and receiver exchange views, questions, and feedback.</li>
      <li>Feedback should also be delivered in a respectful, empathetic, and supportive way, where the feedback giver acknowledges the efforts and feelings of the debater, and expresses appreciation and encouragement.</li>
      <li>Feedback should also be delivered in a flexible, adaptable, and responsive way, where the feedback giver adjusts the tone, language, and pace of the feedback according to the debater's level, personality, and mood.</li>
    </ul>

    <h4>What are the benefits of constructive feedback?</h4>
    <ul>
      <li>Improves performance by offering actionable insights for growth.</li>
      <li>Builds confidence through balanced, supportive feedback.</li>
      <li>Encourages open communication and trust between individuals.</li>
      <li>Fosters continuous learning by promoting self-awareness and development.</li>
      <li>Strengthens relationships through positive, solution-oriented dialogue.</li>
      <li>Motivates change by focusing on improvement rather than fault-finding.</li>
    </ul>

    <h4>Key elements of constructive feedback:</h4>
    <ol>
      <li><strong>Specificity:</strong><br>
        Being specific is an important part of providing constructive feedback. Instead of generic and vague comments, be specific and focus on the behavior or action you are expecting from the individual.
      </li>
      <li><strong>Timeliness:</strong><br>
        Giving timely feedback is more effective because the incident will be fresh, and further confusion can be avoided. Waiting too long to provide feedback can reduce the impact of the feedback.
      </li>
      <li><strong>Positivity:</strong><br>
        -While giving feedback, start by acknowledging what the recipient did well. It shows that you value their efforts, and it sets a positive tone for the conversation.<br>
        -Incorporating positivity in feedback ensures a positive work environment, and your team feels encouraged to learn and grow.
      </li>
      <li><strong>Actionable suggestions:</strong><br>
        Instead of pointing out mistakes, offer clear, actionable suggestions on how the team member can improve. Providing practical advice on how to improve helps your team members understand the exact path they need to follow and shows that you care about their growth.
      </li>
      <li><strong>Focusing on behavior, not the person:</strong><br>
        Focusing on the person often turns the feedback into resentments and the whole point of the feedback is diluted. Address the action rather than making personal judgments or character assessments.
      </li>
    </ol>

    <h4>What is bias?</h4>
    <ul>
      <li>Bias is a tendency to favor one perspective, idea, or group over another, often leading to unfair judgments and conclusions.</li>
      <li>This can manifest in the selection of facts, the framing of arguments, and the interpretation of information.</li>
      <li>Bias can distort the truth and impact how information is presented and perceived, making it crucial to recognize when evaluating sources.</li>
    </ul>

    <h4>Types of bias in debate:</h4>
    <ol>
      <li><strong>Confirmation Bias</strong><br>
        Favoring arguments that support your existing beliefs.<br>
        Avoid by: Actively considering opposing viewpoints.
      </li>
      <li><strong>Source Bias</strong><br>
        -Trusting a source based on familiarity or reputation rather than reliability.<br>
        -Avoid by: Cross-verifying sources and checking for neutrality.
      </li>
      <li><strong>Cultural or Regional Bias</strong><br>
        -Assuming a certain value or idea is universal.<br>
        -Avoid by: Acknowledging diverse perspectives.
      </li>
      <li><strong>Gender, Racial, or Socioeconomic Bias</strong><br>
        -Assuming roles or traits based on identity.<br>
        -Avoid by: Using inclusive language and examples.
      </li>
      <li><strong>Framing Bias</strong><br>
        -Presenting issues in a way that unfairly influences perception.<br>
        -Avoid by: Stating facts clearly before adding interpretation.
      </li>
    </ol>

    <h4>How to Avoid Bias in Debate</h4>
    <ol>
      <li><strong>Research from Diverse Sources</strong><br>
        -Use international, local, academic, and independent sources.<br>
        -Compare multiple viewpoints to uncover hidden assumptions.
      </li>
      <li><strong>Use Neutral Language</strong><br>
        -Avoid emotionally charged or leading words.<br>
        -Focus on logic and evidence, not persuasion through manipulation.
      </li>
      <li><strong>Fact-check All Claims</strong><br>
        -Verify statistics and quotes.<br>
        -Use reputable fact-checking tools like Snopes.
      </li>
      <li><strong>Acknowledge Limitations</strong><br>
        -If a statistic is from a small sample or specific context, say so.<br>
        -This builds trust and intellectual honesty.
      </li>
      <li><strong>Address Opposing Views Fairly</strong><br>
        -Represent counterarguments accurately.<br>
        -Don’t build strawman versions of the opposition’s case.
      </li>
      <li><strong>Be Aware of Your Own Biases</strong><br>
        -Reflect on your personal views and why you hold them.<br>
        -Ask yourself: “Would I still believe this if I were on the opposing side?”
      </li>
    </ol>
  `,
  quiz: {
    question: "What is one key difference between constructive feedback and criticism?",
    options: [
      { text: "Criticism always includes statistics", correct: false },
      { text: "Constructive feedback focuses on improvement and growth", correct: true },
      { text: "Constructive feedback is always anonymous", correct: false }
    ]
  }
},

6: {
  title: "Module 6: Panel Judging, Consensus & Resolution",
  description: `
    <h3>Module 6</h3>

    <h4>Panel Judging in Debate:</h4>
    <ol>
      <li>Discuss in Private: Find a place where co-judges cannot be overheard. This should be your first communication with them.</li>
      <li>Compare Notes First: Go through each speaker in turn, discussing their skill sets (content, style, structure, etc.) before talking about scores.</li>
      <li>Don't Rush to Numbers: Discuss all aspects of performance first. If you agree on scores, proceed. If not, continue the discussion.</li>
      <li>Discuss, Don’t Average: Don’t simply average differing scores. Re-examine notes—someone may have missed a key strength or mistake.</li>
      <li>Use Disagreement Constructively: That’s the benefit of panel judging—balancing blind spots through discussion.</li>
      <li>Split as Last Resort: If agreement can’t be reached after full discussion, split the difference as a final option.</li>
      <li>Be Efficient but Fair: Don’t rush the process, but keep discussions focused and avoid repeating the same points.</li>
      <li>Respect Co-Judges: Be courteous and open to other views, but challenge constructively if you disagree.</li>
    </ol>

    <h4>What is meant by consensus-building?</h4>
    <ul>
      <li>Consensus-building is a collaborative decision-making process where a group works together to find a solution that everyone can support.</li>
      <li>Instead of relying on majority rule, it focuses on open dialogue, compromise, and mutual understanding to ensure that all stakeholders feel heard and valued.</li>
      <li>The goal is to reach an agreement that balances different perspectives and benefits the entire group.</li>
    </ul>

    <h4>What are three techniques for consensus-building?</h4>
    <ol>
      <li><strong>Single-Text Document Method</strong> – A neutral facilitator drafts a shared document that stakeholders review and revise together, ensuring a structured and inclusive decision-making process.</li>
      <li><strong>Fist-to-Five Consensus</strong> – Participants show their level of agreement using their fingers (a fist means complete disagreement, five fingers mean full agreement), allowing for quick feedback and discussion on concerns.</li>
      <li><strong>Brainstorming & Multi-Voting</strong> – Encouraging open idea-sharing followed by prioritizing the most viable options through a structured voting system helps refine decisions collaboratively.</li>
    </ol>

    <h4>What is chairing a debate?</h4>
    <p>Chairing a debate is an important role - the chair announces the debaters and calls on them to deliver their speeches. The chair also times the speeches.</p>

    <h4>Chair of panel:</h4>
    <ul>
      <li>Assumes the role of facilitator, mediator and leader of panel.</li>
      <li>Have NOT failed to fulfill their roles if there is no complete consensus decision or if they find themselves in the minority of a majority decision.</li>
      <li>Should encourage panel members to offer their opinion or observations of the debate.</li>
      <li>Have to respect the views of all members of the panel.</li>
      <li>Should organise the thread of discussion, in order to cover all concerns of panel members as much as possible.</li>
      <li>Use discretion when ending a discussion on a particular issue or the debate as a whole, and resort to a vote.</li>
    </ul>

    <h4>What Is a Panel Discussion?</h4>
    <ul>
      <li>A panel moderator facilitates a panel discussion by talking about a specific topic to the panelists and audience.</li>
      <li>Panelists usually comprise 4-5 industry experts who can share trends, insights, and ideas that can answer questions from the audience.</li>
      <li>A panel talk's ideal length is 45 minutes to one hour.</li>
    </ul>

    <h4>Panel Decisions:</h4>
    <ul>
      <li>Panel Decisions are final</li>
      <li>Panels have to place the four teams in the debate round, as 1st, 2nd, 3rd, and 4th. 1st ranked team has won the round, and the 4th ranked team has finished last in the debate round.</li>
      <li>No two teams can be placed in the same rank</li>
      <li>The total team scores must reflect the rankings of the team, and no two teams should have the same total team scores.</li>
      <li>A Consensus decision is when all members of the panel agree on the rank of a team.</li>
      <li>A complete consensus decision is when every single team rank has been decided through a series of consensus decisions amongst the panel members. The panel therefore had complete unanimity over all the team ranking decisions.</li>
      <li>A majority decision is when a majority of the panel members agree on the rank of a team.</li>
      <li>A complete majority decision is when every single team rank has been decided only by majority decisions.</li>
      <li>A partial Consensus-Majority decision is when the panel is in consensus over some rank/s and made majority decisions over the other rank/s.</li>
      <li>There can be either a complete consensus decision, a complete majority decision or a partial Consensus-Majority decision.</li>
      <li>A panel should discuss all pertinent issues of the debate adequately, and deal with all concerns of panel members.</li>
      <li>Chairs have the discretion to end discussions on particular issues or on the whole debate, if they find the discussion to cease being constructive or not progress.</li>
    </ul>

    <h4>Disagreement in debate:</h4>
    <ol>
      <li><strong>1. Anticipating Opposing Claims Helps You Prepare:</strong><br>As you prepare for your debate, consider anticipating opposing claims. Researching different perspectives can help you counter your opponent's arguments.</li>
      <li><strong>2. Understanding Common Ground:</strong><br>It can also help you understand where you and your opponent agree. For instance, imagine that you're in a debate over the best attendance policy. You discover that you and your opponent have similar goals, such as increased attendance and productivity.</li>
      <li><strong>3. Nature of Disagreement – Methods vs Goals:</strong><br>The disagreement is the best way to achieve this goal, leading you and your opponent to advocate for different policies.</li>
      <li><strong>4. Strengthen Your Argument Through Comparison:</strong><br>During the debate, explain how your policy would be more effective than theirs for addressing increased attendance and productivity.</li>
      <li><strong>5. Address Broader Perspectives:</strong><br>Another way to anticipate opposing claims is to look at other claims besides your opponent's beliefs.</li>
      <li><strong>6. Consider the Audience’s Views:</strong><br>Your audience may support a perspective that neither you nor your opponent does. By addressing this argument, you can explain why your solution is the best of all available options.</li>
    </ol>

    <h4>Resolution:</h4>
    <ul>
      <li>A resolution is a statement or proposition that presents an issue to be debated.</li>
      <li>It serves as the central focus for arguments and counterarguments, guiding the discussion between opposing sides.</li>
      <li>A well-crafted resolution is essential because it clearly defines the scope of the debate and helps debaters understand their roles in supporting or opposing the statement.</li>
    </ul>

    <h4>The Importance of Clarity in Debate Resolutions:</h4>
    <ol>
      <li>Clarity in crafting an effective resolution is crucial as it determines how easily debaters can understand and engage with the topic.</li>
      <li>An ambiguous resolution can lead to confusion and misinterpretation, which may hinder meaningful debate.</li>
      <li>When both sides have a clear understanding of what is being debated, they can prepare targeted arguments that directly address the resolution, resulting in a more productive exchange of ideas and ultimately making for a more compelling debate.</li>
    </ol>

    <h4>Decision justifications:</h4>
    <ul>
      <li>Decision justifications are the reasons provided by a judge or adjudicator for why one side's arguments were more persuasive than the other's, leading to the decision.</li>
      <li>These justifications should be clear, concise, and address the key issues and arguments presented during the debate, explaining why they led to the chosen outcome.</li>
    </ul>

    <h5>1. Clarity and Specificity:</h5>
    <ul>
      <li>The judge should clearly state which arguments were most influential in their decision.</li>
      <li>They should avoid vague or ambiguous language and instead focus on specific arguments and their impact.</li>
    </ul>

    <h5>2. Addressing Key Issues and Arguments:</h5>
    <ul>
      <li>Judges should explain how the arguments on each side addressed the central issues of the debate.</li>
      <li>They should highlight the key points of clash between the opposing sides and explain why one side's arguments were more convincing.</li>
    </ul>

    <h5>3. Reasoning and Evidence:</h5>
    <ul>
      <li>The justification should demonstrate the judge's understanding of the evidence presented and the reasoning used by each team.</li>
      <li>They should explain how the evidence supported or refuted the arguments, and how the logical connections were made.</li>
    </ul>

    <h5>4. Assessing Argumentation Skills:</h5>
    <ul>
      <li>Judges should comment on the debaters' ability to construct logical arguments, present them effectively, and respond to opposing arguments.</li>
      <li>They should evaluate the use of evidence, examples, and rhetorical devices.</li>
    </ul>

    <h5>5. Consistency and Fairness:</h5>
    <ul>
      <li>Judges should strive to be consistent in their decision-making throughout the tournament.</li>
      <li>They should provide reasons that are not arbitrary or beyond the debaters' control.</li>
    </ul>

    <h5>6. Educational Value:</h5>
    <ul>
      <li>A good justification should be educational, helping the debaters understand their strengths and weaknesses.</li>
      <li>It should offer guidance for improvement in future debates.</li>
    </ul>
  `,
  quiz: {
    question: "What is the key purpose of consensus-building in panel judging?",
    options: [
      { text: "To ensure the majority wins by default", correct: false },
      { text: "To balance different views and make collaborative decisions", correct: true },
      { text: "To rush decision-making and finish early", correct: false }
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
        <h2>Introduction to Debate 3</h2> 
      
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