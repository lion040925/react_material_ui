import React, { Component, Fragment } from 'react';
import './App.css';
import GridLayout from './GridLayout';
import MyAppBar from './MyAppBar';
import { auth, googleAuthProvider } from './firebase'


class App extends Component {

  render() {
    return (
      <Fragment>   
        <MyAppBar />  
        <GridLayout/>
        
      </Fragment>
    );
  }
}
export default App;

