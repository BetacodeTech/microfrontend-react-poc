import { createStore, combineReducers} from 'redux'
import * as messages from "./messages.reducer";

const reducer = combineReducers({
    messages: messages.reducer
});

export const store = createStore(reducer);
