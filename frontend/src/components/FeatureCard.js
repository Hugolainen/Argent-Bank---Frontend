import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

class FeatureCard extends Component {
  render() {
    const title = this.props.title;
    const text = this.props.text;
    const image = this.props.image;
    const imageAlt = this.props.imageAlt;

    return (
      <FeatureItem>
        <FeatureIcon src={image} alt={imageAlt} />
        <FeatureItemTitle>{title}</FeatureItemTitle>
        <p>{text}</p>
      </FeatureItem>
    );
  }
}

FeatureCard.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  image: PropTypes.string,
  imageAlt: PropTypes.string,
};

FeatureCard.defaultProps = {
  title: 'default title',
  text: 'default text',
  image: '',
  imageAlt: 'default imageAlt',
};

export default FeatureCard;

const FeatureItem = styled.div`
  flex: 1;
  padding: 2.5rem;
`;

const FeatureIcon = styled.img`
  width: 100px;
  border: 10px solid #00bc77;
  border-radius: 50%;
  padding: 1rem;
`;

const FeatureItemTitle = styled.h3`
  color: #222;
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;
