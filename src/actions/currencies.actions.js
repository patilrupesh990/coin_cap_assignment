
import {FETCH_CURRENCIES, FETCH_LGS_COLUMNS, FETCH_SMS_COLUMNS, SET_CURRENCIES, SET_LGS_COLUMNS, SET_SMS_COLUMNS} from '../types/currency.types';

export const fetchCurrencies = () =>{
    return {type:FETCH_CURRENCIES}
}

export const fetchColumns = () =>{
    return {type:FETCH_LGS_COLUMNS}
}

export const fetchSmColumns = () =>{
    return {type:FETCH_SMS_COLUMNS}
}

export const setCurrencies = (currencies = []) =>{
    if(currencies){
        return {
            type:SET_CURRENCIES,
            payload:currencies
        };
    }
};
export const setColumsLgSceen = (lgsscrColumns = []) =>{
    if(lgsscrColumns){
        return{
            type:SET_LGS_COLUMNS,
            payload:lgsscrColumns
        }
    }
}

export const setColumsSmSceen = (smscrColumns = []) =>{
    if(smscrColumns){
        return{
            type:SET_SMS_COLUMNS,
            payload:smscrColumns
        }
    }
}