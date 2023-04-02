import "./Footer.scss";
import Logo from '../Logo/Logo';
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <section className="Footer">
            <div className="container">
                <div className="Footer__wrap-nav">
                    <div className="Footer__contact-us">
                        <h5 className="title Footer__contact-us-title">Contact Us</h5>
                        <nav className="Footer__contact-us-nav">
                            <ul>
                                <li>
                                    <Link to="#">
                                        <span>Email</span>
                                        needhelp@Organia.com
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#">
                                        <span> Phone</span>
                                        666 888 888
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#">
                                        <span>Address</span>
                                        88 road, borklyn street, USA
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="Footer__about">
                        <Logo parentClass="Logo_footer" />
                        <p className="Footer__about-text">Simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum simply dummy text of the printing </p>
                        <div className="Footer__about-socials">
                            <ul>
                                <li>
                                    <Link to="https://www.instagram.com/" target="_blank">
                                        <img src="./img/icons/footer-instagram.svg" alt="instagram" />
                                    </Link>
                                </li>
                                <li>
                                    <Link to="https://www.facebook.com/" target="_blank">
                                        <img src="./img/icons/footer-facebook.svg" alt="facebook" />
                                    </Link>
                                </li>
                                <li>
                                    <Link to="https://twitter.com/" target="_blank">
                                        <img src="./img/icons/footer-twitter.svg" alt="twitter" />
                                    </Link>
                                </li>
                                <li>
                                    <Link to="https://www.pinterest.com/" target="_blank">
                                        <img src="./img/icons/footer-pinterest.svg" alt="pinterest" />
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="Footer__utility-pages">
                        <h5 className="title Footer__utility-pages-title">Utility Pages</h5>
                        <nav className="Footer__utility-pages-nav">
                            <ul>
                                <li>
                                    <Link to="#">Style Guide</Link>
                                </li>
                                <li>
                                    <Link to="#">404 Not Found</Link>
                                </li>
                                <li>
                                    <Link to="#">Password Protected</Link>
                                </li>
                                <li>
                                    <Link to="#">Password Protected</Link>
                                </li>
                                <li>
                                    <Link to="#">Changelog</Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <div className="Footer__copyright">
                    Copyright © <span>Organick</span> | Designed by <span>VictorFlow</span> Templates - Powered by <span>Webflow</span>
                </div>
            </div>
        </section>
    );
}

export default Footer;