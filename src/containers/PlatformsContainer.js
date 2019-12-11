import React from 'react'
import {connect} from 'react-redux'
import {Route, Switch} from 'react-router-dom'

import {fetchPlatforms} from '../actions/fetchPlatforms'

import Platforms from '../components/Platforms'
import PlatformInput from '../components/PlatformInput'


class PlatformsContainer extends React.Component {

  componentDidMount() {
    this.props.fetchPlatforms()
  }

  render() {
      return (
          <div>
          <PlatformInput/>
          <Platforms/>
          </div>
      )
  }
}

const mapStateToProps = state => {
  return {
    platforms: state.platforms
  }
}

export default connect(mapStateToProps, {fetchPlatforms})(PlatformsContainer);
