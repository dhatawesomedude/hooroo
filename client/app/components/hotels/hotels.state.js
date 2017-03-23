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

export const HotelActions = () => {
  const getHotels = hotels => {
    return {type : GET_HOTELS, payload : hotels}
  };

  const selectHotel = hotel => {
    return {type : GET_CURRENT_HOTEL, payload : hotel}
  };

  const filterHotels = () => {
    return {type : GET_HOTELS_NAME_ASC}
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
export const initialState = {
  "sort_filters": {
    "top-deals": "Top Deals",
    "price-desc": "Price (high-low)",
    "price-asc": "Price (low-high)",
    "name-asc": "Name (A-Z)"
  },
  "query": {
    "location": "Sydney"
  },
  "hotels": [
    {
      "id": "cxd650nuyo",
      "title": "Courtyard by Marriott Sydney-North Ryde",
      "address": "7-11 Talavera Rd, North Ryde",
      "image": "https://unsplash.it/145/125/?random",
      "rating": "4",
      "rating_type": "self",
      "promotion": "Exclusive Deal",
      "rooms": [{
        "name": "Deluxe Balcony Room",
        "price": "$329",
        "currency": "AUD",
        "savings": "$30~",
        "points_earned": "0",
        "free_cancellation": "true"
      }]
    }, {
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
    }, {
      "id": "xbtlihs45t",
      "title": "Rydges World Square Sydney",
      "address": "389 Pitt Street, Sydney",
      "image": "https://unsplash.it/145/125/?random",
      "rating": "4.5",
      "rating_type": "star",
      "promotion": "Red Hot",
      "rooms": [{
        "name": "Deluxe King Room",
        "price": "$227",
        "currency": "AUD",
        "savings": "0",
        "points_earned": "831",
        "free_cancellation": "false"
      }]
    }, {
      "id": "5lm8loqk1s",
      "title": "PARKROYAL Darling Harbour Sydney",
      "address": "150 Day Street, Sydney",
      "image": "https://unsplash.it/145/125/?random",
      "rating": "4.5",
      "rating_type": "star",
      "promotion": "Red Hot",
      "rooms": [{
        "name": "Darling Harbour Club Room",
        "price": "$535",
        "currency": "AUD",
        "savings": "0",
        "points_earned": "0",
        "free_cancellation": "true"
      }]
    }, {
      "id": "kwjf8jlxg9",
      "title": "Metro Hotel Marlow Sydney Central",
      "address": "431-439 Pitt Street, Sydney",
      "image": "https://unsplash.it/145/125/?random",
      "rating": "3.5",
      "rating_type": "star",
      "promotion": "Bonus Points",
      "rooms": [{
        "name": "Delue Triple",
        "price": "$295",
        "currency": "AUD",
        "savings": "0",
        "points_earned": "1770",
        "free_cancellation": "true"
      }]
    }
  ]
};

export const hotels = (state = initialState, {type, payload}) => {
  switch (type) {
    case GET_HOTELS:
      return payload || state;
    case GET_LOCATION:
      return payload || state;
    case GET_FILTERS:
      return payload || state;
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

// export const location = (state = initialState, {type, payload}) => {
//   switch (type) {
//     case GET_LOCATION:
//       return payload || state.query.location;
//     default:
//       return state;
//   }
// };
//
// export const filters = (state = initialState, {type, payload}) => {
//   switch (type) {
//     case GET_FILTERS:
//       return payload || state.sort_filters;
//     default:
//       return state;
//   }
// };
