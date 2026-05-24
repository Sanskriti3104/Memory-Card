import { useState } from "react";

import Header from "./components/Header";
import ScoreBoard from "./components/ScoreBoard";
import DifficultySelector from "./components/DifficultySelector";
import GameMessage from "./components/GameMessage";
import CardGrid from "./components/CardGrid";

function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const gameMessage = "Welcome to Hogwarts!"; // Placeholder game message

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
      <CardGrid />
    </div>
  );
}

export default App;