const initialState = { size: null, sku: null};

const sizeReducer = (state = initialState, action) => {
  switch (action.type) {
  case 'SET_SIZE':
    return { size: action.size, sku: action.sku, sizeQuantity: getQuantity(action.style, action.sku)};
  default:
    return state;
  }
};

const getQuantity = (style, sizeSku) => {
  if (sizeSku) {
    let quantity = style.skus[sizeSku].quantity;
    let quantArr = [];
    for (var i = 1; i <= 15; i++) {
      quantArr.push(i);
    }
    return quantArr;
  }
  return null;
};

export default sizeReducer;