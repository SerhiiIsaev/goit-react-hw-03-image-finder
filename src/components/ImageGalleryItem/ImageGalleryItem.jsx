import PropTypes from 'prop-types'

function ImageGalleryItem({ id, webformatURL, largeImageURL }) {
  return (
    <li className="gallery-item">
        <img src='' alt="largeImageURL" />
    </li>
  )
}

ImageGalleryItem.propTypes = {}

export { ImageGalleryItem }
