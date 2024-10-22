
import React from 'react';

interface StartPageProps {
  onStart: () => void;
}

const StartPage: React.FC<StartPageProps> = ({ onStart }) => {
  return (
    <div className="start-container">
      <h1>Benvenuto al Quiz sulla Moda Sostenibile!</h1>
      <p>
        Scopri quanto conosci la moda sostenibile rispondendo a 5 domande. Alla fine del quiz, riceverai un punteggio e un livello di "skill" che potrai condividere con i tuoi amici sui social!
      </p>
      <button onClick={onStart}>Inizia il Quiz</button>
    </div>
  );
};

export default StartPage;
