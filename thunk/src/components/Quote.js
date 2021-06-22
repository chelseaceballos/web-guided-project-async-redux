import React, { useEffect } from "react";
import { connect } from "react-redux";

const Quote = (props) => {
  useEffect(() => { props.getQuote();}, [])
  return (
    <>
      <h2>Kanye says: {props.quote} </h2>
    </>
  )
}

const mapStatetoProps = (state) => {
  return {
    quote: state.quoteReducer.quote
  }
}

export default connect(mapStatetoProps)(Quote);