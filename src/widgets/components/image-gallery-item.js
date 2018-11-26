import React from 'react'
import './image-gallery-item.css'

function ImageGalleryItem(props){
    return(
        <div className='item-gallery-container'>
            <h2 className='item-gallery-title'>{props.publi.title}</h2>
            <img 
                className='item-gallery-image'
                src={props.publi.downloadURL}
            />
            <h2 className='item-gallery-discount'>{props.publi.discount}</h2>
            <button 
                className='item-gallery-button'
                onClick={ () => props.handleDeleteItem(props.publi.title, props.publi.imageName) }
            >
                Eliminar
            </button>
        </div>
    )
}

export default ImageGalleryItem