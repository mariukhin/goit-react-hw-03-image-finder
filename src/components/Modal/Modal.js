import React, { Component, createRef } from 'react';
import LazyLoad from 'react-lazy-load';
import PropTypes from 'prop-types';

export default class Modal extends Component {
  static propTypes = {
    imgUrl: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired,
  };

  backdropRef = createRef();

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyPress);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyPress);
  }

  handleKeyPress = e => {
    const { onClose } = this.props;
    if (e.code !== 'Escape') return;

    onClose();
  };

  handleBackdropClick = e => {
    const { current } = this.backdropRef;
    const { onClose } = this.props;

    if (current && e.target !== current) {
      return;
    }

    onClose();
  };

  render() {
    const { imgUrl } = this.props;
    return (
      <div
        className="overlay"
        ref={this.backdropRef}
        onClick={this.handleBackdropClick}
      >
        <div className="modal">
          <LazyLoad>
            <img src={imgUrl} alt="img" />
          </LazyLoad>
        </div>
      </div>
    );
  }
}
