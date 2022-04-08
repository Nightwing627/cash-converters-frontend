import React, { useState } from 'react'
import ReactPlayer from 'react-player'
import BannerBG from '../../../../assets/images/banner-headoffice.png'
import SubMenuBar from '../SubMenuBar';
import { FaPlayCircle } from 'react-icons/fa'

import TextCard from '../TextCard'
import OptionCard from '../OptionCard';
import ServiceCard from '../ServiceCard'
import Vacancy from '../Vacancy'
import Testimonial from '../Testimonial'

import { WorkingHeadOffice, HeadOfficeRoles } from '../joinus.data'
import VideoSrc from '../../../../assets/video.mp4'

export default function HeadOffice() {
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
                    <p>head office roles at</p>
                    <p className="mt-2 font-weight-bold">cash converters </p>
                </div>
                <SubMenuBar tag="headoffice" /> 
            </section>
            <section className="section-card pb-60">
                <TextCard data={WorkingHeadOffice} />
            </section>
            <div className="row video-area">
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
                <p className="service-out-title">Roles in the Cash Converters Store Head Office</p>
                <ServiceCard 
                    data={HeadOfficeRoles.ITDev} 
                    dir='right' />
                <ServiceCard 
                    data={HeadOfficeRoles.ITAdmin} 
                    dir='left' />
                <ServiceCard 
                    data={HeadOfficeRoles.Accounting} 
                    dir='right' />
                <ServiceCard 
                    data={HeadOfficeRoles.HR} 
                    dir='left' />
                <ServiceCard 
                    data={HeadOfficeRoles.Marketing} 
                    dir='right' />
                <ServiceCard 
                    data={HeadOfficeRoles.Support} 
                    dir='left' />
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