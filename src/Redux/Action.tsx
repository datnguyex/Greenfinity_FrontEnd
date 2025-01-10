import Cookies from 'js-cookie';
import { createAsyncThunk } from '@reduxjs/toolkit';
export const changeLanguageAction = createAsyncThunk<string, string>(
    'language/changeLanguage',
    async (newLanguage: string) => {
        return newLanguage;
    },
);
export const authenticationAction = createAsyncThunk(
    'userInfomation',
    async ({ phoneNumber, fullName }: { phoneNumber: string; fullName: string }) => {
        return {
            phoneNumber,
            fullName,
        };
    },
);
