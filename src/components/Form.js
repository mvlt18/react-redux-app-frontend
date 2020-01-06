import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updatePlatformForm } from '../actions/platformForm'
import {addPlatform} from '../actions/addPlatform'


const Form = (props) => {

  const handleInputChange = event => {
    const { name, value } = event.target
    const updatedFormInfo = {
      ...props.platformForm,
      [name]: value
    }
    props.updatePlatformForm(updatedFormInfo)
  }

  const handleSubmit = event => {
    event.preventDefault()
    props.addPlatform(props.platformForm, props.history)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="name" name="name" onChange={handleInputChange} value={props.platformForm.name}/><br/>
      <input placeholder="url" name="url" onChange={handleInputChange} value={props.platformForm.url}/><br/>
      <input placeholder="image" name="image" onChange={handleInputChange} value={props.platformForm.image}/><br/>
      <input type="submit" value="Create Platform"/>
    </form>
)};

const mapStateToProps = state => {
  return {
    // name: state.platformForm.name,
    // url: state.platformForm.url,
    // image: state.platformForm.image
    platformForm: state.platformForm
  }
}

export default connect(mapStateToProps, {updatePlatformForm, addPlatform})(Form);
