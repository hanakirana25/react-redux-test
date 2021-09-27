import { createStore } from "redux";
import getDataReducer from '../reducers/getDataReducer'

export default function configureStore() {
    return createStore(getDataReducer);
}