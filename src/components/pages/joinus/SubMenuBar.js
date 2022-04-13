import React from 'react'
import { Link } from 'react-router-dom'

export default function SubMenuBar({ tag, width }) {
    return (
        <div className="cash-header-sub-menu">
            <ul className={`${width < 900 && 'col-12'}`}>
                <li className={`${width < 900 && 'col-3'} ${tag === 'career' ? 'active' : ''}`}>
                    <Link to="/joinus/carrer">{width < 1455 ? 'careers' : 'careers at cash converters'}</Link>
                </li>
                <li className={`${width < 900 && 'col-3'} ${tag === 'store' ? 'active' : ''}`}>
                    <Link to="/joinus/store">stores</Link>
                </li>
                <li className={`${width < 900 && 'col-3'} ${tag === 'loan' ? 'active' : ''}`}>
                    <Link to="/joinus/loancenter">loan center</Link>
                </li>
                <li className={`${width < 900 && 'col-3'} ${tag === 'headoffice' ? 'active' : ''}`}>
                    <Link to="/joinus/headoffice">head office</Link>
                </li>
            </ul>
        </div>
    )
}