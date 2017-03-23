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

    //subscribe returns an unsubscribe method so we can unsubscribe at any time.
    this.unsubscribe = this.store.subscribe(() => {
      console.log(this.store.getState());
      this.hotels = this.store.getState().hotels;
      this.location = this.store.getState().location;
      this.filters = this.store.getState().filters;
    });

    this.store.dispatch(this.HotelActions.getHotels());
    this.store.dispatch(this.HotelActions.getLocation());
  }

  onFilterSelected(selection) {
    this.store.dispatch(this.HotelActions.filterHotels(selection));
  }
}

export default HotelsController;
