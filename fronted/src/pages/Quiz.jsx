import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Question from '../components/Question';
import ScoreCard from '../components/ScoreCard';
// import quizzes from '../data/quizzes.json'; // Optional: if using JSON files

// Sample quizzes for frontend-only
const quizzes = [
  {
    id: 1,
    title: 'Computer Basics',
    questions: [
      {
        question: 'What does CPU stand for?',
        options: [
          'Central Processing Unit',
          'Computer Personal Unit',
          'Central Print Unit',
          'Control Processing Unit',
        ],
        answer: 'Central Processing Unit',
      },
      {
        question: 'What is RAM used for?',
        options: ['Permanent storage', 'Temporary memory', 'Graphics', 'Networking'],
        answer: 'Temporary memory',
      },
    ],
  },
];

const Quiz = () => {
  const { id } = useParams(); // Get quiz ID from URL
  const quiz = quizzes.find((q) => q.id === parseInt(id));
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswer = (selectedOption) => {
    if (selectedOption === quiz.questions[currentIndex].answer) {
      setScore(score + 1);
    }

    if (currentIndex + 1 < quiz.questions.length) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setShowScore(true);
    }
  };

  const resetQuiz = () => {
    setCurrentIndex(0);
    setScore(0);
    setShowScore(false);
  };

  if (!quiz) {
    return <p className="text-center mt-10">Quiz not found!</p>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">{quiz.title}</h1>

      {showScore ? (
        <ScoreCard score={score} totalQuestions={quiz.questions.length} onRetry={resetQuiz} />
      ) : (
        <Question questionData={quiz.questions[currentIndex]} onAnswer={handleAnswer} />
      )}
    </div>
  );
};

export default Quiz;
