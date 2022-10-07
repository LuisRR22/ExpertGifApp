import React from 'react'
import useFetchGifs from '../hooks/useFetchGifs';
import GifGridItem from './GifGridItem';

const GifGrid = ({ category }) => {

    const { data:imagenes, loading } = useFetchGifs( category );

  return (
    <>  
        <h3 className='animate__animated animate__wobble'> { category } </h3>
        { loading && <p>Cargando imagenes.....</p>}
        <div className='tarje-grid'>
            {
                imagenes.map( img => (
                    <GifGridItem 
                        key={img.id}
                        { ...img }
                    />
                ))
            }
        </div>
    </>
  )
}

export default GifGrid
