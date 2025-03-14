import { combineReducers, configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import { languageSlice } from './LanguageSlice'; // Đảm bảo import đúng
import { UserInfomationSlice } from './UserInfomationSlice';

// Cấu hình persist
const persistConfig = {
    key: 'root',
    storage,
    // whitelist: ['language'],  // Có thể cấu hình whitelist nếu muốn chỉ persist một số phần của state
    // blacklist: ['someOtherState'],  // Có thể cấu hình blacklist nếu không muốn persist một số phần
};

// Tạo rootReducer với đúng cách
const rootReducer = combineReducers({
    language: languageSlice.reducer, // Đảm bảo sử dụng languageSlice.reducer
    UserInfomation: UserInfomationSlice.reducer,
});

// Bọc rootReducer với persistReducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Tạo Store với persistedReducer
export const StoreReducer = configureStore({
    reducer: persistedReducer, // Sử dụng persistedReducer ở đây
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

// Tạo persisted store
export const Persistor = persistStore(StoreReducer);
