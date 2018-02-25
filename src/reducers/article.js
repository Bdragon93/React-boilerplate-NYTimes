import * as actionType from 'actions/action-type';
import { Map } from 'immutable';
import { setData, setPending, setFailed } from 'reducers/helpers';

const initialState = Map({});

const {
  FETCH_ARTICLES,
  FETCH_ARTICLES_SUCCESS,
  FETCH_ARTICLES_FAILED,
} = actionType;

export const parseData = data => {
  return {
    id: data._id,
    snippet: data.snippet,
    multimedia: data.multimedia[0] && data.multimedia[0].url,
    pub_date: data.pub_date && new Date(data.pub_date),
    source: data.source,
  };
};

export default function articleReducer(state = initialState, action) {
  const { type, data } = action;
  switch (type) {
    case FETCH_ARTICLES:
      return setPending(state, 'all');
    case FETCH_ARTICLES_SUCCESS:
      const allArticle = [];
      data.map(article => {
        allArticle.push(article._id);
        state = setData(state, article._id, parseData(article));
      });
      return setData(state, 'all', allArticle);
    case FETCH_ARTICLES_FAILED:
      return setFailed(state, 'all');
    default:
      return state;
  }
}
