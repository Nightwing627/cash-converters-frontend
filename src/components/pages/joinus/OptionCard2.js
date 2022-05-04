import React from "react";

export default function OptionCard2({ data: { imgSrc, title, summary }}) {
    return (
        <div className="option-item">
            <div 
                className="img-div bg_cover"
                style={{ backgroundImage: `url(${imgSrc})` }}></div>
            
            <div className="d-block text-center mt-30 text-card">
                <h4 className="span-all-columns h4-responsive option-title">{title}</h4>
                <p>{summary}</p>
            </div>
        </div>
    );
}