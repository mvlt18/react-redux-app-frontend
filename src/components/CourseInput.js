import React from 'react'
import {connect} from 'react-redux'
import {addCourse} from '../actions/addCourse'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'

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
      <Accordion className="new-course-conatiner">
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="light" eventKey="0">
              Add New Course
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              <Form onSubmit={this.handleSubmit}>
                <Form.Group controlId="course-name-input">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type='text' onChange={this.handleChange} value={this.state.name} name="name" placeholder="Enter course name"/>
                </Form.Group>
                <Form.Group controlId="course-website-input">
                  <Form.Label>Website</Form.Label>
                  <Form.Control type='text' onChange={this.handleChange} value={this.state.url} name="url" placeholder="Enter course URL"/>
                </Form.Group>
                <Form.Group controlId="start_date">
                  <Form.Label>Start Date</Form.Label>
                  <Form.Control type='text' onChange={this.handleChange} value={this.state.image} name="start_date" placeholder="Enter start date"/>
                </Form.Group>
                <Form.Group controlId="end_date">
                  <Form.Label>Target End Date</Form.Label>
                  <Form.Control type='text' onChange={this.handleChange} value={this.state.image} name="end_date" placeholder="Enter end date"/>
                </Form.Group>
                <Form.Group controlId="startus">
                  <Form.Label>Status</Form.Label>
                  <Form.Control as="select" onChange={this.handleChange} value={this.state.image} name="status">
                    <option>Not Started Yet</option>
                    <option>Working on it</option>
                    <option>Done</option>
                  </Form.Control>
                </Form.Group>
                <Button variant="outline-success" size="sm" block type="submit">Submit</Button>
              </Form>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>



    )

  }
}


export default connect(null, {addCourse})(CourseInput)
