import React from 'react';
import './View.scss';
import Header from '../Components/Shared/Header/Header';

const View = () => {

      return (
            <div className="view">
                  <div className="view__header">
                        <Header/>
                  </div>
                  <div className="view__body">Main</div>
                  <div className="view__footer">Footer</div>
            </div>
      )
}

export default View;