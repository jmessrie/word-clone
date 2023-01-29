import React from "react";

function GameOverBanner({gameOver, numGuesses, answer, onRestart}) {
  return (
    <>
      {gameOver === "win" && <GameOverWinBanner numGuesses={numGuesses} onRestart={onRestart}/>}
      {gameOver === "lose" && <GameOverLoseBanner answer={answer} onRestart={onRestart} />}
    </>
  );
}

export default GameOverBanner;

function GameOverWinBanner({numGuesses, onRestart}) {
  return (
    <div className="happy banner">
      <p>
        <strong>Congratulations!</strong>{" "}
        Got it in <strong>{numGuesses} guess(es)</strong>.
      </p>
      <button className="restartButton" onClick={onRestart}>Restart Game</button>
    </div>
  );
}

function GameOverLoseBanner({answer, onRestart}) {
  return (
    <div className="sad banner">
      <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
      <button className="restartButton" onClick={onRestart}>Restart Game</button>
    </div>
  );
}
  


