import React, { useState } from 'react'
import ReactPlayer from 'react-player'
import { FaPlayCircle } from 'react-icons/fa'
import { NavHashLink as NavLink } from 'react-router-hash-link'

import SubMenuBar from '../SubMenuBar'
import TextCard from '../TextCard'
import ServiceCard from '../ServiceCard'
import Vacancy from '../Vacancy'
import Testimonial from '../Testimonial'

import { WorkingStore, StoreRoles } from '../joinus.data'
import BannerBG from '../../../../assets/images/banner.png'
import VideoSrc from '../../../../assets/video.mp4'


export default function Store({width}) {
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
                    <p>store roles at</p>
                    <p className="mt-2 font-weight-bold">cash converters </p>
                </div>
                <SubMenuBar tag="store" width={width} /> 
            </section>

            <div className="container">
                <section className="section-card pt-5">
                    <TextCard data={WorkingStore} />
                </section>
            </div>
            
            <div className="col-12 vacancy-header mt-5">
                <div className="text-card">
                    <NavLink
                        to='#vacancies'
                        scroll={(el) => el.scrollIntoView({ behavior: "smooth", block: "end" })}
                    >
                        <h4 className="span-all-columns h4-responsive mb-0">View Store Vacancies</h4>
                    </NavLink>
                    
                    
                </div>
            </div>
            
            <div className="row video-area py-5">
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
                        Roles in a Cash Converters Store</h3>
                    <ServiceCard 
                        data={StoreRoles.TeamMember} 
                        dir='right' 
                        btnName="Express my interest"
                        modal={true} />
                    <ServiceCard 
                        data={StoreRoles.LoanSpecial} 
                        dir='left' 
                        btnName="Express my interest"
                        modal={true} />
                    <ServiceCard 
                        data={StoreRoles.Inventory} 
                        dir='right' 
                        btnName="Express my interest"
                        modal={true} />
                    <ServiceCard 
                        data={StoreRoles.Assistant} 
                        dir='left' 
                        btnName="Express my interest"
                        modal={true} />
                    <ServiceCard 
                        data={StoreRoles.Store} 
                        dir='right' 
                        btnName="Express my interest"
                        modal={true} />
                    <ServiceCard 
                        data={StoreRoles.Partner} 
                        dir='left' 
                        btnName="Express my interest"
                        modal={true} />
                </section>
            </div>
            
            <div id="vacancies" className='service-section bg-section pb-0'>
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