import { createStore,applyMiddleware,compose } from "redux";
import currenciesReducer from "./reducers/currency.reducer";
import createSagaMiddleware from "@redux-saga/core";
import rootSaga from "./root.saga";
import { rootReducer } from "./reducers/root.reducer";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

export default store;