import React, { FC, useEffect } from 'react';
import { Route } from 'react-router-dom';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
// import { Unsubscribe } from 'firebase';
// import { getCollectionsAndDocuments, getDataFromCollections } from '../../firebase/index';
// import { ShoppingList } from '../../types';
import { fetchCollectionsAsync } from '../../store/actions';
import { selectIsFetching } from '../../store/reducers/shop.selectors';
import { ApplicationState } from '../../store/reducers';
import WithSpinner from '../../components/with-spinner/WithSpinner';
import CollectionsOverview from '../../components/collections-overview/CollectionsOverview';
import CollectionPage from '../collection/Collection';
import './shop.styles.scss';

interface IShopPageProps {
  isFetchingCollections?: boolean;
  addCollectionsToShop: () => void;
  [key: string]: any;
}

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

/**
 * Child Route
 * Shop分为全部商品目录展示和具体目录商品列表展示
 */
const ShopPage: FC<IShopPageProps> = ({ match, isFetchingCollections, addCollectionsToShop }) => {
  // let collectionSubs: Unsubscribe | null = null;
  // const [isloading, setIsLoading] = useState(true);

  // const loadCollectionData = () => {
  //   const collectionRef = getCollectionsAndDocuments();

  //   collectionSubs = collectionRef.onSnapshot(snapshot => {
  //     const collections = getDataFromCollections(snapshot);
  //     console.log('collections: ', collections);
  //     // collections排序
  //     collections.sort((a: ShoppingList, b: ShoppingList) => a.title.localeCompare(b.title));
  //     // 增加Collections到Application Store(Redux)中
  //     addCollectionsToShop(collections);
  //     setIsLoading(false);
  //   });
  // };

  // 加载数据
  useEffect(() => {
    // console.log('colletionSubs:', collectionSubs);
    // loadCollectionData();
    addCollectionsToShop();

    // return () => {
    //   // console.log('shop component unmount');
    //   if (collectionSubs) {
    //     collectionSubs();
    //   }
    // };
    // eslint-disable-next-line
  }, []);

  return (
    <div className="shop-page">
      <Route
        exact
        path={match.path}
        render={(props: any) => (
          <CollectionsOverviewWithSpinner isLoading={isFetchingCollections} {...props} />
        )}
      />
      <Route
        exact
        path={`${match.path}/:collectionName`}
        render={(props: any) => (
          <CollectionPageWithSpinner isLoading={isFetchingCollections} {...props} />
        )}
      />
    </div>
  );
};

const mapStateToProps = (state: ApplicationState) => {
  return {
    isFetchingCollections: selectIsFetching(state),
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    // addCollectionsToShop: (collections: ShoppingList[]) => dispatch(addCollections(collections)),
    addCollectionsToShop: () => dispatch(fetchCollectionsAsync() as any),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ShopPage);
