import rdxStore from './utils/rdxStore';

import { buildClientSchema } from 'graphql';
import SERVER from './server';

const store = rdxStore({
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
