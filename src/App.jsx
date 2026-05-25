import { useState, useEffect } from "react";

import fetchCharacters from "./services/hpApi";
import Header from "./components/Header";
import ScoreBoard from "./components/ScoreBoard";
import DifficultySelector from "./components/DifficultySelector";
import GameMessage from "./components/GameMessage";
import CardGrid from "./components/CardGrid";

function App() {
  const [difficulty, setDifficulty] = useState("easy");
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const gameMessage = "Welcome to Hogwarts!"; // Placeholder game message
  const [allCharacters, setAllCharacters] = useState([]); // State to hold character data
  const [displayedCharacters, setDisplayedCharacters] = useState([]); // State to hold currently displayed characters

  useEffect(() => {
    const getCharacters = async () => {
      const data = await fetchCharacters();
      setAllCharacters(data);
    };
    getCharacters();
  }, []);

  useEffect(() => {
    if (allCharacters.length === 0) return;

    let numberOfCards;
    switch (difficulty) {
      case "easy":
        numberOfCards = 6;
        break;
      case "medium":
        numberOfCards = 8;
        break;
      case "hard":
        numberOfCards = 10;
        break;
      default:
        numberOfCards = 6;
    }
    getRandomCharacters(numberOfCards, allCharacters);
  }, [difficulty, allCharacters]);

  function getRandomCharacters(numberOfCards, characterList) {
    const shuffled = [...characterList].sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, numberOfCards);
    setDisplayedCharacters(selected);
  }

  function handleCardClick(id) {
    let clickedCharacter = displayedCharacters.find(char => char.id === id);

    if (clickedCharacter.clicked) {
      alert("You already clicked this character! Game Over.");
      setScore(0);

      const updatedAllCharacters = allCharacters.map(char => ({
        ...char, clicked: false
      }));
      setAllCharacters(updatedAllCharacters);
      getRandomCharacters(displayedCharacters.length, updatedAllCharacters); // Reset the displayed characters
      return;
    }
    increaseScore();
    const updatedCharacters = displayedCharacters.map(char => {
      if (char.id === id) {
        return {
          ...char, clicked: true
        };
      }
      return char;
    });
    const shuffled = [...updatedCharacters].sort(() => 0.5 - Math.random());
    setDisplayedCharacters(shuffled);
  }

  function increaseScore() {
    setScore((prevScore) => {
      const newScore = prevScore + 1;
      if (newScore > bestScore) {
        setBestScore(newScore);
      }
      return newScore;
    });
  }

  return (
    <div className="App">
      <Header />
      <ScoreBoard score={score} bestScore={bestScore} />
      <DifficultySelector difficulty={difficulty} setDifficulty={setDifficulty} />
      <GameMessage message={gameMessage} />
      <CardGrid characters={displayedCharacters} handleCardClick={handleCardClick} />
    </div>
  );
}

export default App;