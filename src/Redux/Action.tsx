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
    async ({ phoneNumber, fullName, image }: { phoneNumber: string; fullName: string; image: string }) => {
        return {
            phoneNumber,
            fullName,
            image,
        };
    },
);
