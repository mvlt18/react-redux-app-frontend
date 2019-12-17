import React from 'react'
import CourseInput from '../components/CourseInput'
import Courses from '../components/Courses'

class CoursesContainer extends React.Component {

  render() {
    return (
      <div>
          <CourseInput/>
          <Courses courses={this.props.platform && this.props.platform.courses}/>
      </div>

    )

  }

}

export default CoursesContainer
