import React, { useState } from "react";
import { Link } from 'react-router-dom';
import ExpressModal from './ExpressModal';
import ReactMarkdown from 'react-markdown'

export default function ServiceCard({ 
    data: {name, description, image, actionLink, direction, buttonName, isModal, toggleShow} }) {
    
    const [isOpen, setIsOpen] = useState(false);
    
    const toggleModal = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
            {
                toggleShow && 
                <div className="row service-card">
                    <div className="col-12 service-card-item align-items-center">
                        <div 
                            className={`col-lg-6 col-md-12 col-sm-12 col-xs-12 
                                ${direction === 'right' ? 'order-lg-1' : 'order-lg-2'} 
                                order-md-2 order-sm-2 order-xs-2 text-card px-4`}>
                            
                            {name && <h3 className="span-all-columns h3-responsive text-center">{name}</h3>}
                            
                            <ReactMarkdown 
                                className="text-card-content mt-3"
                                children={description}
                            />

                            {(actionLink || buttonName) &&
                                <div className="text-center pt-4">
                                {
                                    actionLink ?
                                    <Link className="service-btn" to={actionLink}>
                                        {buttonName}
                                    </Link>
                                    :
                                    isModal &&
                                    <span className="service-btn" onClick={(e) => toggleModal()} >
                                        {buttonName}
                                    </span>
                                }
                                </div>
                            }
                        </div>

                        <div 
                            className={`col-lg-6 col-md-12 col-sm-12 col-xs-12 p-0
                                ${direction === 'right' ? 'order-lg-2' : 'order-lg-1'} 
                                order-md-1 order-sm-1 order-xs-1 service-card-image`}>
                            <img className="service-image vw-100" src={image.url} alt="title" />
                        </div>
                    </div>

                    {isModal && 
                    <div className="col-12 express-interest-section">
                        <ExpressModal open={isOpen} toggle={toggleModal}/>
                    </div>}
                </div>
            }
        </>
    )
}