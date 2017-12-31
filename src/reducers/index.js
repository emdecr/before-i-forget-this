import { combineReducers } from 'redux';
import PageReducer from './reducer_pages';
import TopicsReducer from './reducer_topics';

const rootReducer = combineReducers({
  pages: PageReducer,
  topics: TopicsReducer
});

export default rootReducer;
