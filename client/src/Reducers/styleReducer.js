const styleReducer = (state = [], action) => {
  switch (action.type) {
  case 'SET_STYLE':
    return {style: action.style};
  default:
    return state;
  }
};

export default styleReducer;

