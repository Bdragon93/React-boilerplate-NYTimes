import React from 'react';
import ArticleItem from 'components/shared/article-item';
if (process.env.BROWSER) {
  require('assets/styles/mobile/pages/_article.scss');
}

class ArticlePage extends React.Component {
  render() {
    const params = this.props.match.params;
    return (
      <div className="container">
        <div className="p-article">
          <ArticleItem params={params} />
        </div>
      </div>
    );
  }
}

export default ArticlePage;
