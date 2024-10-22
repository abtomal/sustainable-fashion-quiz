// src/components/ResultsPage.tsx
import React from 'react';

interface ResultsPageProps {
  score: number;
  onRestart: () => void;
}

const ResultsPage: React.FC<ResultsPageProps> = ({ score, onRestart }) => {
  const getSkillLevel = (score: number): string => {
    if (score <= 2) return 'Hypebeast';
    if (score <= 4) return 'Trendsetter';
    return 'Stylist';
  };

  const skillLevel = getSkillLevel(score);

  return (
    <div className="results-container">
      <h1>Risultati del Quiz</h1>
      <p>Hai risposto correttamente a {score} domande su 5.</p>
      <p>Il tuo livello di "skill" è: <strong>{skillLevel}</strong></p>
      <button onClick={onRestart}>Ricomincia il Quiz</button>
    </div>
  );
};

export default ResultsPage;
