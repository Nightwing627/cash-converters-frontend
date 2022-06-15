import React from 'react'
import { Link } from 'react-router-dom'

export default function SubMenuBar({ tag, width }) {
    return (
        <div className="sub-menu-area">
            <div className="container">
                <div className="cash-header-sub-menu">
                    <ul className="col-12">
                        <li className={`col-3 ${tag === 'career' ? 'active' : ''}`}>
                            <Link to="/joinus/career">{width < 1200 ? 'careers' : 'careers at cash converters'}</Link>
                        </li>
                        <li className={`col-3 ${tag === 'store' ? 'active' : ''}`}>
                            <Link to="/joinus/store">stores</Link>
                        </li>
                        <li className={`col-3 ${tag === 'loan' ? 'active' : ''}`}>
                            <Link to="/joinus/loancenter">{width < 1200 ? 'loan' : 'loan center'}</Link>
                        </li>
                        <li className={`col-3 ${tag === 'headoffice' ? 'active' : ''}`}>
                            <Link to="/joinus/headoffice">{width < 1200 ? 'head' : 'head office'}</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}