
import { createStore } from 'redux';
import reducers from './reducers';

const rootReducer = (state, action) => {
  return reducers[action.type] ? reducers[action.type](state, action) : state;
};

const store = createStore(rootReducer, {
  schema: null
});

export default store;
