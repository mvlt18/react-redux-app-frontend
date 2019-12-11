import React from 'react';
import './App.css';
import { connect } from 'react-redux'
import PlatformsContainer from './containers/PlatformsContainer'

class App extends React.Component {


  render () {
    return (
      <div>
      <PlatformsContainer/>
      </div>
    );
  }

}


export default connect()(App);
