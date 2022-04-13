import React, { useEffect } from 'react'
import { ReactSVG } from 'react-svg'
import Logo from '../assets/images/logo.svg'
import MobileLogo from './MobileLogo'
import StickyMenu from './StickyMenu'
import Navigation from './Navigation'

export default function Header({action, width}) {
    useEffect(() => {
        StickyMenu()
    }, [])

    return (
        <header className="cash-header-area cash-sticky">
            <div className="header-nav-box">
                <div className="row align-items-center">
                    <div className="col-lg-2 col-md-4 col-sm-5 col-6 order-1 order-sm-1">
                        <div className="cash-logo-box">
                            <a className="pc-header-logo" href="https://www.cashconverters.co.nz/">
                                <ReactSVG src={Logo}/>
                            </a>
                            <a className="mobile-header-logo" href="https://www.cashconverters.co.nz/">
                                <MobileLogo />
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-10 col-md-1 col-sm-1 order-3 order-sm-2">
                        <div className="cash-header-main-menu">
                            <Navigation />
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-7 col-sm-6 col-6 order-2 order-sm-3">
                        <div className="cash-btn-box text-right">
                            <div
                                onClick={(e) => action(e)}
                                className="toggle-btn ml-30 canvas_open"
                            >
                                <i className="fa fa-bars" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}