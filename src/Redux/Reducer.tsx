import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type reduceType = {
    count: number;
};
type actionType = {
    type: string;
    payload: number;
};
const initialState = {
    count: 0,
};

export const Slice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        // incrementCount: (state: reduceType, action: PayloadAction<number>) => {
        //     console.log('actionCounter', action);
        //     state.count += action.payload;
        // },
        // decrementCount: (state, action: PayloadAction<number>) => {
        //     state.count -= action.payload;
        // },
    },
});
// export const { incrementCount, decrementCount } = counterSlice.actions;

export default Slice.reducer;
