import React from 'react'
import CoursesContainer from '../containers/CoursesContainer'

 const Platform = (props) => {

   console.log(props)

   let platform = props.platforms[props.match.params.id - 1]

   console.log(platform)

    return (
      <div>
        <h2>
         {platform ? platform.name : null}
         <CoursesContainer platform={platform}/>
        </h2>
      </div>
    )

}

export default Platform
