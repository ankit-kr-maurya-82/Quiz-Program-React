import React, { useState } from 'react';

const Question = ({ questionData, onAnswer }) => {
  const [selected, setSelected] = useState('');

  const handleOptionClick = (option) => {
    setSelected(option);
    // Notify parent component about the selected answer
    onAnswer(option);
  };

  return (
    <div className="p-6 bg-white shadow-md rounded-lg mb-4">
      <h3 className="text-lg font-semibold mb-4">{questionData.question}</h3>
      <div className="grid grid-cols-1 gap-3">
        {questionData.options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleOptionClick(option)}
            className={`px-4 py-2 border rounded hover:bg-blue-100 transition ${
              selected === option ? 'bg-blue-200 border-blue-600' : ''
            }`}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Question;
