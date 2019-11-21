import React, { FC, Profiler } from 'react';
import styled from 'styled-components';
import './home.styles.scss';
import Directory from '../../components/directory/Directory';

interface IHomePageProps {
  [key: string]: any;
}

/**
 * styled component
 */
const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 80px;
`;

const HomePage: FC<IHomePageProps> = (_props: any) => {
  return (
    <Profiler
      id="Directory"
      onRender={(id, phase, actualDuration, baseDuration, startTime, commitTime) => {
        console.log({
          id,
          phase,
          actualDuration,
          baseDuration,
          startTime,
          commitTime,
        });
      }}>
      <HomeContainer>
        <Directory />
      </HomeContainer>
    </Profiler>
  );
};

export default HomePage;
