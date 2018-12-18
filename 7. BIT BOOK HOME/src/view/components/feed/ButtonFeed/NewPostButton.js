import React from 'react';

import { NewTextModal } from './NewTextModal'
import { NewImageModal } from './NewImageModal'
import { NewVideoModal } from './NewVideoModal'
import ButtonAnimation from './../../../../shared/ButtonAnimation'


import './css/NewPostButton.css'
import 'font-awesome/css/font-awesome.min.css';


ButtonAnimation();



const NewPostButton = (props) => {
    return (
        <>

            <div className="backdrop"></div>
            <div className="fab child red" data-subitem="1" data-toggle="modal" data-target="#videoModal">
                <span className="buttonText"><i className="fa fa-file-video-o"></i></span></div>
            <div className="fab child green" data-subitem="2" data-toggle="modal" data-target="#imageModal"><span className="buttonText"><i className="fa fa-file-image-o "></i></span></div>
            <div className="fab child blue" data-subitem="3" data-toggle="modal" data-target="#textModal"><span className="buttonText"><i className="fa fa-file-text"></i></span></div>
            <div className="fab blue" id="masterfab"><span>+</span></div>


            <NewTextModal />
            <NewImageModal />
            <NewVideoModal />

        </ >
    )
}




export { NewPostButton }