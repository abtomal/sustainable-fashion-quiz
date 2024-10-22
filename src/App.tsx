
import React, { useState } from 'react';
import StartPage from './components/StartPage';
import QuizPage from './components/QUizPage';
import ResultsPage from './components/ResultPage';
import './styles.css';

const App: React.FC = () => {
  const [step, setStep] = useState<'start' | 'quiz' | 'results'>('start');
  const [score, setScore] = useState<number>(0);

  const startQuiz = () => {
    setStep('quiz');
  };

  const finishQuiz = (finalScore: number) => {
    setScore(finalScore);
    setStep('results');
  };

  const restartQuiz = () => {
    setScore(0);
    setStep('start');
  };

  return (
    <div className="main-container">
      {step === 'start' && <StartPage onStart={startQuiz} />}
      {step === 'quiz' && <QuizPage onFinish={finishQuiz} />}
      {step === 'results' && <ResultsPage score={score} onRestart={restartQuiz} />}
    </div>
  );
};

export default App;
