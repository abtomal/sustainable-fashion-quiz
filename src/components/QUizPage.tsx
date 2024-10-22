import React, { useState } from 'react';
import Question from './Question';

interface QuizPageProps {
  onFinish: (score: number) => void;
}

interface QuestionType {
  question: string;
  options: string[];
  correctAnswer: string;
}

const questions: QuestionType[] = [
  {
    question: 'Qual è l\'obiettivo principale della moda sostenibile?',
    options: ['Massimizzare i profitti', 'Ridurre l\'impatto ambientale', 'Aumentare la produzione', 'Seguire le tendenze'],
    correctAnswer: 'Ridurre l\'impatto ambientale',
  },
  {
    question: 'Quale materiale è considerato sostenibile nella moda?',
    options: ['Poliestere', 'Cotone biologico', 'Nylon', 'PVC'],
    correctAnswer: 'Cotone biologico',
  },
  {
    question: 'Che cosa significa "upcycling"?',
    options: ['Riciclare materiali per creare nuovi prodotti', 'Aumentare la produzione', 'Ridurre i costi', 'Seguire le tendenze'],
    correctAnswer: 'Riciclare materiali per creare nuovi prodotti',
  },
  {
    question: 'Qual è una pratica comune nella moda sostenibile?',
    options: ['Produzione di massa', 'Utilizzo di sostanze chimiche nocive', 'Economia circolare', 'Fast fashion'],
    correctAnswer: 'Economia circolare',
  },
  {
    question: 'Quale certificazione indica una moda sostenibile?',
    options: ['ISO 9001', 'GOTS', 'LEED', 'CE'],
    correctAnswer: 'GOTS',
  },
];

const QuizPage: React.FC<QuizPageProps> = ({ onFinish }) => {
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [score, setScore] = useState<number>(0);

  const handleAnswer = (isCorrect: boolean) => {
    if (isCorrect) {
      setScore((prevScore) => prevScore + 1);
    }

    // Passa alla domanda successiva
    const nextQuestion = currentQuestion + 1;
    
    // Controlla se ci sono ancora domande
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      // Se le domande sono finite, passa ai risultati
      onFinish(score + (isCorrect ? 1 : 0)); // Incrementa score se l'ultima risposta è corretta
    }
  };

  return (
    <div className="options-container">
      <Question
        question={questions[currentQuestion].question}
        options={questions[currentQuestion].options}
        correctAnswer={questions[currentQuestion].correctAnswer}
        onAnswer={handleAnswer}
      />
      <p>Domanda {currentQuestion + 1} di {questions.length}</p>
    </div>
  );
};

export default QuizPage;
