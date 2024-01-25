import { useCallback, useRef, useState } from "react";
import QUESTIONS from "../Questions";
import Question from "./Question";
import Summary from "./Summary";
export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);
  const activeQuestionIndex = userAnswers.length;
  const quizComplete = activeQuestionIndex === QUESTIONS.length;
  const handleClick = useCallback((selectedAnswer) => {
    setUserAnswers((prevAnswer) => {
      return [...prevAnswer, selectedAnswer];
    });
  }, []);

  const handleSkipAnswer = useCallback(() => handleClick(null), [handleClick]);
  if (quizComplete) {
    return <Summary userAnswers={userAnswers}/>;
  }

  return (
    <div id="quiz">
      <Question
        key={activeQuestionIndex}
        index={activeQuestionIndex}
        onselectAnswer={handleClick}
        onSkipAnswer={handleSkipAnswer}
      />
    </div>
  );
}
