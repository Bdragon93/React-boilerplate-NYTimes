import * as actionType from 'actions/action-type';

export const fetchArticles = params => {
  return {
    type: actionType.FETCH_ARTICLES,
    params,
  };
};
