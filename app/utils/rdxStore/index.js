import { createStore } from 'redux';


const NOT_ALLOWED_TYPES = [
  'dispatch',
  'getstate',
  'replaceReducer',
  'subscribe',
  'symbol'
];

/**
 *
 * @param {Array} reducers
 * @returns {Array} types
 * @private
 */
const getTypes = (reducers) => {
  return reducers.reduce((acc, reducer) => {
    const _type = Object.keys(reducer)[0];

    if (NOT_ALLOWED_TYPES.indexOf(_type.toLowerCase()) !== -1 ) {
      throw Error(`rdxStore can not accept reducer named "${_type}".`);
    }

    acc.push(_type);
    return acc;
  }, []);
};

/**
 *
 * @param types
 * @returns {*}
 * @private
 */
const generateActions = (types) => {
  return types.reduce((actions, type) => {
    actions[type] = (payload) => ({
      type,
      payload
    });

    return actions;
  }, {});
};

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