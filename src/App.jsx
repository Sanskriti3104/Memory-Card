import { useState, useEffect } from "react";

import fetchCharacters from "./services/hpApi";
import Header from "./components/Header";
import ScoreBoard from "./components/ScoreBoard";
import DifficultySelector from "./components/DifficultySelector";
import CardGrid from "./components/CardGrid";

function App() {
  const [difficulty, setDifficulty] = useState("easy");
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(() => {
    return Number(localStorage.getItem("bestScore")) || 0;
  });
  const [gameMessage, setGameMessage] = useState("Welcome to the Harry Potter Memory Game!");
  const [showModal, setShowModal] = useState(false);
  const [allCharacters, setAllCharacters] = useState([]); // State to hold character data
  const [displayedCharacters, setDisplayedCharacters] = useState([]); // State to hold currently displayed characters

  //Persist best score to localStorage
  useEffect(() => {
    localStorage.setItem("bestScore", bestScore);
  }, [bestScore]);

  //fetch characters on initial load
  useEffect(() => {
    const getCharacters = async () => {
      const data = await fetchCharacters();
      setAllCharacters(data);
    };
    getCharacters();
  }, []);

  //handle difficulty change
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
    setScore(0);
    getRandomCharacters(numberOfCards, allCharacters);
  }, [difficulty, allCharacters]);

  function getRandomCharacters(numberOfCards, characterList) {
    const shuffled = [...characterList].sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, numberOfCards);
    setDisplayedCharacters(selected);
  }

  //Reset game
  function resetGame() {
    setScore(0);

    const updatedAllCharacters =
      allCharacters.map((char) => ({
        ...char,
        clicked: false,
      }));

    setAllCharacters(
      updatedAllCharacters
    );

    getRandomCharacters(
      displayedCharacters.length,
      updatedAllCharacters
    );
  }

  //Modal Controller
  function showGameModal(message, callback) {
    setGameMessage(message);
    setShowModal(true);

    setTimeout(() => {
      setShowModal(false);
      callback();
    }, 2000);
  }

  //Card Click Logic
  function handleCardClick(id) {
    if (showModal) return; // Prevent clicks while modal is shown
    const clickedCharacter = displayedCharacters.find(char => char.id === id);

    //Lose Condition
    if (clickedCharacter.clicked) {
      showGameModal("You already clicked this character! Game Over.", resetGame);
      return;
    }

    const nextScore = score + 1;
    increaseScore();

    //Win Condition
    if (nextScore === displayedCharacters.length) {
      showGameModal("Congratulations! You won!", resetGame);
      return;
    }

    //Mark clicked
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

  //Score Update
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
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-box">{gameMessage}</div>
        </div>
      )}
      <Header />
      <ScoreBoard score={score} bestScore={bestScore} />
      <DifficultySelector difficulty={difficulty} setDifficulty={setDifficulty} />
      <CardGrid characters={displayedCharacters} handleCardClick={handleCardClick} difficulty={difficulty} />
    </div>
  );
}

export default App;