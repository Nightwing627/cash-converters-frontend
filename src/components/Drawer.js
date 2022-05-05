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
                                            onClick={(e) => handler(e, 'home')}
                                            id="home"
                                        >
                                            <Link to="/">Personl Loans</Link>
                                        </li>
                                        <li
                                            onClick={(e) => handler(e, 'borrow')}
                                            id="borrow"
                                        >
                                            <Link to="/">Pawn With Us</Link>
                                        </li>
                                        <li
                                            onClick={(e) => handler(e, 'pawn')}
                                            id="pawn"
                                        >
                                            <Link to="/">Sell To Us</Link>
                                        </li>
                                        <li
                                            onClick={(e) => handler(e, 'sell')}
                                            id="sell"
                                        >
                                            <Link to="/">Buy From Us</Link>
                                        </li>
                                        <li
                                            onClick={(e) => handler(e, 'buy')}
                                            id="buy"
                                        >
                                            <Link to="/">Our Stores</Link>
                                        </li>
                                        <li
                                            onClick={(e) => handler(e, 'stores')}
                                            id="stores"
                                        >
                                            <Link to="/">About Us</Link>
                                        </li>
                                        <li
                                            onClick={(e) => handler(e, 'about')}
                                            id="about"
                                            className="active"
                                        >
                                            <Link to="/">Join Us</Link>
                                        </li>
                                        <li
                                            onClick={(e) => handler(e, 'join')}
                                            id="join"
                                        >
                                            <Link to="/">Contact Us</Link>
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