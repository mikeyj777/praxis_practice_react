// Helper function to get topic icons
import { questions } from '../utils/questions';

function getTopicIcon(topic) {
  const icons = {
    'nature-of-science': '🔬',
    'cell-biology': '🧫',
    'genetics': '🧬',
    'diversity': '🦋',
    'ecology': '🌍',
    'science-tech': '💻',
    'mixed': '🎲'
  };
  return icons[topic] || '📚';
}

const BIOLOGY_TOPICS = {
  // Include mixed topic by default
  'mixed': {
    title: 'Mixed Topics',
    icon: getTopicIcon('mixed')
  },
  ...questions
    .filter(q => q.subject === "biology")
    .reduce((topics, question) => {
      if (!topics[question.topic]) {
        const topicTitles = {
          'nature-of-science': 'Nature of Science & Scientific Inquiry',
          'cell-biology': 'Cellular and Molecular Biology',
          'genetics': 'Genetics and Evolution',
          'diversity': 'Diversity of Life and Organismal Biology',
          'ecology': 'Ecology and Environment',
          'science-tech': 'Science, Technology, and Social Impact',
          'mixed': 'Mixed Topics'
        };
        
        topics[question.topic] = {
          title: topicTitles[question.topic],
          icon: getTopicIcon(question.topic)
        };
      }
      return topics;
    }, {})
};

export default BIOLOGY_TOPICS;