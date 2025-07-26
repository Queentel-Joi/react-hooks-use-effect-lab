import React, { useState, useEffect } from "react";

function Question({ question, onAnswered }) {
  const [timeRemaining, setTimeRemaining] = useState(10);

  useEffect(() => {

    if (timeRemaining > 0) {
      const timeoutId = setTimeout(() => {
        setTimeRemaining((prevTime) => prevTime - 1);
      }, 1000);


      return () => clearTimeout(timeoutId);
    } else {

      setTimeRemaining(10);
      onAnswered(false);
    }
  }, [timeRemaining, onAnswered]);

  return (
    <div>
      <h2>{question.prompt}</h2>
      <ul>
        {question.answers.map((answer, index) => (
          <li key={index}>
            <button onClick={() => {
              setTimeRemaining(10);
              onAnswered(answer === question.correctAnswer);
            }}>
              {answer}
            </button>
          </li>
        ))}
      </ul>
      <p>{timeRemaining} seconds remaining</p>
    </div>
  );
}

export default Question;

