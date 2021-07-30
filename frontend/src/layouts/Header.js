import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { SrOnlyH1 } from '../assets/style';

import { connect } from 'react-redux';
import { signoutUser } from '../actions/auth';

import argentBankLogo from '../assets/img/argentBankLogo.png';

export class Header extends Component {
  constructor(props) {
    super(props);
    this.handleSignout = this.handleSignout.bind(this);
    this.state = {
      loggedInUser: this.props.isLoggedIn,
      userFirstName: this.props.firstName,
    };
  }

  componentDidUpdate() {
    if (this.state.loggedInUser !== this.props.isLoggedIn) {
      this.setState({
        loggedInUser: this.props.isLoggedIn,
      });
    }
    if (this.state.userFirstName !== this.props.firstName && this.props.isLoggedIn) {
      this.setState({
        userFirstName: this.props.firstName,
      });
    }
  }

  handleSignout() {
    const { dispatch } = this.props;
    dispatch(signoutUser());
  }

  render() {
    return (
      <MainNav>
        <MainNavLogo activeClassName="main-nav-isActive" to="/">
          <MainNavLogoImage src={argentBankLogo} alt="Argent Bank Logo" />
          <SrOnlyH1>Argent Bank</SrOnlyH1>
        </MainNavLogo>
        {!this.state.loggedInUser && (
          <div>
            <MainNavItemLink activeClassName="main-nav-isActive" to="/signin">
              <i className="fa fa-user-circle"></i>
              Sign In
            </MainNavItemLink>
          </div>
        )}
        {this.state.loggedInUser && (
          <div>
            <MainNavItemLink activeClassName="main-nav-isActive" to="/profile">
              <i className="fa fa-user-circle"></i>
              {this.state.userFirstName}
            </MainNavItemLink>
            <MainNavItem onClick={() => this.handleSignout()}>
              <i className="fa fa-sign-out"></i>
              Sign Out
            </MainNavItem>
          </div>
        )}
      </MainNav>
    );
  }
}

function mapStateToProps(state) {
  const { isLoggedIn } = state.auth;
  const { firstName } = state.userProfile;
  return {
    isLoggedIn,
    firstName,
  };
}

export default connect(mapStateToProps)(Header);

const MainNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 20px;
  font-weight: bold;
  color: #2c3e50;
`;

const MainNavLogo = styled(NavLink)`
  display: flex;
  align-items: center;
`;

const MainNavLogoImage = styled.img`
  max-width: 100%;
  width: 200px;
`;

const MainNavItem = styled.span`
  text-decoration: none;
  margin-right: 0.5rem;
  cursor: pointer;

  i {
    margin-right: 0.2rem;
  }

  :hover {
    text-decoration: underline;
  }
`;

const MainNavItemLink = styled(NavLink)`
  text-decoration: none;
  margin-right: 0.5rem;
  cursor: pointer;

  i {
    margin-right: 0.2rem;
  }

  :hover {
    text-decoration: underline;
  }
`;
