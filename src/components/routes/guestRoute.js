import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'proptypes';

const GuestRoute = ({ isAuthenticated, component: Component, ...rest }) => (
    <Route
      {...rest}
      render={props =>
        !isAuthenticated ? <Component {...props} /> : <Redirect to="/dashboard" />}
    />
  );

  GuestRoute.propTypes = {
    component: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool.isRequired
};

function mapStateToProps(state) {
    return {
        isAuthenticated: !!state.user.token
    };
}

export default connect(mapStateToProps)(GuestRoute);