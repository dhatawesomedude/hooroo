/**
 * Created by orlandoadeyemi on 22/03/2017.
 */
import template from './hotel-item.html';
import './hotel-item.styl';

const hotelItemComponent = {
  bindings: {
    hotel: '<'
  },
  template,
  controllerAs: 'hotelItemCtrl'
};

export default hotelItemComponent;
