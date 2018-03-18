import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'proptypes';
import { connect } from 'react-redux';
import bg from '../video/bg.mp4';
import SignupForm from '../forms/SignupForm';
import { signup } from '../../actions/auth';

class SignupPage extends Component {
    submit = (data) => 
      this.props.signup(data).then(() => this.props.history.push('/login'));

    render(){
        return(
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
                    <Link  to="/login">login</Link>
                    <Link className="active" to="/signup">signup</Link>
                  </div>
                  <SignupForm submit={this.submit} />
                </div>
              </div>
            </div>
        );
    }

}

SignupPage.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired,
  signup: PropTypes.func.isRequired 
}

export default connect(null, { signup })(SignupPage);
