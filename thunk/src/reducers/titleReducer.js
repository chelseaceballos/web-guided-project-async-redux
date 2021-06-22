const initialState = {
  editing: false,
  title: 'WEBPT28 Thunky Reducer fiesta'
};

export const titleReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TOGGLE_EDITING':
      return {
        ...state,
        editing: !state.editing
      }
    case 'UPDATE_TITLE':
      return {
        ...state,
        title: action.payload,
        edtiting: false
      }
    default:
      return state;
  }
}