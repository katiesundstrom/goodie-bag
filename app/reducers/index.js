import candiesReducer from './candiesReducer';
import singleCandyReducer from './singleCandyReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  candies: candiesReducer,
  singleCandy: singleCandyReducer,
});

export default rootReducer;

// Original code:
// const initialState = {}

// const rootReducer = (state = initialState, action) => {
//   switch (action.type) {
//     default:
//       return state;
//   }
// };

// export default rootReducer;
