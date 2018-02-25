export function getAll(state) {
  return state.article.get('all');
}
export function getDetail(state, params) {
  return state.article.get(params.article);
}
