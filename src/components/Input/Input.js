import React from "react";
import styled from "styled-components";

const InputText = styled.input`
  -webkit-appearance: none;
  border: 1px solid black;
  height: 2em;
  flex-grow: 1;
  padding-left: 0.5em;
`;

const Input = ({ query, onQueryInputHandler }) => (
  <InputText value={query} onChange={onQueryInputHandler} />
);

export default Input;
