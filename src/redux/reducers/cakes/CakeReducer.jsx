function CakeReducer(state = 25, action = {}) {
  switch (action.type) {
    case 'BUY_CAKE':
      return state - 1;
    case 'BAKE_CAKE':
      return state + 1;
    default:
      return state;
  }
}
export default CakeReducer;
