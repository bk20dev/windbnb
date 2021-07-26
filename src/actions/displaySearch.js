export const openSearch = (activeField = 0) => ({
  type: 'OPEN_SEARCH',
  payload: activeField,
});

export const closeSearch = () => ({
  type: 'CLOSE_SEARCH',
});
