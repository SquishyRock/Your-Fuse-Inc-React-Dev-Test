import { XXXX } from "../actionTypes";

const initialState = {
  coin: "BTC"
};

const coinReducer = (state = initialState, action) => {
  switch (action.type) {
    case XXXX: {
      return {...state, coin: action.payload};
    }
    default: {
      return state;
    }
  }
};

export default coinReducer;
