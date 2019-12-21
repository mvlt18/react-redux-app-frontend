import React from 'react'
import CoursesContainer from '../containers/CoursesContainer'

 const Platform = (props) => {

   // console.log(props)

   let platform = props.platforms && props.platforms.filter(platform => platform.id == props.match.params.id)[0]

   // console.log(platform)

    return (
      <div>
        <h4>
         {platform ? platform.name : null}
       </h4>
        <CoursesContainer platform={platform}/>
      </div>
    )

}

export default Platform
