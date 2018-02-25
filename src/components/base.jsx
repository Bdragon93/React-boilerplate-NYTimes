import React from 'react';
import PropTypes from 'prop-types';
import Loading from 'components/statics/loading';

// This component defines common methods of Component connecting to Store
// Ex: fetchMissingData, renderLoading,...

function setLoadingComponent(comp) {
  this.loadingComponent = comp || <Loading />;
}

function injectRender() {
  const _render = this.render;
  this.render = () => {
    const { status } = this.props;
    if (!status || status === 'FAILED') return null;

    if (status === 'PENDING') return this.loadingComponent;

    return _render && _render.call(this);
  };
}

function injectDidMount() {
  const _didMount = this.componentDidMount;
  this.componentDidMount = () => {
    this.fetchData();
    return _didMount && _didMount.call(this);
  };
}

export default class BaseComponent extends React.Component {
  static propTypes = {
    actionCreator: PropTypes.func,
    dataGetter: PropTypes.func,
  };

  constructor(props) {
    super(props);
    this.state = {};
    const { actionCreator, dataGetter, customRender } = this.props;

    if (!!dataGetter) {
      // Avoid injectRender with customRenderOption
      if (!customRender) injectRender.call(this);
      // Custom loading component (like simmering)
      setLoadingComponent.call(this, props.loadingComponent);
    }

    if (!!actionCreator) injectDidMount.call(this);
  }

  fetchData = () => {
    if (!!this.props.status) return;
    const { dispatch, actionCreator, params } = this.props;
    dispatch(actionCreator(params));
  };
}
