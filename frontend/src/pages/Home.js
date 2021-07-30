import React, { Component } from 'react';
import styled from 'styled-components';
import { SrOnlyH2 } from '../assets/style';

import Banner from '../components/Banner';
import FeatureCard from '../components/FeatureCard';

import iconChat from '../assets/img/icon-chat.png';
import iconMoney from '../assets/img/icon-money.png';
import iconSecurity from '../assets/img/icon-security.png';

class HomePage extends Component {
  render() {
    return (
      <main>
        <Banner />
        <Features>
          <SrOnlyH2>Features</SrOnlyH2>
          <FeatureCard
            title="You are our #1 priority"
            text="Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in
              less than 5 minutes."
            image={iconChat}
            imageAlt="Security icon"
          />
          <FeatureCard
            title="More savings means higher rates"
            text="The more you save with us, the higher your interest rate will be!"
            image={iconMoney}
            imageAlt="Security icon"
          />
          <FeatureCard
            title="Security you can trust"
            text="We use top of the line encryption to make sure your data and money is always safe."
            image={iconSecurity}
            imageAlt="Security icon"
          />
        </Features>
      </main>
    );
  }
}
export default HomePage;

const Features = styled.section`
  display: flex;
  flex-direction: column;

  @media (min-width: 920px) {
    flex-direction: row;
  }
`;
