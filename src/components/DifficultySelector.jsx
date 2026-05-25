function DifficultySelector({ difficulty, setDifficulty }) {
  return (
    <div className="difficulty-selector">
      <button
        className="difficulty-option"
        onClick={() => setDifficulty("easy")}
      >
        Easy
      </button>
      <button
        className="difficulty-option"
        onClick={() => setDifficulty("medium")}
      >
        Medium
      </button>
      <button
        className="difficulty-option"
        onClick={() => setDifficulty("hard")}
      >
        Hard
      </button>
    </div>
  );
}

export default DifficultySelector;