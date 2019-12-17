export const addCourse = (data, platformId) => {
  // console.log(data, platformId)

  return (dispatch) => {
    fetch(`http://localhost:3000/api/v1/platforms/${platformId}/courses`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(platform => dispatch({type: 'ADD_COURSE', payload: platform}))
  }

}
