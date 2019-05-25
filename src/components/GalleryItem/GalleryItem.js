import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Modal from '../Modal/Modal';
import styles from './GalleryItem.module.css';

export default class GalleryItem extends Component {
  state = {
    isModalOpen: false,
  };

  static propTypes = {
    id: PropTypes.number.isRequired,
    largeImageURL: PropTypes.string.isRequired,
    webformatURL: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    comments: PropTypes.number.isRequired,
    downloads: PropTypes.number.isRequired,
  };

  onModalHandle = () => {
    this.setState(state => ({
      isModalOpen: !state.isModalOpen,
    }));
  };

  render() {
    const {
      id,
      largeImageURL,
      webformatURL,
      likes,
      views,
      comments,
      downloads,
    } = this.props;
    const { isModalOpen } = this.state;
    return (
      <li className={styles.galleryItem} key={id}>
        <img className={styles.galleryItemImg} src={webformatURL} alt="img" />
        <div className={styles.stats}>
          <p className={styles.statsItem}>
            <i className="material-icons">thumb_up</i>
            {likes}
          </p>
          <p className={styles.statsItem}>
            <i className="material-icons">visibility</i>
            {views}
          </p>
          <p className={styles.statsItem}>
            <i className="material-icons">comment</i>
            {comments}
          </p>
          <p className={styles.statsItem}>
            <i className="material-icons">cloud_download</i>
            {downloads}
          </p>
        </div>

        <button
          type="button"
          className={styles.fullscreenButton}
          onClick={this.onModalHandle}
        >
          <i className="material-icons">zoom_out_map</i>
        </button>
        {isModalOpen && (
          <Modal imgUrl={largeImageURL} onClose={this.onModalHandle} />
        )}
      </li>
    );
  }
}
