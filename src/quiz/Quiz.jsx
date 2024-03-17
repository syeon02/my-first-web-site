import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import * as S from "./quiz.style";
import { QuizBox } from "./quizBox";
import axios from "axios";

export function Quiz({ note_id }) {
  const [isOpen, setIsOpen] = useState(false);
  const [quizItems, setQuizItems] = useState([]);
  const [userAnswers, setUserAnswers] = useState([]);
  const [showResults, setShowResults] = useState(false); // 채점 결과를 보여줄지 여부
  const [lectureName, setLectureName] = useState({});
  const [results, setResults] = useState([]);

  useEffect(() => {
    const fetchQuizItems = async () => {
      try {
        // 첫 번째 API 엔드포인트 호출
        const { data: quizData } = await axios.post(
          `${process.env.REACT_APP_BACKEND_URL}/api/quizzes/generate?noteId=${note_id}`,
          null,
          {
            headers: {
              Authorization: `${localStorage.getItem("token")}`,
            },
          }
        );
        setQuizItems(quizData.quizItems || []);

        // 두 번째 API 엔드포인트 호출
        const { data: noteData } = await axios.get(
          `${process.env.REACT_APP_BACKEND_URL}/notes/${note_id}`,
          {
            headers: {
              Authorization: `${localStorage.getItem("token")}`,
            },
          }
        );
        setLectureName(noteData);
      } catch (error) {
        console.error("Error fetching quiz items: ", error);
      }
    };
    fetchQuizItems();
  }, [note_id]);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setShowResults(false); // 모달이 닫힐 때 채점 결과를 숨김
  };

  const handleAnswerChange = (index, answer) => {
    setUserAnswers((prevAnswer) => {
      const newAnswers = [...prevAnswer];
      newAnswers[index] = answer;
      return newAnswers;
    });
  };

  const handleSubmitAnswers = () => {
    setShowResults(true);

    // 채점 결과를 저장할 배열 초기화
    const newResults = userAnswers.map((userAnswer, index) => {
      const correctAnswer = quizItems[index].answer; // API에 저장되어 있는 답안
      const isCorrect = userAnswer.trim() === correctAnswer.trim();

      return {
        question: quizItems[index].question,
        answer: quizItems[index].answer,
        isCorrect,
      };
    });

    setResults(newResults);
  };

  const customStyles = {
    overlay: {
      backgroundColor: "rgba(0,0,0,0.5)",
    },
    content: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      width: "60%",
      height: "600px",
      margin: "auto",
      borderRadius: "20px",
      boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
      padding: "30px 50px",
    },
  };

  return (
    <>
      <S.Button onClick={openModal}>퀴즈 생성하기</S.Button>

      <Modal isOpen={isOpen} onRequestClose={closeModal} style={customStyles}>
        <S.CloseContainer>
          <S.Close onClick={closeModal}>
            <S.CloseIcon src="/assets/닫기.png" alt="닫기 버튼" />
          </S.Close>
        </S.CloseContainer>
        <S.TitleContainer>
          <S.Title>{lectureName.lectureName} 퀴즈</S.Title>
          <S.Intro>다음은 필기 내용을 바탕으로 생성된 퀴즈입니다.</S.Intro>
        </S.TitleContainer>

        <S.QuizBoxContainer>
          {quizItems.map(({ question }, index) => (
            <QuizBox
              key={index}
              question={question}
              onAnswerChange={(answer) => handleAnswerChange(index, answer)}
              showResults={showResults} // 채점 결과를 보여주기 위한 props 전달
            />
          ))}
          <S.ButtonContainer>
            <S.Button onClick={handleSubmitAnswers}>채점하기</S.Button>
          </S.ButtonContainer>

          {/* 수정: 채점 결과를 화면에 출력 */}
          {showResults && (
            <S.ResultContainer>
              <S.ResultTitle>채점 결과</S.ResultTitle>
              {results.map((result, index) => (
                <div key={index}>
                  <S.ResultContent>
                    <strong>Q{index + 1} :</strong> {result.question}
                  </S.ResultContent>
                  <S.ResultContent>
                    <strong>A{index + 1} :</strong>{" "}
                    <span style={{ color: result.isCorrect ? "black" : "red" }}>
                      {result.answer}
                    </span>
                  </S.ResultContent>
                </div>
              ))}
            </S.ResultContainer>
          )}
        </S.QuizBoxContainer>
      </Modal>
    </>
  );
}
