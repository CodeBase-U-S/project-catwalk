const styleReducer = (state = [], action) => {
  switch (action.type) {
  case 'SET_STYLE':
    return {
      style: action.style,
      'hasInventory': checkInventory(action.style),
      quantity: action.size,

    };
  case 'SET_SIZE':
    return {
      size: this.style.skus[action.sizeSku].size,
      quantity: getQuantity(action.sizeSku)
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

const getQuantity = (sizsizeSkueSkusize) => {
  return this.style[skus].sizeSku.quantity;
};

export default styleReducer;

