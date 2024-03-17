import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; 

const signUpStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
  backgroundColor: '#35AE92',
};

const cardStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '20px',
  backgroundColor: 'white',
  borderRadius: '5px',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
  textAlign: 'center',
  width: '300px', // or your desired width

  padding: '40px', // 패딩 증가
    width: '400px', // 너비 증가
};

const textStyle = {
  fontSize: '24px',
  fontWeight: 'bold',
  color: '#333',
  margin: '0 0 20px 0',

  fontSize: '40px', 
};

const inputStyle = {
  margin: '10px 0',
  padding: '10px',
  border: '1px solid #ddd',
  borderRadius: '4px',
  width: '100%', // inputs take full width of card


  padding: '15px', // 패딩 증가
  width: '100%', // 부모 요소(cardStyle)에 맞춰 너비 조정
};

const buttonStyle = {
  margin: '20px 0',
  padding: '10px 15px',
  border: 'none',
  borderRadius: '4px',
  backgroundColor: '#35AE92',
  color: 'white',
  width: '100%', // button takes full width of card
  cursor: 'pointer',

  padding: '15px 20px', // 패딩 증가
  width: '100%', // 부모 요소(cardStyle)에 맞춰 너비 조정
};

const closeButtonStyle = {
  position: 'absolute', // or 'fixed' depending on your layout
  top: '20px',
  right: '20px',
  cursor: 'pointer',
  color: '#333',
  border: 'none',
  background: 'none',
  fontSize: '24px',
};

export const SignUp = () => {

  const navigate = useNavigate(); // useNavigate 호출하여 navigate 함수를 생성

  // 입력된 값들을 상태로 관리
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nickname, setNickname] = useState('');

  // 입력 변경 핸들러
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleNicknameChange = (e) => setNickname(e.target.value);


  const handleSignUp = () => {
    // 회원가입 처리
    // axios를 사용하여 POST 요청
    axios.post(`${process.env.REACT_APP_BACKEND_URL}/signup`, { email, password, nickname })
      .then(response => {
        // 성공 처리 로직
        alert('회원가입이 완료되었습니다.');
        // 로그인 페이지로 리다이렉트
        navigate('/login'); 

      })
      .catch(error => {
        // 에러 처리 로직
        // 예: 에러 메시지 표시
        console.error('회원가입 에러', error);
        alert('회원가입 중 문제가 발생했습니다.');
      });
  };

  return (
    <div style={signUpStyle}>
      <div style={cardStyle}>
        <div style={textStyle}>회원가입하기</div>
        <input 
          type="text" 
          placeholder="닉네임" 
          value={nickname} 
          onChange={handleNicknameChange} 
          style={inputStyle} />
        <input 
          type="email" 
          placeholder="이메일 주소" 
          value={email} 
          onChange={handleEmailChange} 
          style={inputStyle} />
        <input 
          type="password" 
          placeholder="비밀번호" 
          value={password} 
          onChange={handlePasswordChange} 
          style={inputStyle} />
        <button style={buttonStyle} onClick={handleSignUp}>회원가입하기</button>
      </div>
    </div>
  );
};