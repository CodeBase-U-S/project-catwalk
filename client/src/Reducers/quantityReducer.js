const quantityReducer = (state = 0, action) => {
  switch (action.type) {
  case 'SET_QUANTITY':
    return { quantity: action.quantity };
  default:
    return state;
  }
};

export default quantityReducer;