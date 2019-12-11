//// Might not need this reducer ////
export default function platformsReducer(state = {platforms: []}, action) {
  switch (action.type) {
    case 'FETCH_PLATFORMS':
      return {platforms: action.payload}
    default:
      return state;
  }
}
