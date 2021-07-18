import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Account from '../components/Account';

import { connect } from 'react-redux';
import { retrieveProfile, updateProfile } from '../actions/user';

export class ProfilePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      loading: false,
    };
  }

  async retrieveUserProfile() {
    this.setState({
      loading: true,
    });

    await this.props.retrieveProfile();
  }

  async componentDidMount() {
    await this.retrieveUserProfile();
    //console.log(this.state);
    // console.log(this.props);
  }

  render() {
    if (!this.props.isLoggedIn) return <Redirect to="/signin" />;

    return (
      <main className="main bg-dark">
        <div className="header">
          <h1>
            Welcome back
            <br />
            Tony Jarvis!
          </h1>
          <button className="edit-button">Edit Name</button>
        </div>
        <h2 className="sr-only">Accounts</h2>
        <Account
          title="Argent Bank Checking"
          transactionCounter={8349}
          balance={2082.79}
          balanceType="View transactions"
        />
        <Account
          title="Argent Bank Savings"
          transactionCounter={6712}
          balance={10928.42}
          balanceType="View transactions"
        />
        <Account
          title="Argent Bank Credit Card"
          transactionCounter={8349}
          balance={184.3}
          balanceType="Current Balance"
        />
      </main>
    );
  }
}

function mapStateToProps(state) {
  const { isLoggedIn } = state.auth;
  const userProfile = state.userProfile;
  return {
    isLoggedIn,
    userProfile,
  };
}

export default connect(mapStateToProps, { retrieveProfile, updateProfile })(ProfilePage);
