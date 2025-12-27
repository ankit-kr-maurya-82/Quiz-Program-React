import React from 'react';

const ScoreCard = ({ score, totalQuestions, onRetry }) => {
  const percentage = ((score / totalQuestions) * 100).toFixed(0);

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg text-center">
      <h2 className="text-2xl font-bold mb-4">Quiz Completed!</h2>
      <p className="text-lg mb-2">Your Score: <span className="font-semibold">{score}</span> / {totalQuestions}</p>
      <p className="text-lg mb-4">Percentage: <span className="font-semibold">{percentage}%</span></p>
      
      <button
        onClick={onRetry}
        className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        Retry Quiz
      </button>
    </div>
  );
};

export default ScoreCard;
