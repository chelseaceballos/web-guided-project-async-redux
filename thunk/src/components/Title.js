import React, { useState } from "react";
import { connect } from "react-redux";
import { toggleEditing, updateTitle } from "../actions/titleActions";

const Title = (props) => {
  const [newTitleText, setNewTitleText] = useState("");

  const handleChanges = e => {
    setNewTitleText(e.target.value);
  };

  return (
    <div>
      {!props.editing ? (
        <h1>
          {props.title}{" "}
          <i onClick={() => props.toggleEditing()} className="far fa-edit" />
        </h1>
      ) : (
        <div>
          <input
            className="title-input"
            type="text"
            name="newTitleText"
            value={newTitleText}
            onChange={handleChanges}
          />
          <button
            onClick={() => props.updateTitle(newTitleText)}
          >
            Update title
          </button>
        </div>
      )}
    </div>
  );
};

const mapState = (state) => {
  return {
    editing: state.editing,
    title: state.title
  }
}

const mapDispatch = {updateTitle, toggleEditing}


// Step 3: connect components to the Redux store
export default connect(mapState, mapDispatch)(Title);
