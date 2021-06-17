const modalReducer = (state = false, action) => {
  switch (action.type) {
  case 'TOGGLE_MODAL':
    return { modalState: action.modalState };
  default:
    return state;
  }
};

export default modalReducer;