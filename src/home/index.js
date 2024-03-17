import React, { useState, useEffect } from "react";
import axios from "axios";
import { Navbar } from "../navbar";
import * as S from "./home.style";
import { Link } from "react-router-dom"; // react-router-dom을 사용하여 라우팅

// RadioButtonAndSearch 컴포넌트 정의
function RadioButtonAndSearch(props) {
  const [category, setCategory] = useState("subject");
  const [query, setQuery] = useState("");

  const handleCategoryChange = (event) => setCategory(event.target.value);
  const handleQueryChange = (event) => setQuery(event.target.value);

  const handleSearch = async (event) => {
    try {
      event.preventDefault();
      const searchType = category == "subject" ? "lecture" : "professor";

      const response = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/notes?searchType=${searchType}&searchTerm=${query}`,
        {
          headers: {
            Authorization: `${localStorage.getItem("token")}`,
          },
        }
      );

      props.onSearch(response.data);
    } catch (error) {
      console.log("실패!", error);
    }
  };

  return (
    <div style={{ marginBottom: "30px" }}>
      <form onSubmit={handleSearch}>
        <div>
          <label>
            <input
              type="radio"
              value="subject"
              checked={category === "subject"}
              onChange={handleCategoryChange}
            />
            &nbsp; 과목명 &nbsp; &nbsp; &nbsp; &nbsp;
          </label>
          <label>
            <input
              type="radio"
              value="professor"
              checked={category === "professor"}
              onChange={handleCategoryChange}
            />
            &nbsp; 교수명
          </label>
        </div>
        <div style={{ margin: "1em" }}>
          <input
            type="text"
            value={query}
            onChange={handleQueryChange}
            placeholder={category === "subject" ? "과목명 검색" : "교수명 검색"}
            style={searchInputStyle}
          />
          <span style={{ margin: "0 0.5em" }}></span>
          <button type="submit" style={searchButtonStyle}>
            &nbsp;검색&nbsp;
          </button>
        </div>
      </form>
    </div>
  );
}

// DocumentList 컴포넌트 정의
function DocumentList({ documents }) {
  // const navigate = useNavigate();

  {
    /*
  const viewDocument = async (docId) => {
    try {
      //console.log("여기까지 왔다!");
      // `localStorage.getItem('token')`을 사용하여 토큰을 헤더에 포함시킵니다.
      const response = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/notes/${docId}`,
        {
          headers: {
            Authorization: `${localStorage.getItem("token")}`,
          },
        }
      );
      console.log("response :", response);
      console.log("response data:", response.data);
      // 이곳에서는 response.data를 콘솔에 로깅하고 있습니다. 실제 애플리케이션에서는
      // 응답 데이터를 사용하여 상세 페이지로 네비게이션하거나, 상세 정보를 표시하는 등의 처리를 할 수 있습니다.
      // navigate(`${process.env.REACT_APP_BACKEND_URL}/notes/${docId}`, { state: { documentDetails: response.data } });
      // window.location.href = `${process.env.REACT_APP_BACKEND_URL}/notes/${docId}`;
    } catch (error) {
      console.log("실패!", error);
      // 실패 처리 로직, 예를 들어 에러 메시지를 표시하거나 로그인 페이지로 리다이렉션 할 수 있습니다.
    }
  };
*/
  }
  return (
    <S.ListContainer>
      {documents.map((doc) => (
        <div key={doc.id} style={documentStyle}>
          <S.InfoContainer>
            <div style={titleStyle}>{doc.title}</div>
            <div style={infoStyle}>
              {doc.lectureName} | {doc.professorName}
            </div>
          </S.InfoContainer>

          <Link to={`/notes/${doc.id}`} style={{ textDecoration: "none" }}>
            <S.ViewButton>보러가기 →</S.ViewButton>
          </Link>
          {/* 연결 필요
          <Link to={`/notes/${doc.id}`}>보러가기 →</Link> */}
        </div>
      ))}
    </S.ListContainer>
  );
}

export const Home = () => {
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const fetchList = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BACKEND_URL}/notes`,
          {
            headers: {
              Authorization: `${localStorage.getItem("token")}`,
            },
          }
        );
        console.log("response :", response);
        console.log("response data:", response.data);
        setSearchResults(response.data);
      } catch (error) {
        console.log("Fetching list failed", error);
      }
    };

    fetchList();
  }, []);

  return (
    <>
      <Navbar />
      <div style={containerStyle}>
        <S.SearchContainer>
          <img
            src={`/assets/logo_notegather.png`}
            alt="NoteGather Logo"
            style={{ width: "300px", margin: "20px 0 60px 0" }}
          />
          {/*${process.env.PUBLIC_URL}*/}
          <RadioButtonAndSearch onSearch={setSearchResults} />
        </S.SearchContainer>

        {/*<div style={documentListContainerStyle}>*/}
        <DocumentList documents={searchResults} />
        {/*</div>*/}
      </div>
    </>
  );
};

const containerStyle = {
  display: "flex", // 가로 정렬을 위해 flex 사용
  flexDirection: "column", // 세로 방향으로 요소 배치
  //alignItems: "center", // 모든 요소를 가로 기준 가운데 정렬
  margin: "50px 100px 0 100px",
};

{
  /*
const documentListContainerStyle = {
  alignSelf: "flex-start", // DocumentList를 왼쪽으로 붙임
};
*/
}

// 인라인 스타일 정의
const searchInputStyle = {
  width: "500px", // 검색창을 가로로 길게
  height: "2em", // 검색창의 세로 크기
  padding: "0.5em", // 내부 여백
};

const searchButtonStyle = {
  height: "2.5em", // 버튼의 세로 크기
  fontSize: "1em", // 버튼의 폰트 크기
  cursor: "pointer", // 마우스 오버 시 커서 변경
};

const documentStyle = {
  marginBottom: "50px",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
};

const titleStyle = {
  fontWeight: "bold", // 진한 글씨
  fontSize: "25px", // 큰 크기
  marginTop: "5px", // 제목과 내용 사이에 마진 추가
};

const infoStyle = {
  marginTop: "20px", // 내용과 버튼 사이에 마진 추가
  marginBottom: "20px",
  fontSize: "20px",
};

/*
const linkStyle = {
  color: "#35AE92",
};
*/
