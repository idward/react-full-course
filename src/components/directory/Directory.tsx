import React, { FC } from 'react';
import { connect } from 'react-redux';
import { ApplicationState } from '../../store/reducers';
import { selectDirectoryItems } from '../../store/reducers/directory.selectors';
import { DirectoryItem } from '../../types';
import './directory.styles.scss';

import MenuItem from '../menu-item/MenuItem';

interface IDirectoryProps {
  sections: DirectoryItem[];
  [key: string]: any;
}

export interface Section {
  id: number;
  title: string;
  imageUrl: string;
  size?: string;
}

const Directory: FC<IDirectoryProps> = ({ sections }) => {
  return (
    <div className="directory-menu">
      {sections.map(({ id, title, imageUrl, size }: Section) => {
        return <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />;
      })}
    </div>
  );
};

const mapStateToProps = (state: ApplicationState) => {
  return {
    sections: selectDirectoryItems(state),
  };
};

export default connect(mapStateToProps)(Directory);
