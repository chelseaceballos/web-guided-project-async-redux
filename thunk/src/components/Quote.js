import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchQuote } from "../actions/quoteActions";

const Quote = (props) => {
  useEffect(() => { props.fetchQuote(); }, []); // empty dep array for componentDidMount

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

const mapStatetoProps = (state) => {
  return {
    quote: state.quoteReducer.quote,
    error: state.quoteReducer.error,
    loading: state.quoteReducer.loading,
  }
}

export default connect(mapStatetoProps, {fetchQuote})(Quote);