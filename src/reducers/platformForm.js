const initialState = {
  name: '',
  url: '',
  image: ''
}

export default (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_PLATFORM_FORM":
      return action.formData
    default:
      return state
  }
}
