import {all} from 'redux-saga/effects'
import { waitForFetchDetails } from './currency.saga';

export default function* rootSaga(){
    yield all([waitForFetchDetails()])
}