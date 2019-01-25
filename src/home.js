import React, { Component } from 'react';
import './App.css';
import { Link, Route } from 'react-router-dom';
import * as firebase from 'firebase';


class Home extends Component {

  constructor() {
    super();
    this.state = {
      authenticated: false,
      currentUser: null,
      loading: true
    }
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({
          authenticated: true,
          currentUser: user,
          loading: false
        });
        console.log('====================================');
        console.log('usuario logueado: ', this.state.currentUser.displayName);
        console.log('====================================');
      } else {
        this.setState({
          authenticated: false,
          currentUser: null,
          loading: false
        });
      }
    });
  }

  render() {
    return (
      <div>
      {this.state.currentUser ?
        <div>
        <h2>Bienvenido {this.state.currentUser.displayName}</h2>
        </div>
        : null
      }
      </div>
    )
  }
  
}

export default Home;
