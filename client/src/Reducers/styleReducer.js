const styleReducer = (state = [], action) => {
  switch (action.type) {
  case 'SET_STYLE':
    return {
      style: action.style,
      hasInventory: checkInventory(action.style),
    };
  case 'SET_SIZE':
    return {
      style: action.style,
      sizeSelected: action.sizeSelected,
      hasInventory: checkInventory(action.style),
      sku: action.sku,
      quantity: getQuantity(action.style, action.sku),
    };
  default:
    return state;
  }
};

const checkInventory = (style) => {
  let inventoryCheck = false;
  for (var key in style.skus) {
    if (style.skus[key].quantity) {
      inventoryCheck = true;
    }
  }
  return inventoryCheck;
};

const getQuantity = (style, sizeSku) => {
  if (sizeSku) {
    let quantity = style.skus[sizeSku].quantity;
    let quantArr = [];
    for (var i = 1; i <= quantity; i++) {
      quantArr.push(i);
    }
    return quantArr;
  }
  return null;
};


export default styleReducer;

