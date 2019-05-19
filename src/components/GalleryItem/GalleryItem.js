import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';
import Modal from '../Modal/Modal';

export default class GalleryItem extends Component {
  state = {
    isModalOpen: false,
  };

  static propTypes = {
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
      largeImageURL,
      webformatURL,
      likes,
      views,
      comments,
      downloads,
    } = this.props;
    const { isModalOpen } = this.state;
    return (
      <Fragment>
        <img className="galleryItemImg" src={webformatURL} alt="img" />
        <div className="stats">
          <p className="stats-item">
            <i className="material-icons">thumb_up</i>
            {likes}
          </p>
          <p className="stats-item">
            <i className="material-icons">visibility</i>
            {views}
          </p>
          <p className="stats-item">
            <i className="material-icons">comment</i>
            {comments}
          </p>
          <p className="stats-item">
            <i className="material-icons">cloud_download</i>
            {downloads}
          </p>
        </div>

        <button
          type="button"
          className="fullscreen-button"
          onClick={this.onModalHandle}
        >
          <i className="material-icons">zoom_out_map</i>
        </button>
        {isModalOpen && (
          <Modal imgUrl={largeImageURL} onClose={this.onModalHandle} />
        )}
      </Fragment>
    );
  }
}
// const GalleryItem = ({ webformatURL, likes, views, comments, downloads }) => (
//   <Fragment>
//     <img src={webformatURL} alt="img" />
//     <div className="stats">
//       <p className="stats-item">
//         <i className="material-icons">thumb_up</i>
//         {likes}
//       </p>
//       <p className="stats-item">
//         <i className="material-icons">visibility</i>
//         {views}
//       </p>
//       <p className="stats-item">
//         <i className="material-icons">comment</i>
//         {comments}
//       </p>
//       <p className="stats-item">
//         <i className="material-icons">cloud_download</i>
//         {downloads}
//       </p>
//     </div>

//     <button type="button" className="fullscreen-button">
//       <i className="material-icons">zoom_out_map</i>
//     </button>
//   </Fragment>
// );
// GalleryItem.propTypes = {
//   webformatURL: PropTypes.string.isRequired,
//   likes: PropTypes.number.isRequired,
//   views: PropTypes.number.isRequired,
//   comments: PropTypes.number.isRequired,
//   downloads: PropTypes.number.isRequired,
// };
// export default GalleryItem;