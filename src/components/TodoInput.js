import React from 'react'
import {connect} from 'react-redux'
import {addTodo} from '../actions/addTodo'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'

class TodoInput extends React.Component {

  state = {
    content: '',
    due_date: ''
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  };

  handleSubmit = event => {
    console.log(this.props)
    event.preventDefault();
    this.props.addTodo(this.state, this.props.course.platform_id, this.props.course.id)
    this.setState({
      content: '',
      due_date: ''
    })
  };

  render() {
    return (
      <Accordion className="new-todo-conatiner">
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="light" eventKey="0">
              Add To Do
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              <Form onSubmit={this.handleSubmit}>

                <Form.Group controlId="todo-content-input">
                  <Form.Label>To Do</Form.Label>
                  <Form.Control type='text' onChange={this.handleChange} value={this.state.name} name="content" placeholder="Enter to do item"/>
                </Form.Group>

                <Form.Group controlId="todo-duedate-input">
                  <Form.Label>Due Date</Form.Label>
                  <Form.Control type='text' onChange={this.handleChange} value={this.state.url} name="due_date" placeholder="Enter target due date"/>
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

export default connect(null, {addTodo}) (TodoInput)
