import React from 'react'

const GifGridItem = ({ id, title,url }) => {
  return (
    <div className='tarje animate__animated animate__rubberBand'>
        <img src={url} alt={title} />
        <p> {title} </p>
    </div>
  )
}

export default GifGridItem
