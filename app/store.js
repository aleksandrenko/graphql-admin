
import { createStore } from 'redux';

const reducers = {
  placeForReducers: (state, action) => state
};

const rootReducer = (state, action) => {
  console.log('rootReducer: ', state, action);

  return reducers[action.type] ? reducers[action.type](state, action) : state;
};

const store = createStore(rootReducer, {
  schema: {}
});

export default store;
/**
 * Created by nikolaialeksandrenko on 5/29/16.
 */
