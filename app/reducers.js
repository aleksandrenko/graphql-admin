import store from './store';
import createActions from './utils/createActions';

import { buildClientSchema } from 'graphql';
import SERVER from './server';

const reducers = {
  loadSchema: (state, action) => {
      SERVER.fetchSchema((resources) => {
        let schema = buildClientSchema(resources);
        store.dispatch(actions.schemaLoaded(schema));
      });

      return Object.assign({
        loading: true
      }, state);
  },
  schemaLoaded: (state, action) => {
    //console.log('schemaLoaded');

    return Object.assign({
      loading: false,
      schema: action.payload
    });
  }
};

// create generic actions for all keys in the reducers
const actions = createActions(Object.keys(reducers));

export default {
  reducers,
  actions
};
