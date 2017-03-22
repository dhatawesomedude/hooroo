/**
 * Created by orlandoadeyemi on 22/03/2017.
 */
import HotelItemModule from './hotel-item';
import HotelItemComponent from './hotel-item.component';
import HotelItemTemplate from './hotel-item.html';

describe('hotelItem', () => {

  describe('Module', () => {
    it('is named correctly', () => {
      expect(HotelItemModule.name).toEqual('hotelItem');
    });
  });

  describe('Template', () => {
    it('includes the `rating` component', () => {
      expect(HotelItemTemplate).toContain('rating');
    });
  });

  describe('Component', () => {
    const component = HotelItemComponent;

    it('includes the intended template',() => {
      expect(component.template).toEqual(HotelItemTemplate);
    });

    it('uses the correct `controllerAs` label', () => {
      expect(component.controllerAs).toBe('hotelItemCtrl');
    });

  });
});
