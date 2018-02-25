import * as actions from 'actions/article';
import * as types from 'actions/action-type';
import { API_KEY } from 'settings/variables';
describe('actions', () => {
  it('should create an action to add a todo', () => {
    const params = { 'api-key': API_KEY, q: 'vietnam', page: 0 };
    const expectedAction = {
      type: types.FETCH_ARTICLES,
      params,
    };
    expect(actions.fetchArticles(params)).toEqual(expectedAction);
  });
});
