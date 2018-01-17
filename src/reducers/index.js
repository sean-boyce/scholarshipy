import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import demo from './demo';
import schools from './schoolReducer';

const Reducers = combineReducers({
    schools,
    demo,
    routing: routerReducer
});

export default Reducers;
