import React, { useState } from 'react'
import ReactPlayer from 'react-player'
import { FaPlayCircle } from 'react-icons/fa'

import SubMenuBar from '../SubMenuBar'
import TextCard from '../TextCard'
import ServiceCard from '../ServiceCard'
import Vacancy from '../Vacancy'
import Testimonial from '../Testimonial'

import { WorkingStore, StoreRoles } from '../joinus.data'
import BannerBG from '../../../../assets/images/banner.png'
import VideoSrc from '../../../../assets/video.mp4'


export default function Store() {
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
                    <p>store roles at</p>
                    <p className="mt-2 font-weight-bold">cash converters </p>
                </div>
                <SubMenuBar tag="store" /> 
            </section>
            <section className="section-card">
                <TextCard data={WorkingStore} />
            </section>
            <div className="row video-area">
                <div className="col-12 video-header">
                    <p>View Store Vacancies</p>
                </div>
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
            <section className="section-card service-section bg-white">
                <p className="service-out-title">Roles in a Cash Converters Store</p>
                <ServiceCard 
                    data={StoreRoles.TeamMember} 
                    dir='right' 
                    btnName="Express my interest" />
                <ServiceCard 
                    data={StoreRoles.LoanSpecial} 
                    dir='left' 
                    btnName="Express my interest" />
                <ServiceCard 
                    data={StoreRoles.Inventory} 
                    dir='right' 
                    btnName="Express my interest" />
                <ServiceCard 
                    data={StoreRoles.Assistant} 
                    dir='left' 
                    btnName="Express my interest" />
                <ServiceCard 
                    data={StoreRoles.Store} 
                    dir='right' 
                    btnName="Express my interest" />
                <ServiceCard 
                    data={StoreRoles.Partner} 
                    dir='left' 
                    btnName="Express my interest" />
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