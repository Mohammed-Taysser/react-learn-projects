function MoltoReducer(state = 5, action = {}) {
  switch (action.type) {
    case 'BUY_MOLTO':
      return state - 1;
    case 'BAKE_MOLTO':
      return state + 1;
    default:
      return state;
  }
}
export default MoltoReducer;
