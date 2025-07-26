import React, { useState } from "react";
import Question from "./Question";

const questions = [
  {
    id: 1,
    prompt: "What is the capital of Kenya?",
    answers: ["Nairobi", "Kampala", "Dodoma", "Addis Ababa"],
    correctAnswer: "Nairobi"
  },
  {
    id: 2,
    prompt: "Which planet is known as the Red Planet?",
    answers: ["Earth", "Mars", "Jupiter", "Venus"],
    correctAnswer: "Mars"
  }
];

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);

  function handleAnswer(isCorrect) {
    if (isCorrect) {
      setScore((prev) => prev + 1);
    }

    // Move to next question
    setCurrentIndex((prev) => prev + 1);
  }

  const currentQuestion = questions[currentIndex];

  return (
    <div className="App">
      <h1>Trivia Game</h1>
      <p>Score: {score}</p>
      {currentQuestion ? (
        <Question question={currentQuestion} onAnswered={handleAnswer} />
      ) : (
        <p>Game Over! Your final score is {score}.</p>
      )}
    </div>
  );
}

export default App;

