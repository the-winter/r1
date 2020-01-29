import React from 'react';

export const Image = props => {
    return (
        <div className="featured-image">
            <img className="" src='/flowers.jpg'></img>
            <p>Image {props.captionText}</p>
            {/* Wanted to write it as below: */}
            {/* <img src={props.url}></img> */}
            <hr />
        </div>
    );
};