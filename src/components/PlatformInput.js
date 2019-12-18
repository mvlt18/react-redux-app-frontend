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
        <div>
          <Form onSubmit={this.handleSubmit}>
            <Form.Group controlId="name-input">
              <Form.Label>Platform Name</Form.Label>
              <Form.Control type='text' onChange={this.handleChange} value={this.state.name} name="name" placeholder="Platform Name"/>
            </Form.Group>
            <Form.Group controlId="website-input">
              <Form.Label>Website URL</Form.Label>
              <Form.Control type='text' onChange={this.handleChange} value={this.state.url} name="url" placeholder="Platform URL"/>
            </Form.Group>
            <Form.Group controlId="image-input">
              <Form.Label>Website URL (optional)</Form.Label>
              <Form.Control type='text' onChange={this.handleChange} value={this.state.image} name="image" placeholder="Platform Image URL"/>
            </Form.Group>
            <Button variant="primary" type="submit">Submit</Button>
          </Form>

        </div>
      )
  };

}

export default connect (null, {addPlatform})(PlatformInput)
