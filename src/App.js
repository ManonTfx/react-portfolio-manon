import React from 'react';
import { Route, Switch } from 'react-router-dom';
import About from './pages/About';
import Contact from './pages/Contact';
import { Project1, Project2, Project3, Project4 } from './pages/Projects';
import Work from './pages/Work';


function App() {
  return (
    <Switch>
      <Route exact path="/" component={Work}/>
      <Route exact path="/a-propos" component={About}/>
      <Route exact path="/contact" component={Contact}/>
      <Route exact path="/projet-1" component={Project1}/>
      <Route exact path="/projet-2" component={Project2}/>
      <Route exact path="/projet-3" component={Project3}/>
      <Route exact path="/projet-4" component={Project4}/>
    </Switch>
  );
}

export default App;
