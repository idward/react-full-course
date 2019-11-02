import React, { FC } from 'react';
import './collection-preview.styles.scss';
import { ShoppingItem } from '../../types';

import CollectionItem from '../collection-item/CollectionItem';

interface ICollectionPreviewProps {
  title: string;
  items: ShoppingItem[];
}

const CollectionPreview: FC<ICollectionPreviewProps> = ({ title, items }) => {
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((_item: ShoppingItem, idx: number) => idx < 4)
          .map((item: ShoppingItem) => (
            <CollectionItem key={`${item.name}-${item.id}`} item={item} />
          ))}
      </div>
    </div>
  );
};

export default CollectionPreview;
