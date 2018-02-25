import React from 'react';
import { withRouter } from 'react-router-dom';
if (process.env.BROWSER) {
  require('assets/styles/mobile/components/_paginator.scss');
}

class Paginator extends React.Component {
  renderItems = () => {
    const { page } = this.props.params;

    const currentPage = page ? parseInt(page) : 1;
    const listPage = [];
    const firstNo = 1;
    const lastNo = 5;

    listPage.push(
      <li key={0}>
        <button onClick={this.changeRoute.bind(this, currentPage - 1)}>
          &lt;	
        </button>
      </li>,
    );

    for (let i = firstNo; i <= lastNo; i++) {
      listPage.push(
        <li key={i}>
          <button
            onClick={this.changeRoute.bind(this, i)}
            className={i === currentPage ? 'active' : ''}>
            {i}
          </button>
        </li>,
      );
    }

    listPage.push(
      <li key={listPage.length + 2}>
        <button onClick={this.changeRoute.bind(this, currentPage + 1)}>
          &gt;	
        </button>
      </li>,
    );
    return listPage;
  };

  changeRoute = page => {
    this.props.history.push({
      search: `?page=${page}`,
    });
  };

  render() {
    return <ul className="paginator">{this.renderItems()}</ul>;
  }
}

export default withRouter(Paginator);
