import React from "react";
import { ReactSVG } from "react-svg";
import LogoPart1 from '../assets/images/mobile-logo/logo-part-1.svg'
import LogoPart2 from '../assets/images/mobile-logo/logo-part-2.svg'
import LogoPart3 from '../assets/images/mobile-logo/logo-part-3.svg'

export default function MobileLogo() {
    return (
        <div className="mobile-logo_area">
            <div className="logo-content">
                <div className="part1">
                    <ReactSVG src={LogoPart1} />
                </div>
                <div className="part2">
                    <div className="part2-sub">
                        <div>
                            <ReactSVG src={LogoPart2} />
                        </div>
                    </div>
                </div>
                <div className="part3">
                    <ReactSVG src={LogoPart3} />
                </div>
            </div>
        </div>
    )
}