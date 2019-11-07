import axios from "axios";
import * as actionTypes from "./actionsTypes";

const searchQueryStart = () => ({ type: actionTypes.SEARCH_QUERY_START });
const searchQuerySuccess = (movies, totalResults) => ({
  type: actionTypes.SEARCH_QUERY_SUCCESS,
  movies,
  totalResults
});
const searchQueryFail = error => ({
  type: actionTypes.SEARCH_QUERY_FAIL,
  error
});

export const setCurrentPage = pageNow => ({
  type: actionTypes.SET_CURRENT_PAGE,
  pageNow
});

export const setInitialState = () => ({ type: actionTypes.SET_INITIAL_STATE });

export const searchQuery = (query, page) => {
  const params = page ? `s=${query}&page=${page}` : `s=${query}`;
  return (dispatch, getState) => {
    dispatch(searchQueryStart());
    // check if first search request and hide favorite movies message shown on initial load
    if (getState().search.initial) {
      dispatch(setInitialState());
    }
    axios
      .get(`https://www.omdbapi.com/?&${params}&apikey=936510a8`)
      .then(res => {
        if (res.data.Response === "True") {
          dispatch(
            searchQuerySuccess(res.data["Search"], res.data["totalResults"])
          );

          if (page) {
            dispatch(setCurrentPage(page));
          }
        } else {
          dispatch(searchQueryFail({ message: res.data.Error }));
        }
      })
      .catch(error => dispatch(searchQueryFail(error)));
  };
};

export const fetchInitialMovies = query => {
  const params = `s=${query}`;
  return dispatch => {
    dispatch(searchQueryStart());
    axios
      .get(`https://www.omdbapi.com/?&${params}&apikey=936510a8`)
      .then(res => {
        if (res.data.Response === "True") {
          dispatch(searchQuerySuccess(res.data["Search"].slice(0, 4), null));
        } else {
          dispatch(searchQueryFail({ message: res.data.Error }));
        }
      })
      .catch(error => dispatch(searchQueryFail(error)));
  };
};
