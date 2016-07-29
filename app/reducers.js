import actions from './actions';

const reducers = {
  [actions.SCHEME_LOADED]: (state, action) => {
    console.log('action', action);

    return Object.assign(state, {
      schema: action.payload.__schema
    });
  }
};

const rootReducer = (state, action) => {
  console.log('Action dispatched', action.type, action);

  if (reducers[action.type]) {
    return reducers[action.type](state, action);
  } else {
    console.warn('No reducer for action: ' + action.type);
    return state;
  }
};

export default rootReducer;