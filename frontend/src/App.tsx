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
      <div>
        <Header />

        <Switch>
          <Route path="/">
            <HomePage />
          </Route>
          <Route path="/signin">
            <SigninPage />
          </Route>
          <Route path="/user/{id}">
            <UserPage />
          </Route>
        </Switch>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
