import React from "react";
import styled from "styled-components";

const Backdrop = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 100;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;

const ModalContainer = styled.div`
  position: fixed;
  z-index: 500;
  background-color: white;
  width: 70%;
  border: 1px solid #ccc;
  box-shadow: 1px 1px 1px black;
  padding: 16px;
  left: 15%;
  top: 30%;
  box-sizing: border-box;
  transition: all 0.3s ease-out;

  transform: ${props => (props.show ? "transforY(0)" : "transform(-100vh)")};
  opacity: ${props => (props.show ? "1" : "0")};
`;

const Modal = ({ show, children, close }) => {
  return (
    <>
      {show ? <Backdrop onClick={close}></Backdrop> : null}
      <ModalContainer show={show}>{children}</ModalContainer>
    </>
  );
};

export default Modal;
