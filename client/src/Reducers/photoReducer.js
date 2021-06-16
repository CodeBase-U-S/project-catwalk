

const photoReducer = (state = {photoIndex: 'notSet'}, action) => {
  switch (action.type) {
  case 'SET_PHOTO':
    return { photoIndex: action.photoIndex };
  default:
    return state;
  }
};

export default photoReducer;