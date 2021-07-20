import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
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
        dispatch(retrieveProfile()).then(window.location.reload());
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
    if (this.props.isLoggedIn && this.props.userProfile.firstName) {
      return <Redirect to="/profile" />;
    }
    return (
      <main className="main bg-dark">
        <section className="sign-in-content">
          <i className="fa fa-user-circle sign-in-icon"></i>
          <h1>Sign In</h1>
          <form onSubmit={this.handleSignin}>
            <div className="input-wrapper">
              <label htmlFor="email">Username</label>
              <input type="text" id="email" value={this.state.email} onChange={this.onChangeEmail} />
            </div>
            <div className="input-wrapper">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" value={this.state.password} onChange={this.onChangePassword} />
            </div>
            <div className="input-remember">
              <input
                type="checkbox"
                id="rememberMe"
                checked={this.state.rememberUser}
                onChange={this.onChangeRememberMe}
              />
              <label htmlFor="rememberMe">Remember me</label>
            </div>
            <button className="sign-in-button" type="submit">
              Sign In
            </button>
            {this.state.showError && <span className="errorMessage"> Signin failed: verify email and password </span>}
          </form>
        </section>
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

export default connect(mapStateToProps)(SigninPage);
