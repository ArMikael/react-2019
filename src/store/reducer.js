const initialState = {
    counter: 0,
    results: []
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

        case 'STORE_RESULT':
            return {
                ...state,
                results: state.results.concat({
                    id: new Date(),
                    value: state.counter
                })
            };

        case 'DELETE_RESULT':
            const updatedArray = state.results.filter(result => result.id !== action.resultId);

            return {
                ...state,
                results: updatedArray
            };

        default:
            return state;
    }
};

export default reducer;