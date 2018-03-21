import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'proptypes';
import { connect } from 'react-redux';
import bg from '../video/bg.mp4' ;
import LoginForm from '../forms/LoginForm';
import { loginRequest } from '../../actions/auth';

export class LoginPage extends Component {

  submit = (data) => 
    this.props.loginRequest(data).then(() => this.props.history.push('/dashboard'));

  render(){
    return (
      <div className="ch-login">
        <div className="intro">
          {/* eslint-disable */}
          <video loop muted autoPlay className="fullscreen-bg__video">
            <source src={bg} type="video/mp4" />
          </video>
          {/* eslint-enable */}
                  
        </div>

        <div className="forms">
          <div className="logo">
            <h2>chumvi</h2>
          </div>

          <div className="form">
            <div className="tab">
              <Link className="active" to="/login">login</Link>
      	  		<Link to="/signup">signup</Link>
            </div>
            <LoginForm submit={this.submit} />
          </div>
        </div>
      </div>
    );
  }
}

LoginPage.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired,
  loginRequest: PropTypes.func.isRequired
}

export default connect(null, { loginRequest })(LoginPage);
