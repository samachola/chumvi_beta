import React, { Component } from 'react';
import PropTypes from 'proptypes';
import { connect } from 'react-redux';
import { Button, Modal } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';
import { editCategoryRequest } from '../../../actions/auth';


export class EditCategory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {
                category_name: props.category.category_name,
                category_description: props.category.category_description
            },
            errors: {}
        }
    }

    onChange = (e) => this.setState({
        data: { ...this.state.data, [e.target.name]: e.target.value }
    });

    onSubmit = (e) => {
        e.preventDefault()
        const errors = this.validate(this.state.data);
        this.setState({ errors })

        if(Object.keys(errors).length === 0) {
            this.props.editCategoryRequest(this.state.data, this.props.category.id)
                .then(() => window.location.reload())
                .catch((err) => {
                    const serverErrors = {};
                    if(err.response.status === 406) {
                        if(err.response.data && !err.response.data.status){
                            serverErrors.category_name = err.response.data.message
                        }
                    }
                    
                    if(err.response.status === 422) {
                        if(err.response.data.errors.category_name){
                            serverErrors.category_name = err.response.data.errors.category_name[0];
                        }

                        if(err.response.data.errors.category_description){
                            serverErrors.category_description = err.response.data.errors.category_description[0];
                        }
                    }
                    
                    this.setState({errors: serverErrors})
                });
        }
    }

    validate = (data) => {
        const errors = {};
        
        if(!data.category_name) errors.category_name = "Category Name Is Required";
        if(!data.category_description) errors.category_description = "Category Description Is Required";

        return errors;
    }
    render(){
        const { data, errors } = this.state;
        return(
            <Modal trigger={<Button><i className="fas fa-edit"/></Button>}>
                <Modal.Header className="modalheader">Update Category</Modal.Header>
                <Modal.Content image>
                    <Modal.Description>
                        <form className="category-form" onSubmit={this.onSubmit}>
                            <div className="inputwrapper">
                                <label htmlFor="category_name">
                                Category Name
                                { errors.category_name && <span className="errs">{ errors.category_name }</span> }
                                </label>
                                <input 
                                    type="text" 
                                    value={data.category_name} 
                                    name="category_name" 
                                    id="category_name" 
                                    onChange={this.onChange} />
                            </div> 

                            <div className="inputwrapper">
                                <label htmlFor="category_description">
                                Category Description
                                { errors.category_description && <span className="errs">{ errors.category_description }</span> }
                                </label>
                                <textarea 
                                    name="category_description" 
                                    value={data.category_description} 
                                    id="category_description" 
                                    cols="30" 
                                    rows="10" 
                                    onChange={this.onChange} />
                            </div>

                            <div className="login-action">
                                <input type="submit" value="Update Category"/>
                            </div>  
                        </form>
                    </Modal.Description>
                </Modal.Content>
            </Modal>
          )
    }
}

EditCategory.propTypes = {
    category: PropTypes.instanceOf(Object).isRequired,
    editCategoryRequest: PropTypes.func.isRequired
}

export default connect(null, { editCategoryRequest })(EditCategory);
