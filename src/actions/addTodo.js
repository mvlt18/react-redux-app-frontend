export const addTodo = (data, platformId, courseId) => {
  return (dispatch) => {
    fetch(`http://localhost:3000/api/v1/platforms/${platformId}/courses/${courseId}/todos`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(platform => dispatch({type: 'ADD_TODO', payload: platform}))
  }

}
