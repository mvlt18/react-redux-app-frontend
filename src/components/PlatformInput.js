import React from 'react'
import {connect} from 'react-redux'
import {addPlatform} from '../actions/addPlatform'

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
  };

  render() {
      return (
        <div>
          <form onSubmit={this.handleSubmit}>
            <p>
            <label>Platform Name</label>
            <input type='text' onChange={this.handleChange} value={this.state.name} name="name"/>
            </p>

            <p>
            <label>Website URL</label>
            <input type='text' onChange={this.handleChange} value={this.state.url} name="url"/>
            </p>

            <p>
            <label>Image URL (optional)</label>
            <input type='text' onChange={this.handleChange} value={this.state.image} name="image"/>
            </p>
            <input type='submit'/>

            {/*
              just to test if we are properly changing the state
              {this.state.name}
              {this.state.url}
              {this.state.image}
            */}

          </form>
        </div>
      )
  };

}

export default connect (null, {addPlatform})(PlatformInput)
