import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { fetchQuote } from "../actions/quoteActions";

const Quote = (props) => {
  useEffect(() => { fetchQuote(); }, []); // empty dep array for componentDidMount
  const { quote, loading } = useSelector((state) => state.quoteReducer);


  if (loading) {
    return <><h2>Loading..</h2></>
  }
  return (
    <>
      <h2>Kanye once said: {quote} </h2>
      <button onClick={fetchQuote} >New quote</button>
    </>
  )
}

// Step 3: connect components (we can use React Redux hooks instead of connect if we'd like to, for function components only)



export default Quote;