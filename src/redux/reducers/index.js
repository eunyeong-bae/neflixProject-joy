//combineReducer : 많은 reducer 를 하나로 합치는 작업
import {combineReducers} from 'redux';
import movieReducer from './movieReducer';

export default combineReducers({
    movie : movieReducer
})