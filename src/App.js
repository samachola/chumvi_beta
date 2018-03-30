import React from 'react';
import PropTypes from 'proptypes';
import LoginPage from './components/pages/LoginPage';
import SignupPage from './components/pages/SignupPage';
import Dashboard from './components/pages/DashboardPage';
import NewPassword from './components/pages/NewPassword';
import UserRoute from './components/routes/userRoute';
import GuestRoute from './components/routes/guestRoute'

const App = ({ location}) => (
      <div>
        <GuestRoute location={location} path='/' exact component={LoginPage} />
        <GuestRoute location={location} path='/login' exact component={LoginPage} />
        <GuestRoute location={location} path='/signup' exact component={SignupPage} />
        <GuestRoute location={location} path='/reset_password/:token' exact component={NewPassword} />
        <UserRoute location={location} path='/dashboard' exact component={Dashboard} />
      </div>);

App.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired

}

export default App;
