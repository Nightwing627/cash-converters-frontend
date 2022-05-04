import React from "react";

export default function OptionCard({ data: { imgSrc, title, summary }}) {
    return (
        <div className="option-item">
            <img src={imgSrc} alt={title} />
            <div className="d-block text-center text-card">
                <h4 className="span-all-columns h4-responsive option-title">{title}</h4>
                <p>{summary}</p>
            </div>
        </div>
    );
}