import React from 'react'
import PropTypes from 'prop-types'
import {ImageGalleryItem} from '../ImageGalleryItem/ImageGalleryItem'

function ImageGallery({ cards }) {
    const Elements = cards.map(({ id, webformatURL, largeImageURL }) => {
        return (<ImageGalleryItem key={id} webformatURL = {webformatURL} largeImageURL = {largeImageURL} />)
    })
    console.log(Elements)
  return (
    <ul className="gallery">
       <Elements/>   
    </ul>
  )
}

ImageGallery.propTypes = {}

export { ImageGallery }
