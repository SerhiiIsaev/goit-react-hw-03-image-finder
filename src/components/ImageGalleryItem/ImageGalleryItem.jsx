import PropTypes from 'prop-types'
import styles from './ImageGalleryItem.module.css'
function ImageGalleryItem({ id, webformatURL, largeImageURL }) {
  return (
    <li className={styles.GalleryItem}>
      <img className={styles.GalleryItemImage} src={webformatURL} alt={largeImageURL} />
    </li>
  )
}

ImageGalleryItem.propTypes = {}

export { ImageGalleryItem }
