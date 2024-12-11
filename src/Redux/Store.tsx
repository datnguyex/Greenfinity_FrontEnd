import { combineReducers, configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';
import Slice from './Reducer';

const persistConfig = {
    key: 'root',
    storage,
    // whitelist: ['auth', 'user'],
    // blacklist: ['settings'],
};
const rootReducer = combineReducers({
    Slice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);
export const StoreReducer = configureStore({
    reducer: {
        persistedReducer,
    },
});
export const Persistor = persistStore(StoreReducer);
