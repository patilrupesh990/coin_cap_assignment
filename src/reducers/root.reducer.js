import { combineReducers } from "redux";
import {currenciesReducer,lgScrColumnsReducer, smScrColumnsReducer} from './currency.reducer'

export const rootReducer = combineReducers({currency: currenciesReducer, columns: lgScrColumnsReducer,smColumns: smScrColumnsReducer})
