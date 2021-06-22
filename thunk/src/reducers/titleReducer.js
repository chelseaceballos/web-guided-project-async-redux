const initialState = {
  editing: false,
  title: 'WEBPT28 Thunky Reducer fiesta'
};

export const titleReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TOGGLE_EDITING':
      return { ...state }
    case 'UPDATE_TITLE':
      return { ...state }
    case default:
      return state;
  }
}