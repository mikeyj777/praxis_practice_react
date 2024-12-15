// src/components/QuestionStats/QuestionStats.jsx
import { questions } from '../utils/questions';
import Histogram from './ui/Histogram';

const QuestionStats = () => {
  // Process questions data
  const topicStats = questions.reduce((acc, q) => {
    if (!acc[q.topic]) {
      acc[q.topic] = {
        total: 0,
        difficulties: {}
      };
    }
    acc[q.topic].total++;
    acc[q.topic].difficulties[q.difficulty] = (acc[q.topic].difficulties[q.difficulty] || 0) + 1;
    return acc;
  }, {});

  // Calculate grid layout
  const topics = Object.keys(topicStats);
  const numTopics = topics.length;
  const numCols = Math.ceil(Math.sqrt(numTopics));
  const numRows = Math.ceil(numTopics / numCols);

  // Find max difficulty count for histogram scaling
  const maxDifficultyCount = Math.max(
    ...Object.values(topicStats).flatMap(
      stats => Object.values(stats.difficulties)
    )
  );

  return (
    <div className="question-stats">
      <div 
        className="stats-grid"
        style={{
          gridTemplateColumns: `repeat(${numCols}, 1fr)`,
          gridTemplateRows: `repeat(${numRows}, 1fr)`
        }}
      >
        {topics.map(topic => (
          <div key={topic} className="topic-card">
            <div className="topic-header">
              <h3 className="topic-title">{topic.replace(/-/g, ' ')}</h3>
              <span className="topic-total">Total: {topicStats[topic].total}</span>
            </div>
            <Histogram 
              data={topicStats[topic].difficulties}
              maxValue={maxDifficultyCount}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuestionStats;