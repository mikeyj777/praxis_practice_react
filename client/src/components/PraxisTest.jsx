import React, { useState } from 'react';
import BiologyHeader from './BiologyHeader';
import StatsButton from './ui/StatsButton';

const PraxisTest = ({ subject = "Biology", totalQuestions = 150, children }) => {
  const [score, setScore] = useState({
    correct: 0,
    attempted: 0
  });

  // Function to update score - will be passed to child components
  const updateScore = (newScore) => {
    setScore(newScore);
  };

  return (
    <div className="praxis-container theme-cat">
      {/* Banner Section */}
      <div className="banner">
        <div className="banner-content">
          <div className="title-section">
            <h1 className="title">Praxis Practice Test</h1>
            <h2 className="subtitle">{subject}</h2>
          </div>
          
          <div className="score-section">
            <div className="score-item">
              <span className="score-label">Score</span>
              <span className="score-value">
                {score.attempted > 0 
                  ? `${Math.round((score.correct / score.attempted) * 100)}%`
                  : '-'}
              </span>
            </div>
            <div className="score-item">
              <span className="score-label">Progress</span>
              <span className="score-value">
                {`${score.attempted}/${totalQuestions}`}
              </span>
            </div>
            <div className="progress-bar">
              <div 
                className="progress-fill"
                style={{
                  width: `${(score.attempted / totalQuestions) * 100}%`
                }}
              />
            </div>
          </div>
        </div>
        <StatsButton />
      </div>

      {/* Main Content Section */}
      <div className="content">
        <BiologyHeader 
          onTopicChange={(topic) => {
            console.log(`Loading questions for topic: ${topic}`);
          }}
        />
        {children && typeof children === 'function' 
          ? children({ score, updateScore })
          : children}
      </div>
    </div>
  );
};

export default PraxisTest;