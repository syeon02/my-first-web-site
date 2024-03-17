import styled from "styled-components";

export const Header = styled.div`
  background-color: #35ae92;
  height: 100px;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 50px;
  padding: 0px 35px;
  justify-content: space-between;
  box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.25);
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
`;

export const MyButton = styled.button`
  display: flex;
  background-color: transparent;
  border: none;
  border-radius: 35px;
  margin-right: 25px;
  padding: 5px;
  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
`;

export const MyIcon = styled.img`
  width: 35px;
  height: 35px;
`;

export const UploadButton = styled.button`
  background-color: white;
  border: none;
  border-radius: 10px;
  font-size: 20px;
  font-weight: bold;
  color: black;
  padding: 5px 20px;
  &:hover {
    background-color: rgba(255, 255, 255, 0.8);
  }
`;
