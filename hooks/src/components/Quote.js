import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchQuote } from "../actions/quoteActions";

const Quote = (props) => {
  const { quote, loading } = useSelector((state) => state.quoteReducer);
  const dispatch = useDispatch();
  useEffect(() => { fetchQuote(dispatch); }, []); // empty dep array for componentDidMount

  if (loading) {
    return <><h2>Loading..</h2></>
  }
  return (
    <>
      <h2>Kanye once said: {quote} </h2>
      <button onClick={() => fetchQuote(dispatch)} >New quote</button>
    </>
  )
}

// Step 3: connect components (we can use React Redux hooks instead of connect if we'd like to, for function components only)
export default Quote;