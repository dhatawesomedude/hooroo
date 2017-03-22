/**
 * Created by orlandoadeyemi on 22/03/2017.
 */
import RatingModule from './rating';
import RatingComponent from './rating.component';
import RatingTemplate from './rating.html';
import RatingController from './rating.controller';


describe('rating', () => {
  let component, $componentController;

  beforeEach(() => {
    window.module('rating');
  });


  beforeEach(inject((_$componentController_) => {
    $componentController = _$componentController_;
  }));

  describe('Module', () => {
    it('is named correctly', () => {
      expect(RatingModule.name).toEqual('rating');
    });
  });

  describe('Component', () => {
    const component = RatingComponent;

    it('includes the intended template', () => {
      expect(component.template).toEqual(RatingTemplate);
    });

    it('uses the correct `controllerAs` label', () => {
      expect(component.controllerAs).toBe('ratingCtrl');
    });

  });

  describe('Controller', () => {
    let bindings = {'hotelRating': 5, 'ratingType': 'star'};

    it('sets ratingCtrl.range immediately', () => {

      component = $componentController('rating', null, bindings);

      expect(component.range).toBeDefined();
    });

    it('sets ratingCtrl.starRating immediately', () => {
      component = $componentController('rating', null, bindings);

      expect(component.starRating).toBeDefined();
    });
  });
});
