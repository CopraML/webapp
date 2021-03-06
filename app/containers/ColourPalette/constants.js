/*
 * HomeConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const CHANGE_USERNAME = 'boilerplate/colourPalette/CHANGE_USERNAME';
export const SAVE_COLOUR_PALETTE = 'boilerplate/colourPalette/SAVE_COLOUR_PALETTE';
export const SAVE_UI_JSON = 'boilerplate/colourPalette/SAVE_UI_JSON';
export const SUBMIT_SELECTED_IMAGES = 'boilerplate/colourPalette/SUBMIT_SELECTED_IMAGES';
