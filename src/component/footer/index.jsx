import './footer.scss'

export default function Footer() {
    return (
        <div>
            <footer className="footer">
                <div className="footer-top">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-md-6 footer-column">
                                <h3 className="footer-title">Company</h3>
                                <ul className="footer-links">
                                    <li><a href="#">About Us</a></li>
                                    <li><a href="#">Careers</a></li>
                                    <li><a href="#">Terms & Conditions</a></li>
                                    <li><a href="#">Privacy Policy</a></li>
                                </ul>
                            </div>
                            <div className="col-lg-3 col-md-6 footer-column">
                                <h3 className="footer-title">Support</h3>
                                <ul className="footer-links">
                                    <li><a href="#">FAQ</a></li>
                                    <li><a href="#">Contact Us</a></li>
                                    <li><a href="#">Returns</a></li>
                                    <li><a href="#">Shipping</a></li>
                                </ul>
                            </div>
                            <div className="col-lg-3 col-md-6 footer-column">
                                <h3 className="footer-title">Follow Us</h3>
                                <ul className="footer-social-links">
                                    <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                    <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                    <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                                    <li><a href="#"><i className="fab fa-pinterest"></i></a></li>
                                </ul>
                            </div>
                            <div className="col-lg-3 col-md-6 footer-column">
                                <h3 className="footer-title">Newsletter</h3>
                                <p className="footer-text">Sign up for our newsletter to get the latest news and updates.</p>
                                <form className="footer-newsletter-form">
                                    <input type="email" className="footer-newsletter-email" placeholder="Enter your email"/>
                                        <button type="submit" className="footer-newsletter-button">Subscribe</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="container">
                        <p className="footer-copyright">Copyright © 2023 Company Name. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    )
}
