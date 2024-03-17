import React, { useState, useEffect } from "react";
import DocumentList from "./documentList";
import axios from "axios";
import { Navbar } from "../navbar";

const profileImages = [
  "https://i.namu.wiki/i/PuM_tryOdbshu8Sx0_qPskgfSC8JczlmZuDsix5KwcS3PpNFPOgxsWWk0VApw6U94UUkheo3BGPru3AR_yIMx7Gphfe4C2XHV4yUSt2Yew5PZQqqnzAuRkCCFEuMvhOLUSy2y8SCT9UoV76srUcNFQ.webp",
  "https://i.namu.wiki/i/LOJ8PifgqXmI0-cxPBuE6sMH-DbftGAmEdvxVft_JYpST3JrElVINQx9QCwusnH8CBr1pHc0QaNRaV60B1rDYWg9ZLJmeRUYe1lY1-xvxifH1jrhentZ77mSAlqtpCoWz9lgPT3b-GfR48IUdAGIzQ.webp",
  "https://i.namu.wiki/i/nCLU56aga3Dx7uwIQhjUJ5o4J9xBDkf5x97nFrwoJ5TxtFYw-6-SFiGxdpoIjFVAIOVQDFOZD97__fhRb0tvH6QU_dJoWprertLY03K_phrMBHjcP-Ee0sgHOjAdnhSLxhZz7dxocG_ewu8wyXdU9g.webp",
  "https://i.namu.wiki/i/DSJBu8eTrRCW22OpET1o5Z7xV8qjlSFBcRkBMeHJHslLv9zPXg6E6tGtcXspU3yBra_PE1SigOL4X_uPhnPzdCKxOXVz88iDxgMEb-hBHkrwv73Or4egrMIOTnDYhpJTvWLiHqtQ-7t4gOOpfFPAEA.webp",
  "https://i.namu.wiki/i/83nW8EOD-5Nn6Jgod62DCAA9BF6KUlB-NwGKdjHnJQRzBrUlLEMEnLoI1pcbsqNZrUtKC3DWPDWupIwTie4xIach2dibQSX_wsfHr_DRlW1K8kJdMZ-d1v7CeGESGc9VysIcq9fWF0xtnnufdqbaCg.webp",
  "https://i.namu.wiki/i/punYbYGlUtq3FSx5Uifjm8GD20nLK37YVEGmNsGgSHz2DO7n7b-CIrPyKoyPk8GADgCdRitWTqqApnm2q0yXZ8GJqLKzXUu9s2aafNVC-je7YpwswKxcpagQFfxVHJIbeN1vTJGd4cvD_erVfq8bnw.webp",
  "https://i.namu.wiki/i/haLy3wmL6qM7aFzu4G6txarnCPaX8p9QmIrAXAyz-RnqxJYhiPg-4FuKfQnJy0RHY4zhRZlPkXlAny7EHvp93XsUty7JMGlCMO-ddc81YvtxfV1uKbVsgTHyqfqveUT_VOqURp0QJKZIcty_Ukqmag.webp",
  "https://i.namu.wiki/i/xnzzJUDI8xR1dySsIEv-hgzIqQo6ZIozYwF7j64gvzvliWgmx6sw1QYhOORgSxMKlaqXz6XN2zy67rvQu6BOzAT-EnOsFPPIr_rGglNZcQHqgogSou2NhqK-GBzqpCvCLiH77aqm2pIcI-B7s9HORw.webp",
  "https://i.namu.wiki/i/allpgGzZ_Vhr12n7Z-lU4713SjW121YJlfZgDnRKnbePp0yTYircZKWrQcHNaWqep_w30G85HB4BaSta7ONtWK1CdEpmCiZ0yiaCKCZgST6cPiR1b1W_-fCYmvbvBuE7zFlvZhB1jCyHT-c9hyoDkA.webp",
  "https://i.namu.wiki/i/anjn8kGFYEHaBrbpTL_7z45GpXVM211Pc1GT-nk5wPO4-ploFgjJrm5093xt7Smka--VrhtZbMT-xpqmogRKz0j0NhYw9Fx2fP7pj47jsmfg_UhUYtXKPGwu7mPHLujZH2RDnYn_D455MxUKboG0FQ.webp",
];

// "내 정보" 텍스트 스타일
const profileHeaderStyle = {
  fontSize: "40px", // 글씨 크기 설정
  fontWeight: "bold", // 글씨 두께 설정
  textAlign: "center", // 가운데 정렬
  marginBottom: "40px", // 아래쪽 여백
};

const containerStyle = {
  flexDirection: "column", // 세로 방향으로 요소 배치
  alignItems: "space-between",
  margin: "50px 100px 0 100px",
};

const documentListContainerStyle = {
  alignSelf: "flex-start", // DocumentList를 왼쪽으로 붙임
};

const profileContainerStyle = {
  display: "flex",
  flexDirection: "row", // 여기를 변경했습니다
  alignItems: "center", // 세로 중앙 정렬을 위해 추가했습니다
  justifyContent: "space-evenly", // 좌측 정렬을 위해 start로 설정
  //border: "1px solid #ddd",
  //borderRadius: "8px",
  padding: "20px",
  maxWidth: "300px",
  margin: "auto",
};

const profileImageStyle = {
  width: "80px",
  height: "80px",
  backgroundColor: "#ccc",
  borderRadius: "8px",
  //marginRight: "20px", // 사진과 닉네임 사이의 간격을 위해 추가했습니다
};

const profileNameStyle = {
  fontSize: "20px",
  color: "#333",
  justifyContent: "center",
};

export const Mypage = () => {
  const [profile, setProfile] = useState({ imageUrl: "", nickname: "" });

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        // API 요청을 통해 사용자 프로필 데이터를 가져옵니다.
        const response = await axios.get(
          `${process.env.REACT_APP_BACKEND_URL}/student`,
          {
            headers: {
              Authorization: `${localStorage.getItem("token")}`,
            },
          }
        );
        const profileData = {
          imageUrl:
            "https://upload.wikimedia.org/wikipedia/ko/thumb/4/4a/%EC%8B%A0%EC%A7%B1%EA%B5%AC.png/230px-%EC%8B%A0%EC%A7%B1%EA%B5%AC.png", // 기존 이미지 URL 사용
          nickname: response.data.nickname, // 응답에서 nickname을 사용합니다.
        };
        setProfile(profileData);
      } catch (error) {
        console.error("Fetching profile failed:", error);
      }
    };

    fetchProfile();
  }, []);

  return (
    <>
      <Navbar />
      <div style={{ paddingTop: "50px" }}>
        <div style={profileHeaderStyle}>내 정보</div>

        <div style={profileContainerStyle}>
          <div style={profileImageStyle}>
            {/* 이미지가 있을 경우 img 태그로 렌더링합니다 */}
            {profile.imageUrl && (
              <img
                src={profile.imageUrl}
                alt="Profile"
                style={{ width: "100%", height: "100%" }}
              />
            )}
          </div>
          <div>
            <div style={profileNameStyle}>닉네임</div>
            <strong style={profileNameStyle}>{profile.nickname}</strong>
          </div>
        </div>

        <div style={containerStyle}>
          <div style={documentListContainerStyle}>
            <DocumentList />
          </div>
        </div>
      </div>
    </>
  );
};
