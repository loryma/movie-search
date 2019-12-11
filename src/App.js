import React from "react";
import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { BrowserRouter } from "react-router-dom";
import searchReducer from "./store/reducers/searchReducer";
import movieReducer from "./store/reducers/movieReducer";
import suggestionReducer from "./store/reducers/suggestionReducer";
import { routes } from "./routes";
import Logo from "./components/Logo/Logo";
import styled from "styled-components";

const AppContainer = styled.div`
  width: 90%;
  margin: 0 auto;
  max-width: 1200px;
  padding: 1em 0 2em 0;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  combineReducers({
    search: searchReducer,
    movie: movieReducer,
    suggestions: suggestionReducer
  }),
  composeEnhancers(applyMiddleware(thunk))
);

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Logo>Movies</Logo>
        <AppContainer>{routes}</AppContainer>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
