import React, { useState, useEffect } from 'react';

interface QuestionProps {
  question: string;
  options: string[];
  correctAnswer: string;
  onAnswer: (isCorrect: boolean) => void;
}

const Question: React.FC<QuestionProps> = ({ question, options, correctAnswer, onAnswer }) => {
  const [isAnswered, setIsAnswered] = useState<boolean>(false);

 
  useEffect(() => {
    setIsAnswered(false);
  }, [question]);

  const handleOptionClick = (option: string) => {
    if (!isAnswered) {
      setIsAnswered(true);
      const isCorrect = option === correctAnswer;
      onAnswer(isCorrect);
    }
  };

  return (
    <div className="options-container">
      <h2>{question}</h2>
      <div>
        {options.map((option, index) => (
          <button
            key={index}
            className="answer-choice"
            onClick={() => handleOptionClick(option)}
            disabled={isAnswered}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Question;
