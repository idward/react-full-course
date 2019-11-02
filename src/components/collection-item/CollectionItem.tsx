import React, { FC } from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { ShoppingItem } from 'src/types';
import { addCartItem } from '../../store/actions';
import CustomButton from '../custom-button/CustomButton';
import './collection-item.styles.scss';

interface ICollectionItemProps {
  item: ShoppingItem;
  [key: string]: any;
}

const CollectionItem: FC<ICollectionItemProps> = ({ item, addItem }) => {
  const { name, imageUrl, price } = item;
  return (
    <div className="collection-item">
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }}></div>
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <CustomButton inverted onClick={() => addItem(item)}>
        ADD TO CART
      </CustomButton>
    </div>
  );
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    addItem: (item: ShoppingItem) => dispatch(addCartItem(item)),
  };
};

export default connect(
  null,
  mapDispatchToProps,
)(CollectionItem);
