import {createReducer} from '@reduxjs/toolkit';

export type FlagsState = {
  placeholder: boolean;
};

const INITIAL = {
  placeholder: true,
};

export default createReducer(INITIAL, {});
