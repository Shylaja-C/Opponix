import React, { useState, useEffect, useCallback } from 'react';

const DebateMemoryGame = () => {
  const terms = [
    ["Rebuttal", "Counter-argument"],
    ["Affirmative", "Supports resolution"],
    ["Evidence", "Supporting facts"],
    ["Cross-Ex", "Questioning opponent"],
    ["Negative", "Opposes resolution"],
    ["Flow", "Debate notes"],
    ["Burden", "Proof obligation"],
    ["Case", "Main argument"]
  ];

  const [cards, setCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [lockBoard, setLockBoard] = useState(false);
  const [matchedPairs, setMatchedPairs] = useState(0);
  const [moves, setMoves] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);
  const [gameWon, setGameWon] = useState(false);
  const [timerInterval, setTimerInterval] = useState(null);

  const totalPairs = terms.length;

  const shuffle = useCallback((array) => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  }, []);

  const initGame = useCallback(() => {
    // Reset game state
    let newCards = [];
    terms.forEach(([term, definition]) => {
      newCards.push({ text: term, pair: definition, id: Math.random().toString(36).substr(2, 9) });
      newCards.push({ text: definition, pair: term, id: Math.random().toString(36).substr(2, 9) });
    });
    
    setCards(shuffle(newCards));
    setFlippedCards([]);
    setLockBoard(false);
    setMatchedPairs(0);
    setMoves(0);
    setSeconds(0);
    setGameStarted(false);
    setGameWon(false);
    clearInterval(timerInterval);
  }, [terms, shuffle, timerInterval]);

  const startTimer = useCallback(() => {
    clearInterval(timerInterval);
    setSeconds(0);
    const interval = setInterval(() => {
      setSeconds(prev => prev + 1);
    }, 1000);
    setTimerInterval(interval);
    return () => clearInterval(interval);
  }, [timerInterval]);

  const startGame = useCallback(() => {
    if (!gameStarted) {
      setGameStarted(true);
      startTimer();
    }
  }, [gameStarted, startTimer]);

  const flipCard = useCallback((card) => {
    if (lockBoard || flippedCards.some(c => c.id === card.id) || card.matched) return;

    const newFlippedCards = [...flippedCards, card];
    setFlippedCards(newFlippedCards);

    if (newFlippedCards.length === 2) {
      setMoves(prev => prev + 1);
      checkForMatch(newFlippedCards);
    }
  }, [flippedCards, lockBoard]);

  const checkForMatch = useCallback((flippedCards) => {
    const [card1, card2] = flippedCards;
    const isMatch = card1.pair === card2.text || card2.pair === card1.text;

    if (isMatch) {
      setCards(prevCards => 
        prevCards.map(card => 
          card.id === card1.id || card.id === card2.id ? { ...card, matched: true } : card
        )
      );
      setFlippedCards([]);
      setMatchedPairs(prev => prev + 1);
      
      if (matchedPairs + 1 === totalPairs) {
        endGame();
      }
    } else {
      setLockBoard(true);
      setTimeout(() => {
        setFlippedCards([]);
        setLockBoard(false);
      }, 1000);
    }
  }, [matchedPairs, totalPairs]);

  const endGame = useCallback(() => {
    clearInterval(timerInterval);
    setGameWon(true);
  }, [timerInterval]);

  useEffect(() => {
    initGame();
    return () => clearInterval(timerInterval);
  }, [initGame, timerInterval]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60).toString().padStart(2, '0');
    const secs = (seconds % 60).toString().padStart(2, '0');
    return `${minutes}:${secs}`;
  };

  const styles = {
    body: {
      fontFamily: 'Arial, sans-serif',
      background: '#f0f0f0',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '20px',
      minHeight: '100vh'
    },
    gameInfo: {
      display: 'flex',
      justifyContent: 'space-between',
      width: '420px',
      marginBottom: '20px'
    },
    timer: {
      background: 'white',
      padding: '10px 20px',
      borderRadius: '50px',
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
      fontWeight: 'bold',
      color: '#2c3e50'
    },
    moves: {
      background: 'white',
      padding: '10px 20px',
      borderRadius: '50px',
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
      fontWeight: 'bold',
      color: '#2c3e50'
    },
    gameBoard: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 100px)',
      gap: '10px',
      margin: '20px'
    },
    card: {
      width: '100px',
      height: '80px',
      perspective: '600px',
      cursor: 'pointer'
    },
    cardInner: {
      position: 'relative',
      width: '100%',
      height: '100%',
      transition: 'transform 0.6s',
      transformStyle: 'preserve-3d'
    },
    cardFlipped: {
      transform: 'rotateY(180deg)'
    },
    cardFront: {
      position: 'absolute',
      width: '100%',
      height: '100%',
      borderRadius: '5px',
      backfaceVisibility: 'hidden',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: '12px',
      textAlign: 'center',
      background: '#3498db',
      color: 'white'
    },
    cardBack: {
      position: 'absolute',
      width: '100%',
      height: '100%',
      borderRadius: '5px',
      backfaceVisibility: 'hidden',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: '12px',
      textAlign: 'center',
      background: 'white',
      color: 'black',
      border: '2px solid #3498db',
      transform: 'rotateY(180deg)',
      padding: '1px'
    },
    cardMatched: {
      background: '#2ecc71 !important'
    },
    restartBtn: {
      marginTop: '30px',
      padding: '12px 25px',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: 'white',
      border: 'none',
      borderRadius: '50px',
      fontWeight: 'bold',
      cursor: 'pointer',
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
      transition: 'all 0.3s ease'
    },
    restartBtnHover: {
      transform: 'translateY(-2px)',
      boxShadow: '0 6px 12px rgba(0,0,0,0.15)'
    },
    winMessage: {
      position: 'fixed',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      background: 'rgb(213, 175, 175)',
      padding: '30px',
      borderRadius: '10px',
      boxShadow: '0 10px 25px rgba(0,0,0,0.2)',
      textAlign: 'center',
      zIndex: 100
    },
    overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      background: 'rgba(0,0,0,0.5)',
      zIndex: 99
    }
  };

  return (
    <div style={styles.body}>
      <h1>Debate Knowledge Memory Game</h1>
      
      <div style={styles.gameInfo}>
        <div style={styles.timer}>Time: <span>{formatTime(seconds)}</span></div>
        <div style={styles.moves}>Moves: <span>{moves}</span></div>
      </div>

      <div style={styles.gameBoard}>
        {cards.map((card) => (
          <div 
            key={card.id}
            style={styles.card}
            onClick={() => {
              if (!gameStarted) startGame();
              flipCard(card);
            }}
          >
            <div 
              style={{
                ...styles.cardInner,
                ...(flippedCards.some(c => c.id === card.id) || card.matched ? styles.cardFlipped : {})
              }}
            >
              <div style={styles.cardFront}>?</div>
              <div 
                style={{
                  ...styles.cardBack,
                  ...(card.matched ? styles.cardMatched : {})
                }}
              >
                {card.text}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <button 
        style={styles.restartBtn}
        onMouseOver={(e) => e.currentTarget.style.transform = styles.restartBtnHover.transform}
        onMouseOut={(e) => e.currentTarget.style.transform = ''}
        onClick={initGame}
      >
        {gameStarted ? 'Restart Game' : 'Start Game'}
      </button>
      
      {gameWon && (
        <>
          <div style={styles.overlay} />
          <div style={styles.winMessage}>
            <h2>Congratulations!</h2>
            <p>You matched all the cards in {formatTime(seconds)} with {moves} moves!</p>
            <button 
              style={styles.restartBtn}
              onMouseOver={(e) => e.currentTarget.style.transform = styles.restartBtnHover.transform}
              onMouseOut={(e) => e.currentTarget.style.transform = ''}
              onClick={initGame}
            >
              Play Again
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default DebateMemoryGame;