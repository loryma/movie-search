import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import * as actions from "../../store/actions";
import Input from "../Input/Input";

const Form = styled.form`
  width: 100%;
  margin: 2em auto;
  display: flex;
  @media (min-width: 780px) {
    width: 50%;
  }
`;

const Button = styled.button`
  -webkit-appearance: none;
  background: white;
  border: 1px solid black;
  height: 2em;
`;

const Search = ({ fetchQuery }) => {
  const [query, setQuery] = useState("");
  const onInput = event => {
    setQuery(event.target.value);
  };
  const onSubmit = e => {
    e.preventDefault();
    const value = query.trim();
    if (value) {
      fetchQuery(value);
    }
  };
  return (
    <Form onSubmit={onSubmit}>
      <Input value={query} onQueryInputHandler={onInput} />
      <Button>Search</Button>
    </Form>
  );
};

const mapDispatchToProps = dispatch => ({
  fetchQuery: query => dispatch(actions.searchQuery(query))
});

export default connect(
  null,
  mapDispatchToProps
)(Search);
