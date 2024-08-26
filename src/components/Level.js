import React, { useState } from 'react';
import './Level.css';

const Level = ({ level, question, onAnswer }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleAnswerClick = (option) => {
    if (selectedOption) return;
    setSelectedOption(option);

    const isCorrect = option === question.answer;
    const button = document.querySelector(`#option-${question.options.indexOf(option)}`);
    
    if (isCorrect) {
      button.style.backgroundColor = 'green';
    } else {
      button.style.backgroundColor = 'red';
    }

    setTimeout(() => {
      onAnswer(isCorrect);
      setSelectedOption(null);
      button.style.backgroundColor = ''; // Reset button color after moving to the next question
    }, 500); // 1-second delay to show the correct/incorrect answer
  };

  return (
    <div className="quiz-container">
      <h2>Level {level}</h2>
      <p>{question.question}</p>
      <div id="options">
        {question.options.map((option, index) => (
          <button
            key={index}
            id={`option-${index}`}
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
