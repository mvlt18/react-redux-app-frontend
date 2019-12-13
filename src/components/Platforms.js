import React from 'react'

 const Platforms = (props) => {

  return (
    <div>
      {props.platforms.map(platform =>
        <li key={platform.id}>
          {platform.name}
        </li>
      )}
    </div>
  )

}

export default Platforms
