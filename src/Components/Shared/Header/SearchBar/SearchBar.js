import React from 'react';
import "./SearchBar.scss";

const SearchBar = () => {
      return (
            <>
                  <input
                        className="header__search-input"
                        placeholder="Search"
                  />
                  <div className="header__search-icontainer">
                        <i className="header__search-icon fas fa-search" />
                  </div>
            </>
      )
}

export default SearchBar;