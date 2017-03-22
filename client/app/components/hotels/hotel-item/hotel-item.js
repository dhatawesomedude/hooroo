/**
 * Created by orlandoadeyemi on 22/03/2017.
 */
import angular from 'angular';
import hotelItemComponent from './hotel-item.component';

let HotelItemModule = angular.module('hotelItem', [
])
  .component('hotelItem', hotelItemComponent);

export default HotelItemModule;
