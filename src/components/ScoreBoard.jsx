function ScoreBoard(props) {
  return(
    <div className="score-board">
      <p className="score"> Score: <span>{props.score}</span></p>
      <p className="best-score"> Best Score: <span>{props.bestScore}</span></p>      
    </div>
  );
}

export default ScoreBoard;