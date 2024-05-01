import React from 'react';
import {Route, Routes } from 'react-router-dom';
import { connect } from 'react-redux';
import './index.css';
import Home from './components/home/Home';
import Login from './components/login/Login';
import PrivateRoute from './routing/PrivateRoute';
import {loginUser} from './actions/auth';
import { withRouter } from './components/common/withRouter';
function App(props){
    const { isLoggedIn } = props.status;
     return (
        <>
          <Routes>
            <Route exact path="/" element={<Login />} />   
            <Route path='/home' element={<PrivateRoute  authed={isLoggedIn}>
              <Home />
            </PrivateRoute>} />
          </Routes>
        </>
    )
}
function mapStateToProps(state) {
  return {
      status: state.credential
    }
  }
export default connect(
    mapStateToProps, 
    {loginUser})
    (withRouter(App)
);