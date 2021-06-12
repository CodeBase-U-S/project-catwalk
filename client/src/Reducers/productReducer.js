
// const initialState = { product: [] };


const productReducer = (state = {}, action) => {
  switch (action.type) {
  case 'CHANGE_PRODUCT':
    return { product: action.product };
  default:
    return state;
  }
};

export default productReducer;