import React from 'react';
import BaseComponent from 'components/base';
import { getDetail as dataGetter } from 'dataGetters/article';
import { Link } from 'react-router-dom';
import initComponent from 'libs/initComponent';
import { URL_ASSETS } from 'settings/variables';
import { dateTimeToDateRender } from 'utils/time';
if (process.env.BROWSER) {
  require('assets/styles/mobile/components/_article-item.scss');
}

class ArticleItem extends BaseComponent {
  static defaultProps = {
    dataGetter,
  };

  render() {
    const { data } = this.props;
    const { id, snippet, multimedia, pub_date, source } = data.toObject();
    console.log(pub_date)

    return (
      <div className="article-item">
        {!!multimedia && (
          <Link to={`/${id}`} className="article-link">
            <img src={`${URL_ASSETS}${multimedia}`} className="article-img" />
          </Link>
        )}
        <div className="article-content">
          <div className="snippet">{snippet}</div>
          {!!source &&<div className="source">{source}</div>}
          {!!pub_date && <div className="date">{dateTimeToDateRender(pub_date)}</div>}
        </div>
      </div>
    );
  }
}

export default initComponent(ArticleItem);
