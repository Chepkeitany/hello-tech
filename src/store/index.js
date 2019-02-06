import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import reducer from "../reducers";
import loggingMiddleware from "../middleware/loggingMiddleware";

const initialState = { tech: "React "};
const store = createStore(reducer, initialState, applyMiddleware(loggingMiddleware, logger));
export default store;