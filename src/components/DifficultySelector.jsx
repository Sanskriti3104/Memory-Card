function DifficultySelector({ difficulty, setDifficulty }) {
  return (
    <div className="difficulty-selector">
      <button
        className={`difficulty-option ${
          difficulty === "easy" ? "active" : ""
        }`}
        onClick={() => setDifficulty("easy")}
      >
        Easy
      </button>

      <button
        className={`difficulty-option ${
          difficulty === "medium" ? "active" : ""
        }`}
        onClick={() => setDifficulty("medium")}
      >
        Medium
      </button>

      <button
        className={`difficulty-option ${
          difficulty === "hard" ? "active" : ""
        }`}
        onClick={() => setDifficulty("hard")}
      >
        Hard
      </button>
    </div>
  );
}

export default DifficultySelector;