import * as actionTypes from "../actions/actionsTypes";

const initialState = {
  movies: null,
  totalResults: null,
  loading: false,
  error: null,
  page: null,
  pageNow: null
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SEARCH_QUERY_START:
      return { ...state, loading: true, error: null };
    case actionTypes.SEARCH_QUERY_SUCCESS:
      const page = Math.ceil(action.totalResults / 10);
      return {
        ...state,
        loading: false,
        error: null,
        movies: action.movies,
        totalResults: action.totalResults,
        page
      };
    default:
      return state;
  }
};

export default searchReducer;
