import React from 'react'

import { Switch, Route } from 'react-router-dom';

import { Home } from './Home';
import { About } from './About';
import { Contact } from './Contact';
import { NotFound } from './NotFound';

export const Main = (props) => {
    return(
       <Switch>
           <Route exact path="/" component={Home} />
           <Route path="/about" component={About} />
           <Route path="/contact" component={Contact} />

           <Route path="*" component={ NotFound } />
           </Switch>
    )
}

export default Main;