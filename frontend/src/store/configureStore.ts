import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { ApplicationState, reducers } from './';

// eslint-disable-next-line
export default function configureStore(initialState?: ApplicationState) {
  const middleware = [thunk];

  const enhancers = [];
  // eslint-disable-next-line
  const windowIfDefined = typeof window === 'undefined' ? null : (window as any);
  if (windowIfDefined && windowIfDefined.__REDUX_DEVTOOLS_EXTENSION__) {
    enhancers.push(windowIfDefined.__REDUX_DEVTOOLS_EXTENSION__());
  }

  const rootReducer = combineReducers({
    ...reducers,
  });

  return createStore(rootReducer, initialState, compose(applyMiddleware(...middleware), ...enhancers));
}
