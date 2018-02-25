import reducer from 'reducers/article';
import * as types from 'actions/action-type';
import { Map, fromJS } from 'immutable';
import { articles } from 'utils/dummy/articles';
import { parseData } from 'reducers/article';

describe('Article reducer', () => {
  const article0 = parseData(articles[0]);
  const article1 = parseData(articles[1]);
  const key0 = article0.id;
  const key1 = article1.id;
  it('Should save to store', () => {
    expect(
      reducer(new Map(), {
        type: types.FETCH_ARTICLES_SUCCESS,
        data: articles,
      }),
    ).toEqual(
      fromJS({
        [article0.id]: {
          data: article0,
          status: 'SUCCESS',
        },
        [article1.id]: {
          data: article1,
          status: 'SUCCESS',
        },
        all: {
          data: [key0, key1],
          status: 'SUCCESS',
        },
      }),
    );
  });
});
