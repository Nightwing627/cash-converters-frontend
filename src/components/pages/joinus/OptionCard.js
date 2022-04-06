import React from "react";

export default function OptionCard({ data: { imgSrc, title, summary }}) {
    return (
        <div className="option-item">
            <img src={imgSrc} alt={title} />
            <div className="d-block text-center">
                <p >{title}</p>
                <p>{summary}</p>
            </div>
        </div>
    );
}