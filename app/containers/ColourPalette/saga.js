/**
 * Gets the repositories of the user from Github
 */

import { call, put, select, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';
import { SUBMIT_SELECTED_IMAGES } from './constants';
import { makeSelectedTickedImages, makeSelectedChosenColour } from './selectors';
import { storePredictedUI } from './actions';

export function* submitImageChoices() {
  // Select username from store
  const selectedImages = yield select(makeSelectedTickedImages());
  const selectedColour = yield select(makeSelectedChosenColour());
  const requestURL = 'http://172.16.4.81:8000/submit_selected_images/';
  try {
    // Call our request helper (see 'utils/request')
    const postRequest = yield call(request, requestURL, {
      method: 'POST',
      body: JSON.stringify({
        image_list: selectedImages,
        selected_colour: selectedColour,
      }),
    });
    if (postRequest.status === 'success') {
      yield put(storePredictedUI(postRequest.ui_json));
    }
  } catch (err) {
    console.log(err);
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* submitImage() {
  // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(SUBMIT_SELECTED_IMAGES, submitImageChoices);
}
