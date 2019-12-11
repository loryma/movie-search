import * as actionTypes from "../actions/actionsTypes";

const initialState = {
  movie: null,
  loading: false,
  error: false
};

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_MOVIE_START:
      return { ...state, loading: true, error: false };
    case actionTypes.GET_MOVIE_SUCCESS:
      return { ...state, loading: false, error: false, movie: action.movie };
    case actionTypes.GET_MOVIE_FAIL:
      return { ...state, loading: false, error: action.error };
    default:
      return state;
  }
};

export default movieReducer;
