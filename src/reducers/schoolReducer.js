import * as types from '../actions/actionTypes';
import initialState from './initialState';

const schools = (state = initialState.schools, action) => {
    switch (action.type) {
        case types.LOAD_SCHOOLS_RESULTS:
            return { ...state, results: action.schools }
        case types.LOAD_SCHOOLS_ERROR:
            return { ...state, results: action.err }
        default:
            return state
    }
}

export default schools;
