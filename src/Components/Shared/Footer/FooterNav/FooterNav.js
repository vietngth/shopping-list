import React from 'react';
import {FOOTER_NAV_ITEM_LIST} from './FooterNavConstant';
import './FooterNav.scss';

const FooterNavItems = () => (
      FOOTER_NAV_ITEM_LIST.map((navItem, index) => (
            <a className="footer__nav-item" key={index} href="/">
                  {navItem}
            </a>
      ))
);

const FooterNav = () => {
      return (
            <FooterNavItems/>
      )
}

export default FooterNav;