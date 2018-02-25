import { all } from 'redux-saga/effects';
import articleSaga from 'sagas/article';

// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield all([articleSaga()]);
}
