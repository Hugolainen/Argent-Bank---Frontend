import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../../assets/style.css';
import argentBankLogo from '../../assets/img/argentBankLogo.png';

class Header extends Component {
  render() {
    const loggedInUser = this.props.loggedInUser;
    const userFirstName = this.props.userFirstName;

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
            <a className="main-nav-item" href="./user.html">
              <i className="fa fa-user-circle"></i>
              {userFirstName}
            </a>
            <a className="main-nav-item" href="./index.html">
              <i className="fa fa-sign-out"></i>
              Sign Out
            </a>
          </div>
        )}
      </nav>
    );
  }
}
export default Header;
