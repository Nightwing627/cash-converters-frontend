import React, { useState, useEffect } from 'react'
import ReactPlayer from 'react-player'
import { FaPlayCircle } from 'react-icons/fa'
import { NavHashLink as NavLink } from 'react-router-hash-link'

import SubMenuBar from '../SubMenuBar'
import TextCard from '../TextCard'
import ServiceCard from '../ServiceCard'
import Vacancy from '../Vacancy'
import Testimonial from '../Testimonial'

import * as Query from './query';

import { fetchContent } from '../../../../utils/contentful';

export default function Store({width}) {
    const [showVideo, setVideoValue] = useState(false);
   
    const handleShowVideo = (e) => {
        e.preventDefault();
        setVideoValue(!showVideo);
    };

    const [bannerData, setBannerData] = useState(null);
    const [textCards, setTextCards] = useState(null);
    const [videoData, setVideoData] = useState(null);
    const [roleData, setRoleData] = useState(null);
    const [testimonials, setTestimonials] = useState(null);

    useEffect(() => {
        fetchContent(Query.query_getBanners).then((data) => {
            data.bannerCollection.items && setBannerData(data.bannerCollection.items[0]);
        });

        fetchContent(Query.query_getTextCards).then((data) => {
            data.textCardCollection.items && setTextCards(data.textCardCollection.items);
        });

        fetchContent(Query.query_getVideo).then((data) => {
            data.videoCollection.items && setVideoData(data.videoCollection.items[0]);
        });

        fetchContent(Query.query_getRoles).then((data) => {
            data.roleCollection.items && setRoleData(data.roleCollection.items);
        });

        fetchContent(Query.query_getTestimonials).then((data) => {
            data.testimonialCollection.items && setTestimonials(data.testimonialCollection.items);
        });
    }, [])

    return (
        <div className="main-content">
            {bannerData && 
                <section id="banner">
                    <img className="banner-image" src={bannerData.banner.url} alt="banner"/>
                    <div className="banner-title-area">
                        <p>{bannerData.text1}</p>
                        <p className="mt-2 font-weight-bold">{bannerData.text2}</p>
                    </div>
                    <SubMenuBar tag="store" width={width} />
                </section>
            }

            {
                textCards && 
                textCards.map((cardInfo, index) => (
                    <div className="container" key={index}>
                        <section className="section-card pt-5">
                            <TextCard data={cardInfo} />
                        </section>
                    </div>
                ))       
            }
            
            <div className="col-12 vacancy-header mt-5">
                <div className="text-card">
                    <NavLink
                        to="/joinus/store#vacancy_section"
                        scroll={(el) => el.scrollIntoView({ behavior: "smooth", block: "end" })}
                    >
                        <h4 className="span-all-columns h4-responsive mb-0">View Store Vacancies</h4>
                    </NavLink>
                </div>
            </div>

            {
                (videoData && videoData.toggleShow) &&
                <div className="service-section video-area py-5">
                    <section className="section-card video-card">
                        <div className="col-12 video-section">
                            {!showVideo ? 
                                <div className='video-thumbnail'>
                                    <FaPlayCircle onClick={handleShowVideo}/>
                                    <p>{videoData.title}</p>
                                </div>
                            : 
                            <ReactPlayer 
                                width="100%"
                                height="auto"
                                controls
                                pip
                                url={videoData.video.url}
                            />
                            }
                    </div>
                    </section>
                </div>
            }
            
            {
                roleData &&
                <div className='service-section py-5 bg-white'>
                    <section className="section-card container">
                        <h3 className="span-all-columns h3-responsive main-text mb-5">
                            Roles in a Cash Converters Store</h3>

                        <div className="service-section py-5 bg-white">
                            <section className="container section-card">
                                {roleData.map((role, index) =>(
                                    <ServiceCard 
                                        data={role} 
                                        key={index} />
                                ))}
                            </section>
                        </div>
                        
                    </section>
                </div>
            }
            
            
            <div id="vacancy_section" className='service-section bg-section pb-0'>
                <section className="section-card container py-5">
                    <Vacancy />
                </section>
            </div>
            
            {
                testimonials &&
                <div className='container py-5'>
                    <section className="section-card">
                    <h3 className="span-all-columns h3-responsive main-text mb-5">
                        What's it like to work at Cash Converters?</h3>
                        
                        <Testimonial data={testimonials}/>
                    </section>
                </div>
            }
        </div>
    )
}