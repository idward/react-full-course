import React, { FC } from 'react';
import { Route } from 'react-router-dom';
import CollectionsOverview from '../../components/collections-overview/CollectionsOverview';
import CollectionPage from '../collection/Collection';

interface IShopPageProps {
  [key: string]: any;
}

/**
 * Child Route
 * Shop分为全部商品目录展示和具体目录商品列表展示
 */
const ShopPage: FC<IShopPageProps> = ({ match }) => {
  return (
    <div className="shop-page">
      <Route exact path={match.path} component={CollectionsOverview} />
      <Route exact path={`${match.path}/:collectionName`} component={CollectionPage} />
    </div>
  );
};

export default ShopPage;
