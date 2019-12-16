import React from 'react'

 const Platform = (props) => {

   console.log(props)

   let platform = props.platforms[props.match.params.id - 1]

   console.log(platform)

    return (
      <div>
       {platform ? platform.name : null} 
      </div>
    )

}

export default Platform
