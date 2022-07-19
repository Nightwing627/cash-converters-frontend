import React from 'react'
import { Link } from 'react-router-dom'

export default function Drawer({ drawer, action }) {
    // const [itemSize, setSize] = useState('0px');
    // const [item, setItem] = useState('home');
    
    const handler = (e, value) => {
        e.preventDefault();
        // const getItems = document.querySelectorAll(`#${value} li`).length;
        // if (getItems > 0) {
        //     setSize(`${43 * getItems}px`);
        //     setItem(value);
        // }
    }

    return (
        <>
            <div className="offcanvas_menu">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <div className={`offcanvas_menu_wrapper ${drawer ? 'active' : ''}`}>
                                <div id="menu" className="text-center">
                                    <ul className="offcanvas_main_menu">
                                        <li
                                            onClick={(e) => handler(e, 'personalLoan')}
                                            id="personalLoan"
                                        >
                                            <Link to="https://cashconverters.co.nz/borrow/">Personl Loans</Link>
                                        </li>
                                        <li
                                            onClick={(e) => handler(e, 'Pawn')}
                                            id="Pawn"
                                        >
                                            <Link to="https://cashconverters.co.nz/pawns/ ">Pawn With Us</Link>
                                        </li>
                                        <li
                                            onClick={(e) => handler(e, 'Sell')}
                                            id="Sell"
                                        >
                                            <Link to="https://cashconverters.co.nz/sell/ ">Sell To Us</Link>
                                        </li>
                                        <li
                                            onClick={(e) => handler(e, 'Buy')}
                                            id="Buy"
                                        >
                                            <Link to="https://cashconverters.co.nz/buy/">Buy From Us</Link>
                                        </li>
                                        <li
                                            onClick={(e) => handler(e, 'Stores')}
                                            id="Stores"
                                        >
                                            <Link to="https://cashconverters.co.nz/stores/">Our Stores</Link>
                                        </li>
                                        <li
                                            onClick={(e) => handler(e, 'about')}
                                            id="about"
                                        >
                                            <Link to="/">About Us</Link>
                                        </li>
                                        <li
                                            onClick={(e) => handler(e, 'join')}
                                            id="join"
                                            className="active"
                                        >
                                            <Link to="https://cashconverters.co.nz/about-us/">Join Us</Link>
                                        </li>
                                        <li
                                            onClick={(e) => handler(e, 'contact')}
                                            id="contact"
                                        >
                                            <Link to="https://cashconverters.co.nz/contact-us/">Contact Us</Link>
                                        </li>
                                    </ul>
                                </div>
                              
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div 
                onClick={(e) => action(e)}
                className={`off_canvars_overlay ${drawer ? 'active' : ''}`}
            ></div>
        </>
    )
}