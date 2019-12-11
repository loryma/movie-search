import axios from "axios";
import * as actionTypes from "./actionsTypes";

const getSuggestionStart = () => ({ type: actionTypes.GET_SUGGESTION_START });
const getSuggestionSuccess = movies => ({
  type: actionTypes.GET_SUGGESTION_SUCCESS,
  movies
});
const getSuggestionFail = error => ({
  type: actionTypes.GET_SUGGESTION_FAIL,
  error
});

export const hideSuggestion = () => ({ type: actionTypes.HIDE_SUGGESTION });
export const showSuggestion = () => ({ type: actionTypes.SHOW_SUGGESTION });
export const clearSuggestion = () => ({ type: actionTypes.CLEAR_SUGGESTION });

export const getSuggestion = query => {
  const params = `s=${query}`;
  return dispatch => {
    dispatch(getSuggestionStart());
    axios
      .get(`https://www.omdbapi.com/?&${params}&apikey=936510a8`)
      .then(res => {
        if (res.data.Response === "True") {
          dispatch(getSuggestionSuccess(res.data["Search"].slice(0, 7)));
        } else {
          dispatch(getSuggestionFail({ message: res.data.Error }));
        }
      })
      .catch(error => dispatch(getSuggestionFail(error)));
  };
};
