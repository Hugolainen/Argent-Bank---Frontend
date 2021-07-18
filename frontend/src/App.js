import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from './layouts/Header';
import Footer from './layouts/Footer';
import HomePage from './pages/Home';
import SigninPage from './pages/Signin';
import UserPage from './pages/User';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header loggedInUser={false} userFirstName={'Tony'} />

        <Switch>
          <Route path="/signin">
            <SigninPage />
          </Route>
          <Route path="/user">
            <UserPage />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>

        <Footer />
      </BrowserRouter>
    );
  }
}

export default App;
