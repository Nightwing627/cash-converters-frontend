import React from 'react'
import BannerBG from '../../../../assets/images/banner.png'
import SubMenuBar from '../SubMenuBar';

export default function Store() {
    return (
        <div className="container">
            <section id="banner">
                <img className="banner-image" src={BannerBG} alt="banner"/>
                <div className="banner-title-area">
                    <p>carrers at</p>
                    <p className="mt-2 font-weight-bold">cash converters </p>
                </div>
                <SubMenuBar tag="store" /> 
            </section>
        </div>
    )
}