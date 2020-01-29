import React from 'react';

export const PullQuote = props => {
    return (
        <aside className="pull-quote">
            <blockquote>
                {props.text}
            </blockquote>
            <hr />
            <p>{props.attribution}</p>
        </aside>
    )
}