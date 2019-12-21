import React from 'react'
import {connect} from 'react-redux'
import {addPlatform} from '../actions/addPlatform'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class PlatformInput extends React.Component {

  state = {
    name: '',
    url: '',
    image: ''
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.addPlatform(this.state)
    this.setState({
      name: '',
      url: '',
      image: ''
    })
    this.props.history.push('/platforms');
  };

  render() {
      return (
        <div className="platform-form-div">
          <Form onSubmit={this.handleSubmit}>
            <Form.Group controlId="name-input">
              <Form.Label>Name</Form.Label>
              <Form.Control type='text' onChange={this.handleChange} value={this.state.name} name="name" placeholder="Enter platform name"/>
            </Form.Group>
            <Form.Group controlId="website-input">
              <Form.Label>Website</Form.Label>
              <Form.Control type='text' onChange={this.handleChange} value={this.state.url} name="url" placeholder="Enter platform URL"/>
            </Form.Group>
            <Form.Group controlId="image-input">
              <Form.Label>Image</Form.Label>
              <Form.Control type='text' onChange={this.handleChange} value={this.state.image} name="image" placeholder="Enter platform logo URL"/>
            </Form.Group>
            <Button variant="outline-success" size="sm" block type="submit">Submit</Button>
          </Form>
        </div>
      )
  };

}

export default connect (null, {addPlatform})(PlatformInput)
