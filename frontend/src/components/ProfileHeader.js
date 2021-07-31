import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { EditButton } from '../assets/style';

class ProfileHeader extends Component {
  render() {
    const name = this.props.name + ' !';
    const openNameEditor = this.props.openNameEditor;

    return (
      <>
        <h1>
          Welcome back
          <br />
          {name}
        </h1>
        <EditButton onClick={() => openNameEditor()}>Edit Name</EditButton>
      </>
    );
  }
}

ProfileHeader.propTypes = {
  name: PropTypes.string,
  openNameEditor: PropTypes.func,
};

ProfileHeader.defaultProps = {
  name: 'default name',
};

export default ProfileHeader;
