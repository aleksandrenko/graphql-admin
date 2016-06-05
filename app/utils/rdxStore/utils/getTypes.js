import NOT_ALLOWED_TYPES from './reduxTypes';

/**
 *
 * @param {Array} reducers
 * @returns {Array} types
 * @private
 */
export default (reducers) => {
  return reducers.reduce((acc, reducer) => {
    const _type = Object.keys(reducer)[0];

    if (NOT_ALLOWED_TYPES.indexOf(_type.toLowerCase()) !== -1 ) {
      throw Error(`rdxStore can not accept reducer named "${_type}".`);
    }

    acc.push(_type);
    return acc;
  }, []);
};