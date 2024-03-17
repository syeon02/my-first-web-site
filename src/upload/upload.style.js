import styled from "styled-components";

export const ScreenTitle = styled.p`
  font-size: 42px;
  font-weight: bold;
  margin: 0 100px 30px 100px;
`;

export const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px 100px;
  padding: 25px 65px;
  border: 3px solid rgba(159, 159, 159, 0.5);
  border-radius: 10px;
`;

export const CourseInfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 20px;
  margin-top: 5px;
`;

export const CourseInfo = styled.p`
  font-size: 24px;
  font-weight: bold;
  margin: 15px 0;
`;

export const WriteCourseInfo = styled.textarea`
  font-size: 20px;
  padding-left: 20px;
  flex: 1;
  height: 45px;
  border: 1px solid #adadad;
  border-radius: 10px;
  resize: none;
  line-height: 45px;
  margin-left: 20px;
`;

export const Title = styled.p`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 8px;
`;

export const WriteTitle = styled.textarea`
  font-size: 20px;
  width: 100%;
  height: 45px;
  border: none;
  border-bottom: 1px solid #adadad;
  resize: none;
  line-height: 45px;
  padding-left: 5px;
  margin-bottom: 20px;
`;

export const WriteContent = styled.textarea`
  font-size: 20px;
  //width: 100%;
  height: 200px;
  border: 1px solid #adadad;
  border-radius: 10px;
  resize: none;
  line-spacing: 35px;
  padding-left: 20px;
  padding-top: 15px;
  margin-bottom: 20px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin: 10px 0;
`;

export const OkButton = styled.button`
  font-size: 20px;
  font-weight: bold;
  color: white;
  padding: 0px 30px;
  margin-left: 25px;
  height: 48px;
  border: none;
  border-radius: 55px;
  background-color: #35ae92;
  &:hover {
    background-color: rgba(53, 174, 146, 0.5);
  }
`;

export const BackButton = styled.button`
  font-size: 20px;
  font-weight: bold;
  color: white;
  padding: 0px 30px;
  height: 48px;
  border: none;
  border-radius: 55px;
  background-color: grey;
  &:hover {
    background-color: rgba(0, 0, 0, 0.2);
  }
`;
