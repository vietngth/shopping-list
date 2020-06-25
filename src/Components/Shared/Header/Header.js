import React from 'react';
import './Header.scss';
import ButtonGroup from './ButtonGroup/ButtonGroup';

const Header = () => {
      const PATH = process.env.PUBLIC_URL;
      return (
            <>
                  <div className="header__first-row">
                        <div className="header__search-bar">
                              <input
                                    className="header__search-input"
                                    placeholder="Search"
                              />
                              <div className="header__search-icontainer">
                                   <i className="header__search-icon fas fa-search"/>
                              </div>
                        </div>
                        <div className="header__logo-container">
                              <img className="header__logo" alt="shop logo" src={`${PATH}/assets/img/logo/logo.png`}/>
                        </div>
                        <div className="header__button-group">
                              <ButtonGroup/>
                        </div>
                  </div>
                  <div className="header__second-row">
                        Second Row
                  </div>
            </>
      )
}

export default Header;