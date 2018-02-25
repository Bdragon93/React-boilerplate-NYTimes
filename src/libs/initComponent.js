import { connect } from 'react-redux';

const mapStateToProps = (state, props) => {
  const { dataGetter, params } = props;
  if (typeof dataGetter !== 'function') return {};

  const record = dataGetter(state, params);

  if (!record) return {};

  return record.toObject();
};

const initComponent = comp => {
  const newComp = connect(comp.mapStateToProps || mapStateToProps)(comp);
  newComp.defaultProps = comp.defaultProps;
  return newComp;
};

export default initComponent;
