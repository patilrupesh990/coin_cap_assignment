import staticMethods from 'antd/es/message';
import {SET_CURRENCIES, SET_LGS_COLUMNS, SET_SMS_COLUMNS} from '../types/currency.types';
export const intialState = {
    currenciesIntialState:[],
    lgScrColumns:[],
    smScrColumns:[],
};

export const currenciesReducer = (state = intialState,action) =>{
    switch(action.type){
        case SET_CURRENCIES:
            return {
                ...state,
                currenciesIntialState:action.payload
            };
        default:
            return {...state};
    }
}

export const lgScrColumnsReducer = (state = intialState,action) =>{
    switch(action.type){
        case SET_LGS_COLUMNS:
            return {
                ...state,
                lgScrColumns:action.payload
            };
        default:
            return {...state};
    }
}

export const smScrColumnsReducer = (state = intialState,action) =>{
    switch(action.type){
        case SET_SMS_COLUMNS:
            return {
                ...state,
                smScrColumns:action.payload
            };
        default:
            return {...state};
    }
}
