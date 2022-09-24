import React from 'react'
import PropTypes from 'prop-types'
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem'
import styles from './ImageGallery.module.css'

function ImageGallery({ cards }) {
  const Elements = cards.map(({ id, webformatURL, largeImageURL }) => {
      return (<ImageGalleryItem key={id} webformatURL={webformatURL} largeImageURL={largeImageURL} />)
    })
  return (
    <ul className={styles.ImageGallery}>
      {Elements}  
    </ul>
  )
}

ImageGallery.propTypes = {}

export { ImageGallery }
