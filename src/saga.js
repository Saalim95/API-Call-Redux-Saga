import {takeLatest, call, put} from 'redux-saga/effects'
import {CALL_FAILED, CALL_SUCCESS, CALL_REQUEST} from './reducer'
import axios from 'axios'

export function* watcherSaga(){
    yield takeLatest(CALL_REQUEST, workerSaga)
}

function fetchDog(){
    return axios({
        method: "get",
        url: "https://dog.ceo/api/breeds/image/random"
    })
}

export function* workerSaga(){
    try{
        const response = yield call(fetchDog)   //invoking function
        const dog = response.data.message
        
        yield put({type: CALL_SUCCESS, dog})    //dispatching success action

    }
    catch(error){
        yield put({type: CALL_FAILED, error})   //dispatching failure action
    }
}