import 'bootstrap-css-only';
import 'normalize.css';

import angular from 'angular';
import appComponent from './app.component';
import CommonModule from './common/common';
import ComponentsModule from './components/components';
import {hotels, location, filters, initialState} from './components/hotels/hotels.state'
import RStore from './app.store';


const store = new RStore(hotels, initialState);

angular.module('app', [
  ComponentsModule.name,
  CommonModule.name
])
  .value('store', store)
  .component('app', appComponent)
;

