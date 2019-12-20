import React from 'react';
import './App.css';
import { connect } from 'react-redux'
import PlatformsContainer from './containers/PlatformsContainer'
import NavigationBar from './components/NavigationBar'
import Layout from './components/Layout'
import Jumbotron from './components/Jumbotron'

class App extends React.Component {

  render () {
    return (
      <React.Fragment>
          <NavigationBar/>
          <Jumbotron/>
          <Layout>
            <PlatformsContainer/>
          </Layout>
      </React.Fragment>
    );
  }

}

export default connect()(App);
