import React from 'react';
import ArticleList from './article-list';
import configureStore from 'redux-mock-store';
import { fromJS } from 'immutable';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';

describe('Test ArticleList component', () => {
  let cmp = null;
  const data = ['1', '2', '3', '4', '5'];

  beforeEach(() => {
    const mockStore = configureStore();
    const store = mockStore({
      article: fromJS({ all: { data, status: 'SUCCESS' } }),
    });
    cmp = mount(
      <Provider store={store}>
        <BrowserRouter>
          <ArticleList params={{q: 'vietnam', page: 1}} />
        </BrowserRouter>
      </Provider>,
    );
  });

  it('Length of data equal to number of ArticleItem in ArticleList', () => {
    console.log(cmp.find('ArticleItem').length);
    expect(cmp.find('ArticleItem')).toHaveLength(data.length);
  });
});
