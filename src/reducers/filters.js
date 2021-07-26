const INITIAL_STATE = {
  place: {
    country: null,
    city: null,
  },
  guests: {
    adults: 0,
    children: 0,
  },
};

const filterReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'APPLY_FILTERS':
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default filterReducer;
