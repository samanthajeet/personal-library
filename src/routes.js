import React from 'react';
import {Switch, Route} from 'react-router-dom';


import Landing from './components/Lading/Landing'
import Explore from './components/Explore/Explore'
import Profile from './components/YourShelf/YourShelf'
import BookDetail from './components/BookDetail/BookDetail'

export default (
  <Switch>
    <Route path='/explore' component={Explore} />
    <Route path='/profile' component={Profile} />
    <Route path='/bookdetail/:id' component={BookDetail} />
    <Route path='/' component={Landing} />
  </Switch>
)