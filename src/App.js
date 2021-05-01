import React, { Component } from 'react';
import {Route, BrowserRouter as Router, withRouter, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import './index.css';
import Home from './components/home/Home';
import Login from './components/login/Login';
import PrivateRoute from './routing/PrivateRoute';
import {loginUser} from './actions/auth';
function App(props){
   
    const { isLoggedIn } = props.status;
     return (
        <>
          <Switch>
           <Route exact path="/" component={Login} />   
           <PrivateRoute authed={isLoggedIn} path='/home' component={Home} />
          </Switch>
        </>
    )
}
function mapStateToProps(state) {
  return {
      status: state.credential
   }
  }
export default connect(mapStateToProps, {loginUser})(withRouter(App));