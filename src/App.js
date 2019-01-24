import React, { Component } from 'react';
import './App.css';
import * as firebase from 'firebase';
import * as firebaseui from 'firebaseui';
import { Router, Route } from 'react-router-dom';
import Home from './home';
import Login from './login';



var config = {
  apiKey: 'AIzaSyDv4F1VRs89h6BzEtoZIxa9cBFkLGq8hWo',
  authDomain: 'fir-practica-46905.firebaseapp.com',
  databaseURL: 'https://fir-practica-46905.firebaseio.com',
  projectId: 'fir-practica-46905',
  storageBucket: 'fir-practica-46905.appspot.com',
  messagingSenderId: '569687778457'
};
console.log('CONFIG: ', JSON.stringify(config, null, 1));

firebase.initializeApp(config);






var provider = new firebase.auth.GoogleAuthProvider();
//provider.addScope('https://www.googleapis.com/auth/contacts.readonly');


let ui = new firebaseui.auth.AuthUI(firebase.auth());




class App extends Component {

  render() {
    let uiConfig = {
      callbacks: {
        signInSuccessWithAuthResult: function (authResult, redirectUrl) {
          // User successfully signed in.
          // Return type determines whether we continue the redirect automatically
          // or whether we leave that to developer to handle.
          // console.log('RESULT: ', JSON.stringify(authResult,null,1));

          return true;
        }
      },
      signInSuccessUrl: '/home',
      signInOptions: [{
        provider:
          // List of OAuth providers supported.
          firebase.auth.GoogleAuthProvider.PROVIDER_ID
        //firebase.auth.FacebookAuthProvider.PROVIDER_ID,
        //firebase.auth.TwitterAuthProvider.PROVIDER_ID,
        //firebase.auth.GithubAuthProvider.PROVIDER_ID
        ,
        scopes: [
          //'https://www.googleapis.com/auth/contacts.readonly',
          'email',
          //'profile',
        ]
      },
      {
        provider: firebase.auth.GithubAuthProvider.PROVIDER_ID
      }
      ]
    };

    ui.start('#firebaseui-auth-container', uiConfig)

    return (
      <div>

        <link type='text/css' rel='stylesheet' href='https://cdn.firebase.com/libs/firebaseui/3.1.1/firebaseui.css' />
        <Router>
        <Route path='/' component={Login} />
        <Route path='/home' component={Home} />
        <div id='firebaseui-auth-container'></div>
        </Router>
      </div>
    );
  }
}

export default App;
