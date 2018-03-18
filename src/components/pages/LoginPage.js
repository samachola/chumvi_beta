import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import bg from '../video/bg.mp4' ;
import LoginForm from '../forms/LoginForm';

class LoginPage extends Component {

  submit = (data) => {
    console.log(data);
  }
  render(){
    return (
      <div className="ch-login">
        <div className="intro">
          <video loop muted autoPlay className="fullscreen-bg__video">
            <source src={bg} type="video/mp4" />
          </video>
        </div>

        <div className="forms">
          <div className="logo">
            <h2>chumvi</h2>
          </div>

          <div className="form">
            <div className="tab">
              <Link className="active" to="/">login</Link>
      	  		<Link to="/">signup</Link>
            </div>
            <LoginForm submit={this.submit} />
          </div>
        </div>
      </div>
    );
  }
}


export default LoginPage;
