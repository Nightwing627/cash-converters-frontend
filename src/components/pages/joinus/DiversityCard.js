import React, { useState } from "react";
import ReactMarkdown from 'react-markdown';
import Diversity from "./Diversity";

export default function DiversityCard({ 
  data: {title, description, image, buttonName, direction, holidays, toggleShow} }) {
    
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {
                toggleShow && 
                <section className="container section-card">
                  <h3 className="span-all-columns h3-responsive service-out-title mb-4">
                    {title}
                  </h3>
                  <div className="row service-card">
                    <div className="col-12 service-card-item align-items-center">
                        <div 
                            className={`col-lg-6 col-md-12 col-sm-12 col-xs-12 
                                ${direction === 'right' ? 'order-lg-1' : 'order-lg-2'} 
                                order-md-2 order-sm-2 order-xs-2 text-card px-4`}>
                            
                            <ReactMarkdown 
                                className="text-card-content mt-3"
                                children={description}
                            />

                          <div className="text-center pt-4">
                            <span className="service-btn" onClick={(e) => setIsOpen(!isOpen)} >
                              {buttonName}   
                            </span>
                          </div>
                      </div>
                      
                      <div 
                            className={`col-lg-6 col-md-12 col-sm-12 col-xs-12 p-0
                                ${direction === 'right' ? 'order-lg-2' : 'order-lg-1'} 
                                order-md-1 order-sm-1 order-xs-1 service-card-image`}>
                            <img className="service-image vw-100" src={image.url} alt="title" />
                        </div>
                    </div>

                    {
                      (isOpen && holidays && holidays.items) &&
                      <div className="col-12 diversity-section">
                        {holidays.items.map((item, index) => (
                          <Diversity title={item.title} key={index}/>
                        ))}
                      </div>
                    }
                  </div>
                </section>
                
            }
        </>
    )
}