import React from 'react'

 const Platforms = (props) => {

   console.log(props)

  return (
  <div>
    {props.platforms.map(p => <li key={p.id}>{p.name}</li>)}
  </div>
  )

}

export default Platforms
