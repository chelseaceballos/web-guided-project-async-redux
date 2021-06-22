import axios from "axios";
const FETCH_QUOTE_START = 'FETCH_QUOTE_START';
const FETCH_QUOTE_HAPPY = 'FETCH_QUOTE_SUCCESS';
const FETCH_QUOTE_SAD = 'FETCH_QUOTE_SAD';

export const fetchQuote = () => (dispatch) => {
  // Hit the api (axios)
  dispatch({ type: FETCH_QUOTE_START });

  // Then, if it's happy, save the response to state.quoteReducer.quote

  // If it's sad, catch the error message and save it to state.quoteReducer.error
}