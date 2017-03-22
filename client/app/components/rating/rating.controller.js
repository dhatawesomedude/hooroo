/**
 * Created by orlandoadeyemi on 22/03/2017.
 */
class RatingController {
  constructor() {
    this.range = new Array(Math.floor(Number(this.hotelRating)));
    this.starRating = this.ratingType === 'star';
  }

}

export default RatingController;
