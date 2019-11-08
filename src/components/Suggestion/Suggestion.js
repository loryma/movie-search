import React, { useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import * as actions from "../../store/actions";

const Suggestion = ({ query, suggestions, loading, error, getSuggestion }) => {
  let suggestionContent = null;

  useEffect(() => {
    if (query.length > 2) {
      getSuggestion(query);
    }
  }, [query]);

  if (suggestions) {
    suggestionContent = suggestions.map(suggestion => <div>{suggestion}</div>);
  }
  return suggestionContent;
};

const mapStateToProps = ({
  search: { query },
  suggestions: { movies, loading, error }
}) => ({ query, suggestions: movies, error, loading });

const mapDispatchToProps = dispatch => ({
  getSuggestion: query => dispatch(actions.getSuggestion(query))
});

export default Suggestion;
