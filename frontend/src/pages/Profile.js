import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { MainBgDark, SrOnlyH2 } from '../assets/style';

import Account from '../components/Account';
import ProfileHeader from '../components/ProfileHeader';
import NameEditor from '../components/NameEditor';

export class ProfilePage extends Component {
  constructor(props) {
    super(props);
    this.toggleProfileEditor = this.toggleProfileEditor.bind(this);
    this.state = {
      profileEdition: false,
      firstName: this.props.firstName,
      lastName: this.props.lastName,
    };
  }

  componentDidUpdate() {
    if (this.state.firstName !== this.props.firstName) {
      this.setState({
        firstName: this.props.firstName,
      });
    }
    if (this.state.lastName !== this.props.lastName) {
      this.setState({
        lastName: this.props.lastName,
      });
    }
  }

  toggleProfileEditor() {
    this.setState({
      profileEdition: !this.state.profileEdition,
    });
  }

  render() {
    const mockAccounts = [
      { title: 'Argent Bank Checking', transactionCounter: 8349, balance: 2082.79, balanceType: 'View transactions' },
      { title: 'Argent Bank Savings', transactionCounter: 6712, balance: 10928.42, balanceType: 'View transactions' },
      { title: 'Argent Bank Credit Card', transactionCounter: 8349, balance: 184.3, balanceType: 'Current Balance' },
    ];

    const accountList = mockAccounts.length
      ? mockAccounts.map((account) => (
          <Account
            key={account.title}
            title={account.title}
            transactionCounter={account.transactionCounter}
            balance={account.balance}
            balanceType={account.balanceType}
          />
        ))
      : [];

    if (!this.props.isLoggedIn) return <Redirect to="/signin" />;
    return (
      <MainBgDark>
        <Header>
          {!this.state.profileEdition ? (
            <ProfileHeader
              name={this.state.firstName + ' ' + this.state.lastName}
              openNameEditor={() => this.toggleProfileEditor()}
            />
          ) : (
            <NameEditor
              firstName={this.state.firstName}
              lastName={this.state.lastName}
              closeNameEditor={() => this.toggleProfileEditor()}
            />
          )}
        </Header>
        <SrOnlyH2>Accounts</SrOnlyH2>
        {accountList}
      </MainBgDark>
    );
  }
}

function mapStateToProps(state) {
  const { isLoggedIn } = state.auth;
  const { firstName, lastName } = state.userProfile;
  return {
    isLoggedIn,
    firstName,
    lastName,
  };
}

export default connect(mapStateToProps)(ProfilePage);

const Header = styled.div`
  color: #fff;
  margin-bottom: 2rem;
`;
