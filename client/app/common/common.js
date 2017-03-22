/**
 * Created by orlandoadeyemi on 22/03/2017.
 */
import angular from 'angular';
import HotelsModel from './models/hotels.model';

let CommonModule = angular.module('common', [])
  .service('HotelsModel', HotelsModel);

export default CommonModule;
