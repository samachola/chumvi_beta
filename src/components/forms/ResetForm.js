import React, { Component } from 'react';
import PropTypes from 'proptypes';

class ResetForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: {
                confirm_password: '',
                password: ''
            },
            loading: false,
            errors: {},
            token: props.token
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
            .submit(this.state.data, this.props.token)
            .catch(err => {
                const serverErrors = {};
                if(err.response.data.errors.passoword){
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

        if(!data.password) errors.password = "Password Field Is Required";
        if(!data.confirm_password) errors.confirm_password = "Password Field Is Required";
        if(data.confirm_password !== data.password) errors.password = "Passwords Did Not Match";

        return errors;
    }

    render(){
        const { data, errors, loading } = this.state;
        return (
            <form onSubmit={ this.onSubmit } loading={loading.toString()}>
                <div className="inputwrapper">
                        <label htmlFor="password">
                            Password
                            { errors.password && <span className="errs">{ errors.password }</span> }
                        </label>
                        <input type="password" value={data.password} name="password" id="password" onChange={this.onChange} />
                </div>

                <div className="inputwrapper">
                        <label htmlFor="confirm_password">
                            Confirm Password 
                            { errors.confirm_password && <span className="errs">{ errors.confirm_password }</span> }
                        </label>
                        <input 
                            type="password" 
                            value={data.confirm_password} 
                            name="confirm_password"  
                            id="confirm_password" 
                            onChange={this.onChange} />
                </div>

                <div className="login-action">
                        <input type="submit" id="submit" value="reset password" />
                        
                </div>
            </form>
        );
    }
}

ResetForm.propTypes = {
    submit: PropTypes.func.isRequired,
    token: PropTypes.string.isRequired
}

export default ResetForm;
