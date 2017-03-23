/**
 * Created by orlandoadeyemi on 22/03/2017.
 */
import {hotels} from './hotels.state'

class HotelsController {
  constructor(store, HotelActions) {
    'ngInject';

    this.store = store;
    this.selectedFilter = '';
    this.HotelActions = HotelActions;
  }

  $onInit() {

    this.unsubscribe = this.store.subscribe(() => {
      this.hotels = this.store.getState().hotels;
      this.location = this.store.getState().query.location;
      this.filters = this.store.getState().sort_filters;
    });

    this.store.dispatch(this.HotelActions.getHotels());
    this.store.dispatch(this.HotelActions.getLocation());
    this.store.dispatch(this.HotelActions.getFilters());
  }

  onFilterSelected(selection) {
    this.hotels = hotels(this.hotels, this.HotelActions.filterHotels());

    // const compareHotelNames = (hotel_a, hotel_b) => hotel_a.title.localeCompare(hotel_b.title) > 0;
    //
    // if (this.selectedFilter === 'name-asc') {
    //   this.hotels = [...this.hotels].sort(compareHotelNames);
    // }
  }
}

export default HotelsController;
