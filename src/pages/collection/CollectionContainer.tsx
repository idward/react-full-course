import { FC } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import WithSpinner from '../../components/with-spinner/WithSpinner';
import { isCollectionFetch } from '../../store/reducers/shop.selectors';
import { ApplicationState } from '../../store/reducers';
import CollectionPage from './Collection';

interface ICollectionOCProps {
  [key: string]: any;
}

const mapStateToProps = (state: ApplicationState) => {
  return {
    isLoading: !isCollectionFetch(state),
  };
};

/**
 * 高阶组件模式（需要深入理解）
 */
const CollectionOC = compose<FC<ICollectionOCProps>>(
  connect(mapStateToProps),
  WithSpinner,
)(CollectionPage);
// const CollectionOC: FC<ICollectionOCProps> = connect(mapStateToProps)(
//   WithSpinner(CollectionPage),
// );

export default CollectionOC;
