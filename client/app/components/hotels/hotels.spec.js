/**
 * Created by orlandoadeyemi on 23/03/2017.
 */
import HotelsModule from './hotels';
import HotelsController from './hotels.controller';
import HotelsComponent from './hotels.component';
import HotelsTemplate from './hotels.html';

describe('Hotels', () => {
  let component, $componentController, HotelsModel;

  beforeEach(() => {
    window.module('hotels');

    window.module($provide => {
      $provide.value('HotelsModel', {
        getHotels: () => {
          return {
            then: () => {}
          };
        },
        getLocation: () => {
          return {
            then: () => {}
          };
        },
        getFilters: () => {
          return {
            then: () => {}
          }
        }
      });
    });
  });

  beforeEach(inject((_$componentController_, _HotelsModel_) => {
    HotelsModel = _HotelsModel_;
    $componentController = _$componentController_;
  }));

  describe('Module', () => {
    it('is named correctly', () => {
      expect(HotelsModule.name).toEqual('hotels');
    });
  });

  describe('Controller', () => {
    it('calls HotelsModel.getHotels immediately', () => {
      spyOn(HotelsModel, 'getHotels').and.callThrough();

      component = $componentController('hotels', {
        HotelsModel
      });
      component.$onInit();

      expect(HotelsModel.getHotels).toHaveBeenCalled();
    });

    it('calls HotelsModel.getLocation immediately', () => {
      spyOn(HotelsModel, 'getLocation').and.callThrough();

      component = $componentController('hotels', {
        HotelsModel
      });
      component.$onInit();

      expect(HotelsModel.getLocation).toHaveBeenCalled();
    });

    it('calls HotelsModel.getFilters immediately', () => {
      spyOn(HotelsModel, 'getFilters').and.callThrough();

      component = $componentController('hotels', {
        HotelsModel
      });
      component.$onInit();

      expect(HotelsModel.getFilters).toHaveBeenCalled();
    });
  });

  describe('Template', () => {
    it('includes the `hotel-item` directive', () => {
      expect(HotelsTemplate).toContain('hotel-item');
    });
  });

  describe('Component', () => {
    const component = HotelsComponent;

    it('includes the intended template',() => {
      expect(component.template).toEqual(HotelsTemplate);
    });

    it('uses the correct `controllerAs` label', () => {
      expect(component.controllerAs).toBe('hotelsListCtrl');
    });

    it('invokes the right controller', () => {
      expect(component.controller).toEqual(HotelsController);
    });
  });
});
