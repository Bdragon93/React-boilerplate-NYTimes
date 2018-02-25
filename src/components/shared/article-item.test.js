import React from 'react';
import ArticleItem from 'components/shared/article-item';
import configureStore from 'redux-mock-store';
import { fromJS } from 'immutable';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import { articles } from 'utils/dummy/articles';
import { parseData } from 'reducers/article';
import { BrowserRouter } from 'react-router-dom';

describe('Test ArticleItem component', () => {
  let cmp = null;
  const articleItem = articles[0];
  const articleId = articleItem._id;

  beforeEach(() => {
    const mockStore = configureStore();
    const store = mockStore({
      article: fromJS({
        [articleId]: { data: parseData(articleItem), status: 'SUCCESS' },
      }),
    });
    cmp = mount(
      <Provider store={store}>
        <BrowserRouter>
          <ArticleItem params={{ article: articleId }} />
        </BrowserRouter>
      </Provider>,
    );
  });

  it('Component has right data', () => {
    expect(
      cmp
        .find('ArticleItem')
        .props()
        .data.toObject(),
    ).toEqual(parseData(articleItem));
  });
});
