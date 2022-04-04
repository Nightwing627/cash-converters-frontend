import React from 'react'
import { Link } from 'react-router-dom'

export default function SubMenuBar({ tag }) {
    return (
        <div className="cash-header-sub-menu">
            <ul>
                <li className={`${tag == 'career' ? 'active' : ''}`}>
                    <Link to="/joinus/carrer">careers at cash converters</Link>
                </li>
                <li className={`${tag == 'store' ? 'active' : ''}`}>
                    <Link to="/joinus/store">stores</Link>
                </li>
                <li className={`${tag == 'loan' ? 'active' : ''}`}>
                    <Link to="/joinus/loancenter">loan center</Link>
                </li>
                <li className={`${tag == 'headoffice' ? 'active' : ''}`}>
                    <Link to="/joinus/headoffice">head office</Link>
                </li>
            </ul>
        </div>
    )
}