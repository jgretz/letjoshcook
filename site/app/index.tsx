import './styles/styles.scss';
import 'core-js/stable';
import 'regenerator-runtime/runtime';

import React from 'react';
import {render} from 'react-dom';
import {configureStore, configureHttp} from './util';

import Root from './Root';

// setup
const appElement = document.getElementById('app');
const store = configureStore();

configureHttp(store);

// render paths
const renderApplication = () => {
  render(<Root store={store} />, appElement);
};

// boot
renderApplication();
