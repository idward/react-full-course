import React, { FC } from 'react';
import './menu-item.styles.scss';

interface IMenuItemProps {
  title: string;
  imageUrl: string;
  size?: string;
}

const MenuItem: FC<IMenuItemProps> = ({ title, imageUrl, size = '' }) => {
  return (
    <div className={`${size} menu-item`}>
      <div className="background-image" style={{ backgroundImage: `url(${imageUrl})` }}>
        <div className="content">
          <h1 className="title">{title.toLocaleUpperCase()}</h1>
          <span className="subtitle">SHOP NOW</span>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
