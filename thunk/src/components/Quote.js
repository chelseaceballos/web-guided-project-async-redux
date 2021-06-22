import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchQuote } from "../actions/quoteActions";

const Quote = (props) => {
  useEffect(() => { props.fetchQuote(); }, []); // empty dep array for componentDidMount
  return (
    <>
      <h2>Kanye says: {props.quote} </h2>
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