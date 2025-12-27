import React from 'react';
import { useNavigate } from 'react-router-dom';

const QuizCard = ({ id, title, totalQuestions }) => {
  const navigate = useNavigate();

  const startQuiz = () => {
    // Make sure `id` exists
    if (id !== undefined) {
      navigate(`/quiz/${id}`);
    } else {
      console.error('Quiz ID is undefined!');
    }
  };

  return (
    <div className="p-4 bg-white shadow-md rounded-lg">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">Total Questions: {totalQuestions}</p>
      <button
        onClick={startQuiz}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        Start Quiz
      </button>
    </div>
  );
};

export default QuizCard;
