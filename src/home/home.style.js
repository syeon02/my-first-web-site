import styled from "styled-components";

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px 50px;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ViewButton = styled.button`
  width: 120px;
  height: 40px;
  border-radius: 20px;
  border: none;
  background-color: lightgrey;
  &:hover {
    background-color: rgba(211, 211, 211, 0.5);
  }
`;

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 50px;
`;
