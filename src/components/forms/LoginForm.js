import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Validator from 'validator';
import PropTypes from 'proptypes';

class LoginForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: {
                email: '',
                password: ''
            },
            loading: false,
            errors: {}
        }

        this.onChange = this.onChange.bind(this);
    }
    

    onChange = (e) => this.setState({
        data: { ...this.state.data, [e.target.name]: e.target.value }
    });

    onSubmit = (e) => {
        e.preventDefault()
        const errors = this.validate(this.state.data);
        this.setState({ errors });
        if(Object.keys(errors).length === 0) {
            
            this.props.submit(this.state.data)
            .catch(err => {
                const serverErrors = {};
                serverErrors.email = err.email[0];
                serverErrors.password = err.password[0];
                this.setState({errors: serverErrors})
            });
        }
    }

    validate = (data) => {
        const errors = {};
        
        if(!Validator.isEmail(data.email)) errors.email = 'Not a valid email address';
        if(!data.password) errors.password = "Password Field Is Required";

        return errors;
    }

    render(){
        const { data, errors } = this.state;
        return (
            <form onSubmit={ this.onSubmit }>
                <div className="inputwrapper">
                        <label htmlFor="email">
                            Email 
                            { errors.email && <span className="errs">{ errors.email }</span> }
                        </label>
                        <input type="email" value={data.email} name="email" id="email" onChange={this.onChange} />
                </div>

                <div className="inputwrapper">
                        <label htmlFor="password">
                            Password 
                            { errors.password && <span className="errs">{ errors.password }</span> }
                        </label>
                        <input 
                            type="password" 
                            value={data.password} 
                            name="password"  
                            id="password" 
                            onChange={this.onChange} />
                </div>

                <div className="login-action">
                        <input type="submit" value="login" />
                        <Link to="/">Forgot Password..?</Link>
                </div>
            </form>
        );
    }
}

LoginForm.propTypes = {
    submit: PropTypes.func.isRequired
}

export default LoginForm;
