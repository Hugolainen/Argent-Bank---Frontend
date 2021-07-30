import React, { Component } from 'react';
import styled from 'styled-components';

class Footer extends Component {
  render() {
    return (
      <ScFooter>
        <FooterText>Copyright 2020 Argent Bank</FooterText>
      </ScFooter>
    );
  }
}
export default Footer;

const ScFooter = styled.footer`
  display: flex;
  justify-content: center;
  border-top: 2px solid #ccc;
  padding: 2rem 0 1.5rem;
`;

const FooterText = styled.p`
  margin: 0;
  padding: 0;
`;
