import React from 'react'
import Courses from '../components/Courses'
import Course from '../components/Course'

import {Route, Switch} from 'react-router-dom'


class CoursesContainer extends React.Component {

  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/platforms/:id/courses/:id' render={(routerProps) => <Course {...routerProps} courses={this.props.platform && this.props.platform.courses}/>}/>
          <Courses platform={this.props.platform}/>
        </Switch>
      </div>

    )

  }

}

export default CoursesContainer
