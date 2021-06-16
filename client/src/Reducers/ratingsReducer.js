const initialState = { ratings: {} };

const ratingsReducer = (state = initialState, action) => {
  if (action.type === 'ratings') {
    return { ratings: action.ratings}
  }
  return state;
}

export default ratingsReducer;
