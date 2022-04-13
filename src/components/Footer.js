import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <>
            <section className="cash-footer-area">
                <div className="footer-container">
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
                    <div className="container my-5 mb-4">
                        <div className="row mt-3">
                            <div className="col-md-3 col-lg-4 col-xl-3 mb-4">
                                <h6 className="text-uppercase font-weight-bold">Cash Converters</h6>
                                <hr className="blue mb-4 mt-0 d-inline-block mx-auto"></hr>
                                <p>
                                    <a className="docs-creator" href="https://www.cashconverters.co.nz/" rel="noopener noreferrer"
                                        target="_blank">Cash Converters New Zealand</a></p>
                            </div>
                            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                                <h6 className="text-uppercase font-weight-bold">Quick links</h6>
                                <hr className="blue mb-4 mt-0 d-inline-block mx-auto"></hr>
                                <p className="mb-3"><a className="d-block full-width mb-3 docs-creator"
                                        href="https://www.cashconverters.co.nz/borrow/" rel="noopener noreferrer" target="_blank">Personal
                                        Loans</a></p>
                                <p className="mb-3"><a className="d-block full-width mb-3 docs-creator"
                                        href="https://www.cashconverters.co.nz/pawns/" rel="noopener noreferrer" target="_blank">Pawn With
                                        Us</a></p>
                                <p className="mb-3"><a className="d-block full-width mb-3 docs-creator"
                                        href="https://www.cashconverters.co.nz/sell/" rel="noopener noreferrer" target="_blank">Sell To
                                        Us</a></p>
                                <p className="mb-3"><a className="d-block full-width mb-3 docs-creator" href="https://www.cashconverters.co.nz/buy/"
                                        rel="noopener noreferrer" target="_blank">Buy From Us</a></p>
                                <p className="mb-3"><a className="d-block full-width mb-3 docs-creator"
                                        href="https://www.cashconverters.co.nz/stores/" rel="noopener noreferrer" target="_blank">Our
                                        Stores</a></p>
                                <p className="mb-3"><a className="d-block full-width mb-3 docs-creator"
                                        href="https://www.cashconverters.co.nz/about-us/" rel="noopener noreferrer" target="_blank">About
                                        Us</a></p>
                                <p className="mb-3"><a className="d-block full-width mb-3 docs-creator"
                                        href="https://www.cashconverters.co.nz/join-us/" rel="noopener noreferrer" target="_blank">Join
                                        Us</a></p>
                                <p className="mb-3"><a className="d-block full-width mb-3 docs-creator"
                                        href="https://www.cashconverters.co.nz/contact-us/" rel="noopener noreferrer"
                                        target="_blank">Contact Us</a></p>
                            </div>
                            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                                <h6 className="text-uppercase font-weight-bold">Useful links</h6>
                                <hr className="blue mb-4 mt-0 d-inline-block mx-auto"></hr>
                                <p className="mb-3"><a className="d-block full-width mb-3 docs-creator"
                                        href="https://www.cashconverters.co.nz/customer-support/" rel="noopener noreferrer"
                                        target="_blank">Customer Support</a> </p>
                                <p className="mb-3"><a className="d-block full-width mb-3 docs-creator"
                                        href="https://www.cashconverters.co.nz/franchise-opportunities/" rel="noopener noreferrer"
                                        target="_blank">Franchising</a></p>
                                <p className="mb-3"><a className="d-block full-width mb-3 docs-creator"
                                        href="https://www.cashconverters.co.nz/cashpass-terms-and-conditions/" rel="noopener noreferrer"
                                        target="_blank">CashPass Terms</a></p>
                                <p className="mb-3"><a className="d-block full-width mb-3 docs-creator"
                                        href="https://www.cashconverters.co.nz/terms-and-conditions/" rel="noopener noreferrer"
                                        target="_blank">Website Terms</a></p>
                            </div>
                            <div className="col-md-4 col-lg-3 col-xl-3">
                                <h6 className="text-uppercase font-weight-bold">Contact</h6>
                                <hr className="blue mb-4 mt-0 d-inline-block mx-auto"></hr>
                                <p className="mb-3">Online Live Chat</p>
                                <p className="mb-3"><a className="d-block full-width mb-3 docs-creator"
                                        href="https://www.facebook.com/CashConvertersNZ" rel="noopener noreferrer" target="_blank">Facebook
                                        Messenger</a></p>
                                <p className="mb-3">WhatsApp (022 018 9929)</p>
                                <p className="mb-3"><a className="d-block full-width mb-3 docs-creator"
                                        href="https://www.cashconverters.co.nz/contact-us/" rel="noopener noreferrer"
                                        target="_blank">Enquiries@cashconverters.co.nz</a></p>
                                <p className="mb-3"><a className="d-block full-width mb-3 docs-creator"
                                        href="https://www.cashconverters.co.nz/stores/" rel="noopener noreferrer" target="_blank">Your Local
                                        Store</a></p>
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
