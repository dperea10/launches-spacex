import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';
import { store } from './redux/store/store';
import './App.css';
import Home from './Home';
import LaunchesDetails from './LaunchesDetails';

export const App = () => {
  return( 
    <Provider store={store}>
    <div className="content-align flex">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/launchpad/:flight_number" element={<LaunchesDetails />} />
        </Routes>
      </Router>
    </div>
  </Provider>
)

}

