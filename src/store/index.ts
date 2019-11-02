import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { persistStore } from 'redux-persist';
import reduder from './reducers';

const store = createStore(reduder, applyMiddleware(logger));

const persistor = persistStore(store);

export { store as default, persistor };
