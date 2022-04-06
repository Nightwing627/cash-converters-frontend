import React from 'react'
import BannerBG from '../../../../assets/images/banner-headoffice.png'
import SubMenuBar from '../SubMenuBar';

export default function HeadOffice() {
    return (
        
        <div className="container">
            <section id="banner">
                <img className="banner-image" src={BannerBG} alt="banner"/>
                <div className="banner-title-area">
                    <p>head office roles at</p>
                    <p className="mt-2 font-weight-bold">cash converters </p>
                </div>
                <SubMenuBar tag="headoffice" /> 
            </section>
        </div>
        
    )
}