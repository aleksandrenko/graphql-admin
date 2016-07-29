import actions from './actions';

const reducers = {
  [actions.SCHEME_LOADED]: (state, action) => {
    let newState = Object.assign({}, state);
    newState.schema = action.payload.__schema;

    return newState;
  },
  [actions.TOGGLE_CONFIG]: (state) => {
    let newState = Object.assign({}, state);
    newState.inConfigMode = !state.inConfigMode;
    return newState;
  },
  [actions.UPDATE_GRAPHQL_SERVER_URL]: (state, action) => {
    let newState = Object.assign({}, state);

    newState.config = {
      graphql_url: action.payload
    };

    return newState;
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