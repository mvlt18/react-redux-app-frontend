import React from 'react'
import {connect} from 'react-redux'
import {Route, Switch} from 'react-router-dom'

import {fetchPlatforms} from '../actions/fetchPlatforms'

import Platforms from '../components/Platforms'
import PlatformInput from '../components/PlatformInput'
import Form from '../components/Form'
import Platform from '../components/Platform'



class PlatformsContainer extends React.Component {

  componentDidMount() {
    this.props.fetchPlatforms()
  }

  render() {
    return (
      <Switch>
           <Route path='/platforms/new' component={Form}/>
           <Route path='/platforms/:id' render={(routerProps) => <Platform {...routerProps} platforms={this.props.platforms.platforms}/>}/>
           <Route path='/platforms' render={(routerProps) => <Platforms {...routerProps} platforms={this.props.platforms.platforms}/>}/>
       </Switch>

    )
  }
}

  const mapStateToProps = state => {
    return {
      platforms: state.platforms
    }
  }

export default connect(mapStateToProps, {fetchPlatforms})(PlatformsContainer);
