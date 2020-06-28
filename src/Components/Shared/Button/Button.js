import React from 'react';
import './Button.scss';

const Button = ({ classInput, onClickInput, children }) => {
      let className = 'button';
      if (classInput) {
            className = className + ` ${classInput}`;
      }
      return (
            <button className={className} onClick={onClickInput}>{children}</button>
      )
}

export default Button;