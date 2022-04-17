import React from 'react';

import './App.css';
import Home from './Components/Pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
//import SignUp from './components/pages/SignUp';
//          <Route path='/sign-up' component={SignUp} />

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path='/' exact component={Home} />

        </Switch>
      </Router>
    </>
  );
}

export default App;
