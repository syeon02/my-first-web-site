import React, { useState } from "react";
import * as S from "./upload.style";
import { Navbar } from "../navbar";
import { Link } from "react-router-dom";

export function Upload() {
  const [courseInfo, setCourseInfo] = useState({
    lectureName: "",
    professorName: "",
  });
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  //const [isUpload, setIsUpload] = useState(false);

  const handlePost = async () => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/notes`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `${localStorage.getItem("token")}`,
          },
          body: JSON.stringify({
            title: title,
            content: content,
            lectureName: courseInfo.lectureName,
            professorName: courseInfo.professorName,
          }),
        }
      );
      const data = await response.json();
      console.log("Note ID:", data); // Note ID를 콘솔에 출력
      //setIsUpload(true);
      if (
        window.confirm(
          "필기 노트가 성공적으로 등록되었습니다. 홈으로 이동하시겠습니까?"
        )
      ) {
        window.location.href = "/home"; // /home 홈으로 이동
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <Navbar />
      <S.ScreenTitle>새 필기 노트</S.ScreenTitle>
      <S.PostContainer>
        <S.CourseInfoContainer>
          <S.CourseInfo>과목명</S.CourseInfo>
          <S.WriteCourseInfo
            type="text"
            placeholder="띄어쓰기 없이 작성해주세요."
            value={courseInfo.lectureName} // 입력값을 상태로 설정
            onChange={(e) =>
              setCourseInfo({ ...courseInfo, lectureName: e.target.value })
            }
          />
          <S.CourseInfo style={{ marginLeft: "45px" }}>교수명</S.CourseInfo>
          <S.WriteCourseInfo
            type="text"
            placeholder="띄어쓰기 없이 작성해주세요."
            value={courseInfo.professorName} // 입력값을 상태로 설정
            onChange={(e) =>
              setCourseInfo({ ...courseInfo, professorName: e.target.value })
            }
          />
        </S.CourseInfoContainer>
        <S.Title>제목</S.Title>
        <S.WriteTitle
          type="text"
          placeholder="필기에 대한 정보가 드러나도록 제목을 입력해주세요."
          value={title} // 입력값을 상태로 설정
          onChange={(e) => setTitle(e.target.value)}
        />
        <S.Title style={{ marginBottom: "15px" }}>내용</S.Title>
        <S.WriteContent
          type="text"
          placeholder="필기 내용을 입력해주세요."
          value={content} // 입력값을 상태로 설정
          onChange={(e) => setContent(e.target.value)}
        />
        <S.ButtonContainer>
          <Link to="/home">
            <S.BackButton>취소하기</S.BackButton>
          </Link>
          <S.OkButton onClick={handlePost}>등록하기</S.OkButton>
        </S.ButtonContainer>
      </S.PostContainer>

      {/*
      {isUpload && (
        <div>
          <p>등록되었습니다!</p>
          <button>홈</button>
          <button>마이페이지</button>
        </div>
      )}*/}
    </>
  );
}
