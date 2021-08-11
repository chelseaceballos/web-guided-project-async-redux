import React, { useEffect } from 'react';
import { fetchStart, fetchSuccess, fetchFail} from './../actions';
import { connect } from 'react-redux';
import axios from 'axios';

const Person = ({ person, isFetching, error }) => {
  useEffect(() => {
  });

  if (error) {
    return <h2>We got an error: {error}</h2>;
  }

  if (isFetching) {
    return <h2>Fetching person for ya!</h2>;
  }

  const handleClick = ()=> {
    props.fetchStart();
    //1. dispatch fetchStart.
    //2. axios call for person
    //3. if axios call is successful, dispatch fetchSuccess.
    //4. if axios call is not successful, dispatch fetchFail.
  }

  return (
    <>
      <div>
        <h2>Say Hi to: {person.name.first} {person.name.last}</h2>
        <img src={person.picture.large}/>
      </div>
      <button onClick={handleClick}>Get new person</button>
    </>
  );
};

const mapStateToProps = state => {
  return {
    person: state.person,
    isFetching: state.isFetching,
    error: state.error
  };
};

export default connect(mapStateToProps, { fetchStart, fetchSuccess, fetchFail })(Person);