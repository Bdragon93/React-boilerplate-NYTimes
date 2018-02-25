import React from 'react';
import BaseComponent from 'components/base';
import { fetchArticles as actionCreator } from 'actions/article';
import initComponent from 'libs/initComponent';
import ArticleItem from 'components/shared/article-item';
import { getAll as dataGetter } from 'dataGetters/article';
import Paginator from 'components/shared/paginator';
if (process.env.BROWSER) {
  require('assets/styles/mobile/components/_article-list.scss');
}

class ArticleList extends BaseComponent {
  static defaultProps = {
    actionCreator,
    dataGetter,
  };

  componentWillReceiveProps(nextProps) {
    if (this.props.params.page !== nextProps.params.page)
      this.props.dispatch(actionCreator(nextProps.params));
  }

  render() {
    const { data, params } = this.props;
    if (!data) return null;

    return (
      <div>
        <ul className="article-list">
          {data.map((article, key) => (
            <li key={key}>
              <ArticleItem params={{ article }} />
            </li>
          ))}
        </ul>
        <Paginator params={params} />
      </div>
    );
  }
}

export default initComponent(ArticleList);
