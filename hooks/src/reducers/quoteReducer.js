import { FETCH_QUOTE_HAPPY, FETCH_QUOTE_START } from "../actions/quoteActions";

const initialState = {
    quote: 'Initial test kanye quote',
    loading: false,
    error: ''
};

export const quoteReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_QUOTE_START:
            return {
                ...state,
                loading: true
            }
        case FETCH_QUOTE_HAPPY:
            return {
                ...state,
                quote: action.payload,
                loading: false
            }
        default:
            return state;
    }
}