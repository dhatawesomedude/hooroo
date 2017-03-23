/**
 * Created by orlandoadeyemi on 23/03/2017.
 */
import HotelsModule from './hotels';
import HotelsController from './hotels.controller';
import HotelsComponent from './hotels.component';
import HotelsTemplate from './hotels.html';

import {hotels, GET_HOTELS} from './hotels.state';

describe ('hotels', ()=> {
  const initialState = {
    sort_query : {
      "name-asc": "Name (A-Z)"
    },
    query : {location : 'Sydney'},
    hotels : [{
      "id": "mesq6mggyn",
      "title": "Primus Hotel Sydney",
      "address": "339 Pitt St, Sydney",
      "image": "https://unsplash.it/145/125/?random",
      "rating": "5",
      "rating_type": "self",
      "promotion": "Exclusive Deal",
      "rooms": [{
        "name": "Deluxe King",
        "price": "$375",
        "currency": "AUD",
        "savings": "$28",
        "points_earned": "2250",
        "free_cancellation": "true"
      }]
    }]
  };

    describe('Module', () => {
    it('is named correctly', () => {
      expect(HotelsModule.name).toEqual('hotels');
    });
  });

  describe('Reducers', () => {
    it('should return an empty object for state by default', () => {
      const result = hotels(undefined, {type: 'random', payload : {}});
      expect(result).toEqual([]);
    });

    it('should return an initial state with an unknown action', () => {
      const result = hotels(initialState.hotels, {type: 'random', payload : {}});
      expect(result).toBe(initialState.hotels);
    });

    it('should return correct payload on GET_HOTELS', () => {
      const result = hotels(undefined, {type : GET_HOTELS, payload : initialState.hotels});
      expect(result).toBe(initialState.hotels);
    })
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

    describe('Template', () => {
    it('includes the `hotel-item` directive', () => {
      expect(HotelsTemplate).toContain('hotel-item');
    });
  });

});


