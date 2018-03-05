import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import dashboard from './components/pages/dashboard';


const App = ({ location }) => (
    <div className="ui container">
        <Route location={location} path="/" exact component={dashboard} />
    </div>
);

App.propTypes = {
    location: PropTypes.shape({
        pathname: PropTypes.string.isRequired
    }).isRequired
};

export default App;
