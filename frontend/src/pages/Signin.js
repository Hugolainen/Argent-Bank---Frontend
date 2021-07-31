import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { MainBgDark } from '../assets/style';

import { signinUser } from '../actions/auth';
import { retrieveProfile } from '../actions/user';

export class SigninPage extends Component {
  constructor(props) {
    super(props);
    this.handleSignin = this.handleSignin.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangeRememberMe = this.onChangeRememberMe.bind(this);
    this.state = {
      email: '',
      password: '',
      rememberUser: false,
      loading: false,
      showError: false,
    };
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value,
      showError: false,
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value,
      showError: false,
    });
  }

  onChangeRememberMe(e) {
    this.setState({
      rememberUser: e.target.value,
    });
  }

  handleSignin(e) {
    e.preventDefault();

    this.setState({
      loading: true,
    });

    const { dispatch } = this.props;

    dispatch(signinUser(this.state.email, this.state.password))
      .then(() => {
        if (this.state.rememberUser) {
          const savedUser = { email: this.state.email, password: this.state.password };
          localStorage.setItem('rememberedUser', JSON.stringify(savedUser));
        } else localStorage.removeItem('rememberedUser');
        dispatch(retrieveProfile()).then(() => {
          this.setState({
            loading: false,
          });
        });
      })
      .catch(() => {
        this.setState({
          loading: false,
          showError: true,
        });
      });
  }

  componentDidMount() {
    const savedUser = JSON.parse(localStorage.getItem('rememberedUser'));
    if (savedUser) {
      this.setState({
        email: savedUser.email,
        password: savedUser.password,
        rememberUser: true,
      });
    }
  }

  render() {
    if (this.props.isLoggedIn && this.props.userProfile.firstName && !this.state.loading) {
      return <Redirect to="/profile" />;
    }
    return (
      <MainBgDark>
        <SigninContent>
          <SigninIcon className="fa fa-user-circle"></SigninIcon>
          <h1>Sign In</h1>
          <form onSubmit={this.handleSignin}>
            <InputWrapper>
              <label htmlFor="email">Username</label>
              <input type="text" id="email" value={this.state.email} onChange={this.onChangeEmail} />
            </InputWrapper>
            <InputWrapper>
              <label htmlFor="password">Password</label>
              <input type="password" id="password" value={this.state.password} onChange={this.onChangePassword} />
            </InputWrapper>
            <ImputRemember>
              <input
                type="checkbox"
                id="rememberMe"
                checked={this.state.rememberUser}
                onChange={this.onChangeRememberMe}
              />
              <label htmlFor="rememberMe">Remember me</label>
            </ImputRemember>
            <SigninButton type="submit">Sign In</SigninButton>
            {this.state.showError && <ErrorMessage> Signin failed: verify email and password </ErrorMessage>}
          </form>
        </SigninContent>
      </MainBgDark>
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

export default connect(mapStateToProps)(SigninPage);

const SigninContent = styled.section`
  box-sizing: border-box;
  background-color: white;
  width: 300px;
  margin: 0 auto;
  margin-top: 3rem;
  padding: 2rem;
`;

const SigninIcon = styled.i`
  font-size: 5rem;
`;

const ImputRemember = styled.div`
  display: flex;

  label {
    margin-left: 0.25rem;
  }
`;

const SigninButton = styled.button`
  display: block;
  width: 100%;
  padding: 8px;
  font-size: 1.1rem;
  font-weight: bold;
  margin-top: 1rem;
  border-color: #00bc77;
  background-color: #00bc77;
  color: #fff;
`;

const InputWrapper = styled.label`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-bottom: 1rem;

  label {
    font-weight: bold;
  }

  input {
    padding: 5px;
    font-size: 1.2rem;
  }
`;

const ErrorMessage = styled.span`
  color: red;
  font-size: 12px;
`;
