import React, { FC } from 'react';
import { connect } from 'react-redux';
import { selectCollection } from '../../store/reducers/shop.selectors';
import { ApplicationState } from '../../store/reducers';
import { ShoppingList, ShoppingItem } from '../../types';
import './collection.styles.scss';
import CollectionItem from '../../components/collection-item/CollectionItem';

interface ICategoryProps {
  collection?: ShoppingList;
  [key: string]: any;
}

const CollectionPage: FC<ICategoryProps> = ({ collection }) => {
  debugger;
  if (!collection) {
    return <h1>The collection you looking for is not exist</h1>;
  }
  return (
    <div className="collection-page">
      <h2 className="title">{collection ? collection.title : ''}</h2>
      <div className="items">
        {collection.items.map((item: ShoppingItem, idx: number) => (
          <CollectionItem key={`${item.name}-${idx}`} item={item} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state: ApplicationState, ownProps: any) => {
  return {
    collection: selectCollection(ownProps.match.params.collectionName)(state),
  };
};

export default connect(mapStateToProps)(CollectionPage);
