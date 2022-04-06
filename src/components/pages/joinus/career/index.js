import React from 'react'
import BannerBG from '../../../../assets/images/banner.png'
import SubMenuBar from '../SubMenuBar';
import TextCard from '../TextCard';
import OptionCard from '../OptionCard';
import OptionCard2 from '../OptionCard2';
import ServiceCard from '../ServiceCard';
import FaqContent from '../Faq';

import TrueStory, { Carrers, Options, CarrerServices, CareWays } from '../joinus.data';

export default function Carrer() {
    return (
        <div className="container">
            <section id="banner">
                <img className="banner-image" src={BannerBG} alt="banner"/>
                <div className="banner-title-area">
                    <p>careers at</p>
                    <p className="mt-2 font-weight-bold">cash converters </p>
                </div>
                <SubMenuBar tag="career" /> 
            </section>
            <section className="section-card">
                <TextCard data={TrueStory} />
            </section>
            <section className="section-card">
                <TextCard data={Carrers} />
            </section>
            <section className="section-card">
                <div className="row justify-content-between option-area">
                    {Options.map((item) => (
                    <div className="col-lg-2 col-md-2 col-sm-4 col-xs-12" key={item.id}>
                        <OptionCard data={item} />
                    </div>
                    ))}
                </div>
            </section>
            <section className="section-card service-section">
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
            <section className="section-card service-section bg-white">
                <p className="service-out-title">Diversity & Inclusion</p>
                <ServiceCard 
                    data={CarrerServices.Diversity} 
                    dir='left' 
                    btnName="See More" 
                    key={CarrerServices.HeadOffice.title} />
            </section>
            <section className="section-card service-section pb-lg-3">
                <p className="service-out-title pb-lg-2">
                    We're all about our people and here are a few ways we look after you</p>
                <div className="row justify-content-between option2-area">
                    {CareWays.map((item) => (
                        <div className="col-lg-2 col-md-4 col-sm-6 col-xs-12 mt-30" key={item.id}>
                            <OptionCard2 data={item} />
                        </div>
                    ))}
                </div>
            </section>
            <section className="section-card pb-lg-5">
                <p className="service-out-title pb-lg-2">
                    Frequently asked questions</p>
                <div className="justify-content-center faq-area">
                    <FaqContent />
                </div>
            </section>
        </div>
        
    )
}