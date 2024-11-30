import React from 'react';
import './Sidebar.css';

const Sidebar = ({ points, unlockedLevels, highestScore, currentLevel }) => {
  return (
    <div className="side-panel">
      <h3>Score: {points}</h3>
      <h3>Highest Score: {highestScore}</h3>
      <h3>Current Level: {currentLevel}</h3>
      <h3>Unlocked Levels:</h3>
      <ul>
        {unlockedLevels.map((level) => (
          <li key={level}>Level {level}</li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
