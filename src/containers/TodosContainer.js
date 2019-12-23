import React from 'react'
import Todos from '../components/Todos'

class TodosContainer extends React.Component {


  render() {
  // console.log(this.props)
    return (
      <div>
        <Todos course={this.props.course}/>
      </div>
    )
  }

}

export default TodosContainer
