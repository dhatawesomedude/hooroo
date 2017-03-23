import 'bootstrap-css-only';
import 'normalize.css';

import angular from 'angular';
import appComponent from './app.component';
import CommonModule from './common/common';
import ComponentsModule from './components/components';

import {hotels, location, filters} from './components/hotels/hotels.state'
import {combineReducers} from 'redux';
import ngRedux from 'ng-redux';

const rootReducer = combineReducers({
  hotels,
  location,
  filters
});

const config = $ngReduxProvider => {
  'ngInject'

  $ngReduxProvider.createStoreWith(rootReducer, []);
};

angular.module('app', [
  ComponentsModule.name,
  CommonModule.name,
  ngRedux
])
  .config(config)
  .component('app', appComponent)
;

