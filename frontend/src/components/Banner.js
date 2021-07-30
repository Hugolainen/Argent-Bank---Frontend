import React, { Component } from 'react';
import styled from 'styled-components';
import heroImg from '../assets/img/bank-tree.jpeg';
import { SrOnlyH2 } from '../assets/style';

class Banner extends Component {
  render() {
    return (
      <Hero>
        <HeroContent>
          <SrOnlyH2>Promoted Content</SrOnlyH2>
          <HeroContentSubtitle>No fees.</HeroContentSubtitle>
          <HeroContentSubtitle>No minimum deposit.</HeroContentSubtitle>
          <HeroContentSubtitle>High interest rates.</HeroContentSubtitle>
          <HeroContentText>Open a savings account with Argent Bank today!</HeroContentText>
        </HeroContent>
      </Hero>
    );
  }
}
export default Banner;

const Hero = styled.div`
  background-image: url(${heroImg});
  background-position: 0 -50px;
  background-size: cover;
  background-repeat: no-repeat;
  height: 300px;
  position: relative;

  @media (min-width: 920px) {
    height: 400px;
    background-position: 0% 33%;
  }
`;

const HeroContent = styled.section`
  position: relative;
  top: 2rem;
  width: 200px;
  background: white;
  padding: 2rem;
  text-align: left;
  margin: 0 auto;

  @media (min-width: 920px) {
    position: absolute;
    top: 50px;
    right: 50px;
    width: 300px;
    margin: 2rem;
  }
`;

const HeroContentSubtitle = styled.p`
  font-weight: bold;
  font-size: 1rem;
  margin: 0;

  @media (min-width: 920px) {
    font-size: 1.5rem;
  }
`;

const HeroContentText = styled.p`
  margin-bottom: 0;
  font-size: 0.9rem;

  @media (min-width: 920px) {
    font-size: 1.2rem;
  }
`;
