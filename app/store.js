import { sugarStore } from 'redux-sugar-store/dist/index';

import { buildClientSchema } from 'graphql';
import SERVER from './server';

const store = sugarStore({
      schema: null,
      loading: false
    }, [
      {
        loadSchema: (state, action) => {
          SERVER.fetchSchema((resources) => {
            let schema = buildClientSchema(resources);
            store.schemaLoaded(schema);
          });

          return Object.assign({
            loading: true
          }, state);
        }
      }, {
        schemaLoaded: (state, action) => {
          return Object.assign({
            loading: false,
            schema: action.payload
          });
        }
      }
    ]);

export default store;
