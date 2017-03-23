/**
 * Created by orlandoadeyemi on 22/03/2017.
 */
import {hotels, filters, location, GET_HOTELS, GET_LOCATION, GET_FILTERS, GET_HOTELS_NAME_ASC} from './hotels.state'

class HotelsController {
  constructor(HotelsModel) {
    'ngInject';

    this.HotelsModel = HotelsModel;
  }

  $onInit() {
    this.hotels = hotels(undefined, {type : GET_HOTELS});
    this.location = location(undefined, {type : GET_LOCATION});
    this.filters = filters(undefined, {type : GET_FILTERS});
    this.selectedFilter = '';
  }

  onFilterSelected(selection) {
    this.hotels = hotels(this.hotels, {type : GET_HOTELS_NAME_ASC, payload : selection});

    // const compareHotelNames = (hotel_a, hotel_b) => hotel_a.title.localeCompare(hotel_b.title) > 0;
    //
    // if (this.selectedFilter === 'name-asc') {
    //   this.hotels = [...this.hotels].sort(compareHotelNames);
    // }
  }
}

export default HotelsController;
