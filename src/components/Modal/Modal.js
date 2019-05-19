import React, { Component, createRef } from 'react';
import PropTypes from 'prop-types';

export default class Modal extends Component {
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
          <img src={imgUrl} alt="img" />
        </div>
      </div>
    );
  }
}
// const Modal = ({ imgUrl, onCloseModal }) => (
//   <div className="overlay" onClick={onCloseModal}>
//     <div className="modal">
//       <img src={imgUrl} alt="img" />
//     </div>
//   </div>
// );
// Modal.propTypes = {
//   imgUrl: PropTypes.string.isRequired,
//   onCloseModal: PropTypes.func.isRequired,
// };
// export default Modal;
