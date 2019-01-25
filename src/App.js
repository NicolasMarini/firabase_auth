import React, { Component } from 'react';
import './App.css';
import * as firebase from 'firebase';
import * as firebaseui from 'firebaseui';
import { Router, Route } from 'react-router-dom';
import Home from './home';
import Login from './login';






class App extends Component {

  render() {
    return (
      <div>
        <link type='text/css' rel='stylesheet' href='https://cdn.firebase.com/libs/firebaseui/3.1.1/firebaseui.css' />
        <Route exact path='/' component={Login} />
        <Route path='/home' component={Home} />
      </div>
    );
  }
}

export default App;
