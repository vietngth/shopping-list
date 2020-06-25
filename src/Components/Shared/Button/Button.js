import React from 'react';
import './Button.scss';

const Button = ({ classInput, onClickInput, children }) => {
      let className = 'button';
      if (classInput) {
            className = className + ` ${classInput}`;
      } else {
            className = className + ' button--none'
      }
      return (
            <button className={className} onClick={onClickInput}>{children}</button>
      )
}

export default Button;