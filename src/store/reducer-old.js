import * as actionTypes from './actions';

const initialState = {
    counter: 0,
    results: []
};

const reducerOld = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.INCREMENT_COUNTER:
            return {
                ...state,
                counter: state.counter + 1
            };

        case actionTypes.DECREMENT_COUNTER:
            return {
                ...state,
                counter: state.counter - 1
            };

        case actionTypes.ADD_COUNTER:
            return {
                ...state,
                counter: state.counter + action.value
            };

        case actionTypes.SUBTRACT_COUNTER:
            return {
                ...state,
                counter: state.counter - action.value
            };

        case actionTypes.RESET_COUNTER:
            return {
                ...state,
                counter: state.counter = 0
            };

        case actionTypes.STORE_RESULT:
            return {
                ...state,
                results: state.results.concat({
                    id: new Date(),
                    value: state.counter
                })
            };

        case actionTypes.DELETE_RESULT:
            const updatedArray = state.results.filter(result => result.id !== action.resultId);

            return {
                ...state,
                results: updatedArray
            };

        default:
            return state;
    }
};

export default reducerOld;