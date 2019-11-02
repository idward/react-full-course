import { combineReducers, Reducer } from 'redux';
import { persistReducer, PersistConfig } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import userReducer, { UserState } from './user.reducer';
import cartReducer, { CartState } from './cart.reducer';
import directoryReducer, { DirectoryState } from './directory.reducer';
import shopReducer, { ShopState } from './shop.reducer';

export interface ApplicationState {
  user: UserState;
  cart: CartState;
  directory: DirectoryState;
  shop: ShopState;
}

const persistConfig: PersistConfig<any> = {
  key: 'root',
  storage,
  whitelist: ['cart'],
};

const reducers: Reducer<ApplicationState> = combineReducers<ApplicationState>({
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer,
  shop: shopReducer,
});

export default persistReducer(persistConfig, reducers);
