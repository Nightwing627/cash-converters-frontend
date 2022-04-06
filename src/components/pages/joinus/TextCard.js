import React from 'react';

export default function TextCard({data : {title, content}}) {
    return (
        <div className="text-card-area">
            <p className="title">{title}</p>
            <div className="row col-12 text-card-content" dangerouslySetInnerHTML={{ __html: content }}></div>
        </div>
    )
}