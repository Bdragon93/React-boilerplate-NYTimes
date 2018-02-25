import React from 'react';
import ArticleList from './article-list';
import queryString from 'query-string';
if (process.env.BROWSER) {
  require('assets/styles/mobile/pages/_home.scss');
}

class App extends React.Component {
  render() {
    const parsed = queryString.parse(this.props.location.search);

    return (
      <div className="p-home container">
        <div className="home-header">
          <h1 className="title">Times Topics: Vietnam</h1>
          <p className="breaf">
            World news about Vietnam, including breaking news and archival
            articles published in The New York Times.
          </p>
        </div>
        <ArticleList params={parsed} />
      </div>
    );
  }
}

export default App;
