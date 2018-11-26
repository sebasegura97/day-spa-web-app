import React from 'react'

function Loading(props){
        if(props.progress == 0 || props.progress == 100 ){
            return(
                <div/>
            ) 
        }else{
            return(
                <p>loading...</p>
            )
        }
}

export default Loading