import React, { useState } from 'react'
import ReactPlayer from 'react-player'
import BannerBG from '../../../../assets/images/banner-headoffice.png'
import SubMenuBar from '../SubMenuBar';
import { FaPlayCircle } from 'react-icons/fa'

import TextCard from '../TextCard'
import ServiceCard from '../ServiceCard'
import Vacancy from '../Vacancy'
import Testimonial from '../Testimonial'

import { WorkingHeadOffice, HeadOfficeRoles } from '../joinus.data'
import VideoSrc from '../../../../assets/video.mp4'

export default function HeadOffice({width}) {
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
                    <p>head office roles at</p>
                    <p className="mt-2 font-weight-bold">cash converters </p>
                </div>
                <SubMenuBar tag="headoffice" width={width} /> 
            </section>

            <div className="container">
                <section className="section-card pt-5">
                <TextCard data={WorkingHeadOffice} />
                </section>
            </div>

            <div className="row video-area py-5 mt-5">
                <section className="section-card video-card">
                    <div className="col-12 video-section">
                        {!showVideo ? 
                            <div className='video-thumbnail'>
                                <FaPlayCircle onClick={handleShowVideo}/>
                                <p>Haines ‘True Story’ Video</p>
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
            
            <div className='service-section py-5 bg-white'>
                <section className="section-card container">
                    <h3 className="span-all-columns h3-responsive main-text mb-5">
                        Roles in the Cash Converters Store Head Office
                    </h3>
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