import React from 'react'
// import CoursesContainer from '../containers/CoursesContainer'

 const Course = (props) => {

   console.log(props)

   let course = props.courses && props.courses.filter(course => course.id == props.match.params.id)[0]

   console.log(course)

    return (
      <div>
      <h5>
      {course ? course.name : null}
      </h5>

      {course ? course.start_date : null} -
      {course ? course.end_date : null} -

      <p>
      {course ? course.status : null}
      </p>

      </div>
    )

}

export default Course
