import React, { useEffect } from "react";
import styled from "styled-components";

const InputText = styled.input`
  -webkit-appearance: none;
  border: 1px solid black;
  height: 2em;
  flex-grow: 1;
  padding-left: 0.5em;
`;

const Input = ({ value, onQueryInputHandler, onFocus, onBlur }) => (
  <InputText
    type="text"
    value={value}
    placeholder="movie"
    onChange={onQueryInputHandler}
    onFocus={onFocus}
    onBlur={onBlur}
  />
);

export default Input;
