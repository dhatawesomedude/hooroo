/**
 * Created by orlandoadeyemi on 22/03/2017.
 */
class HotelsController {
  constructor(HotelsModel) {
    'ngInject';

    this.HotelsModel = HotelsModel;
  }

  $onInit() {
    this.HotelsModel.getHotels().then(hotels => this.hotels = hotels);
    this.HotelsModel.getLocation().then(location => this.location = location);
    this.HotelsModel.getFilters().then(filters => {
      this.filters = filters;
      const firstFilterKey = Object.keys(this.filters)[0];
      this.selectedFilter = {firstFilterKey : this.filters[firstFilterKey]};
    });

  }

  onFilterSelected() {
    const compareHotelNames = (hotel_a, hotel_b) => hotel_a.title.localeCompare(hotel_b.title) > 0;

    if (this.selectedFilter === 'name-asc') {
      console.log('filter ooo');
      this.hotels = [...this.hotels].sort(compareHotelNames);
    }
  }
}

export default HotelsController;
