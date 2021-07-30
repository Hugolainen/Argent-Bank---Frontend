import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { MainBgDark, SrOnlyH2 } from '../assets/style';

import Account from '../components/Account';
import { updateProfile } from '../actions/user';

export class ProfilePage extends Component {
  constructor(props) {
    super(props);
    this.toggleProfileEditor = this.toggleProfileEditor.bind(this);
    this.onChangeFirstName = this.onChangeFirstName.bind(this);
    this.onChangeLastName = this.onChangeLastName.bind(this);
    this.handleProfileUpdate = this.handleProfileUpdate.bind(this);
    this.state = {
      loading: false,
      profileEdition: false,
      editorFirstName: '',
      editorLastName: '',
      firstName: this.props.firstName,
      lastName: this.props.lastName,
    };
  }

  toggleProfileEditor() {
    this.setState({
      profileEdition: !this.state.profileEdition,
      editorFirstName: '',
      editorLastName: '',
    });
  }

  onChangeFirstName(e) {
    this.setState({
      editorFirstName: e.target.value,
    });
  }

  onChangeLastName(e) {
    this.setState({
      editorLastName: e.target.value,
    });
  }

  handleProfileUpdate() {
    this.setState({
      loading: true,
    });
    const { dispatch } = this.props;
    const firstName = this.state.editorFirstName.length ? this.state.editorFirstName : this.state.firstName;
    const lastName = this.state.editorLastName.length ? this.state.editorLastName : this.state.lastName;

    dispatch(updateProfile(firstName, lastName)).then(() => {
      this.setState({
        profileEdition: false,
        firstName: firstName,
        lastName: lastName,
        loading: false,
      });
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
    if (this.state.loading) return <div> Loading </div>;
    return (
      <MainBgDark>
        {!this.state.profileEdition ? (
          <Header>
            <h1>
              Welcome back
              <br />
              {this.state.firstName + ' ' + this.state.lastName + ' !'}
            </h1>
            <button className="edit-button" onClick={() => this.toggleProfileEditor()}>
              Edit Name
            </button>
          </Header>
        ) : (
          <Header>
            <h1>Welcome back </h1>
            <div className="profileEditor">
              <div>
                <input
                  placeholder={this.state.firstName}
                  type="text"
                  value={this.state.editorFirstName}
                  onChange={this.onChangeFirstName}
                />
                <input
                  placeholder={this.state.lastName}
                  type="text"
                  value={this.state.editorLastName}
                  onChange={this.onChangeLastName}
                />
              </div>
              <div>
                <button className="edit-button" onClick={() => this.handleProfileUpdate()}>
                  Save
                </button>
                <button className="edit-button" onClick={() => this.toggleProfileEditor()}>
                  Cancel
                </button>
              </div>
            </div>
          </Header>
        )}

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
