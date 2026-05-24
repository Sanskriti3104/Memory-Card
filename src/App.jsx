import { useState, useEffect } from "react";

import fetchCharacters from "./services/hpApi";
import Header from "./components/Header";
import ScoreBoard from "./components/ScoreBoard";
import DifficultySelector from "./components/DifficultySelector";
import GameMessage from "./components/GameMessage";
import CardGrid from "./components/CardGrid";

function App() {
  useEffect(() => {
    const getCharacters = async () => {
      const data = await fetchCharacters();
      setCharacters(data);
    };
    getCharacters();
  }, []);

  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const gameMessage = "Welcome to Hogwarts!"; // Placeholder game message
  const [characters, setCharacters] = useState([]); // State to hold character data

  // Dummy function to simulate score increase
  function increaseScore() {
    const newScore = score + 1;
    setScore(newScore);
    if (newScore > bestScore) {
      setBestScore(newScore);
    }
  }

  return (
    <div className="App">
      <Header />
      <ScoreBoard score={score} bestScore={bestScore} />
      <button onClick={increaseScore}>Increase Score</button>
      <DifficultySelector />
      <GameMessage message={gameMessage} />
      <CardGrid characters={characters}/>
    </div>
  );
}

export default App;