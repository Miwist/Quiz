import React from "react";

const Game = ({ step, question, questions, onClickVariant }) => {
  const percent = Math.round((step / questions.length) * 100);

  return (
    <>
      <div className="progress">
        <div style={{ width: `${percent}%` }} className="progress__inner"></div>
      </div>
      <h1>{question.title}</h1>
      <h2>{step}/{questions.length}</h2>
      <ul>
        {question.variants.map((text, index) => (
          <li onClick={() => onClickVariant(index)}>{text}</li>
        ))}
      </ul>
    </>
  );
};

export default Game;
