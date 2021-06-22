import React from "react";
import { connect } from "react-redux";

const Quote = (props) => {
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