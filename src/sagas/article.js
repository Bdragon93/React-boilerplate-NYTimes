import { call, put, takeLatest } from 'redux-saga/effects';
import { API_KEY } from 'settings/variables';
import * as actionType from 'actions/action-type';
import axios from 'axios';

const {
  FETCH_ARTICLES,
  FETCH_ARTICLES_SUCCESS,
  FETCH_ARTICLES_FAILED,
} = actionType;

// worker Saga: will be fired on FETCH_ARTICLES actions
function* fetchArticles(actions) {
  const { page } = actions.params;
  try {
    const response = yield call(
      axios.get,
      'https://api.nytimes.com/svc/search/v2/articlesearch.json',
      {
        params: {
          'api-key': API_KEY,
          q: 'vietnam',
          page: !page ? 0 : page - 1,
        },
      },
    );
    yield put({
      type: FETCH_ARTICLES_SUCCESS,
      data: response.data.response.docs,
    });
  } catch (e) {
    yield put({ type: FETCH_ARTICLES_FAILED, message: e.message });
  }
}

//Starts fetchArticles on each dispatched FETCH_ARTICLES action.
function* articleSaga() {
  yield takeLatest(FETCH_ARTICLES, fetchArticles);
}

export default articleSaga;
