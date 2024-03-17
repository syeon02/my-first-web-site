import React, { useState } from "react";
import * as S from "./quizBox.style";

export function QuizBox({ question, onAnswerChange, showResults }) {
  const [userAnswer, setUserAnswer] = useState("");

  const handleAnswerChange = (event) => {
    setUserAnswer(event.target.value);
    onAnswerChange(event.target.value); // 부모 컴포넌트로 사용자가 입력한 답안을 전달
  };

  return (
    <>
      <S.Question>{question}</S.Question>
      <S.WriteAnswer
        type="text"
        placeholder="답안 작성하기"
        value={userAnswer}
        onChange={handleAnswerChange}
        disabled={showResults}
      />
    </>
  );
}
