import React, { Component } from 'react';

import '../assets/style.css';

class SigninPage extends Component {
  handleSignin(event) {
    console.log(event);
  }

  render() {
    let email = '';
    let password = '';
    let remembermeIsChecked = false;

    return (
      <main className="main bg-dark">
        <section className="sign-in-content">
          <i className="fa fa-user-circle sign-in-icon"></i>
          <h1>Sign In</h1>
          <form>
            <div className="input-wrapper">
              <label htmlFor="username">Username</label>
              <input type="text" id="username" value={email} onChange={(e) => console.log(e.target.value)} />
            </div>
            <div className="input-wrapper">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" value={password} onChange={(e) => console.log(e.target.value)} />
            </div>
            <div className="input-remember">
              <input
                type="checkbox"
                id="remember-me"
                checked={remembermeIsChecked}
                onChange={(e) => console.log(e.target.checked)}
              />
              <label htmlFor="remember-me">Remember me</label>
            </div>
            <button className="sign-in-button" onClick={(e) => this.handleSignin(e)}>
              Sign In
            </button>
          </form>
        </section>
      </main>
    );
  }
}
export default SigninPage;
