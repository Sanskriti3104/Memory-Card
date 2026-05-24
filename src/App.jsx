import Header from "./components/Header";
import ScoreBoard from "./components/ScoreBoard";
import DifficultySelector from "./components/DifficultySelector";
import GameMessage from "./components/GameMessage";
import CardGrid from "./components/CardGrid";

function App() {
  const score = 0; // Placeholder score
  const BestScore = 0; // Placeholder best score
  const gameMessage = "Welcome to Hogwarts!"; // Placeholder game message

  return (
    <div className="App">
      <Header />
      <ScoreBoard score={score} bestScore={BestScore} />
      <DifficultySelector />
      <GameMessage message={gameMessage} />
      <CardGrid />
    </div>
  );
}

export default App;