import React from 'react';
import { Route } from 'react-router-dom';
import LoginPage from './components/pages/LoginPage';
import Dashboard from './components/pages/DashboardPage';

const App = () => (
      <div>
        <Route path='/' exact component={LoginPage} />
        <Route path='/dashboard' exact component={Dashboard} />
      </div>);

export default App;
