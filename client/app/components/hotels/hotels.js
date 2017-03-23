/**
 * Created by orlandoadeyemi on 22/03/2017.
 */
import angular from 'angular';
import hotelsComponent from './hotels.component';
import hotelsItemComponent from './hotel-item/hotel-item';
import ratingComponent from '../rating/rating';
import {HotelActions} from './hotels.state'


const HotelsModule = angular.module('hotels', [
    hotelsItemComponent.name,
    ratingComponent.name
  ])
    .factory('HotelActions', HotelActions)
    .component('hotels', hotelsComponent)
;

export default HotelsModule;
