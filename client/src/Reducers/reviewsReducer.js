const initialState = { reviews: [] };

const reviewsReducer = (state = initialState, action) => {
  if (action.type === 'reviews') {
    return { reviews: action.reviews}
  }
  return state;
}

export default reviewsReducer;
