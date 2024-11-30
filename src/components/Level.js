import React, { useState } from 'react';
import './Level.css';

const Level = ({ level, question, onAnswer }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleAnswerClick = (option) => {
    if (selectedOption) return;
    setSelectedOption(option);
    setTimeout(() => {
      onAnswer(option);
      setSelectedOption(null);
    }, 1000);
  };

  return (
    <div className="quiz-container">
      <h2>Level {level}</h2>
      <p>{question.question}</p>
      <div id="options">
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleAnswerClick(option)}
            className={selectedOption === option ? (option === question.answer ? 'green' : 'red') : ''}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Level;
