import React from 'react';
import Button from '../../Button/Button';
import "./ButtonGroup.scss";

const ButtonGroup = () => {
      return (
            <>
                  <div className="button-group button-group__register">
                        <Button classInput="button--none">Register</Button>
                  </div>
                  <div className="button-group button-group__login">
                        <Button classInput="button--white">Log In</Button>
                  </div>
                  <div className="button-group button-group__cart">
                        <Button classInput="button--none"><i className="button-group__cart-icon fas fa-shopping-cart"></i></Button>
                  </div>
            </>
      )
}

export default ButtonGroup;