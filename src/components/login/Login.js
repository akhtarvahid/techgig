import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loginUser } from "../../actions/auth";
import './login.scss';

class Login extends Component {
  state = {
    username: '', 
    password:'',
    message: ''
   }
    handleChange=(e)=>{
      const {value, name} = e.target;
      this.setState({
          [name] : value
      })
    }
    handleSubmit=(e)=> {
        e.preventDefault();
        const {username, password} = this.state;
        const fields = { username, password }
        this.props.loginUser(fields, this.props);
       
        const { isLoggedIn } = this.props?.status;
        if(!isLoggedIn) {
           this.setState({
            message: "Wrong credential"}, ()=> {
            setTimeout(() => this.setState({message: ''}), 2000);
           });
        }
    }
    render() {
    const { message } = this.state;
    return ( 
      <>
      <div className="login-form">
        <div className="form-section">
        {message.length > 0 && <div className="info">{message}</div>}
        <form onSubmit={this.handleSubmit}>
          <div className="fields">
          <input type="text" name="username" placeholder="Enter Username: foo" onChange={this.handleChange}/>
          </div>  
          <div className="fields">
          <input type="text" name="password" placeholder="Enter password: bar" onChange={this.handleChange}/>
          </div>
          <div className="fields">
          <input type="submit" value="submit"/>
          </div>
        </form>
        </div>
     </div>
    </>
    )
  }
}
function mapStateToProps(state) {
  return {
      status: state.credential
   }
  }
export default connect(mapStateToProps, {loginUser})(Login);