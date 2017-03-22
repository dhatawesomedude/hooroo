/**
 * Created by orlandoadeyemi on 22/03/2017.
 */
import angular from 'angular';
import ratingComponent from './rating.component';

const ratingModule = angular.module('rating', [])
  .component('rating', ratingComponent)
;

export default ratingModule;
