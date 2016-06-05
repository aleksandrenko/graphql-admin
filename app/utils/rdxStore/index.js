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
const _getAllReducersTypes = (reducers) => {
  return reducers.reduce((acc, reducer) => {
    const _type = Object.keys(reducer)[0];

    if (NOT_ALLOWED_TYPES.indexOf(_type.toLowerCase()) !== -1 ) {
      throw Error(`rdxStore can not accept reducer named "${_type}".`);
    }

    acc.push(_type);
    return acc;
  }, []);
};

const _generateActions = (types) => {
  return types.reduce((actions, type) => {
    actions[type] = (payload) => ({
      type,
      payload
    });

    return actions;
  }, {});
};

/**
 *
 * @param {Object} initialState - the inital state of the store
 * @param {Array} reducers - an array of object used for reducers
 * @returns {Object}
 */
const rdxStore = (initialState = {}, reducers = []) => {
  const rootReducer = (state, action) => {

    reducers.forEach((reducer) => {
      const reducerName = Object.keys(reducer)[0];
      const reducerFunction = reducer[reducerName];

      if (reducerName === action.type) {
        return reducerFunction(state, action);
      }

      return state;
    });
  };

  // Create the Redux store with the root reducer and the initial state
  const store = createStore(rootReducer, initialState);

  const allTypes = _getAllReducersTypes(reducers);

  const actions = store._actions = _generateActions(allTypes);

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