/*
 * HomeReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */
import { fromJS } from 'immutable';

import {
  STORE_CATEGORY_IMAGE,
} from './constants';

// The initial state of the App
const initialState = fromJS({
  categoryImages: [],
});

function homeReducer(state = initialState, action) {
  switch (action.type) {
    case STORE_CATEGORY_IMAGE:
      // Delete prefixed '@' from the github username
      return state.set('categoryImages', (action.images));
    default:
      return state;
  }
}

export default homeReducer;
