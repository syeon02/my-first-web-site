import styled from "styled-components";

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 40px;
`;

export const Title = styled.p`
  font-size: 40px;
  font-weight: bold;
  margin-bottom: 0px;
`;

export const Intro = styled.p`
  font-size: 18px;
`;

export const CloseContainer = styled.div`
  display: flex;
  margin-left: auto;
  //justify-content: flex-end;
`;

export const Close = styled.button`
  border: none;
  background-color: transparent;
`;

export const CloseIcon = styled.img`
  width: 24px;
  height: 24px;
  padding: 5px;

  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  margin-left: auto;
  //justify-content: flex-end;
  margin-top: 25px;
`;

export const Button = styled.button`
  font-size: 24px;
  font-weight: bold;
  color: white;
  padding: 0px 30px;
  height: 48px;
  border: none;
  border-radius: 55px;
  background-color: #35ae92;
  &:hover {
    background-color: rgba(53, 174, 146, 0.5);
  }
`;

export const QuizBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
`;

export const ResultContainer = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  margin-right: auto;
  margin-bottom: 30px;
`;

export const ResultTitle = styled.p`
  font-size: 24px;
  font-weight: bold;
`;

export const ResultContent = styled.p`
  font-size: 18px;
`;
