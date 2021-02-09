import {
    FETCH_USERS,FETCH_USERS_SUCCESS, FETCH_USERS_FAILURE,
    FETCH_IDS, FETCH_IDS_FAILURE, FETCH_IDS_SUCCESS,
    FETCH_NAMES_ID, FETCH_NAMES_ID_FAILURE, FETCH_NAMES_ID_SUCCESS,
    FETCH_USER_BY_ID, FETCH_USER_BY_ID_FAILURE, FETCH_USER_BY_ID_SUCCESS
} from '../actions'

const initialState = {
    USERS:[],
    USERS_ID:[],
    USER_NAMES_ID:[],
    USER:{},
    LOADING:false,
    ERROR:''
};

export const usersReducer = (state=initialState, action) => {
    switch (action.type) {
        case FETCH_USERS:
            return { ...state, LOADING: true };
        case FETCH_USERS_SUCCESS:
            return{...state, LOADING:false, USERS:action.payload}
        case FETCH_USERS_FAILURE:
            return {...state, LOADING:false, ERROR:action.payload}
        case FETCH_IDS:
            return { ...state, LOADING: true };
        case FETCH_IDS_FAILURE:
            return {...state, LOADING:false, ERROR:action.payload}
        case FETCH_IDS_SUCCESS:
            return{...state, LOADING:false, USERS_ID:action.payload}
        case FETCH_NAMES_ID:
            return { ...state, LOADING: true };
        case FETCH_NAMES_ID_FAILURE:
            return {...state, LOADING:false, ERROR:action.payload}
        case FETCH_NAMES_ID_SUCCESS:
            return{...state, LOADING:false, USER_NAMES_ID:action.payload}
        case FETCH_USER_BY_ID:
            return { ...state, LOADING: true };
        case FETCH_USER_BY_ID_FAILURE:
            return {...state, LOADING:false, ERROR:action.payload}
        case FETCH_USER_BY_ID_SUCCESS:
            return{...state, LOADING:false, USER:action.payload}
        default:
            return state;

    };
};