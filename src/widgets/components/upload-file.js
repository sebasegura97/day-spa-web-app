import React from 'react'
import './upload-file.css'
import 'babel-polyfill'
import Loading from './loading.js'

function UploadFile(props) {
    var uploadItem = () => {
        const input = document.getElementById('input')
        input.click()
    }
    // props.button.style.background = props.preview;
    
    // button.style.backgroundImage = props.preview;
    return(
        <div id='preview'>
        {/* The button call input file because it's easier styling a button than an input */}
            <input
                type='text'
                id='inputTitle' 
                required
            />
            <div 
                className='uploadContainer'
            >
                {/* <img id='previewImage' src={props.preview} />    */}

                <button
                    id='buttonSelectImage'
                    onClick={uploadItem}
                    className="buttonSelectFile"
                    style={{backgroundImage: "url(" + props.preview + ")"}}
                >
                    + <br />
                    <span className="buttonUploadText"> Imagen </span>
                </button>

                <input
                    type='file'
                    id='input'
                    required
                    // multiple 
                    onChange={props.uploadImageOnChange}
                    />
            </div>
            <Loading
                progress={props.progress}
            />
            <input 
                type='text'
                id='inputDiscount'
                required
                />
            
            <button 
                onClick={props.handleUploadFiles }
                className='buttonUploadFiles'
                id='uploadButton'
                >
                Cargar...
            </button>
        </div>

    )
}



export default UploadFile