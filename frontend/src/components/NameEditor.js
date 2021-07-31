import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { EditButton } from '../assets/style';

import { updateProfile } from '../actions/user';

export class NameEditor extends Component {
  constructor(props) {
    super(props);
    this.onChangeFirstName = this.onChangeFirstName.bind(this);
    this.onChangeLastName = this.onChangeLastName.bind(this);
    this.handleProfileUpdate = this.handleProfileUpdate.bind(this);
    this.closeNameEditor = this.props.closeNameEditor.bind(this);
    this.state = {
      loading: false,
      editorFirstName: '',
      editorLastName: '',
    };
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
    const firstName = this.state.editorFirstName.length ? this.state.editorFirstName : this.props.firstName;
    const lastName = this.state.editorLastName.length ? this.state.editorLastName : this.props.lastName;

    dispatch(updateProfile(firstName, lastName)).then(() => {
      this.setState({
        loading: false,
      });
      this.closeNameEditor();
    });
  }

  render() {
    const firstName = this.props.firstName;
    const lastName = this.props.lastName;
    const closeNameEditor = this.props.closeNameEditor;

    return (
      <>
        <h1>Welcome back </h1>
        <ProfileEditor>
          <ProfileRow>
            <ProfileEditorInput
              placeholder={firstName}
              type="text"
              value={this.state.editorFirstName}
              onChange={this.onChangeFirstName}
            />
            <ProfileEditorInput
              placeholder={lastName}
              type="text"
              value={this.state.editorLastName}
              onChange={this.onChangeLastName}
            />
          </ProfileRow>
          <ProfileRow>
            <EditButton onClick={() => this.handleProfileUpdate()}>Save</EditButton>
            <EditButton onClick={() => closeNameEditor()}>Cancel</EditButton>
          </ProfileRow>
        </ProfileEditor>
      </>
    );
  }
}

NameEditor.propTypes = {
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  closeNameEditor: PropTypes.func,
};

NameEditor.defaultProps = {
  firstName: 'default',
  lastName: 'default',
};

export default connect()(NameEditor);

const ProfileEditor = styled.div`
  flex-direction: column;
  align-content: center;
  margin-bottom: 2rem;

  button {
    width: 100px;
  }
`;

const ProfileRow = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
`;

const ProfileEditorInput = styled.input`
  padding: 5px;
  font-size: 1.2rem;
  margin-bottom: 1rem;
  max-width: 140px;
`;
