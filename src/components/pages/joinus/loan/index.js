import React, { useState, useEffect, useRef } from 'react'
import ReactPlayer from 'react-player'
import SubMenuBar from '../SubMenuBar';
import { FaPlayCircle } from 'react-icons/fa'

import TextCard from '../TextCard'
import OptionCard2 from '../OptionCard2';
import ServiceCard from '../ServiceCard'
import Vacancy from '../Vacancy'
import Testimonial from '../Testimonial'

import * as Query from './query';

import { fetchContent } from '../../../../utils/contentful';

export default function Loan({width}) {
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
    const [benefit, setBenefit] = useState(null);
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

        fetchContent(Query.query_getBenefit).then((data) => {
            data.benefit.items[0] && setBenefit(data.benefit.items[0]);
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
                    <SubMenuBar tag="loan" width={width} />
                </section>
            }

            <div className='container'>
                <section className="section-card pt-5">
                {
                    textCards && 
                    textCards.map((cardInfo, index) => (
                        <TextCard data={cardInfo} key={index} />
                    ))       
                }
                {
                    (benefit && benefit.toggleShow) &&
                    <>
                        {
                            benefit.title &&
                            <h3 className="span-all-columns h3-responsive service-out-title mt-30">{benefit.title}</h3>
                        }
                        <div className="row justify-content-between mt-30 option2-area pb-30">
                            {benefit.data.items.map((item, index) => (
                                <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12 benefit-item" key={index}>
                                    <OptionCard2 data={item} />
                                </div>
                            ))}
                        </div>
                    </>  
                }
                    <p className="normal-text">So, what are you waiting for? Check out our vacancies below and become one of us.</p>
                </section>    
            </div>

            {
                (blueButton && blueButton.toggleShow) &&
                <div className="col-12 vacancy-header mt-5">
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