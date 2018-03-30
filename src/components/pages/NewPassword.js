import React, { Component } from 'react';
import PropTypes from 'proptypes';
import { connect } from 'react-redux';
import bg from '../video/bg.mp4' ;
import ResetForm from '../forms/ResetForm';
import { passwordResetRequest } from '../../actions/auth';

export class NewPassword extends Component {
    constructor(props){
        super(props);
        this.state = {
            token: props.match.params.token
        }
    }

  

  submit = (data, token) => 
    this.props.passwordResetRequest(data, token).then(() => this.props.history.push('/login'));

  render(){
    const token = this.state.token;
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
            <ResetForm token={token} submit={this.submit} />
          </div>
        </div>
      </div>
    );
  }
}

NewPassword.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired,
  passwordResetRequest: PropTypes.func.isRequired
}

export default connect(null, { passwordResetRequest })(NewPassword);
