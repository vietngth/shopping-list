import React from 'react';
import './Home.scss';
import Button from '../Shared/Button/Button';

const Home = () => {
      const PATH = process.env.PUBLIC_URL;
      return (
            <>
                  <div className="home__main-container">
                        <img alt="weekly trend" src={`${PATH}/assets/img/main-page/trend.png`}/>
                        <div className="home__main-text">
                              OUTFIT OF THE WEEK
                        </div>
                        <div className="home__main-button">
                              <Button classInput="button--orange">Shop now</Button>
                        </div>
                  </div>
                  <div className="home__sub-images">
                        <div className="home__sub-container">
                              <div className="home__sub-image">
                                    Sub Image
                              </div>
                              <div className="home__sub-text">
                                    Sub Text
                              </div>
                              <div className="home__sub-button">
                                    Sub Button
                              </div>
                        </div>
                        <div className="home__sub-container">
                              <div className="home__sub-image">
                                    Sub Image
                              </div>
                              <div className="home__sub-text">
                                    Sub Text
                              </div>
                              <div className="home__sub-button">
                                    Sub Button
                              </div>
                        </div>
                        <div className="home__sub-container">
                              <div className="home__sub-image">
                                    Sub Image
                              </div>
                              <div className="home__sub-text">
                                    Sub Text
                              </div>
                              <div className="home__sub-button">
                                    Sub Button
                              </div>
                        </div>
                        <div className="home__sub-container">
                              <div className="home__sub-image">
                                    Sub Image
                              </div>
                              <div className="home__sub-text">
                                    Sub Text
                              </div>
                              <div className="home__sub-button">
                                    Sub Button
                              </div>
                        </div>
                  </div>
            </>
      );
}

export default Home;