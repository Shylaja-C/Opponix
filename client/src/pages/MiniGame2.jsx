import React, { useState, useEffect } from 'react';

const DebateBingo = () => {
  const phrases = [
    "Let me clarify…", "That’s a false equivalence", "According to statistics…",
    "I respectfully disagree", "Let’s define the terms", "In conclusion…",
    "That’s a strawman argument", "You’re missing the point", "Here's some evidence",
    "I propose an alternative", "Let’s be logical here", "Let's break this down",
    "It's a slippery slope", "Based on facts…", "Let's consider the source",
    "Let me reframe that", "That’s anecdotal", "The data suggests…",
    "Let me reiterate", "From a different perspective", "Think critically",
    "Let’s stay on topic", "It’s not that simple", "That’s a red herring",
    "Let me summarize"
  ];

  const [currentPlayer, setCurrentPlayer] = useState(1);
  const [boardState, setBoardState] = useState(Array(25).fill(0));
  const [boardCells, setBoardCells] = useState([]);
  const [winner, setWinner] = useState(null);

  const styles = {
    body: {
      fontFamily: "'Segoe UI', sans-serif",
      background: 'linear-gradient(to right, #d4bfff, #f0e6ff)',
      textAlign: 'center',
      margin: 0,
      padding: '2rem',
      minHeight: '100vh'
    },
    container: {
      background: 'white',
      padding: '2rem',
      borderRadius: '20px',
      boxShadow: '0 8px 20px rgba(0,0,0,0.1)',
      maxWidth: '800px',
      margin: 'auto'
    },
    h1: {
      color: '#6a1b9a'
    },
    bingoBoard: {
      display: 'grid',
      gridTemplateColumns: 'repeat(5, 1fr)',
      gap: '10px',
      margin: '2rem 0'
    },
    cell: {
      background: '#f2e7ff',
      borderRadius: '10px',
      padding: '20px',
      fontSize: '14px',
      cursor: 'pointer',
      transition: '0.2s',
      userSelect: 'none',
      border: '2px solid transparent'
    },
    player1Cell: {
      background: '#90caf9',
      borderColor: '#2196f3',
      color: 'white',
      fontWeight: 'bold'
    },
    player2Cell: {
      background: '#ce93d8',
      borderColor: '#ab47bc',
      color: 'white',
      fontWeight: 'bold'
    },
    markedCell: {
      cursor: 'not-allowed'
    },
    info: {
      marginTop: '10px',
      fontSize: '16px',
      fontWeight: 'bold'
    },
    button: {
      padding: '10px 20px',
      fontSize: '16px',
      border: 'none',
      borderRadius: '12px',
      backgroundColor: '#9c27b0',
      color: 'white',
      cursor: 'pointer',
      '&:hover': {
        backgroundColor: '#7b1fa2'
      }
    },
    winnerMessage: {
      marginTop: '1rem',
      fontSize: '18px',
      color: 'green',
      fontWeight: 'bold'
    }
  };

  const generateBoard = () => {
    const shuffled = [...phrases].sort(() => 0.5 - Math.random()).slice(0, 25);
    setBoardCells(shuffled);
    setBoardState(Array(25).fill(0));
    setCurrentPlayer(1);
    setWinner(null);
  };

  const handleCellClick = (index) => {
    if (boardState[index] !== 0 || winner) return;

    const newBoardState = [...boardState];
    newBoardState[index] = currentPlayer;
    setBoardState(newBoardState);

    if (checkWinner(currentPlayer, newBoardState)) {
      setWinner(currentPlayer);
      return;
    }

    setCurrentPlayer(currentPlayer === 1 ? 2 : 1);
  };

  const checkWinner = (player, state) => {
    const winPatterns = [
      // Rows
      [0,1,2,3,4], [5,6,7,8,9], [10,11,12,13,14],
      [15,16,17,18,19], [20,21,22,23,24],
      // Columns
      [0,5,10,15,20], [1,6,11,16,21], [2,7,12,17,22],
      [3,8,13,18,23], [4,9,14,19,24],
      // Diagonals
      [0,6,12,18,24], [4,8,12,16,20]
    ];

    return winPatterns.some(pattern =>
      pattern.every(i => state[i] === player)
    );
  };

  const getCellStyle = (index) => {
    const baseStyle = {...styles.cell};
    if (boardState[index] === 1) return {...baseStyle, ...styles.player1Cell};
    if (boardState[index] === 2) return {...baseStyle, ...styles.player2Cell};
    if (winner) return {...baseStyle, ...styles.markedCell};
    return baseStyle;
  };

  useEffect(() => {
    generateBoard();
  }, []);

  return (
    <div style={styles.body}>
      <div style={styles.container}>
        <h1 style={styles.h1}>🎤 Debate Bingo: 2 Player Mode</h1>
        <p>Take turns. First to complete a row, column, or diagonal wins!</p>
        <div style={styles.info}>
          Current Turn: {currentPlayer === 1 ? "🔵 Player 1" : "🟣 Player 2"}
        </div>
        <div style={styles.bingoBoard}>
          {boardCells.map((phrase, index) => (
            <div
              key={index}
              style={getCellStyle(index)}
              onClick={() => handleCellClick(index)}
            >
              {phrase}
            </div>
          ))}
        </div>
        <button 
          style={styles.button} 
          onClick={generateBoard}
        >
          🔁 New Game
        </button>
        {winner && (
          <p style={styles.winnerMessage}>
            🎉 Player {winner} Wins!
          </p>
        )}
      </div>
    </div>
  );
};

export default DebateBingo;