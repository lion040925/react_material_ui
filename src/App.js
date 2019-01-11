import React, { Component, Fragment } from 'react';
import './App.css';
import GridLayout from './GridLayout';
import MyAppBar from './MyAppBar';
import Paperbase from './Paperbase';
import { auth, googleAuthProvider } from './firebase'


class App extends Component {

  render() {
    return (
      <Fragment>   
        {/*
        <MyAppBar />  
        <GridLayout/>
        */}
        <Paperbase />
      </Fragment>
    );
  }
}
export default App;

