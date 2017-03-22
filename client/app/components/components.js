/**
 * Created by orlandoadeyemi on 22/03/2017.
 */
import angular from 'angular';
import headerModule from './header/header';
import hotelsModule from './hotels/hotels';


let ComponentsModule = angular.module('app.components', [
  headerModule.name,
  hotelsModule.name
]);

export default ComponentsModule;
