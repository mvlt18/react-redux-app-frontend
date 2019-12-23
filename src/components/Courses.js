import React from 'react'
import {Link} from 'react-router-dom'
import CourseInput from '../components/CourseInput'
import ListGroup from 'react-bootstrap/ListGroup'
// import {connect} from 'react-redux'
// import {deleteTransaction} from '../actions/deleteTransaction'

const Courses = (props) => {
// console.log(props)

  return (
    <div className="courses-container">
      {props.platform && props.platform.courses.map(course =>
        <ListGroup variant="light">
          <ListGroup.Item action variant="light" key={course.id}>  <Link to={`/platforms/${props.platform.id}/courses/${course.id}`}>{course.name}</Link></ListGroup.Item>
        </ListGroup>
      )}

      <CourseInput platform={props.platform}/>
    </div>

  )

}

export default Courses
