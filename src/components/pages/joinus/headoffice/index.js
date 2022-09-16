import React, { useState, useEffect, useRef } from 'react'
import ReactPlayer from 'react-player'
import SubMenuBar from '../SubMenuBar';
import { FaPlayCircle } from 'react-icons/fa'
import TextCard from '../TextCard'
import ServiceCard from '../ServiceCard'
import Vacancy from '../Vacancy'
import Testimonial from '../Testimonial'

import * as Query from './query';

import { fetchContent } from '../../../../utils/contentful';

export default function HeadOffice({width}) {
    const [showVideo, setVideoValue] = useState(false);
   
    const handleShowVideo = (e) => {
        e.preventDefault();
        setVideoValue(!showVideo);
    };

    const vacancySection = useRef(null)

    const scrollToVacancy = () => {
      window.scrollTo({
        top: vacancySection.current.offsetTop,
        behavior: 'smooth',
      })
    }

    const [bannerData, setBannerData] = useState(null);
    const [textCards, setTextCards] = useState(null);
    const [blueButton, setBlueButton] = useState(null);
    const [roleTitle, setRoleTitle] = useState(null);
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

        fetchContent(Query.query_getBlueButton).then((data) => {
            data.buttons.items[0] && setBlueButton(data.buttons.items[0]);
        });

        fetchContent(Query.query_getRoleTitle).then((data) => {
            data.roleTitles.items[0] && setRoleTitle(data.roleTitles.items[0])
        })

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
                    <SubMenuBar tag="headoffice" width={width} />
                </section>
            }

            {
                textCards && 
                textCards.map((cardInfo, index) => (
                    <div className="container" key={index}>
                        <section className="section-card py-5">
                            <TextCard data={cardInfo} />
                        </section>
                    </div>
                ))       
            }

            {
                (blueButton && blueButton.toggleShow) &&
                <div className="col-12 vacancy-header">
                    <div className="half-width centered-content text-card">
                        <p onClick={scrollToVacancy}>
                            <h4 className="span-all-columns h4-responsive mb-0">
                            {blueButton.text}
                            </h4>
                        </p>
                    </div>
                </div>
            }

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
                        {(roleTitle && roleTitle.title && roleTitle.toggleShow) &&
                            <h3 className="span-all-columns h3-responsive main-text mb-5">
                                {roleTitle.title}
                            </h3>
                        }

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
            
            <div ref={vacancySection} id="vacancy_section" className='service-section bg-section pb-0'>
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