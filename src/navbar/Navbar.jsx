import { Link } from "react-router-dom";
import * as S from "./navbar.style";

export function Navbar() {
  return (
    <S.Header>
      <Link to="/home">
        <img src="/assets/logo.png" alt="로고" />
      </Link>

      <S.ButtonContainer>
        <Link to="/myPage">
          <S.MyButton>
            <S.MyIcon src="/assets/my.png" />
          </S.MyButton>
        </Link>

        <Link to="/upload">
          <S.UploadButton>필기 등록</S.UploadButton>
        </Link>
      </S.ButtonContainer>
    </S.Header>
  );
}
