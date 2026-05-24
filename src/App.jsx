import Header from "./components/Header";
import ScoreBoard from "./components/ScoreBoard";
import DifficultySelector from "./components/DifficultySelector";
import GameMessage from "./components/GameMessage";
import CardGrid from "./components/CardGrid";

function App() {
  return (
    <div className="App">
      <Header />
      <ScoreBoard />
      <DifficultySelector />
      <GameMessage />
      <CardGrid />
    </div>
  );
}

export default App;