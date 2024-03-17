import * as S from "./note.style";
import { Quiz } from "../quiz";
import { Navbar } from "../navbar";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export function Note() {
  const { noteId } = useParams();
  const [noteData, setNoteData] = useState({});

  useEffect(() => {
    const fetchNoteData = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BACKEND_URL}/notes/${noteId}`,
          {
            headers: {
              Authorization: `${localStorage.getItem("token")}`,
            },
          }
        );
        setNoteData(response.data);
      } catch (error) {
        console.error("Error fetching note data: ", error);
      }
    };
    fetchNoteData();
  }, []);

  return (
    <>
      <Navbar />
      <S.NoteContainer>
        <S.TitleContainer>
          <S.Title>{noteData.title}</S.Title>
          <S.CourseInfoContainer>
            <S.CourseInfo style={{ color: "#919796" }}>과목명</S.CourseInfo>
            <S.CourseInfo>{noteData.lectureName}</S.CourseInfo>
          </S.CourseInfoContainer>
          <S.CourseInfoContainer>
            <S.CourseInfo style={{ color: "#919796" }}>교수명</S.CourseInfo>
            <S.CourseInfo>{noteData.professorName}</S.CourseInfo>
          </S.CourseInfoContainer>
          <S.NickName>{noteData.studentName}</S.NickName>
          <S.Date>
            {noteData.createdDate && noteData.createdDate.substring(0, 10)}
          </S.Date>
        </S.TitleContainer>

        <S.QuizContainer>
          <Quiz note_id={noteId} />
        </S.QuizContainer>

        <S.Content>{noteData.content}</S.Content>
      </S.NoteContainer>
    </>
  );
}
