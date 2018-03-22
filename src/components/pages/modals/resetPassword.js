import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'proptypes';
import { Modal } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';
import { passwordRequest } from '../../../actions/auth';

class ResetPassword extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data: {
                email: ''
            },
            errors: {},
            message: ''
        }

        this.onChange = this.onChange.bind(this);
    }

    onChange = (e) => this.setState({
        data: { ...this.state.data, [e.target.name]: e.target.value }
    });

    onSubmit = (e) => {
        e.preventDefault()
        const errors = this.validate(this.state.data);
        this.setState({ errors })

        if(Object.keys(errors).length === 0) {
            this.props.passwordRequest(this.state.data)
                .then(() => window.location.reload())
                .catch(err => {
                    const serverErrors = {};
                    if(err){
                        if(err.response.data && !err.response.data.status){
                            serverErrors.email = err.response.data.message
                        }  
                    }

                    this.setState({errors: serverErrors})
                });
        }
    }

    validate = (data) => {
        const errors = {};

        if(!data.email) errors.email = "Email is required";

        return errors;
    }

    render(){
        const { data, errors } = this.state;
        return(
            <Modal trigger={<p>Forgot Password..?</p>}>
                <Modal.Header className="modalheader">Forgot Password..?</Modal.Header>
                <Modal.Content image>
                    <Modal.Description>
                        <form className="category-form" onSubmit={this.onSubmit}>
                            <div className="inputwrapper">
                                <label htmlFor="email">
                                Email: (A reset password link will be sent to your email)
                                { errors.email && <span className="errs">{ errors.email }</span> }
                                </label>
                                <input 
                                    type="email" 
                                    value={data.email} 
                                    name="email" 
                                    id="email" 
                                    onChange={this.onChange} />
                            </div> 

                            <div className="login-action">
                                <input type="submit" id="submit" value="Forgot Password"/>
                            </div>  
                        </form>
                    </Modal.Description>
                </Modal.Content>
            </Modal>
          )
        }
}


ResetPassword.propTypes = {
    passwordRequest: PropTypes.func.isRequired
}

export default connect(null, { passwordRequest })(ResetPassword);