import React from 'react';
import styled from 'styled-components';

export default function LogOutButton() {
  const handleKakaoLogout = () => {
    if (localStorage.getItem('cream_token')) {
      localStorage.removeItem('cream_token');
      alert('로그아웃되었습니다.');
    } else {
      alert('로그인 상태가 아닙니다.');
    }
  };

  return (
    <>
      <LogoutButton onClick={handleKakaoLogout}>로그아웃</LogoutButton>
    </>
  );
}

const LogoutButton = styled.button`
  margin-left: 10px;
`;
