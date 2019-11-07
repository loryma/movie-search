import * as actionTypes from "../actions/actionsTypes";

const initialState = {
  query: "",
  movies: null,
  totalResults: null,
  loading: false,
  error: null,
  page: null,
  pageNow: 1,
  initial: true
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
    case actionTypes.SEARCH_QUERY_FAIL:
      return { ...state, loading: false, error: action.error };
    case actionTypes.SET_QUERY:
      return { ...state, query: action.query };
    case actionTypes.SET_CURRENT_PAGE:
      return { ...state, pageNow: action.pageNow };
    case actionTypes.SET_INITIAL_STATE:
      return { ...state, initial: false };
    default:
      return state;
  }
};

export default searchReducer;
