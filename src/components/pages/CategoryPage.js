import React, { Component } from 'react';
import PropTypes from 'proptypes';
import { connect } from 'react-redux';
import { getCategoriesRequest } from '../../actions/auth';
import EditCategory from './modals/editCategory';

class CategoryPage extends Component {
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
                            <i className="fas fa-exclamation-circle"/>
                            <EditCategory category={category}/>
                            <i className="fas fa-trash-alt"/>
                        </div>
                    </div>
                ))}      
            </div>
        );
    }
}

CategoryPage.propTypes = {
    getCategoriesRequest: PropTypes.func.isRequired,
    categories: PropTypes.arrayOf.isRequired
}

function mapStateToProps(state){
    return {
        categories: state.category.categories,
      };
}

export default connect(mapStateToProps, { getCategoriesRequest })(CategoryPage);
