import React from 'react';

export default function TextCard({data : {title, content}}) {
    return (
        <div className="centered-content text-card">
            <h2 className="span-all-columns h2-responsive">{title}</h2>
            <div className="text-card-content mt-3" dangerouslySetInnerHTML={{ __html: content }}></div>
        </div>
    )
}