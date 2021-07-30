import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import './assets/style.css';

import Header from './layouts/Header';
import Footer from './layouts/Footer';
import HomePage from './pages/Home';
import SigninPage from './pages/Signin';
import ProfilePage from './pages/Profile';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Body>
          <Header />

          <Switch>
            <Route path="/signin">
              <SigninPage />
            </Route>
            <Route path="/profile">
              <ProfilePage />
            </Route>
            <Route path="/">
              <HomePage />
            </Route>
          </Switch>

          <Footer />
        </Body>
      </BrowserRouter>
    );
  }
}

export default App;

const Body = styled.div`
  margin: 0;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;
