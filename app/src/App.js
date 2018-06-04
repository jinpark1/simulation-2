import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// import Dashboard from './component/Dashboard/Dashboard';
import Header from './component/Header/Header';
import House from './component/House/House';
// import Wizard from './component/Wizard/Wizard';

import routes from './routes';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        {/* <Link to='/'>Dashboard</Link>
        <Link to='/Wizard'>Wizard</Link> */}
        <House />

        {routes}

  

      </div>
    );
  }
}

export default App;
