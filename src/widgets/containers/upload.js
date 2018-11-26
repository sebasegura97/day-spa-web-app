import React, { Component } from 'react'
import UploadFile from '../components/upload-file'
import firebase from 'firebase/app'
import 'firebase/storage'
import 'firebase/database'


class Upload extends Component{
    state = {
        preview: '',
        progress: 0,
    }

    handleUploadFiles = () => {
        // Take the element from DOM 
        var fileList = document.getElementById('input').files;
        console.log(firebase)
        // Iterate array fileList[]
        for (var i = 0; i < fileList.length; i++) {
            var file = fileList[i];
            if (!file.type.startsWith('image/')) { continue }
            var storage = firebase.storage();
            var storageRef = storage.ref()
            // Create the file metadata
            var metadata = {
                contentType: 'image/jpeg'
            };

            // Upload file and metadata 
            var uploadTask = storageRef.child('Publicidades/' + file.name).put(file, metadata);
            uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, // or 'state_changed'
                (snapshot) => {
                    // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                    var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    this.setState({
                        progress,
                    })
                    console.log('Upload is ' + this.state.progress + '% done');
                    switch (snapshot.state) {
                        case firebase.storage.TaskState.PAUSED: // or 'paused'
                            console.log('Upload is paused');
                            break;
                        case firebase.storage.TaskState.RUNNING: // or 'running'
                            console.log('Upload is running');
                            break;
                    }
                }, function (error) {

                    // A full list of error codes is available at
                    // https://firebase.google.com/docs/storage/web/handle-errors
                    switch (error.code) {
                        case 'storage/unauthorized':
                            // User doesn't have permission to access the object
                            break;

                        case 'storage/canceled':
                            // User canceled the upload
                            break;
                        case 'storage/unknown':
                            // Unknown error occurred, inspect error.serverResponse
                            break;
                    }
                }, function () {
                    // Upload completed successfully, now we can get the download URL
                    uploadTask.snapshot.ref.getDownloadURL().then(function (downloadURL) {
                        var database = firebase.database();
                        var title = document.getElementById('inputTitle')
                        var discount = document.getElementById('inputDiscount')
                        var titleValue = title.value
                        var discountValue = discount.value
                        database.ref('publis/' + titleValue).set({
                            downloadURL: downloadURL,
                            title: titleValue,
                            discount: discountValue,
                            imageName: file.name,
                        });
                        
                        const button = document.getElementById('buttonSelectImage') 
                        button.style.color = "#689F38";
                        button.style.backgroundImage = "";
                        title.value = " ";
                        discount.value = " ";
                        fileList = {}
                        console.log(fileList)
                    });


                });
        }
    }
    fileReaderOnChange = () => {
        var file = document.getElementById('input').files[0];
        var reader = new FileReader();
        const button = document.getElementById('buttonSelectImage') 

        reader.addEventListener("load", () => {
            var url = reader.result
            this.setState({
                preview: url
            });
            button.style.color = "transparent";

        }, false);

        if (file) {
            reader.readAsDataURL(file);
        }
    }
    render(){
        return(
            <UploadFile 
                handleUploadFiles={this.handleUploadFiles}
                uploadImageOnChange={this.fileReaderOnChange}
                preview={this.state.preview}
                button={this.button}
                progress={this.state.progress}
            />
        )
    }
}
export default Upload