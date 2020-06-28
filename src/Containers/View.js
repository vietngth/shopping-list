import React from 'react';
import './View.scss';
import Header from '../Components/Shared/Header/Header';
import Footer from '../Components/Shared/Footer/Footer';
import Home from '../Components/Home/Home';

const View = () => {

      return (
            <div className="view">
                  <div className="view__header">
                        <Header />
                  </div>
                  <div className="view__body">
                        <Home/>
                  </div>
                  <div className="view__footer">
                        <Footer />
                  </div>
            </div>
      )
}

export default View;