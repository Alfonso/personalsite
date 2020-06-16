import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../Pages/Home';
import Projects from '../Pages/Projects';
import Contact from '../Pages/Contact';
import Work from '../Pages/Work';
import Photo from '../Pages/Photos';


const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/Projects" component={Projects} />
    <Route path="/Contact" component={Contact} />
    <Route path="/Work" component={Work} />
    <Route path="/Photographs" component={Photo} />
  </Switch>
);

export default Routes;
