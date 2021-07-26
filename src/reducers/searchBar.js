const INITIAL_STATE = {
  visible: false,
  activeField: 0,
};

const searchBarReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'OPEN_SEARCH':
      return {
        visible: true,
        activeField: action.payload,
      };
    case 'CLOSE_SEARCH':
      return INITIAL_STATE;
    default:
      return state;
  }
};

export default searchBarReducer;
