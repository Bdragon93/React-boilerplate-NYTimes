import React from 'react';
if (process.env.BROWSER) {
  require('assets/styles/mobile/components/_loading.scss');
}

class Loading extends React.Component {
  render() {
    return <div className="loading"/>;
  }
}
export default Loading;
