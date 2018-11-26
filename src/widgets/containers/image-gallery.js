import React, { Component } from 'react'
import { connect } from 'react-redux'
import ImageGalleryItem from '../components/image-gallery-item'
import ImageGalleryLayout from '../components/image-gallery-layout'
import firebase from 'firebase/app'
import 'firebase/storage'
import 'firebase/database'

class ImageGallery extends Component {
    
    handleDeleteItem(title, image) {
        var database = firebase.database()
        var storage = firebase.storage();
        var storageRef = storage.ref().child('Publicidades/' + image);

        database.ref('publis/' + title).remove();

        // Delete the file
        storageRef.delete().then(function () {
            console.log('Imagen eliminada del storage')
        }).catch(function (error) {
            console.log(error)
        });
    }
    render(){
        console.log(this.props.publis)
        return(
            <ImageGalleryLayout>
                {
                    this.props.publis.map((publi, index) => {
                        return(
                            <ImageGalleryItem 
                                key = {index}
                                publi = {publi}
                                handleDeleteItem = {this.handleDeleteItem}
                            />
                        )
                    })

                }
            </ImageGalleryLayout>
        )
    }

}

function mapStateToProps(state){
    return{
        publis: state.publis
    }
}

export default connect(mapStateToProps)(ImageGallery)