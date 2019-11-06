import React from "react";
import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { BrowserRouter } from "react-router-dom";
import searchReducer from "./store/reducers/searchReducer";
import { routes } from "./routes";
import styled from "styled-components";

const AppContainer = styled.div`
  width: 90%;
  margin: 0 auto;
  max-width: 1200px;
`;

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  searchReducer,
  composeEnhancers(applyMiddleware(thunk))
);

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <AppContainer>{routes}</AppContainer>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
