/**
 * Created by orlandoadeyemi on 22/03/2017.
 */
class RatingController {
  constructor() {

  }


  $onInit () {
    console.log(this);
  }

  range (max) {
    return new Array(Math.floor(Number(max)));
  }
}

export default RatingController;
