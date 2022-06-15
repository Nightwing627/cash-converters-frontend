import React from "react";

export default function OptionCard({ data: { title, content, image, toggleShow }}) {
    return (
        <>
            {
                toggleShow === true &&
                <div className="option-item">
                    <img src={image.url} alt={title} />
                    <div className="d-block text-center text-card">
                        <h4 className="span-all-columns h4-responsive option-title">{title}</h4>
                        <p>{content}</p>
                    </div>
                </div>
            }
        </>
        
    );
}