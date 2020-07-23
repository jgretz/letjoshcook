/* eslint-disable sort-imports */
/* eslint-disable camelcase */
/* eslint-disable object-shorthand */
import {combineReducers} from 'redux';

import shared, {SharedState} from './features/shared/reducers';

export type ApplicationState = {
  features: {
    shared: SharedState;
  };
};

const createRootReducer = () =>
  combineReducers({
    features: combineReducers({
      shared: shared,
    }),
  });

export default createRootReducer;
