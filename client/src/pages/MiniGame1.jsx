import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const DebateMatchGame = () => {
  const [draggedItem, setDraggedItem] = useState(null);
  const [gameWon, setGameWon] = useState(false);
  const termsRef = useRef([
    { id: 'term-motion', text: 'Motion' },
    { id: 'term-rebuttal', text: 'Rebuttal' },
    { id: 'term-adjudicator', text: 'Adjudicator' },
    { id: 'term-framing', text: 'Framing' }
  ]);
  const [terms, setTerms] = useState([...termsRef.current]);
  const [definitions, setDefinitions] = useState([
    { id: 'def-motion', match: 'term-motion', text: 'The topic or proposition being debated.', className: '' },
    { id: 'def-rebuttal', match: 'term-rebuttal', text: 'A response that counters or refutes the opponent\'s point.', className: '' },
    { id: 'def-adjudicator', match: 'term-adjudicator', text: 'The person who judges the debate and decides the winner.', className: '' },
    { id: 'def-framing', match: 'term-framing', text: 'The way a team defines and sets up the debate for strategic advantage.', className: '' }
  ]);

  const handleDragStart = (term) => {
    setDraggedItem(term);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (definition) => {
    if (!draggedItem) return;
    
    const updatedDefinitions = [...definitions];
    const definitionIndex = updatedDefinitions.findIndex(d => d.id === definition.id);
    
    if (draggedItem.id === definition.match) {
      updatedDefinitions[definitionIndex] = {
        ...updatedDefinitions[definitionIndex],
        text: draggedItem.text,
        className: 'correct'
      };
      
      setDefinitions(updatedDefinitions);
      
      const updatedTerms = terms.filter(term => term.id !== draggedItem.id);
      setTerms(updatedTerms);
     
      if (updatedTerms.length === 0) {
        setGameWon(true);
      }
    } else {
      updatedDefinitions[definitionIndex] = {
        ...updatedDefinitions[definitionIndex],
        className: 'incorrect'
      };
      
      setDefinitions(updatedDefinitions);
      
      setTimeout(() => {
        const resetDefinitions = [...definitions];
        resetDefinitions[definitionIndex] = {
          ...resetDefinitions[definitionIndex],
          className: ''
        };
        setDefinitions(resetDefinitions);
      }, 1000);
    }
  };

  const resetGame = () => {
    setTerms([...termsRef.current]);
    setDefinitions(definitions.map(def => ({
      ...def,
      text: def.text, // Reset to original definition text
      className: ''
    })));
    setGameWon(false);
    setDraggedItem(null);
  };

  const styles = {
    body: {
      fontFamily: "'Segoe UI', sans-serif",
      backgroundColor: "#f0f4f8",
      margin: 0,
      padding: "20px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    },
    h1: {
      color: "#1e3a8a",
      marginBottom: "10px"
    },
    gameContainer: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      gap: "30px",
      marginTop: "20px"
    },
    terms: {
      display: "flex",
      flexDirection: "column",
      gap: "15px"
    },
    definitions: {
      display: "flex",
      flexDirection: "column",
      gap: "15px"
    },
    draggable: {
      padding: "10px 15px",
      backgroundColor: "#e0f2fe",
      border: "2px dashed #0284c7",
      borderRadius: "8px",
      cursor: "grab",
      textAlign: "center",
      width: "150px"
    },
    droppable: {
      padding: "15px",
      backgroundColor: "#fff",
      border: "2px solid #cbd5e1",
      borderRadius: "8px",
      minHeight: "50px",
      width: "300px"
    },
    correct: {
      backgroundColor: "#d1fae5",
      borderColor: "#10b981"
    },
    incorrect: {
      backgroundColor: "#fecaca",
      borderColor: "#ef4444"
    },
    result: {
      marginTop: "30px",
      fontSize: "20px",
      fontWeight: "bold",
      color: "#0f766e"
    },
    button: {
      marginTop: "20px",
      padding: "10px 20px",
      fontSize: "16px",
      borderRadius: "8px",
      border: "none",
      backgroundColor: "#3b82f6",
      color: "white",
      cursor: "pointer"
    },
    buttonHover: {
      backgroundColor: "#2563eb"
    }
  };

  return (
    <div style={styles.body}>
      <h1 style={styles.h1}>🧠 Match Debate Terms to Definitions</h1>
      <p>Drag each debate term to its correct definition.</p>

      <div style={styles.gameContainer}>
        <div style={styles.terms}>
          {terms.map(term => (
            <div
              key={term.id}
              style={styles.draggable}
              draggable
              onDragStart={() => handleDragStart(term)}
            >
              {term.text}
            </div>
          ))}
        </div>

        <div style={styles.definitions}>
          {definitions.map(definition => (
            <div
              key={definition.id}
              style={{
                ...styles.droppable,
                ...(definition.className === 'correct' ? styles.correct : {}),
                ...(definition.className === 'incorrect' ? styles.incorrect : {})
              }}
              onDragOver={handleDragOver}
              onDrop={() => handleDrop(definition)}
            >
              {definition.text}
            </div>
          ))}
        </div>
      </div>

      {gameWon && <div style={styles.result}>🎉 All matched correctly! Great job!</div>}
      <button 
        style={styles.button} 
        onMouseOver={(e) => e.currentTarget.style.backgroundColor = styles.buttonHover.backgroundColor}
        onMouseOut={(e) => e.currentTarget.style.backgroundColor = styles.button.backgroundColor}
        onClick={resetGame}
      >
        Restart Game
      </button>
    </div>
  );
};

export default DebateMatchGame;