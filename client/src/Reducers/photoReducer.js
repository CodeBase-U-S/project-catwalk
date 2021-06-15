

const photoReducer = (state = [], action) => {
  switch (action.type) {
  case 'SET_PHOTO':
    return { photo: action.photo };
  default:
    return state;
  }
};

export default photoReducer;