import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'proptypes';
import * as actions from '../../actions/auth';
import CategoryPage from './CategoryPage';
import RecipePage from './RecipePage';
import AddCategory from './modals/addCategory';
import AddRecipe from './modals/addRecipe';


const Dashboard = ({ isAuthenticated, logout }) => (
  <div className="ch-home">
    <div className="ch-categories">
      <div className="intro">
          <h2> my Categories</h2>
          <AddCategory />
      </div>
      <CategoryPage />
    </div>
    <div className="ch-recipes">
      <div className="user-actions">
        { isAuthenticated ? <button onClick={() => logout()}>Logout</button> : <Link to="/login">LOGIN</Link> }
        <AddRecipe />
      </div>
      <RecipePage />
    </div>
  </div>

);

Dashboard.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  logout: PropTypes.func.isRequired
}

function mapStateToProps(state){
  return {
    isAuthenticated: !!state.user.token
  }
}
export default connect(mapStateToProps, { logout: actions.logout })(Dashboard);
