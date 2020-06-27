import React from 'react';
import {CATEGORY_LIST} from './MenuConstant';
import {CATEGORY_ITEM_LIST} from './MenuItemConstants';
import './DropdownMenu.scss';

const CategoryItems = () => (
      CATEGORY_ITEM_LIST.map((item, index) => (
            <div className="dropdown__item" key={index}>
                  {item}
            </div>
      ))
);

const Category =  ({dropdownLabel}) => (
      <div className="dropdown">
            <div className="dropdown__label">
                  {dropdownLabel}
                  <i className="dropdown__icon fas fa-angle-down"></i>
            </div>
            <div className="dropdown__menu">
                  <div className="dropdown__background">
                        <CategoryItems />
                  </div>
            </div>
      </div>
)


const DropdownMenu = () => {
      return (
            CATEGORY_LIST.map((menu, index) => (
                  <Category dropdownLabel={menu} key={index} />
            ))
      );
}

export default DropdownMenu;