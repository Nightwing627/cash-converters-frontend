import React from "react";
import Slider from 'react-slick'
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";

import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'

import { Testimonials } from './joinus.data'

function CustomerArrow(props) {
    const {className, arrow, onClick} = props;

    return (
        <div 
            className={`d-block testimonial-arrow ${arrow} ${className}`}
            onClick={onClick}>
            {arrow === 'right' ?
                <FaChevronCircleRight />
            : <FaChevronCircleLeft /> }
        </div>
    )
}

export default function Testimonial() {
    
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <CustomerArrow arrow='right' />,
        prevArrow: <CustomerArrow arrow='left' />,
    }
    return (
        <div className="testimonial-area">
            <Slider {...settings}>
                {Testimonials.map((item) => (
                    <div className="testimonial-item " key={item.id}>
                        <div className="row d-flex align-items-center">
                            <div className="col-3 col-lg-3 col-md-12 col-sm-12 col-xs-12 testimonial-image">
                                <img src={item.imgSrc} alt={item.role} />
                            </div>
                            <div className="col-9 col-lg-9 col-md-12 col-sm-12 col-xs-12 testimonial-text">
                                <p className="feedback-employee font-weight-bold">{item.employee}</p>
                                <p className="feedback-role">{item.role}</p>
                                <p className="company-name">Cash Converters Henderson</p>
                                <div
                                    className="feedback-content mt-2" 
                                    dangerouslySetInnerHTML={{__html: item.content}}></div>
                            </div>
                        </div>                
                    </div>
                ))}
            </Slider>
            
        </div>
    )

}