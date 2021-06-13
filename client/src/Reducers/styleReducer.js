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
      size: action.style.skus[action.sizeSku].size,
      quantity: getQuantity(action.style, action.sizeSku),
      hasInventory: checkInventory(action.style)
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
  let quantity = style.skus[sizeSku].quantity;
  console.log(quantity, 'quantitt')
  let quantArr = [];
  for (var i = 1; i <= quantity; i++) {
    quantArr.push(i);
  }
  console.log(quantArr,' arrarrrar')
  return quantArr;
};

export default styleReducer;

