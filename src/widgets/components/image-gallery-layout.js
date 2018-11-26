import React from 'react'
import './image-gallery-layout.css'

function ImageGalleryLayout(props){
    return(
        <div className='image-gallery-layout'>
            {props.children}
        </div>
    )
    
}

export default ImageGalleryLayout;