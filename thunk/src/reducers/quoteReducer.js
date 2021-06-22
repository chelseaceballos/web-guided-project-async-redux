import { TOGGLE_EDITING, UPDATE_TITLE } from "../actions/titleActions";

const initialState = {
    quote: 'Initial test kanye quote',
    loading: false,
    error: ''
};

export const quoteReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}