function IceCreamReducer(state = 12, action = {}) {
  switch (action.type) {
    case 'BUY_ICE_CREAM':
      return state - 1;
    case 'BAKE_ICE_CREAM':
      return state + 1;
    default:
      return state;
  }
}
export default IceCreamReducer;
