export const actionTypes = {
    ADD_MESSAGES: "[MESSAGES] ADD_MESSAGES"
};

export const actions = {
    addMessage: (message) => ({type: actionTypes.ADD_MESSAGES, payload: {message}})
};

const initialState = {
    messages: []
};

export const reducer = (state = initialState, action) => {
    const newState = {...state};
    switch (action.type) {
        case actionTypes.ADD_MESSAGES:
            const {message} = action.payload;
            newState.messages = [...newState.messages, message];
            return newState;
        default:
            return state
    }
};
