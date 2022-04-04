import React from 'react'
import { Link } from 'react-router-dom'

export default function Navigation() {
    return (
        <>
            <ul>
                <li
                    id="home"
                    className="menu-item-has-children"
                >
                    <Link to="/">Home</Link>
                </li>
                <li
                    id="borrow"
                    className="menu-item-has-children"
                >
                    <Link to="/">Borrow From Us</Link>
                </li>
                <li
                    id="pawn"
                    className="menu-item-has-children"
                >
                    <Link to="/">Pawn With Us</Link>
                </li>
                <li
                    id="sell"
                    className="menu-item-has-children"
                >
                    <Link to="/">Sell To Us</Link>
                </li>
                <li
                    id="buy"
                    className="menu-item-has-children"
                >
                    <Link to="/">Buy From Us</Link>
                </li>
                <li
                    id="stores"
                    className="menu-item-has-children"
                >
                    <Link to="/">Stores</Link>
                </li>
                <li
                    id="about"
                    className="menu-item-has-children"
                >
                    <Link to="/">About Us</Link>
                </li>
                <li
                    id="join"
                    className="menu-item-has-children active"
                >
                    <Link to="/joinus">Join Us</Link>
                </li>
                <li
                    id="contact"
                    className="menu-item-has-children"
                >
                    <Link to="/">Contact</Link>
                </li>
            </ul>
        </>
    )
}