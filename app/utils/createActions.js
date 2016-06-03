const createActions = (actionTypes) => {
  const _actions = {};

  const createAction = (actionType) => {
    _actions[actionType] = (_payload) => ({
      type: actionType,
      payload: _payload
    });
  };

  actionTypes.forEach((actionType) => {
    createAction(actionType);
  });

  return _actions;
};


export default createActions;
