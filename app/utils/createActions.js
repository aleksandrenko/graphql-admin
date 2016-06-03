export default (actionTypes) => {
  return actionTypes.reduce((actions, type) => {
    actions[type] = (payload) => ({
      type,
      payload
    });

    return actions;
  }, {});
}
