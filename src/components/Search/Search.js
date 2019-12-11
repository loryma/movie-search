import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import * as actions from "../../store/actions";
import Input from "../Input/Input";
import Suggestion from "../Suggestion/Suggestion";

const FormWrapper = styled.div`
  margin: 0 auto 3em auto;
  position: relative;
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

const Search = ({
  query,
  fetchQuery,
  assignQuery,
  showSuggestion,
  hideSuggestion
}) => {
  const onInput = event => {
    showSuggestion();
    assignQuery(event.target.value);
  };
  const onSubmit = e => {
    e.preventDefault();
    const value = query.trim();
    if (value) {
      fetchQuery(value);
      hideSuggestion();
    }
  };
  return (
    <FormWrapper onMouseLeave={hideSuggestion} onMouseEnter={showSuggestion}>
      <Form onSubmit={onSubmit}>
        <Input
          value={query}
          onFocus={showSuggestion}
          onQueryInputHandler={onInput}
        />
        <Button>Search</Button>
      </Form>
      <Suggestion />
    </FormWrapper>
  );
};

const mapStateToProps = ({ search: { query } }) => ({ query });

const mapDispatchToProps = dispatch => ({
  fetchQuery: query => dispatch(actions.searchQuery(query)),
  assignQuery: query => dispatch(actions.setQuery(query)),
  showSuggestion: () => dispatch(actions.showSuggestion()),
  hideSuggestion: () => dispatch(actions.hideSuggestion())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
