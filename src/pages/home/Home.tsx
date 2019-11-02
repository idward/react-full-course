import React, { FC } from 'react';
import './home.styles.scss';
import Directory from '../../components/directory/Directory';

interface IHomePageProps {
  [key: string]: any;
}

const HomePage: FC<IHomePageProps> = (_props: any) => {
  return (
    <div className="homepage">
      <Directory />
    </div>
  );
};

export default HomePage;
