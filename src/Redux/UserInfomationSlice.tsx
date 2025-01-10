import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { authenticationAction } from './Action';

// Define the UserInfomation interface
interface UserInfomation {
    fullName: string;
    phoneNumber: string;
    accessToken?: string;
    loading: boolean;
    isAuthenticated: boolean;
}

// Initial state
const initialState: UserInfomation = {
    fullName: '',
    phoneNumber: '',
    accessToken: undefined,
    loading: false,
    isAuthenticated: false,
};

// Create slice
export const UserInfomationSlice = createSlice({
    name: 'userInfomation',
    initialState,
    reducers: {
        clearUserInfomation(state) {
            state.fullName = '';
            state.phoneNumber = '';
            state.isAuthenticated = false;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(
            authenticationAction.fulfilled,
            (state, action: PayloadAction<{ phoneNumber: string; fullName: string; accessToken?: string }>) => {
                console.log('payload', action.payload);
                state.fullName = action.payload.fullName;
                state.phoneNumber = action.payload.phoneNumber;
                state.loading = false;
                state.isAuthenticated = true;
            },
        );
        builder.addCase(authenticationAction.rejected, (state) => {
            state.loading = false;
            state.isAuthenticated = false;
        });
    },
});

export const { clearUserInfomation } = UserInfomationSlice.actions;
export default UserInfomationSlice.reducer;
