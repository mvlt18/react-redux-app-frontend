import React from 'react'
import {Route, Link} from 'react-router-dom'
import CourseInput from '../components/CourseInput'
// import {connect} from 'react-redux'
// import {deleteTransaction} from '../actions/deleteTransaction'

const Courses = (props) => {
console.log(props)

  return (
    <div>
      {props.platform && props.platform.courses.map(course =>
        <div>
            <Link to={`/platforms/${props.platform.id}/courses/${course.id}`}>{course.name}</Link>
        </div>
      )}
      <CourseInput platform={props.platform}/>
    </div>
  )

}

export default Courses
