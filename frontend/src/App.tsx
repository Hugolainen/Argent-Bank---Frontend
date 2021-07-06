import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { HomePage } from './pages/HomePage/Home';
import { SigninPage } from './pages/SigninPage/Signin';
import { UserPage } from './pages/UserPage/User';

function App() {
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

export default App;
