/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';

const selectCategory = (state) => state.get('categorySelection');

const makeSelectedTickedImages = () => createSelector(
  selectCategory,
  (categoryState) => categoryState.get('selectedImages')
);

const makeSelectedChosenColour = () => createSelector(
  selectCategory,
  (categoryState) => categoryState.get('colourPalette')
);

export {
  selectCategory,
  makeSelectedTickedImages,
  makeSelectedChosenColour,
};
