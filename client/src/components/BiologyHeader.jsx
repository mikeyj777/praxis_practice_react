import { useState } from 'react'; 
import { questions, BIOLOGY_TOPICS } from '../utils/topicsAndQuestions';
import Quiz from './Quiz';


const BiologyHeader = ({ onTopicChange }) => {
  const [selectedTopic, setSelectedTopic] = useState('mixed');

  const handleTopicChange = (topicKey) => {
    setSelectedTopic(topicKey);
    onTopicChange(topicKey);
  };

  return (
    <div className="biology-header">
      <div className="topic-info">
        <h2>
          {BIOLOGY_TOPICS[selectedTopic].icon} {BIOLOGY_TOPICS[selectedTopic].title}
        </h2>
      </div>
      
      <div className="topic-selector">
        <div className="topic-buttons">
          {Object.entries(BIOLOGY_TOPICS).map(([key, topic]) => (
            <button
              key={key}
              className={`topic-button ${selectedTopic === key ? 'selected' : ''}`}
              onClick={() => handleTopicChange(key)}
            >
              <span className="topic-icon">{topic.icon}</span>
              <span className="topic-title">{topic.title}</span>
            </button>
          ))}
        </div>
      </div>
      <Quiz 
        questions={questions}
        subject="biology" 
        selectedTopic={selectedTopic}
        />
    </div>
  );
};

export default BiologyHeader;