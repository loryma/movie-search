import * as actionTypes from "../actions/actionsTypes";

const initialState = {
  movies: null,
  loading: false,
  error: null,
  show: false
};

const suggestionReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_SUGGESTION_START:
      return { ...state, loading: true, error: null };
    case actionTypes.GET_SUGGESTION_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        movies: action.movies
      };
    case actionTypes.GET_SUGGESTION_FAIL:
      return { ...state, loading: false, error: action.error };
    case actionTypes.HIDE_SUGGESTION:
      return { ...state, show: false };
    case actionTypes.SHOW_SUGGESTION:
      return { ...state, show: true };
    case actionTypes.CLEAR_SUGGESTION:
      return { ...state, movies: null };

    default:
      return state;
  }
};

export default suggestionReducer;
