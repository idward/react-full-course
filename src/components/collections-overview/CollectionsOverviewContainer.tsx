import { FC } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import WithSpinner from '../with-spinner/WithSpinner';
import { isCollectionsFetch } from '../../store/reducers/shop.selectors';
import { ApplicationState } from '../../store/reducers';
import CollectionsOverview from './CollectionsOverview';

interface ICollectionsOCProps {
  [key: string]: any;
}

const mapStateToProps = (state: ApplicationState) => {
  return {
    isLoading: !isCollectionsFetch(state),
  };
};

/**
 * 高阶组件模式（需要深入理解）
 */
const CollectionsOC = compose<FC<ICollectionsOCProps>>(
  connect(mapStateToProps),
  WithSpinner,
)(CollectionsOverview);
// const CollectionsOC: FC<ICollectionsOCProps> = connect(mapStateToProps)(
//   WithSpinner(CollectionsOverview),
// );

export default CollectionsOC;
