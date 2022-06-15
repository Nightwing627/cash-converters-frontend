import React from "react";

export default function OptionCard2({ 
    data: { name, description, image, toggleShow }}) {
    return (
        <>
            {
                toggleShow &&
                <div className="option-item">
                    <div 
                        className="img-div bg_cover"
                        style={{ backgroundImage: `url(${image.url})` }}></div>
                    
                    <div className="d-block text-center mt-30 text-card">
                        <h4 className="span-all-columns h4-responsive option-title">{name}</h4>
                        <p>{description}</p>
                    </div>
                </div>
            }  
            
        </>
        
    );
}