import React, { Component } from 'react';
import { Pagination } from 'react-bootstrap';
import { connect } from 'react-redux';
import PropTypes from 'proptypes';
import { getRecipesRequest } from '../../actions/auth';
import EditRecipe from './modals/EditRecipe';
import ViewRecipe from './modals/ViewRecipe';
import DeleteRecipe from './modals/DeleteRecipe';

class RecipePage extends Component {
    constructor(props){
        super(props);
        this.state = {
            loading: false,
            page: 1,
            pages: 1
        }

        this.handlePages = this.handlePages.bind(this);
    }

    componentDidMount(){
        this.getRecipes(this.state.page);
    }

    getRecipes(pageNum){
        this.props.getRecipesRequest(pageNum).then(() => this.setState({ page: this.props.page, pages: this.props.pages }));
    }

    handlePages(pageNum) {
        this.getRecipes(pageNum);
    }

    render(){
        const pageItems = [];
        for( let i = 1; i <= this.state.pages; i++) {
            pageItems.push(
                <Pagination.Item 
                key={i}
                active={i === this.state.page}
                onClick={this.handlePages.bind(this, i)}>
                {i}
                </Pagination.Item>
            )
        
        }
        return (
            <div className="ch-recipes-container">
                <div className="recipes">
                    { this.props.recipes && this.props.recipes.map((recipe) => (
                        <div key={recipe.id} className="recipe">
                            <div className="meta">
                                <p>{recipe.category_id}</p>
                            </div>

                            <h2>{recipe.title}</h2>

                            <div className="actions">
                                <ViewRecipe recipe={recipe} />
                                <EditRecipe recipe={recipe} />
                                <DeleteRecipe recipe={recipe} />
                            </div>
                        </div>
                    ))}
                </div>
                <footer>
                    <Pagination>
                        <Pagination bsSize="medium">{pageItems}</Pagination>
                    </Pagination>
                </footer>
            </div>
        )
    }

}

RecipePage.propTypes = {
    getRecipesRequest: PropTypes.func.isRequired,
    recipes: PropTypes.instanceOf(Object).isRequired,
    page: PropTypes.number.isRequired,
    pages: PropTypes.number.isRequired
}

function mapStateToProps(state){
    return {
      recipes: state.recipes.recipes,
      page: state.recipes.page,
      pages: state.recipes.pages
    }
}

export default connect(mapStateToProps, { getRecipesRequest })(RecipePage);