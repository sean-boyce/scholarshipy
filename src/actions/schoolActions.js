import axios from 'axios';
import * as types from './actionTypes';

export const loadSchoolsStart = () => {
    return { type: types.LOAD_SCHOOLS_START }
}

export const loadSchoolsResults = (schools) => {
    return { type: types.LOAD_SCHOOLS_RESULTS, schools }
}

export const loadSchoolsError = (err) => {
    return { type: types.LOAD_SCHOOLS_ERROR, err }
}

export const loadSchools = () => {
    return dispatch => {
        // dispatch(loadSchools());
        axios.get(`/api/schools`)
            .then(res => dispatch(loadSchoolsResults(res.data)))
            .catch(err => dispatch(loadSchoolsError(err)))

    }
}
