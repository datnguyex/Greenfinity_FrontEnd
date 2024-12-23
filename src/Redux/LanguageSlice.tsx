import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { changeLanguageAction } from './Action';

interface LanguageState {
    language: string;
    loading: boolean;
}

const initialState: LanguageState = {
    language: 'VIE',
    loading: false,
};

export const languageSlice = createSlice({
    name: 'language',
    initialState,
    reducers: {
        // Các reducer đồng bộ nếu cần (nếu có)
    },
    extraReducers: (builder) => {
        builder.addCase(changeLanguageAction.fulfilled, (state, action: PayloadAction<string>) => {
            state.language = action.payload;
            state.loading = false;
        });
    },
});

export default languageSlice.reducer;
