import React, { useEffect, useState } from 'react'
import SubMenuBar from '../SubMenuBar';
import TextCard from '../TextCard';
import OptionCard from '../OptionCard';
import OptionCard2 from '../OptionCard2';
import ServiceCard from '../ServiceCard';
import DiversityCard from '../DiversityCard';
import Accordion from '../Accordion';

import * as Query from './query';

import { fetchContent } from '../../../../utils/contentful';

export default function Career({width}) {
    const [bannerData, setBannerData] = useState(null);
    const [textCards, setTextCards] = useState(null);
    const [keyPoints, setKeyPoints] = useState(null);
    const [organizations, setOrganizations] = useState(null);
    const [diversity, setDiversity] = useState(null);
    const [services, setServices] = useState(null);
    const [faq, setFaq] = useState(null);
    
    useEffect(() => {
        fetchContent(Query.query_getBanners).then((data) => {
            data.bannerCollection.items && setBannerData(data.bannerCollection.items[0]);
        });

        fetchContent(Query.query_getTextCards).then((data) => {
            data.textCardCollection.items && setTextCards(data.textCardCollection.items);
        });

        fetchContent(Query.query_getKeyPoints).then((data) => {
            data.keyPointsCollection.items && setKeyPoints(data.keyPointsCollection.items);
        });

        fetchContent(Query.query_getOrganizations).then((data) => {
            data.roleCollection.items && setOrganizations(data.roleCollection.items);
        });

        fetchContent(Query.query_getDiversity).then((data) => {
            data.diversityCollection.items && setDiversity(data.diversityCollection.items);
        });
        
        fetchContent(Query.query_getCareerServices).then((data) => {
            data.servicesCollection.items && setServices(data.servicesCollection.items);
        });

        fetchContent(Query.query_getFaq).then((data) => {
            data.faqCollection.items && setFaq(data.faqCollection.items);
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
                    <SubMenuBar tag="career" width={width} />
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
            
            {
                keyPoints &&
                <div className="container">
                    <section className="section-card pt-5">
                        <div className="row justify-content-between option-area">
                            {keyPoints.map((point, index) => (
                            <div className="col-lg-2 col-md-6 col-sm-6 col-xs-12" key={index}>
                                <OptionCard data={point} />
                            </div>
                            ))}
                        </div>
                    </section>
                </div>
            }
            
            {
                organizations && 
                <div className="service-section py-5">
                    <section className="container section-card">
                        {organizations.map((organ, index) =>(
                            <ServiceCard 
                                data={organ} 
                                key={index} />
                        ))}
                    </section>
                </div>
            }
            
            {
                diversity &&
                diversity.map((item, index) =>(
                    <div className='service-section py-5 bg-white' key={index}>
                        <DiversityCard data={item} />
                    </div>
                ))
                
            }
            
            {
                services &&
                <div className="service-section py-5">
                    <section className="section-card container">
                        <h3 className="span-all-columns h3-responsive service-out-title">
                                We're all about our people and here are a few ways we look after you</h3>
                        <div className="row justify-content-between option2-area">
                            {services.map((item, index) => (
                                <div className="col-lg-2 col-md-4 col-sm-6 col-xs-12 mt-30" key={index}>
                                    <OptionCard2 data={item} />
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
            }
            
            {
                faq &&
                <div className='container'>
                    <section className="section-card py-5">
                        <h3 
                            className="span-all-columns h3-responsive service-out-title">
                            Frequently asked questions</h3>
                        <div className="faq-area">
                            <Accordion data={faq} />
                        </div>
                    </section>
                </div>
            }
            
        </div>
    )
}