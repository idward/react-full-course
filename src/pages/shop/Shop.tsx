import React, { FC, useEffect } from 'react';
import { Route } from 'react-router-dom';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
// import { Unsubscribe } from 'firebase';
// import { getCollectionsAndDocuments, getDataFromCollections } from '../../firebase/index';
// import { ShoppingList } from '../../types';
import { fetchCollectionsStart } from '../../store/actions';
import CollectionsOverviewContainer from '../../components/collections-overview/CollectionsOverviewContainer';
import CollectionContainer from '../collection/CollectionContainer';
import './shop.styles.scss';

interface IShopPageProps {
  isFetchingCollections?: boolean;
  isFetchingCollection?: boolean;
  addCollectionsToShop: () => void;
  [key: string]: any;
}

/**
 * Child Route
 * Shop分为全部商品目录展示和具体目录商品列表展示
 */
const ShopPage: FC<IShopPageProps> = ({ match, addCollectionsToShop }) => {
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
      <Route exact path={match.path} component={CollectionsOverviewContainer} />
      <Route exact path={`${match.path}/:collectionName`} component={CollectionContainer} />
    </div>
  );
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    // addCollectionsToShop: (collections: ShoppingList[]) => dispatch(addCollections(collections)),
    // addCollectionsToShop: () => dispatch(fetchCollectionsStart() as any),
    addCollectionsToShop: () => dispatch(fetchCollectionsStart()),
  };
};

export default connect(
  null,
  mapDispatchToProps,
)(ShopPage);
