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

export default function Loan({width}) {
    const [showVideo, setVideoValue] = useState(false);
   
    const handleShowVideo = (e) => {
        e.preventDefault();
        setVideoValue(!showVideo);
    };

    return (
        <div className="main-content">
            <section id="banner">
                <img className="banner-image" src={BannerBG} alt="banner"/>
                <div className="banner-title-area">
                    <p>loan centre roles at</p>
                    <p className="mt-2 font-weight-bold">cash converters </p>
                </div>
                <SubMenuBar tag="loan" width={width} /> 
            </section>

            <div className='container'>
                <section className="section-card pt-5">
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
            </div>

            <div className="col-12 vacancy-header mt-5">
                <div className="half-width centered-content text-card">
                    <h4 className="span-all-columns h4-responsive mb-0">View Store Vacancies</h4>
                </div>
            </div>
            
            <div className="row video-area py-5">
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

            <div className='service-section bg-white py-5'>
                <section className="section-card container">
                    <h3 className="span-all-columns h3-responsive main-text mb-5">
                        Roles in a Cash Converters Loan Centre</h3>
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
            </div>
            
            <div className='service-section bg-section pb-0'>
                <section className="section-card container py-5">
                    <Vacancy />
                </section>
            </div>

            <div className='container py-5'>
                <section className="section-card">
                <h3 className="span-all-columns h3-responsive main-text mb-5">
                    What's it like to work at Cash Converters?</h3>
                    
                    <Testimonial />
                </section>
            </div>
        </div>
        
    )
}