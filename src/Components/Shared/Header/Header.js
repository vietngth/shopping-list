import React from 'react';
import './Header.scss';
import ButtonGroup from './ButtonGroup/ButtonGroup';
import SearchBar from './SearchBar/SearchBar';
import DropdownMenu from './DropdownMenu/DropdownMenu';

const Header = () => {
      const PATH = process.env.PUBLIC_URL;
      return (
            <>
                  <div className="header__first-row">
                        <div className="header__search-bar">
                              <SearchBar />
                        </div>
                        <div className="header__logo-container">
                              <img className="header__logo" alt="shop logo" src={`${PATH}/assets/img/logo/logo.png`} />
                        </div>
                        <div className="header__button-group">
                              <ButtonGroup />
                        </div>
                  </div>
                  <div className="header__second-row">
                        <DropdownMenu />
                  </div>
            </>
      )
}

export default Header;