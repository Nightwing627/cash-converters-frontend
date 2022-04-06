import React from 'react'
import BannerBG from '../../../../assets/images/banner.png'
import SubMenuBar from '../SubMenuBar';
import TextCard from '../TextCard';
import OptionCard from '../OptionCard';
import ServiceCard from '../ServiceCard';

import TrueStory, { Carrers, Options, CarrerServices, Diversities } from '../joinus.data';

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
        </div>
        
    )
}