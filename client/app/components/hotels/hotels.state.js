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
    //return {type : GET_HOTELS, payload : hotels}
  };

  const selectHotel = hotel => {
    return {type : GET_CURRENT_HOTEL, payload : hotel}
  };

  const filterHotels = (selected_filter) => {
    switch (selected_filter) {
      case 'name-asc':
        return {type : GET_HOTELS_NAME_ASC};
      default:
        return {type : GET_HOTELS_NAME_ASC}
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

const compareHotelNames = (hotel_a, hotel_b) => hotel_a.title.localeCompare(hotel_b.title) > 0;

export const hotels = (state = {}, {type, payload}) => {
  switch (type) {
    case GET_HOTELS:
      return payload || [...state];
    case GET_HOTELS_NAME_ASC:
      return payload || [...state].sort(compareHotelNames);
    default:
      return [...state];
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
