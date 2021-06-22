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
  quote: state.quoteReducer.quote
}

export default connect(mapStateToProps)(Quote);