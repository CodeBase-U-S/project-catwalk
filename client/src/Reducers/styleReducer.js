const initialState = { style: {}, hasInventory: false };


const styleReducer = (state = [], action) => {
  switch (action.type) {
  case 'SET_STYLE':
    return {
      style: action.style,
      hasInventory: checkInventory(action.style),
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



export default styleReducer;

