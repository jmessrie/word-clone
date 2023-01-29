import React from "react";

function Keyboard({results}) {
  const statusByLetter = {};
  for(let i = 0; i < results.length; i++) {
    const statusItem = results[i].status;
    for(let j = 0; j < statusItem.length; j++) {
      const {letter, status} = statusItem[j];
      if(!statusByLetter[letter] || statusByLetter[letter] !== 'correct') {
        statusByLetter[letter] = status;
      }
    }
  }
  return (
    <>
      <p className="keyboardRow">
        {['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'].map(
          letter => <span key={letter} className={`cell ${statusByLetter[letter]}`}>{letter}</span>
        )}
      </p>
      <p className="keyboardRow">
        {['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'].map(
          letter => <span key={letter} className={`cell ${statusByLetter[letter]}`}>{letter}</span>
        )}
      </p>
      <p className="keyboardRow">
        {['Z', 'X', 'C', 'V', 'B', 'N', 'M'].map(
          letter => <span key={letter} className={`cell ${statusByLetter[letter]}`}>{letter}</span>
        )}
      </p>
    </>
  );
}

export default Keyboard;
