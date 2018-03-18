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
            this.setState({ loading: true })
            this.props
            .submit(this.state.data)
            .catch(err => {
                const serverErrors = {};
                if(err.response.data.errors.email){
                    serverErrors.email = err.response.data.errors.email[0];
                }

                if(err.response.data.errors.password){
                    serverErrors.password = err.response.data.errors.password;
                }

                this.setState({errors: serverErrors, loading: false })
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
        const { data, errors, loading } = this.state;
        return (
            <form onSubmit={ this.onSubmit } loading={loading.toString()}>
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
