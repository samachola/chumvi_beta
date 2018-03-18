import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'proptypes';
import LoginPage from './components/pages/LoginPage';
import Dashboard from './components/pages/DashboardPage';
import UserRoute from './components/routes/userRoute';
import GuestRoute from './components/routes/guestRoute'

const App = ({ location}) => (
      <div>
        <GuestRoute location={location} path='/' exact component={LoginPage} />
        <GuestRoute location={location} path='/login' exact component={LoginPage} />
        <UserRoute location={location} path='/dashboard' exact component={Dashboard} />
      </div>);

App.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired

}

export default App;
