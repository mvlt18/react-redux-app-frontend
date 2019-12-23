//// Might not need this reducer ////
export default function platformsReducer(state = {platforms: []}, action) {
  // debugger;
  switch (action.type) {
    case 'FETCH_PLATFORMS':
      return {platforms: action.payload}
    case 'ADD_PLATFORM':
      return {...state, platforms: [...state.platforms, action.payload]}
    case 'ADD_COURSE':
      let platforms = state.platforms.map(platform => {
        if (platform.id === action.payload.id) {
          return action.payload
        } else {
          return platform
        }
      })
      return {...state, platforms: platforms}
      case 'ADD_TODO':
        let platforms2 = state.platforms.map(platform => {
          if (platform.id === action.payload.id) {
            return action.payload
          } else {
            return platform
          }
        })
        return {...state, platforms: platforms2}
    default:
      return state;
  }
}
