import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import About from './pages/About';
import Contact from './pages/Contact';
import Work from './pages/Work';


function App() {
  return (
    <Switch>
      <Route exact path="/" component={Work}/>
      <Route exact path="/a-propos" component={About}/>
      <Route exact path="/contact" component={Contact}/>
      <Redirect to="/"/>
    </Switch>
  );
}

export default App;
