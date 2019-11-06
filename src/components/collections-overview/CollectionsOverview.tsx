import React, { FC } from 'react';
import { connect } from 'react-redux';
import { ApplicationState } from '../../store/reducers';
import { selectCollections } from '../../store/reducers/shop.selectors';
import { ShoppingList } from '../../types';
import CollectionPreview from '../collection-preview/CollectionPreview';
import './collections-overview.styles.scss';

interface ICollectionsOverviewProps {
  collections: ShoppingList[];
  [key: string]: any;
}

const CollectionsOverview: FC<ICollectionsOverviewProps> = ({ collections, match }) => {
  console.log('match: ', match);
  debugger;
  return (
    <div className="collections-overview">
      {collections.map(({ id, ...otherProps }: ShoppingList) => (
        <CollectionPreview key={`${otherProps.title}-${id}`} {...otherProps} />
      ))}
    </div>
  );
};

const mapStateToProps = (state: ApplicationState) => {
  return {
    collections: selectCollections(state),
  };
};

export default connect(mapStateToProps)(CollectionsOverview);
