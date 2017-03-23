/**
 * Created by orlandoadeyemi on 22/03/2017.
 */
import {hotels} from './hotels.state'

class HotelsController {
  constructor($ngRedux, HotelActions) {
    'ngInject';

    this.store = $ngRedux;
    this.selectedFilter = '';
    this.HotelActions = HotelActions;
  }

  $onInit() {
    const actions = Object.assign({}, this.HotelActions);
    this.unsubscribe = this.store.connect(this.mapStateToThis, actions)(this);

    this.getHotels();
    this.getLocation();
  }

  $onDestroy() {
    //remove any listeners still connected to the store.
    this.unsubscribe();
  }

  onFilterSelected(selection) {
    this.filterHotels(selection);
  }

  mapStateToThis(state) {
    return {
      hotels : state.hotels,
      location : state.location,
      filters : state.filters
    }
  }
}

export default HotelsController;
