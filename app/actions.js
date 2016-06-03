const TYPES = {
  SCHEMA_LOADED: 'SCHEMA_LOADED',
  SCHEMA_LOADING: 'SCHEMA_LOADING'
};

const createAction = (actionType) => (_payload) => ({
    type: actionType,
    payload: _payload
  });

export default {
    loadShema: createAction(TYPES.SCHEMA_LOADING),
    schemaLoaded: createAction(TYPES.SCHEMA_LOADED)
}
