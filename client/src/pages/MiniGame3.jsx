import React, { useState, useEffect, useRef } from 'react';

const POIDodgeGame = () => {
  const poiData = [
    { text: "Isn't your argument based on assumptions?", correct: "Counter" },
    { text: "Can you clarify your earlier point?", correct: "Accept" },
    { text: "What about the opposing data?", correct: "Counter" },
    { text: "Isn't that a contradiction?", correct: "Counter" },
    { text: "Can you define your term more precisely?", correct: "Accept" },
    { text: "Aren't you ignoring the bigger picture?", correct: "Counter" },
    { text: "How does that support your case?", correct: "Accept" },
    { text: "Is this a fair comparison?", correct: "Counter" },
    { text: "Isn't that anecdotal?", correct: "Counter" },
    { text: "Does that follow logically?", correct: "Counter" },
    { text: "Can you provide a source for that claim?", correct: "Accept" },
    { text: "Isn't that a slippery slope fallacy?", correct: "Counter" },
    { text: "Aren't you generalizing too much?", correct: "Counter" },
    { text: "Is that really relevant here?", correct: "Counter" },
    { text: "Could you explain what you mean by that?", correct: "Accept" },
    { text: "Doesn't that conflict with what you said earlier?", correct: "Counter" },
    { text: "Why should we believe your numbers?", correct: "Counter" },
    { text: "Are you suggesting correlation implies causation?", correct: "Counter" },
    { text: "Isn't your example just an outlier?", correct: "Counter" },
    { text: "Would you accept an alternative interpretation?", correct: "Accept" },
    { text: "Does your logic apply in all cases?", correct: "Deny" },
    { text: "What if your assumption doesn't hold true?", correct: "Counter" },
    { text: "Why didn't you address the counterarguments?", correct: "Accept" },
    { text: "Is that based on empirical evidence?", correct: "Accept" },
    { text: "Does that align with the definition you gave?", correct: "Counter" },
    { text: "Is that the only possible explanation?", correct: "Deny" },
    { text: "Aren't you attacking the person and not the argument?", correct: "Counter" },
    { text: "Is that really the core issue?", correct: "Deny" },
    { text: "Have you considered the unintended consequences?", correct: "Counter" },
    { text: "Is that consistent with your framework?", correct: "Counter" },
    { text: "Aren't you cherry-picking examples?", correct: "Counter" },
    { text: "Why should we prioritize that argument?", correct: "Counter" },
    { text: "Is that a representative sample?", correct: "Counter" },
    { text: "Can you prove that claim?", correct: "Accept" },
    { text: "Aren't you ignoring an important stakeholder?", correct: "Counter" },
    { text: "Would you revise your statement given this evidence?", correct: "Accept" },
    { text: "Is that really mutually exclusive?", correct: "Counter" },
    { text: "Have you accounted for exceptions?", correct: "Counter" },
    { text: "Are you over-simplifying the issue?", correct: "Counter" },
    { text: "Isn't that a strawman argument?", correct: "Counter" },
    { text: "Does your conclusion logically follow?", correct: "Counter" },
    { text: "What's the alternative perspective?", correct: "Accept" },
    { text: "Would you clarify the link between point A and B?", correct: "Accept" },
    { text: "Isn't your comparison flawed?", correct: "Counter" },
    { text: "Is this an emotional appeal?", correct: "Counter" },
    { text: "Does this argument scale universally?", correct: "Deny" },
    { text: "Are you shifting the burden of proof?", correct: "Counter" },
    { text: "Can this be interpreted another way?", correct: "Accept" },
    { text: "Is this an isolated case or a trend?", correct: "Deny" },
    { text: "Is that a hasty generalization?", correct: "Counter" }
  ];

  const [score, setScore] = useState(0);
  const [level, setLevel] = useState(1);
  const [lives, setLives] = useState(3);
  const [timeLimit, setTimeLimit] = useState(5000);
  const [currentPOI, setCurrentPOI] = useState(null);
  const [gameStatus, setGameStatus] = useState('ready'); // 'ready', 'playing', 'gameover'
  const [message, setMessage] = useState('');
  const timerRef = useRef(null);
  const timerFillRef = useRef(null);

  const styles = {
    body: {
      fontFamily: "'Segoe UI', sans-serif",
      background: '#e0c3fc',
      margin: 0,
      padding: '2rem',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      minHeight: '100vh'
    },
    container: {
      background: 'white',
      padding: '2rem',
      borderRadius: '20px',
      boxShadow: '0 10px 20px rgba(0,0,0,0.2)',
      maxWidth: '600px',
      width: '100%',
      textAlign: 'center'
    },
    h1: {
      color: '#6a1b9a'
    },
    poi: {
      fontSize: '20px',
      margin: '1.5rem 0',
      minHeight: '60px',
      color: '#333',
      fontWeight: 'bold'
    },
    btnGroup: {
      display: 'flex',
      justifyContent: 'center',
      gap: '1rem',
      marginBottom: '1rem'
    },
    button: {
      padding: '10px 20px',
      fontSize: '16px',
      border: 'none',
      borderRadius: '10px',
      cursor: 'pointer',
      transition: 'background 0.3s'
    },
    accept: { backgroundColor: '#4caf50', color: 'white' },
    deny: { backgroundColor: '#f44336', color: 'white' },
    counter: { backgroundColor: '#2196f3', color: 'white' },
    acceptHover: { backgroundColor: '#388e3c' },
    denyHover: { backgroundColor: '#d32f2f' },
    counterHover: { backgroundColor: '#1976d2' },
    stats: {
      fontSize: '16px',
      marginTop: '0.5rem'
    },
    gameOver: {
      fontSize: '22px',
      color: 'red',
      marginTop: '1rem'
    },
    hearts: {
      fontSize: '24px',
      marginBottom: '1rem'
    },
    timerBar: {
      width: '100%',
      height: '10px',
      backgroundColor: '#ccc',
      borderRadius: '5px',
      overflow: 'hidden',
      marginBottom: '1rem'
    },
    timerFill: {
      height: '100%',
      backgroundColor: '#673ab7',
      width: '100%',
      transition: 'width linear'
    },
    startBtn: {
      marginTop: '20px',
      background: '#6a1b9a',
      color: 'white'
    },
    startBtnHover: {
      background: '#4a148c'
    }
  };

  const startGame = () => {
    setScore(0);
    setLevel(1);
    setLives(3);
    setTimeLimit(5000);
    setGameStatus('playing');
    setMessage('');
    nextPOI();
  };

  const nextPOI = () => {
    if (lives <= 0) return;

    const randomPOI = poiData[Math.floor(Math.random() * poiData.length)];
    setCurrentPOI(randomPOI);
    startTimerBar();

    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    timerRef.current = setTimeout(() => {
      loseLife("⏱ Too slow!");
    }, timeLimit);
  };

  const startTimerBar = () => {
    if (timerFillRef.current) {
      timerFillRef.current.style.transition = 'none';
      timerFillRef.current.style.width = '100%';
      
      setTimeout(() => {
        timerFillRef.current.style.transition = `width ${timeLimit}ms linear`;
        timerFillRef.current.style.width = '0%';
      }, 20);
    }
  };

  const respond = (action) => {
    if (lives <= 0 || !currentPOI || gameStatus !== 'playing') return;

    clearTimeout(timerRef.current);

    if (action === currentPOI.correct) {
      const newScore = score + 1;
      setScore(newScore);

      if (newScore % 5 === 0) {
        setLevel(level + 1);
        if (timeLimit > 2000) {
          setTimeLimit(timeLimit - 500);
        }
      }
    } else {
      setLives(lives - 1);
    }

    if (lives - 1 <= 0) {
      setGameStatus('gameover');
      setMessage(`Game Over! ❌ Incorrect response.`);
    } else {
      nextPOI();
    }
  };

  const loseLife = (reason) => {
    const newLives = lives - 1;
    setLives(newLives);

    if (newLives <= 0) {
      setGameStatus('gameover');
      setMessage(`Game Over! ${reason}`);
    } else {
      nextPOI();
    }
  };

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);

  return (
    <div style={styles.body}>
      <div style={styles.container}>
        <h1 style={styles.h1}>⚔ POI Dodge – Level 1</h1>
        <p>React fast to POIs! You have 3 lives and 5 seconds per question.</p>

        <div style={styles.hearts}>{"❤".repeat(lives)}</div>
        <div style={styles.timerBar}>
          <div 
            ref={timerFillRef} 
            style={styles.timerFill}
          ></div>
        </div>

        <div style={styles.poi}>
          {gameStatus === 'ready' && "Click 'Start Game' to begin!"}
          {gameStatus === 'playing' && currentPOI && `POI: ${currentPOI.text}`}
          {gameStatus === 'gameover' && "Click 'Start Game' to try again!"}
        </div>

        <div style={styles.btnGroup}>
          <button 
            style={styles.button}
            onMouseOver={(e) => e.currentTarget.style.backgroundColor = styles.acceptHover.backgroundColor}
            onMouseOut={(e) => e.currentTarget.style.backgroundColor = styles.accept.backgroundColor}
            onClick={() => respond('Accept')}
            disabled={gameStatus !== 'playing'}
          >
            Accept
          </button>
          <button 
            style={{...styles.button, ...styles.deny}}
            onMouseOver={(e) => e.currentTarget.style.backgroundColor = styles.denyHover.backgroundColor}
            onMouseOut={(e) => e.currentTarget.style.backgroundColor = styles.deny.backgroundColor}
            onClick={() => respond('Deny')}
            disabled={gameStatus !== 'playing'}
          >
            Deny
          </button>
          <button 
            style={{...styles.button, ...styles.counter}}
            onMouseOver={(e) => e.currentTarget.style.backgroundColor = styles.counterHover.backgroundColor}
            onMouseOut={(e) => e.currentTarget.style.backgroundColor = styles.counter.backgroundColor}
            onClick={() => respond('Counter')}
            disabled={gameStatus !== 'playing'}
          >
            Counter
          </button>
        </div>

        <div style={styles.stats}>
          <span>Score: {score}</span> | <span>Level: {level}</span>
        </div>

        {message && <div style={styles.gameOver}>{message}</div>}
        <button 
          style={{...styles.button, ...styles.startBtn}}
          onMouseOver={(e) => e.currentTarget.style.backgroundColor = styles.startBtnHover.backgroundColor}
          onMouseOut={(e) => e.currentTarget.style.backgroundColor = styles.startBtn.backgroundColor}
          onClick={startGame}
        >
          ▶ Start Game
        </button>
      </div>
    </div>
  );
};

export default POIDodgeGame;