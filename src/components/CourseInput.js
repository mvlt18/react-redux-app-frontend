import React from 'react'
import {connect} from 'react-redux'
import {addCourse} from '../actions/addCourse'

class CourseInput extends React.Component {

  state = {
    name: '',
    url: '',
    start_date: '',
    end_date: '',
    status: 'Not Started Yet'
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.addCourse(this.state, this.props.platform.id)
    this.setState({
      name: '',
      url: '',
      start_date: '',
      end_date: '',
      status: ''
    })
  };

  render() {
    return (
      <div>
      <form onSubmit={this.handleSubmit}>
        <p>
        <label>Course Name</label>
        <input type='text' onChange={this.handleChange} value={this.state.name} name="name" placeholder="Course Name"/>
        </p>

        <p>
        <label>Course URL</label>
        <input type='text' onChange={this.handleChange} value={this.state.url} name="url" placeholder="Course URL"/>
        </p>

        <p>
        <label>Start Date</label>
        <input type='text' onChange={this.handleChange} value={this.state.start_date} name="start_date" placeholder="Start Date"/>
        </p>

        <p>
        <label>Target End Date</label>
        <input type='text' onChange={this.handleChange} value={this.state.end_date}  name="end_date" placeholder="End Date"/>
        </p>

        <p>
        <label>Status</label>
        <select onChange={this.handleChange} value={this.state.status} name="status" >
          <option>Not Started Yet</option>
          <option>Working on it</option>
          <option>Complete</option>
        </select>
        </p>

        <input type='submit'/>


        {/*
          just to test if we are properly changing the state
          {this.state.name}
        */}

      </form>
      </div>
    )

  }
}


export default connect(null, {addCourse})(CourseInput)
