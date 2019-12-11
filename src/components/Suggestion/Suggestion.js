import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import * as actions from "../../store/actions";

const SuggestionContainer = styled.div`
  width: 100%;
  position: absolute;
  left: 0;
  top: 2em;
  padding: 0.2em 0;
  background-color: snow;
  border: 1px solid #ccc;
`;

const SuggestionItem = styled.a`
  line-height: 1.8em;
  font-size: 0.7em;
  display: block;
  text-decoration: none;
  color: #666;
  padding-left: 1em;
  cursor: hover;
  &:hover {
    background-color: #e8f4f8;
  }
`;

const Suggestion = ({
  query,
  suggestions,
  loading,
  error,
  getSuggestion,
  fetchQuery,
  assignQuery,
  show,
  hideSuggestion,
  clearSuggestion
}) => {
  let suggestionContent = null;
  const debounced = useRef(
    (() => {
      let isWaiting = false;
      return function(query) {
        if (isWaiting) return;
        getSuggestion(query);
        isWaiting = true;
        setTimeout(() => (isWaiting = false), 100);
      };
    })()
  );

  useEffect(() => {
    if (query && show && query.length > 2) {
      debounced.current(query);
    }

    if (show && query && query.length < 3) {
      clearSuggestion();
    }
  }, [query]);

  const chooseSuggestion = (query, e) => {
    e.preventDefault();
    fetchQuery(query);
    assignQuery(query);
    hideSuggestion();
  };

  //   const chooseSuggstionWithTab = (query, e) => {
  //       e.key
  //   }

  if (suggestions && show) {
    suggestionContent = (
      <SuggestionContainer>
        {suggestions.map(suggestion => (
          <SuggestionItem
            href=""
            tabindex="0"
            key={suggestion.imdbID}
            onClick={chooseSuggestion.bind(this, suggestion.Title)}
          >
            {suggestion.Title}
          </SuggestionItem>
        ))}
      </SuggestionContainer>
    );
  }
  return <>{suggestionContent}</>;
};

const mapStateToProps = ({
  search: { query },
  suggestions: { movies, loading, error, show }
}) => ({ query, suggestions: movies, error, loading, show });

const mapDispatchToProps = dispatch => ({
  getSuggestion: query => dispatch(actions.getSuggestion(query)),
  fetchQuery: query => dispatch(actions.searchQuery(query)),
  assignQuery: query => dispatch(actions.setQuery(query)),
  showSuggestion: () => dispatch(actions.showSuggestion()),
  hideSuggestion: () => dispatch(actions.hideSuggestion()),
  clearSuggestion: () => dispatch(actions.clearSuggestion())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Suggestion);
