
const stylesReducer = (state = [], action) => {
  switch (action.type) {
  case 'SET_STYLES':
    return { styles: action.styles };
  default:
    return state;
  }
};

export default stylesReducer;