import React from 'react';
import Button from '../../Button/Button';
import './FooterIcons.scss';

const FooterIcons = () => {
      return (
            <>
                  <div className="footer__icon-container">
                        <Button classInput="button--none"><i className="footer__icon fab fa-twitter"></i></Button>
                  </div>
                  <div className="footer__icon-container">
                        <Button classInput="button--none"><i className="footer__icon fab fa-facebook"></i></Button>
                  </div>
                  <div className="footer__icon-container">
                        <Button classInput="button--none"><i className="footer__icon fab fa-instagram"></i></Button>
                  </div>
            </>
      )
}

export default FooterIcons;