import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'proptypes';
import { Modal } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import { addRecipeRequest } from '../../../actions/auth';

export class AddRecipe extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data: {
                title: '',
                category_id: '',
                ingredients: '',
                steps: ''
            },
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
            this.props.addRecipeRequest(this.state.data)
                .then(() => window.location.reload())
                .catch((err) => {
                    const serverErrors = {};
                    if(err.response.data.errors.title){
                        serverErrors.title = err.response.data.errors.title[0];
                    }

                    if(err.response.data.errors.steps){
                        serverErrors.steps = err.response.data.errors.steps[0];
                    }

                    if(err.response.data.errors.ingredients){
                        serverErrors.ingredients = err.response.data.errors.ingredients[0];
                    }

                    if(err.response.data.errors.category_id){
                        serverErrors.category_id = err.response.data.errors.category_id[0];
                    }

                    this.setState({errors: serverErrors})
                });
        }
    }

    validate = (data) => {
        const errors = {};
        
        if(!data.title) errors.title = "Recipe title Is Required";
        if(!data.steps) errors.steps = "Recipe steps Is Required";
        if(!data.ingredients) errors.ingredients = "Ingredients are Required";

        return errors;
    }

    render(){
        const { data, errors } = this.state;
        return(
            <Modal trigger={<button className="add-recipe">Add Recipe</button>}>
                <Modal.Header className="modalheader">Add Recipe</Modal.Header>
                <Modal.Content image>
                    <Modal.Description>
                        <form className="category-form" onSubmit={this.onSubmit}>
                            <div className="inputwrapper">
                                <label htmlFor="title">
                                Title 
                                { errors.title && <span className="errs">{ errors.title }</span> }
                                </label>
                                <input 
                                    type="text" 
                                    value={data.title} 
                                    name="title" 
                                    id="title" 
                                    onChange={this.onChange} />
                            </div>

                            <div className="inputwrapper">
                                <label htmlFor="category">
                                Category 
                                { errors.category_id && <span className="errs">{ errors.category_id }</span> }
                                </label>
                                <select name="category_id" id="category_id" onChange={this.onChange}>
                                    <option>-</option>
                                    { this.props.categories && this.props.categories.map(category => (
                                        <option key={category.id} value={category.id}>{category.category_name}</option>
                                    ))}
                                </select>
                            </div> 

                            <div className="inputwrapper">
                                <label htmlFor="ingredients">
                                Ingredients
                                { errors.ingredients && <span className="errs">{ errors.ingredients }</span> }
                                </label>
                                <textarea 
                                    name="ingredients" 
                                    value={data.ingredients} 
                                    id="ingredients" 
                                    cols="30" 
                                    rows="5" 
                                    onChange={this.onChange} />
                            </div>

                            <div className="inputwrapper">
                                <label htmlFor="steps">
                                Steps
                                { errors.steps && <span className="errs">{ errors.steps }</span> }
                                </label>
                                <textarea 
                                    name="steps" 
                                    value={data.steps} 
                                    id="steps" 
                                    cols="30" 
                                    rows="5" 
                                    onChange={this.onChange} />
                            </div>

                            <div className="login-action">
                                <input type="submit" value="Add Recipe"/>
                            </div>  
                        </form>
                    </Modal.Description>
                </Modal.Content>
            </Modal>
        );
    }
}

AddRecipe.propTypes = {
    categories: PropTypes.instanceOf(Array).isRequired,
    addRecipeRequest: PropTypes.func.isRequired
}
function mapStateToProps(state){
    return {
        categories: state.category.categories,
    };
}

export default connect(mapStateToProps, { addRecipeRequest })(AddRecipe);
