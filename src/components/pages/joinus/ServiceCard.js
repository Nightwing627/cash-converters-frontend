import React, { useState } from "react";
import { Link } from 'react-router-dom';
import Diversity from './Diversity';
import ExpressModal from './ExpressModal';
import { Diversities } from './joinus.data'

export default function ServiceCard({ dir, btnName='', data: {title, summary, imgSrc, link}, modal }) {
    const [show, setToggle] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    
    const toggleModal = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div className="row service-card">
            <div className="col-12 service-card-item align-items-center">
                <div 
                    className={`col-lg-6 col-md-12 col-sm-12 col-xs-12 
                        ${dir === 'right' ? 'order-lg-1' : 'order-lg-2'} 
                        order-md-2 order-sm-2 order-xs-2 text-card px-4`}>
                    
                    {title !== undefined && <h3 className="span-all-columns h3-responsive text-center">{title}</h3>}
                    
                    <div className="text-card-content mt-2" dangerouslySetInnerHTML={{__html: summary}}></div>

                    {(link !== undefined || btnName !== '') ?
                        <div className="text-center pt-4">
                            {link !== undefined ? 
                            <Link className="service-btn" to={link}>
                                {btnName === '' ? title : btnName}
                            </Link> :
                            <span className="service-btn"
                                
                                onClick={(e) => { !modal ? setToggle(!show) : toggleModal() }}>
                                {btnName}</span>}
                        </div>
                    : ''}
                </div>
                <div 
                    className={`col-lg-6 col-md-12 col-sm-12 col-xs-12 p-0
                        ${dir === 'right' ? 'order-lg-2' : 'order-lg-1'} 
                        order-md-1 order-sm-1 order-xs-1 service-card-image`}>
                    <img className="service-image vw-100" src={imgSrc} alt="title" />
                </div>
            </div>
            
            {show && 
                <div className="col-12 diversity-section">
                    {Diversities.map((item) => (
                        <Diversity key={item.id} data={item} />
                    ))}
                </div>}
            
            {modal && 
                <div className="col-12 express-interest-section">
                    <ExpressModal open={isOpen} toggle={toggleModal}/>
                </div>}
        </div>
    )
}