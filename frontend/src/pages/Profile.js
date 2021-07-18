import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Account from '../components/Account';

import { connect } from 'react-redux';
import { retrieveProfile, updateProfile } from '../actions/user';

export class ProfilePage extends Component {
  constructor(props) {
    super(props);
    this.toggleProfileEditor = this.toggleProfileEditor.bind(this);
    this.onChangeFirstName = this.onChangeFirstName.bind(this);
    this.onChangeLastName = this.onChangeLastName.bind(this);
    this.handleProfileUpdate = this.handleProfileUpdate.bind(this);
    this.state = {
      profileEdition: false,
      firstName: '',
      lastName: '',
      editorFirstName: '',
      editorLastName: '',
      loading: false,
    };
  }

  toggleProfileEditor() {
    this.setState({
      profileEdition: !this.state.profileEdition,
      editorFirstName: this.state.FirstName,
      editorLastName: this.state.lastName,
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

  async retrieveUserProfile() {
    this.setState({
      loading: true,
    });
    await this.props.retrieveProfile();
  }

  handleProfileUpdate() {
    this.setState({
      loading: true,
    });

    const { dispatch } = this.props;

    dispatch(updateProfile(this.state.editorFirstName, this.state.editorLastName))
      .then(() => {
        this.setState({
          loading: false,
          firstName: this.state.editorFirstName,
          lastName: this.state.editorLastName,
        });
      })
      .catch(() => {
        this.setState({
          loading: false,
        });
      });
  }

  async componentDidMount() {
    await this.retrieveUserProfile();
    console.log(this.props);
    this.setState({
      loading: false,
      firstName: this.props.userProfile.firstName,
      lastName: this.props.userProfile.lastName,
    });
  }

  render() {
    if (!this.props.isLoggedIn) return <Redirect to="/signin" />;
    if (this.state.isLoading) return <div> Loading </div>;
    else
      return (
        <main className="main bg-dark">
          {!this.state.profileEdition ? (
            <div className="header">
              <h1>
                Welcome back
                <br />
                {this.state.firstName + ' ' + this.state.lastName + ' !'}
              </h1>
              <button className="edit-button" onClick={() => this.toggleProfileEditor()}>
                Edit Name
              </button>
            </div>
          ) : (
            <div className="header">
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
            </div>
          )}

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
  console.log(state);
  const { isLoggedIn } = state.auth;
  const userProfile = state.userProfile.body;
  return {
    isLoggedIn,
    userProfile,
  };
}

export default connect(mapStateToProps, { retrieveProfile })(ProfilePage);
