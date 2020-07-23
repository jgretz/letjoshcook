/* eslint-disable sort-imports */
import {combineReducers} from 'redux';
import flags, {FlagsState} from './flags';

export type SharedState = {
  flags: FlagsState;
};

export default combineReducers({
  flags,
});
