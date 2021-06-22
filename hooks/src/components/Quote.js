import React, { useEffect } from "react";
import { connect, useSelector } from "react-redux";
import { fetchQuote } from "../actions/quoteActions";

const Quote = (props) => {
  useEffect(() => { props.fetchQuote(); }, []); // empty dep array for componentDidMount
  const quote = useSelector((state) => state.quoteReducer.quote);
  const quote = useSelector((state) => state.quoteReducer.quote);
  const quote = useSelector((state) => state.quoteReducer.quote);


  if (props.loading) {
    return <><h2>Loading..</h2></>
  }
  return (
    <>
      <h2>Kanye once said: {props.quote} </h2>
      <button onClick={props.fetchQuote} >New quote</button>
    </>
  )
}

// Step 3: connect components (we can use React Redux hooks instead of connect if we'd like to, for function components only)



export default Quote;