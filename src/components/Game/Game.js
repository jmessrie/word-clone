import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';

import GameOverBanner from '../GameOverBanner';
import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults';
import Keyboard from '../Keyboard';

import { checkGuess } from "../../game-helpers";

import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

const getNewWord = () => {
  const word = sample(WORDS);

  // To make debugging easier, we'll log the solution in the console.
  console.info({answer: word});
  return word;
};

function Game() {
  const [results, setResults] = React.useState([]);
  const [gameOver, setGameOver] = React.useState("");
  const [answer, setAnswer] = React.useState(getNewWord);
  function addResult(word) {
    const nextResults = [...results, {word: word, status: checkGuess(word, answer)}];
    setResults(nextResults);
    if(word === answer) {
      setGameOver("win");
    }
    else if(nextResults.length === NUM_OF_GUESSES_ALLOWED) {
      setGameOver("lose")
    }
  }

  function onRestart() {
    setResults([]);
    setGameOver("");
    setAnswer(getNewWord);
  }

  return (
    <div>
      <GuessResults results={results} />
      <GuessInput addResult={addResult} gameOver={gameOver} />
      <Keyboard results={results} />
      {gameOver && <GameOverBanner gameOver={gameOver} numGuesses={results.length} answer={answer} onRestart={onRestart} />}
    </div>
  );
}

export default Game;
