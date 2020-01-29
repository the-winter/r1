import React from 'react';

export const Text = props => {

    return (
        <div className="content-section">
            <p className="article-text">{props.text}</p>
        </div>
    );
};