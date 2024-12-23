import { createAsyncThunk } from '@reduxjs/toolkit';
export const changeLanguageAction = createAsyncThunk<string, string>(
    'language/changeLanguage',
    async (newLanguage: string) => {
        return newLanguage;
    },
);
