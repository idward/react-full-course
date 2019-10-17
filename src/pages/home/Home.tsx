import React, { FC } from 'react';
import './home.styles.scss';

interface IHomePageProps {
  [key: string]: any;
}

const HomePage: FC<IHomePageProps> = () => {
  return (
    <div className="homepage">
      <div className="directory-menu">
        <div className="menu-item">
          <div className="content">
            <h1 className="title">HATS</h1>
            <span className="subtitle">SHOP NOW</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
