
/**
 *
 * @param types
 * @returns {*}
 * @private
 */
export default (types) => {
  return types.reduce((actions, type) => {
    actions[type] = (payload) => ({
      type,
      payload
    });

    return actions;
  }, {});
};