import React from "react";

function GuessInput({addResult, gameOver}) {
  const [guess, setGuess] = React.useState("");

  function handleOnChange(event) {
    const guess = event.target.value.toUpperCase();
    setGuess(guess);
  }

  function handleOnFormSubmit(event) {
    event.preventDefault();
    if(guess.length === 5) {
      addResult(guess);
      setGuess("");
    }
  }

  return (
    <form className="guess-input-wrapper" onSubmit={handleOnFormSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input id="guess-input" type="text" disabled={gameOver} minLength={5} maxLength={5} required value={guess} onChange={handleOnChange}/>
    </form>
  );
}

export default GuessInput;
