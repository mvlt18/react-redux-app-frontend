import React from 'react';
import './App.css';
import { connect } from 'react-redux'
import PlatformsContainer from './containers/PlatformsContainer'
import NavigationBar from './components/NavigationBar'
import Layout from './components/Layout'

class App extends React.Component {

  render () {
    return (
      <React.Fragment>
        <Layout>
          <NavigationBar/>
          <PlatformsContainer/>
        </Layout>
      </React.Fragment>
    );
  }

}

export default connect()(App);
