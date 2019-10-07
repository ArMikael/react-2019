const initialState = {
    counter: 0
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INC_COUNTER':
            return {
                ...state,
                counter: state.counter + 1
            };
        case 'DEC_COUNTER':
            return {
                ...state,
                counter: state.counter - 1
            };
        case 'ADD_COUNTER':
            return {
                ...state,
                counter: state.counter + action.value
            };
        case 'SUBTRACT_COUNTER':
            return {
                ...state,
                counter: state.counter - action.value
            };
        case 'RESET_COUNTER':
            return {
                ...state,
                counter: state.counter = 0
            };
        default:
            return state;
    }
};

export default reducer;