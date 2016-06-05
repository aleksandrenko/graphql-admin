import { createStore } from 'redux';
import getTypes from './utils/getTypes';
import generateActions from './utils/generateActions';

/**
 * @param state
 * @param action
 * @returns {*}
 */
const rootReducer = (state, action) => {
  let _state = state;

  rootReducer.reducers.forEach((reducer) => {
    const reducerName = Object.keys(reducer)[0];
    const reducerFunction = reducer[reducerName];

    // run the reducer for the called action.type
    if (reducerName === action.type) {
      _state = reducerFunction(_state, action);
    }
  });

  return _state;
};


/**
 *
 * @param {Object} initialState - the inital state of the store
 * @param {Array} reducers - an array of object used for reducers
 * @returns {Object}
 */
const rdxStore = (initialState = {}, reducers = []) => {
  rootReducer.reducers = reducers;

  // Create the Redux store with the root reducer and the initial state
  const store = createStore(rootReducer, initialState);

  const allTypes = getTypes(reducers);

  const actions = store._actions = generateActions(allTypes);

  // Add Action Methods directly to the store
  allTypes.forEach((type) => {
    store[type] = (payload) => {
      const reduxAction = actions[type](payload);
      store.dispatch(reduxAction);
    };
  });

  return store;
};


export default rdxStore;