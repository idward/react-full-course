import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
// import reduxThunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import { persistStore } from 'redux-persist';
import reduder from './reducers';
import rootSaga from './actions/root.sagas';

const saga = createSagaMiddleware();

const middlewares: any[] = [saga];

if (process.env.NODE_ENV === 'development') {
  console.log('mode: ', process.env.NODE_ENV);
  middlewares.push(logger);
}

const store = createStore(reduder, applyMiddleware(...middlewares));

saga.run(rootSaga);

const persistor = persistStore(store);

export { store as default, persistor };
