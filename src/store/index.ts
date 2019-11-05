import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import reduxThunk from 'redux-thunk';
import { persistStore } from 'redux-persist';
import reduder from './reducers';

const middlewares = [logger, reduxThunk];

const store = createStore(reduder, applyMiddleware(...middlewares));

const persistor = persistStore(store);

export { store as default, persistor };
