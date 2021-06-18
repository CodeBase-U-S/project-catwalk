const zoomifyReducer = (state = false, action) => {
  switch (action.type) {
  case 'TOGGLE_ZOOMIFY':
    return { zoomify: action.zoomify };
  default:
    return state;
  }
};

export default zoomifyReducer;