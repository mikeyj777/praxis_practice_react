import { useState } from 'react'; 

const BIOLOGY_TOPICS = {
  'nature-of-science': {
    title: 'Nature of Science & Scientific Inquiry',
    percentage: 15,
    icon: '🔬'
  },
  'cell-biology': {
    title: 'Cellular and Molecular Biology',
    percentage: 20,
    icon: '🧫'
  },
  'genetics': {
    title: 'Genetics and Evolution',
    percentage: 20,
    icon: '🧬'
  },
  'diversity': {
    title: 'Diversity of Life and Organismal Biology',
    percentage: 20,
    icon: '🦋'
  },
  'ecology': {
    title: 'Ecology and Environment',
    percentage: 15,
    icon: '🌍'
  },
  'science-tech': {
    title: 'Science, Technology, and Social Impact',
    percentage: 10,
    icon: '💻'
  },
  'mixed': {
    title: 'Mixed Topics',
    percentage: 100,
    icon: '🎲'
  }
};

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
        {selectedTopic !== 'mixed' && (
          <span className="topic-percentage">
            {BIOLOGY_TOPICS[selectedTopic].percentage}% of exam
          </span>
        )}
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
              {key !== 'mixed' && (
                <span className="topic-percent">{topic.percentage}%</span>
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BiologyHeader;