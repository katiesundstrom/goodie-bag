import axios from 'axios';

const initialState = {
  candies: [],
};

// ACTION TYPE
const GOT_CANDIES_FROM_SERVER = 'GOT_CANDIES_FROM_SERVER';

// ACTION CREATOR
const gotCandies = candies => ({ type: GOT_CANDIES_FROM_SERVER, candies });

// THUNK CREATORS
export const getCandies = () => {
  return async dispatch => {
    const response = await axios.get('/api/candies');
    const candies = response.data;
    dispatch(gotCandies(candies));
  };
};

const candiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GOT_CANDIES_FROM_SERVER:
      return { ...state, candies: action.candies };
    default:
      return state;
  }
};

export default candiesReducer;
