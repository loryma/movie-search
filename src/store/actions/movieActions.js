import axios from "axios";
import * as actionTypes from "./actionsTypes";

const getMovieStart = () => ({ type: actionTypes.GET_MOVIE_START });
const getMovieSuccess = movie => ({
  type: actionTypes.GET_MOVIE_SUCCESS,
  movie
});
const getMovieFail = error => ({
  type: actionTypes.GET_MOVIE_FAIL,
  error
});

export const getMovie = id => {
  return dispatch => {
    const params = `i=${id}&plot=full`;
    dispatch(getMovieStart());
    axios
      .get(`https://www.omdbapi.com/?&${params}&apikey=936510a8`)
      .then(res => {
        console.log("movie", res.data);
        if (res.data.Response === "True") {
          dispatch(getMovieSuccess(res.data));
        } else {
          dispatch(getMovieFail({ message: res.data.Error }));
        }
      })
      .catch(error => dispatch(getMovieFail(error)));
  };
};
