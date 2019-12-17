import React from 'react'
// import {connect} from 'react-redux'
// import {deleteTransaction} from '../actions/deleteTransaction'

const Courses = (props) => {
// console.log(props)

  return (
    <div>
    {props.courses && props.courses.map(course =>
      <li key={course.id}> {course.name} </li>
    )}
    </div>
  )

}

export default Courses
