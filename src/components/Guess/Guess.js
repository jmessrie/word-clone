import React from "react";

import { range } from "../../utils";

function Guess({characters="", status}) {
  const charArray = [...characters];
  return (
    <p className="guess">
      {range(0, 5).map((index) => {
        const statusClass = status && status[index] ? status[index].status : "";
        return <span className={`cell ${statusClass}`} key={index}>{charArray[index]}</span>
      })}
    </p>
  );
}

export default Guess;
