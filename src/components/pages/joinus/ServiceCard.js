import React, { useState } from "react";
import { Link } from 'react-router-dom';
import Diversity from './Diversity';
import { Diversities } from './joinus.data'

export default function ServiceCard({ dir, btnName='', data: {title, summary, imgSrc, link}, }) {
    const [show, setToggle] = useState(false);

    console.log(link);
    return (
        <div className="row service-card">
            <div className="col-12 service-card-item align-items-center">
                <div 
                    className={`col-lg-6 col-md-12 col-sm-12 col-xs-12 
                        ${dir === 'right' ? 'order-lg-1' : 'order-lg-2'} 
                        order-md-2 order-sm-2 order-xs-2 service-card-text`}>
                    {title !== undefined && <p className="service-title text-center">{title}</p>}
                    <div className="service-content" dangerouslySetInnerHTML={{__html: summary}}></div>
                    {(link !== undefined || btnName !== '') ?
                        <div className="text-center">
                            {link !== undefined ? 
                            <Link className="service-btn" to={link}>
                                {btnName === '' ? title : btnName}
                            </Link> :
                            <span className="service-btn"
                                onClick={(e) => {setToggle(!show)}}>
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
        </div>
    )
}