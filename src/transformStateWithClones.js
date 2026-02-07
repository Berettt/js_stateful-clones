'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 *
 * @return {Object[]}
 */
function transformStateWithClones(state, actions) {
  const FINAL_STATES = [];
  let newState = Object.assign({}, state);
  const ADD_ACTION = 'addProperties';
  const REMOVE_ACTION = 'removeProperties';
  const CLEAR_ALL_ACTIONS = 'clear';

  for (const action of actions) {
    if (action.type === ADD_ACTION) {
      newState = Object.assign({}, newState, action.extraData);
    }

    if (action.type === REMOVE_ACTION) {
      newState = { ...newState };

      for (const deleteKey of action.keysToRemove) {
        delete newState[deleteKey];
      }
    }

    if (action.type === CLEAR_ALL_ACTIONS) {
      newState = {};
    }

    FINAL_STATES.push(newState);
  }

  return FINAL_STATES;
}
module.exports = transformStateWithClones;
