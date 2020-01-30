import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCamera } from '@fortawesome/free-solid-svg-icons'

export const Image = props => {
    library.add(faCamera);
    return (
        <div className="featured-image">
            <img className="" alt="" src='/flowers.jpg'></img>
            <p><FontAwesomeIcon icon="camera" /> {props.captionText}</p>
            {/* Wanted to write it as below: */}
            {/* <img src={props.url}></img> */}
            <hr />
        </div>
    );
};