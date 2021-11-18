import { applyMiddleware, createStore } from "redux";
import { compose } from "redux";
import createSagaMiddleware from "redux-saga";

import logger from 'redux-logger'

import { composeWithDevTools } from "redux-devtools-extension";
import rootSaga from "../rootSaga/rootSaga";
import rootReducer from "../rootReducer/rootReducer";
const sagaMiddleware = createSagaMiddleware()

const store = createStore(rootReducer, composeWithDevTools( applyMiddleware(sagaMiddleware, logger)))
sagaMiddleware.run(rootSaga)

export default store;