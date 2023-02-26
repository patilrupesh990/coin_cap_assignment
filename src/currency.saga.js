import {takeEvery, call, put} from 'redux-saga/effects'
import currencyService from "./services/currency.service";
import { setColumsLgSceen,setColumsSmSceen, setCurrencies } from "./actions/currencies.actions";
import { FETCH_CURRENCIES, FETCH_LGS_COLUMNS, FETCH_SMS_COLUMNS} from './types/currency.types';
import { getLscrColumns,getSmcrColumns } from './common/tablecolumns';

function* fetchCurrencies(){
    try{
        const currencies = yield call(currencyService.getAllCurrency); 
        yield put(setCurrencies(currencies))

    }catch(err){
    } 
}

function* getLscrColumnsData(){
    try{
        const lscrColumns = yield call(getLscrColumns);
        yield put(setColumsLgSceen(lscrColumns))
    }catch(err){
        console.log(err);
    }
}

function* getSmscrColumnsData(){
    try{
        const smScrColumns = yield call(getSmcrColumns);
        yield put(setColumsSmSceen(smScrColumns))
    }catch(err){
        console.log(err);
    }
}
export function* waitForFetchDetails(){
    yield takeEvery(FETCH_CURRENCIES,fetchCurrencies);
    yield takeEvery(FETCH_LGS_COLUMNS,getLscrColumnsData);
    yield takeEvery(FETCH_SMS_COLUMNS,getSmscrColumnsData);
}
