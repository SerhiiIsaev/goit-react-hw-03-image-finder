import React from 'react'
import PropTypes from 'prop-types'
import styles from './Loader.module.css'

function Loader(props) {
  return (
    <button className={styles.LoaderButton}>Load more</button>
  )
}

Loader.propTypes = {}

export { Loader }
