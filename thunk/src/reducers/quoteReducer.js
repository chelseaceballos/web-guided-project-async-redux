import { FETCH_QUOTE_HAPPY } from "../actions/quoteActions";

const initialState = {
    quote: 'Initial test kanye quote',
    loading: false,
    error: ''
};

export const quoteReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_QUOTE_HAPPY:
            return {
                ...state,
                quote: payload,
                loading: false
            }
        default:
            return state;
    }
}