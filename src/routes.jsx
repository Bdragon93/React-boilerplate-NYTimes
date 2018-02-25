import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import HomePage from 'components/pages/home';
import ArticlePage from 'components/pages/article';
if (process.env.BROWSER) {
  require('assets/styles/_normalize.scss');
  require('assets/styles/_base.scss');
}

export default () => (
  <BrowserRouter>
    <div>
      <Route exact path="/" component={HomePage} />
      <Route path="/:article" component={ArticlePage} />
    </div>
  </BrowserRouter>
);
