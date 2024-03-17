import styled from "styled-components";

export const NoteContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px 150px;
`;

export const TitleContainer = styled.div`
  border-bottom: 1px solid #35ae92;
  margin-bottom: 40px;
`;

export const Title = styled.p`
  font-size: 54px;
  font-weight: bold;
  margin-bottom: 40px;
  margin-top: 20px;
`;

export const CourseInfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 0px;
`;

export const CourseInfo = styled.p`
  font-size: 28px;
  font-weight: bold;
  margin-top: 0px;
  margin-right: 20px;
`;

export const NickName = styled.p`
  font-size: 28px;
  font-weight: bold;
`;

export const Date = styled.p`
  font-size: 24px;
  color: #919796;
  margin-top: 10px;
  margin-bottom: 50px;
`;

export const QuizContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 50px;
`;

export const Content = styled.p`
  font-size: 18px;
  line-height: 2.5;
`;
