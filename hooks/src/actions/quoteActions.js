import axios from "axios";
export const FETCH_QUOTE_START = 'FETCH_QUOTE_START';
export const FETCH_QUOTE_HAPPY = 'FETCH_QUOTE_HAPPY';
export const FETCH_QUOTE_SAD = 'FETCH_QUOTE_SAD';

export const fetchQuote = (dispatch) =>  {
  // Hit the api (axios)
  dispatch({ type: FETCH_QUOTE_START }); // loading = true, display spinner
  axios.get("https://api.kanye.rest/")

  // Then, if it's happy, save the response to state.quoteReducer.quote
    .then(res => {
      console.log(res);
      dispatch({ type: FETCH_QUOTE_HAPPY, payload: res.data.quote });
    })

  // If it's sad, catch the error message and save it to state.quoteReducer.error
  .catch(err => {
    console.log(err);
    dispatch({ type: FETCH_QUOTE_SAD, payload: err });
  })
}