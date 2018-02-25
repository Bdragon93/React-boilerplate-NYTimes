import { fromJS } from 'immutable';

export function setPending(state, key) {
  return state.setIn([key, 'status'], 'PENDING');
}

export function setData(state, key, data) {
  if (!!key && typeof key !== 'string') key = key.toString();
  state = state.setIn([key, 'data'], fromJS(data));
  return state.setIn([key, 'status'], 'SUCCESS');
}

export function setFailed(state, key) {
  return state.setIn([key, 'status'], 'SUCCESS');
}
