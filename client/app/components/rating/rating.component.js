/**
 * Created by orlandoadeyemi on 22/03/2017.
 */
import template from './rating.html';
import controller from './rating.controller';
import './rating.styl';

const ratingComponent = {
  bindings: {
    hotelRating: '<',
    ratingType: '<'
  },
  template,
  controller,
  controllerAs: 'ratingCtrl'
};

export default ratingComponent;
