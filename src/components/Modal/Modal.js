import React from 'react';
import styled from 'styled-components';
import Styled from 'styled-components';

export default function Modal({ on, setOn, children, navSearch }) {
  return (
    <ModalStyle displayOn={on}>
      {navSearch ? (
        <NavSearchModal>{children}</NavSearchModal>
      ) : (
        <ModalContentStyle className="modalContent">
          {children}
        </ModalContentStyle>
      )}
    </ModalStyle>
  );
}

const ModalStyle = Styled.section`
  display: ${props => (props.displayOn ? 'block' : 'none')};
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 1;
`;

const ModalContentStyle = Styled.div`
  ${props => props.theme.flexbox('column', 'flex-start', 'center')}
  position: relative;
  width: 450px;
  min-height: 530px;
  margin: 10% auto;
  padding: 25px 28px;
  border-radius: 20px;
  background-color: #fff;
`;

const NavSearchModal = styled.div`
  position: fixed;
  width: 100%;
  background-color: #fff;
`;
