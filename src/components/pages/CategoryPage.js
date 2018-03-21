import React, { Component } from 'react';
import PropTypes from 'proptypes';
import { connect } from 'react-redux';
import { getCategoriesRequest } from '../../actions/auth';
import EditCategory from './modals/editCategory';
import DeleteCategory from './modals/deleteCategory';
import ViewCategory from './modals/viewCategory';

export class CategoryPage extends Component {
    state = {
        loading: false
    }

    componentWillMount(){
        this.props.getCategoriesRequest().then();
    }
    
    render(){
        return (
            <div className="categories">

                { this.props.categories && this.props.categories.map((category) => (
                    <div key={category.id} className="category-item">
                        <h2>{category.category_name}</h2>

                        <div className="actions">
                            <ViewCategory category={category} />
                            <EditCategory category={category} />
                            <DeleteCategory category={category} />
                        </div>
                    </div>
                ))}      
            </div>
        );
    }
}

CategoryPage.propTypes = {
    getCategoriesRequest: PropTypes.func.isRequired,
    categories: PropTypes.instanceOf(Array).isRequired
}

function mapStateToProps(state){
    return {
        categories: state.category.categories,
      };
}

export default connect(mapStateToProps, { getCategoriesRequest })(CategoryPage);
