import React, { useState } from 'react'
import AddCategory from './components/AddCategory.js';
import GifGrid from './components/GifGrid.js';

const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Dragon Ball']);

  return (
    <>
        <h2 className='animate__animated animate__flash'>GifExpertApp</h2>
        <AddCategory setCategories={ setCategories }/>
        <hr />

        <ol>
            {
                categories.map( category => (
                    <GifGrid 
                        key= { category }
                        category = { category}
                    />
                ))
            }
        </ol>
    </>
  )
}

export default GifExpertApp
