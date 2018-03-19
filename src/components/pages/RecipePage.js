import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'proptypes';
import { getRecipesRequest } from '../../actions/auth';
import EditRecipe from './modals/EditRecipe';

class RecipePage extends Component {
    constructor(props){
        super(props);
        this.state = {
            loading: false
        }
    }

    componentWillMount(){
        this.props.getRecipesRequest().then();
    }

    render(){
        return (
            <div className="recipes">
                { this.props.recipes && this.props.recipes.map((recipe) => (
                    <div key={recipe.id} className="recipe">
                        <div className="meta">
                            <p>{recipe.category_id}</p>
                        </div>

                        <h2>{recipe.title}</h2>

                        <div className="actions">
                            <i className="fas fa-exclamation-circle"/>
                            <EditRecipe recipe={recipe} />
                            <i className="fas fa-trash-alt"/>
                        </div>
                    </div>
                ))}
            </div>

        )
    }

}

RecipePage.propTypes = {
    getRecipesRequest: PropTypes.func.isRequired,
    recipes: PropTypes.arrayOf.isRequired
}

function mapStateToProps(state){
    return {
      recipes: state.recipes.recipes
    }
}

export default connect(mapStateToProps, { getRecipesRequest })(RecipePage);