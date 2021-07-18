import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { signoutUser } from '../actions/auth';

import argentBankLogo from '../assets/img/argentBankLogo.png';

export class Header extends Component {
  constructor(props) {
    super(props);
    this.handleSignout = this.handleSignout.bind(this);
  }

  handleSignout() {
    this.props.signoutUser();
  }

  render() {
    const loggedInUser = this.props.isLoggedIn;
    const userFirstName = this.props.firstName;
    console.log(this.props);

    return (
      <nav className="main-nav">
        <Link className="main-nav-logo" to="/">
          <img className="main-nav-logo-image" src={argentBankLogo} alt="Argent Bank Logo" />
          <h1 className="sr-only">Argent Bank</h1>
        </Link>
        {!loggedInUser && (
          <div>
            <Link className="main-nav-item" to="/signin">
              <i className="fa fa-user-circle"></i>
              Sign In
            </Link>
          </div>
        )}
        {loggedInUser && (
          <div>
            <Link className="main-nav-item" to="/profile">
              <i className="fa fa-user-circle"></i>
              {userFirstName}
            </Link>
            <span className="main-nav-item" onClick={() => this.handleSignout()}>
              <i className="fa fa-sign-out"></i>
              Sign Out
            </span>
          </div>
        )}
      </nav>
    );
  }
}

function mapStateToProps(state) {
  const { isLoggedIn } = state.auth;
  const { firstName } = state.userProfile !== undefined ? state.userProfile.body : '';
  return {
    isLoggedIn,
    firstName,
  };
}

export default connect(mapStateToProps, { signoutUser })(Header);
