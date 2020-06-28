import React from 'react';
import './Footer.scss';
import FooterNav from './FooterNav/FooterNav';
import FooterIcons from './FooterIcons/FooterIcons';
import FooterDataProtection from './FooterDataProtection/FooterDataProtection';

const Footer = () => {
      const PATH = process.env.PUBLIC_URL;
      return (
            <div className="footer">
                  <div className="footer__first-row">
                        <div className="footer__logo-container">
                              <img className="footer__logo" alt="shop logo" src={`${PATH}/assets/img/logo/logo.png`} />
                        </div>
                        <div className="footer__center-nav">
                              <FooterNav />
                        </div>
                        <div className="footer__icons">
                              <FooterIcons />
                        </div>
                  </div>
                  <div className="footer__second-row">
                        <div className="footer__left-nav">
                              <FooterNav />
                        </div>
                        <div className="footer__data-protection">
                              <FooterDataProtection />
                        </div>
                  </div>
            </div>
      )
}

export default Footer;