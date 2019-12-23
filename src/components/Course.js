import React from 'react'
import TodosContainer from '../containers/TodosContainer'

 const Course = (props) => {

   // console.log(props)

   let course = props.courses && props.courses.filter(course => course.id == props.match.params.id)[0]

   // console.log(course)

    return (
      <div>

      <h5 id="course-name">{course ? course.name : null}</h5>
      <p>{course ? course.status : null}</p>
      <a href={course ? course.url : null} target="_blank">Go to Course</a>
      <h6 id="course-start-date">Start Date:  {course ? course.start_date : null} </h6>
      <h6>Target End Date: {course ? course.end_date : null}</h6>

      <TodosContainer course={course}/>
      </div>
    )

}

export default Course
