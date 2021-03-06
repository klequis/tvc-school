// import * as ku from './../lib/ke-utils'

export const getCurrentRouteId = (state) => {
  // ku.log('selectors.getCurrentComponentId: state', state, 'orange' )
  //; ku.log('selectors.getCurrentComponentId: id', state.ui.currentComponentId.id, 'orange' )
  return state.ui.currentRouteIndex;
}
export const getRoutes = (state) => {
  return state.routes
}

// redux selectors
export const getRequest = (state, key) =>
  state.requests[key] || {};

export const getRequests = (state) =>
  state.requests;

export const areRequestsPending = (requests) => {
  return Object.keys(requests)
    .some((key) => requests[key].status === 'pending');
};
