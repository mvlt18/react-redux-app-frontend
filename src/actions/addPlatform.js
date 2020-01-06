// This is addPlatform version to be used with PlatformInput - local state version

// export const addPlatform = (data) => {
//   return (dispatch) => {
//     fetch('http://localhost:3000/api/v1/platforms', {
//       headers: {
//         'Content-Type': 'application/json',
//         'Accept': 'application/json'
//       },
//       method: 'POST',
//       body: JSON.stringify(data)
//     })
//     .then(response => response.json())
//     .then(platform => dispatch({type: 'ADD_PLATFORM', payload: platform}))
//   }
//
// }


// This is addPlatform version to be used with Form - global state version

export const addPlatform = (data, history) => {
  return (dispatch) => {
    fetch('http://localhost:3000/api/v1/platforms', {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(platform => dispatch(
      {type: 'ADD_PLATFORM', payload: platform}))
      history.push('/platforms')
  }

}
