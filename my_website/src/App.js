import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Experience from './components/pages/Experience';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Projects from './components/pages/Projects';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
import Henry from './components/pages/Henry';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/Henry' exact component={Henry} />
          <Route path='/Experience' exact component={Experience} />
          <Route path='/Projects' component={Projects} />
          <Route path='/products' component={Products} />
          <Route path='/sign-up' component={SignUp} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
