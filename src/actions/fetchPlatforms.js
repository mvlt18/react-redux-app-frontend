export function fetchPlatforms() {
  return (dispatch) => {
    fetch('http://localhost:3000/api/v1/platforms')
    .then(resp => resp.json())
    .then(platforms => dispatch({
      type: 'FETCH_PLATFORMS',
      payload: platforms
    }))
  }
}
