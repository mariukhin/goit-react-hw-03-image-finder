import React from 'react';
import PropTypes from 'prop-types';
import GalleryItem from '../GalleryItem/GalleryItem';

const Gallery = ({ cards }) => (
  <ul className="gallery">
    {cards.map(card => (
      <li className="gallery-item" key={card.id}>
        <GalleryItem {...card} />
      </li>
    ))}
  </ul>
);
Gallery.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
      likes: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      comments: PropTypes.number.isRequired,
      downloads: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};
export default Gallery;
