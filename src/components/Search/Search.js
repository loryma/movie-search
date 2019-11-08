import React, { useState } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import * as actions from "../../store/actions";
import Input from "../Input/Input";
import Suggestion from "../Suggestion/Suggestion";

const FormWrapper = styled.form`
  margin: 0 auto 3em auto;
  @media (min-width: 780px) {
    width: 50%;
  }
`;

const Form = styled.form`
  width: 100%;
  display: flex;
`;

const Button = styled.button`
  -webkit-appearance: none;
  background: white;
  border: 1px solid black;
  height: 2em;
`;

const Search = ({ initialQuery, fetchQuery, assignQuery }) => {
  const [query, setQuery] = useState(initialQuery);
  const onInput = event => {
    setQuery(event.target.value);
    assignQuery(event.target.value);
  };
  const onSubmit = e => {
    e.preventDefault();
    const value = query.trim();
    if (value) {
      fetchQuery(value);
    }
  };
  return (
    <FormWrapper>
      <Form onSubmit={onSubmit}>
        <Input value={query} onQueryInputHandler={onInput} />
        <Button>Search</Button>
      </Form>
      <Suggestion />
    </FormWrapper>
  );
};

const mapStateToProps = ({ search: { query } }) => ({ initialQuery: query });

const mapDispatchToProps = dispatch => ({
  fetchQuery: query => dispatch(actions.searchQuery(query)),
  assignQuery: query => dispatch(actions.setQuery(query))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
