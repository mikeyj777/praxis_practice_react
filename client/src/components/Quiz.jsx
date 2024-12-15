// src/components/Quiz.jsx
import React, { useState, useEffect } from 'react';
import Button from './ui/Button';
import Dialog from './ui/Dialog';

const Quiz = ({ questions, subject = 'biology', selectedTopic='mixed'}) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [score, setScore] = useState(0);
  const [answeredQuestions, setAnsweredQuestions] = useState({});
  const [showDetail, setShowDetail] = useState(null);
  const [quizQuestions, setQuizQuestions] = useState([]);
  
  useEffect(() => {
    let filteredQuestions = questions.filter(q => q.subject === subject);
    
    if (selectedTopic !== 'mixed') {
      filteredQuestions = filteredQuestions.filter(q => q.topic === selectedTopic);
    }
    
    const shuffled = [...filteredQuestions]
      .sort(() => Math.random() - 0.5)
      .slice(0, 50);
      
    setQuizQuestions(shuffled);
  }, [subject, selectedTopic]);

  const getCurrentQuestions = () => {
    const startIdx = currentPage * 10;
    return quizQuestions.slice(startIdx, startIdx + 10);
  };

  const handleAnswer = (questionId, selectedAnswer, correctAnswer) => {
    const isCorrect = selectedAnswer === correctAnswer;
    setAnsweredQuestions(prev => ({
      ...prev,
      [questionId]: {
        selected: selectedAnswer,
        isCorrect
      }
    }));
    
    if (isCorrect) {
      setScore(prev => prev + 1);
    }
  };

  const totalPages = Math.ceil(quizQuestions.length / 10);

  return (
    <div className="quiz-container">
      <div className="quiz-header">
        <h3 className="quiz-title">
          Quiz: {subject} - {selectedTopic}
        </h3>
        <div className="quiz-score">
          Score: {score}/{Object.keys(answeredQuestions).length}
        </div>
      </div>

      <div className="question-list">
        {getCurrentQuestions().map((question, idx) => {
          const questionId = `${question.topic}-${idx}`;
          const answerState = answeredQuestions[questionId];
          
          return (
            <div key={questionId} className="question-card">
              <div className="question-header">
                <p className="question-text">{question.question}</p>
                {answerState && (
                  <span className={`answer-feedback ${answerState.isCorrect ? 'correct' : 'incorrect'}`}>
                    {answerState.isCorrect ? '✓' : '✗'}
                  </span>
                )}
              </div>

              <div className="answer-list">
                {[question.answer, ...(question.wrongAnswers || [])].sort(() => Math.random() - 0.5).map((answer, answerIdx) => (
                  <Button
                    key={answerIdx}
                    onClick={() => handleAnswer(questionId, answer, question.answer)}
                    disabled={answerState}
                    fullWidth
                    variant="secondary"
                    className={`answer-button ${
                      answerState?.selected === answer
                        ? answerState.isCorrect
                          ? 'correct'
                          : 'incorrect'
                        : ''
                    }`}
                  >
                    {answer}
                  </Button>
                ))}
              </div>

              {answerState && (
                <button
                  onClick={() => setShowDetail(question.detail || 'Additional explanation coming soon...')}
                  className="show-more"
                >
                  Show more...
                </button>
              )}
            </div>
          );
        })}
      </div>

      <div className="pagination">
        <Button
          onClick={() => setCurrentPage(prev => prev - 1)}
          disabled={currentPage === 0}
          variant="primary"
        >
          Previous
        </Button>
        <span>
          Page {currentPage + 1} of {totalPages}
        </span>
        <Button
          onClick={() => setCurrentPage(prev => prev + 1)}
          disabled={currentPage === totalPages - 1}
          variant="primary"
        >
          Next
        </Button>
      </div>

      <Dialog 
        open={showDetail !== null}
        onClose={() => setShowDetail(null)}
      >
        <h3 className="quiz-title">Detailed Explanation</h3>
        <p style={{ margin: '16px 0' }}>{showDetail}</p>
        <Button
          onClick={() => setShowDetail(null)}
          variant="primary"
        >
          Close
        </Button>
      </Dialog>
    </div>
  );
};

export default Quiz;