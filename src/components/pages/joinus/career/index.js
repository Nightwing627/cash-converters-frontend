import React from 'react'
import BannerBG from '../../../../assets/images/banner.png'
import SubMenuBar from '../SubMenuBar';
import TextCard from '../TextCard';
import OptionCard from '../OptionCard';
import OptionCard2 from '../OptionCard2';
import ServiceCard from '../ServiceCard';
import Accordion from '../Accordion';

import TrueStory, { Carrers, Options, CarrerServices, CareWays, Accordions } from '../joinus.data';

export default function Carrer({width}) {
    return (
        <div className="main-content">
            <section id="banner">
                <img className="banner-image" src={BannerBG} alt="banner"/>
                <div className="banner-title-area">
                    <p>careers at</p>
                    <p className="mt-2 font-weight-bold">cash converters </p>
                </div>
                <SubMenuBar tag="career" width={width} />
            </section>
            <div className="container">
                <section className="section-card pt-5">
                    <TextCard data={TrueStory} />
                </section>
            </div>
            
            <div className="container">
                <section className="section-card pt-5">
                    <TextCard data={Carrers} />
                </section>
            </div>
            
            <div className="container">
                <section className="section-card pt-5">
                    <div className="row justify-content-between option-area">
                        {Options.map((item) => (
                        <div className="col-lg-2 col-md-6 col-sm-6 col-xs-12" key={item.id}>
                            <OptionCard data={item} />
                        </div>
                        ))}
                    </div>
                </section>
            </div>
            
            <div className="service-section py-5">
                <section className="container section-card">
                    <ServiceCard 
                        data={CarrerServices.Store} 
                        dir='right' 
                        key={CarrerServices.Store.title} />
                    <ServiceCard 
                        data={CarrerServices.LoanCentre} 
                        dir='left' 
                        key={CarrerServices.LoanCentre.title} />
                    <ServiceCard 
                        data={CarrerServices.HeadOffice} 
                        dir='right' 
                        key={CarrerServices.HeadOffice.title} />
                </section>
            </div>
            
            <div className='service-section py-5 bg-white'>
                <section className="container section-card">
                    <h3 className="span-all-columns h3-responsive service-out-title mb-4">
                        Diversity & Inclusion</h3>
                    <ServiceCard 
                        data={CarrerServices.Diversity} 
                        dir='left' 
                        btnName="See More" 
                        key={CarrerServices.HeadOffice.title} />
                </section>
            </div>
            
            <div className="service-section py-5">
                <section className="section-card container">
                    <h3 className="span-all-columns h3-responsive service-out-title">
                            We're all about our people and here are a few ways we look after you</h3>
                    <div className="row justify-content-between option2-area">
                        {CareWays.map((item) => (
                            <div className="col-lg-2 col-md-4 col-sm-6 col-xs-12 mt-30" key={item.id}>
                                <OptionCard2 data={item} />
                            </div>
                        ))}
                    </div>
                </section>
            </div>

            <div className='container'>
                <section className="section-card py-5">
                    <h3 className="span-all-columns h3-responsive service-out-title">Frequently asked questions</h3>
                    <div className="faq-area">
                        <Accordion data={Accordions}/>
                    </div>
                </section>
            </div>
            
        </div>
    )
}