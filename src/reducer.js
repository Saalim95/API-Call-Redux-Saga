export const CALL_REQUEST = "CALL_REQUEST"
export const CALL_SUCCESS = "CALL_SUCCESS"
export const CALL_FAILED = "CALL_FAILED"

const initialState = {
    fetching: false,
    dog: null,
    error: null,
}

export const reducer = (state = initialState, action)=>{
    switch(action.type){
        case CALL_REQUEST:
            return {...state, fetching: true}
        case CALL_SUCCESS:
            return {...state, dog: action.dog, fetching:false}
        case CALL_FAILED:
            return {...state, error: action.error}
        default:
            return state
    }
}
