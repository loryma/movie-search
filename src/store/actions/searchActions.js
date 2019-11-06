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

export const searchQuery = query => {
  return dispatch => {
    dispatch(searchQueryStart());
    axios
      .get(`http://www.omdbapi.com/?&s=${query}&apikey=936510a8`)
      .then(res => {
        console.log(res.data);
        if (res.data.Response) {
          dispatch(
            searchQuerySuccess(res.data["Search"], res.data["totalResults"])
          );
        } else {
          dispatch(searchQueryFail({ message: res.data.Error }));
        }
      })
      .catch(error => dispatch(searchQueryFail(error)));
  };
};
