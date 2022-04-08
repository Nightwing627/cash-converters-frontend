import React, { useState } from 'react'
import ReactPlayer from 'react-player'
import BannerBG from '../../../../assets/images/banner-loan.png'
import SubMenuBar from '../SubMenuBar';
import { FaPlayCircle } from 'react-icons/fa'

import TextCard from '../TextCard'
import OptionCard from '../OptionCard';
import ServiceCard from '../ServiceCard'
import Vacancy from '../Vacancy'
import Testimonial from '../Testimonial'

import { WorkingLoan, LoanRoles, LoanBenefits } from '../joinus.data'
import VideoSrc from '../../../../assets/video.mp4'

export default function Loan() {
    const [showVideo, setVideoValue] = useState(false);
   
    const handleShowVideo = (e) => {
        e.preventDefault();
        setVideoValue(!showVideo);
    };

    return (
        <div className="container">
            <section id="banner">
                <img className="banner-image" src={BannerBG} alt="banner"/>
                <div className="banner-title-area">
                    <p>loan centre roles at</p>
                    <p className="mt-2 font-weight-bold">cash converters </p>
                </div>
                <SubMenuBar tag="loan" /> 
            </section>
            <section className="section-card">
                <TextCard data={WorkingLoan} />
                <div className="row justify-content-between mt-30 option2-area pb-30">
                    {LoanBenefits.map((item) => (
                    <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12 benefit-item" key={item.id}>
                        <OptionCard data={item} />
                    </div>
                    ))}
                </div>
                <p className="normal-text">So, what are you waiting for? Check out our vacancies below and become one of us.</p>
            </section>
            <div className="row video-area">
                <div className="col-12 video-header">
                    <p>VIEW LOAN CENTRE VACANCIES</p>
                </div>
                <section className="section-card video-card">
                    <div className="col-12 video-section">
                        {!showVideo ? 
                            <div className='video-thumbnail'>
                                <FaPlayCircle onClick={handleShowVideo}/>
                                <p>Current Loan Centre Video</p>
                            </div>
                        : 
                        <ReactPlayer 
                            width="100%"
                            height="auto"
                            controls
                            pip
                            url={VideoSrc}
                        />
                        }
                   </div>
                </section>
            </div>
            <section className="section-card service-section bg-white">
                <p className="service-out-title">Roles in a Cash Converters Store</p>
                <ServiceCard 
                    data={LoanRoles.Specialist} 
                    dir='right' 
                    btnName="Express my interest" />
                <ServiceCard 
                    data={LoanRoles.Supervisor} 
                    dir='left' 
                    btnName="Express my interest" />
                <ServiceCard 
                    data={LoanRoles.TeamLeader} 
                    dir='right' />
                <ServiceCard 
                    data={LoanRoles.Assistant} 
                    dir='left' />
                <ServiceCard 
                    data={LoanRoles.Manager} 
                    dir='right' />
            </section>
            <section className="section-card bg-section pb-5">
                <Vacancy />
            </section>
            <section className="section-card pb-150">
                <p className="service-out-title">What's it like to work at Cash Converters?</p>
                <Testimonial />
            </section>
        </div>
        
    )
}