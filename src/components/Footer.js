import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <>
            <section className="cash-footer-area">
                <div className="container">
                    <div className="row social-bar">
                        <div className="social">
                            <ul>
                                <li>
                                    <Link to="/">
                                        <i className="fab fa-facebook-f" />
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/">
                                        <i className="fab fa-twitter" />
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/">
                                        <i className="fab fa-pinterest-p" />
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/">
                                        <i className="fab fa-linkedin-in" />
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="row footer-navigation-area d-flex justify-content-center">
                        <div className="col-lg-10 d-flex justify-content-center pt-20">
                            <div className="footer-navigation">
                                <h4 className="title">cash converters</h4>
                                <ul>
                                    <li>
                                        <p>Cash Converters New Zealand</p>
                                    </li>
                                </ul>
                            </div>
                            <div className="footer-navigation">
                                <h4 className="title">Quick Links</h4>
                                <ul>
                                    <li>
                                        <Link to="/about-us">Personal Loans</Link>
                                    </li>
                                    <li>
                                        <Link to="/Service">Pawn With Us</Link>
                                    </li>
                                    <li>
                                        <Link to="/">Sell To Us</Link>
                                    </li>
                                    <li>
                                        <Link to="/news">Buy From Us</Link>
                                    </li>
                                    <li>
                                        <Link to="/contact">Franchising</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="footer-navigation">
                                <h4 className="title">Useful Links</h4>
                                <ul>
                                    <li>
                                        <Link to="/about-us">About us</Link>
                                    </li>
                                    <li>
                                        <Link to="/">Our Stores</Link>
                                    </li>
                                    <li>
                                        <Link to="/">Join Us</Link>
                                    </li>
                                    <li>
                                        <Link to="/">Contact Us</Link>
                                    </li>
                                    <li>
                                        <Link to="/">CashPass Terms</Link>
                                    </li>
                                    <li>
                                        <Link to="/">Website Terms</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="footer-navigation">
                                <h4 className="title">Contact</h4>
                                <ul>
                                    <li>
                                        <Link to="/">
                                            enquiries@cashconverters.co.nz
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/">
                                            0800-227-448
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                     
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="footer-copyright d-flex align-items-center justify-content-center">
                                <div className="copyright-text">
                                    <p>Copyright © 2021 Appie. All rights reserved.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Footer;
