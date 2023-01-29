import React from "react";

import Guess from "../Guess";

import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function GuessResults({ results, answer }) {
  return (
    <div className="guess-results">
      {range(0, NUM_OF_GUESSES_ALLOWED).map((index) => {
        const result = results[index] || {};
        return <Guess key={index} characters={result.word} status={result.status} />
      })}
    </div>
  );
}

export default GuessResults;
