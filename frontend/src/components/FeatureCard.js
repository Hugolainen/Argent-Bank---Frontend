import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../assets/style.css';

class FeatureCard extends Component {
  render() {
    const title = this.props.title;
    const text = this.props.text;
    const image = this.props.image;
    const imageAlt = this.props.imageAlt;

    return (
      <div className="feature-item">
        <img src={image} alt={imageAlt} className="feature-icon" />
        <h3 className="feature-item-title">{title}</h3>
        <p>{text}</p>
      </div>
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
