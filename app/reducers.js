import actions from './actions';
import store from './store';

import { buildClientSchema } from 'graphql';
import SERVER from './server';

const reducers = {
  'SCHEMA_LOADING': (state, action) => {
      //console.log('SCHEMA_LOADING');

      SERVER.fetchSchema((resources) => {
        let schema = buildClientSchema(resources);
        store.dispatch(actions.schemaLoaded(schema));
      });

      return Object.assign({
        loading: true
      }, state);
  },
  'SCHEMA_LOADED': (state, action) => {
    console.log('SCHEMA_LOADED');
    return Object.assign({
      loading: false,
      schema: action.payload
    });
  }
};

export default reducers;
