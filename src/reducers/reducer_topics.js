import {
    FETCH_TOPICS, 
    FETCH_TOPICS_FULFILLED
} from '../constants/ActionTypes';

const TopicsReducer = function(state = [], action) {
    // console.log('action received', action);
    switch (action.type) {
        case FETCH_TOPICS_FULFILLED:
            return action.payload.data;
        default:
            return state;
    }
    
}

export default TopicsReducer