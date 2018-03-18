import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'proptypes';
import * as actions from '../../actions/auth';

const Dashboard = ({ isAuthenticated, logout }) => (
  <div className="ch-home">
    <div className="ch-categories">
      <div className="intro">
          <h2> my Categories</h2>
          <div className="add">
              <Link to="/">ADD</Link>
          </div>
      </div>
      <div className="categories">
          <div className="category-item">
              <h2>Breakfast</h2>

              <div className="actions">
                  <i className="fas fa-exclamation-circle"/>
                  <i className="fas fa-edit"/>
                  <i className="fas fa-trash-alt"/>
              </div>
          </div>
      </div>
    </div>
    <div className="ch-recipes">
      <div className="user-actions">
      { isAuthenticated ? <button onClick={() => logout()}>Logout</button> : <Link to="/login">LOGIN</Link> }
        
      </div>
      <div className="recipes">

        <div className="recipe">
            <div className="meta">
                <p>Breakfast</p>
            </div>

            <h2>Recipe Item</h2>

            <div className="actions">
                <i className="fas fa-exclamation-circle"/>
                <i className="fas fa-edit"/>
                <i className="fas fa-trash-alt"/>
            </div>
        </div>

        <div className="recipe">
            <div className="meta">
                <p>Breakfast</p>
            </div>

            <h2>Recipe Item</h2>

            <div className="actions">
                <i className="fas fa-exclamation-circle"/>
                <i className="fas fa-edit"/>
                <i className="fas fa-trash-alt"/>
            </div>
        </div>

        <div className="recipe">
            <div className="meta">
                <p>Breakfast</p>
            </div>

            <h2>Recipe Item</h2>

            <div className="actions">
                <i className="fas fa-exclamation-circle"/>
                <i className="fas fa-edit"/>
                <i className="fas fa-trash-alt"/>
            </div>
        </div>
      </div>

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
