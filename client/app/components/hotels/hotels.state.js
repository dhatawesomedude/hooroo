/**
 * Created by orlandoadeyemi on 23/03/2017.
 */
//-------------------------------------------------------------------
// Constants
//-------------------------------------------------------------------
export const GET_HOTELS = 'GET_HOTELS';
export const GET_CURRENT_HOTEL = 'GET_CURRENT_HOTEL';
export const GET_LOCATION = 'GET_LOCATION';
export const GET_FILTERS = 'GET_FILTERS';
export const GET_FILTER = 'GET_FILTER';
export const GET_HOTELS_NAME_ASC = 'GET_HOTELS_NAME_ASC';
export const GET_HOTELS_TOP_DEALS = 'GET_HOTELS_TOP_DEALS';
export const GET_HOTELS_PRICE_ASC = 'GET_HOTELS_PRICE_ASC';
export const GET_HOTELS_PRICE_DESC = 'GET_HOTELS_PRICE_DESC';

//-------------------------------------------------------------------
// Actions
//-------------------------------------------------------------------

const URLS = {
  HOTELS: 'data/hotels.json'
};

export const HotelActions = ($ngRedux, $http, $q) => {
  'ngInject'

  const extract = result => result.data;

  const getHotels = hotels => {
    return (dispatch, getState) => {
      const {hotels} = getState();

      if (hotels.length) {
        return $q.when(hotels)
          .then(()=> {
          dispatch({type : GET_HOTELS, payload : hotels})
          })
      }
      else  {
        return $http.get(URLS.HOTELS)
          .then(extract)
          .then(data => {
            dispatch({type : GET_HOTELS, payload : data.hotels});
            dispatch({type : GET_LOCATION, payload : data.query.location});
            dispatch({type : GET_FILTERS, payload : data.sort_filters})
          })
      }
    }
  };

  const selectHotel = hotel => {
    return {type : GET_CURRENT_HOTEL, payload : hotel}
  };

  const filterHotels = (selected_filter) => {
    switch (selected_filter) {
      case 'name-asc':
        return {type : GET_HOTELS_NAME_ASC};
      case 'top-deals':
        return {type : GET_HOTELS_TOP_DEALS};
      case 'price-asc':
        return {type : GET_HOTELS_PRICE_ASC};
      case 'price-desc':
        return {type : GET_HOTELS_PRICE_DESC};
      default:
        return {type : GET_HOTELS}
    }
  };

  const getLocation = () => {
    return {type : GET_LOCATION}
  };

  const getFilters = () => {
    return {type : GET_FILTERS}
  };

  return {
    getHotels,
    selectHotel,
    getLocation,
    getFilters,
    filterHotels
  }

};

//-------------------------------------------------------------------
// Reducers
//-------------------------------------------------------------------

export const hotels = (state = [], {type, payload}) => {
  const getDigits = num => num.match(/\d+/g)[0];
  const compareHotelNames = (hotel_a, hotel_b) => hotel_a.title.localeCompare(hotel_b.title) > 0;
  const compareDeals = (hotel_a, hotel_b) => getDigits(hotel_a.rooms[0].savings) < getDigits(hotel_b.rooms[0].savings);
  const comparePriceAsc = (hotel_a, hotel_b) => getDigits(hotel_a.rooms[0].price) > getDigits(hotel_b.rooms[0].price);
  const comparePriceDesc = (hotel_a, hotel_b) => getDigits(hotel_a.rooms[0].price) < getDigits(hotel_b.rooms[0].price);

  switch (type) {
    case GET_HOTELS:
      return payload || [...state];
    case GET_HOTELS_NAME_ASC:
      return payload || [...state].sort(compareHotelNames);
    case GET_HOTELS_TOP_DEALS:
      return payload || [...state].sort(compareDeals);
    case GET_HOTELS_PRICE_ASC:
      return payload || [...state].sort(comparePriceAsc);
    case GET_HOTELS_PRICE_DESC:
      return payload || [...state].sort(comparePriceDesc);
    default:
      return state;
  }
};

export const hotel = (state = {}, {type, payload}) => {
  switch (type) {
    case GET_CURRENT_HOTEL:
      return payload || state;
    default:
      return state;
  }
};

export const location = (state = '', {type, payload}) => {
  switch (type) {
    case GET_LOCATION:
      return payload || state;
    default:
      return state;
  }
};

export const filters = (state = {}, {type, payload}) => {
  switch (type) {
    case GET_FILTERS:
      return payload || state;
    default:
      return state;
  }
};
