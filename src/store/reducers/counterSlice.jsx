import { createSlice } from "@reduxjs/toolkit";

// creating initial state

const initialState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    // actions
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementAmount: (state, action) => {
      console.log(action);
        state.value += action.payload;


    //   this will not work for performing async actions we have to use wrapper actions
    //   setTimeout(() => {
    //     state.value += action.payload;
    //   }, 2000);
      // here payload is the value we have passed in argument
    },
  },
});

// actions are used to change the above data
export const { increment, decrement, incrementAmount } = counterSlice.actions;


// Higher Order Function used for async code wrapper actions
export const incrementAsync = (amount) => (dispatch) => {
    setTimeout(() => {
      dispatch(incrementAmount(amount))
    }, 2000)
  }

// for manipulating data we use this reducer
export default counterSlice.reducer;
