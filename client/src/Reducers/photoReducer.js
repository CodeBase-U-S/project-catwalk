

const photoReducer = (state = {photoIndex: 'notSet'}, action) => {
  switch (action.type) {
  case 'SET_PHOTO':
    return { photoIndex: action.photoIndex };
  case 'SET_STYLE':
    return { photoIndex: 0 };
  default:
    return state;
  }
};

export default photoReducer;