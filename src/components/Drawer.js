import React, { useState } from 'react'
import { ReactSVG } from 'react-svg';
import { Link } from 'react-router-dom'

export default function Drawer({ drawer, action }) {
    const [itemSize, setSize] = useState('0px');
    const [item, setItem] = useState('home');
    
    const handler = (e, value) => {
        e.preventDefault();
        const getItems = document.querySelectorAll(`#${value} li`).length;
        if (getItems > 0) {
            setSize(`${43 * getItems}px`);
            setItem(value);
        }
    }

    return (
        <>
            <div 
                onClick={(e) => action(e)}
                className={`off_canvars_overlay ${drawer ? 'active' : ''}`}
            ></div>
            <div className="offcanvas_menu">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <div className={`offcanvas_menu_wrapper ${drawer ? 'active' : ''}`}>
                                <div className="canvas_close">
                                    <a href="#" onClick={(e) => action(e)}>
                                        <i className="fa fa-times"></i>
                                    </a>
                                </div>
                                
                                <div id="menu" className="text-left">
                                    <ul className="offcanvas_main_menu">
                                        <li
                                            onClick={(e) => handler(e, 'home')}
                                            id="home"
                                            className="menu-item-has-children active"
                                        >
                                            <Link to="/">Home</Link>
                                        </li>
                                        <li
                                            onClick={(e) => handler(e, 'borrow')}
                                            id="borrow"
                                            className="menu-item-has-children active"
                                        >
                                            <Link to="/">Borrow From Us</Link>
                                        </li>
                                        <li
                                            onClick={(e) => handler(e, 'pawn')}
                                            id="pawn"
                                            className="menu-item-has-children active"
                                        >
                                            <Link to="/">Pawn With Us</Link>
                                        </li>
                                        <li
                                            onClick={(e) => handler(e, 'sell')}
                                            id="sell"
                                            className="menu-item-has-children active"
                                        >
                                            <Link to="/">Sell To Us</Link>
                                        </li>
                                        <li
                                            onClick={(e) => handler(e, 'buy')}
                                            id="buy"
                                            className="menu-item-has-children active"
                                        >
                                            <Link to="/">Buy From Us</Link>
                                        </li>
                                        <li
                                            onClick={(e) => handler(e, 'stores')}
                                            id="stores"
                                            className="menu-item-has-children active"
                                        >
                                            <Link to="/">Stores</Link>
                                        </li>
                                        <li
                                            onClick={(e) => handler(e, 'about')}
                                            id="about"
                                            className="menu-item-has-children active"
                                        >
                                            <Link to="/">About Us</Link>
                                        </li>
                                        <li
                                            onClick={(e) => handler(e, 'join')}
                                            id="join"
                                            className="menu-item-has-children active"
                                        >
                                            <Link to="/">Join Us</Link>
                                        </li>
                                        <li
                                            onClick={(e) => handler(e, 'contact')}
                                            id="contact"
                                            className="menu-item-has-children active"
                                        >
                                            <Link to="/">Contact</Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className="offcanvas-social">
                                    <ul className="text-center">
                                        <li>
                                            <a href="$">
                                                <i className="fab fa-facebook-f"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="$">
                                                <i className="fab fa-twitter"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="$">
                                                <i className="fab fa-instagram"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="$">
                                                <i className="fab fa-dribble"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}