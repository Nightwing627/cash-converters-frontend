import React from 'react';
// import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import ReactMarkdown from 'react-markdown'

export default function TextCard({data : {title, content, toggleShow}}) {
    return (
        <>
            {
                toggleShow === true &&
                <div className="centered-content text-card">
                    <h2 className="span-all-columns h2-responsive">{title}</h2>
                    <ReactMarkdown 
                        className="text-card-content mt-3"
                        children={content}
                    />
                </div>
            }
        </>
    )
}