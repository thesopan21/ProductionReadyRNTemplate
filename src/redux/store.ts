import { configureStore, } from "@reduxjs/toolkit";
import { useDispatch, TypedUseSelectorHook, useSelector } from "react-redux";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import logger from "redux-logger"; // Import redux-logger for logging actions
import Config from 'react-native-config';

import themeReducer from './slices/themeSlice'
import authReducer from './slices/authSlice';

/**
 * Redux store configuration with persistence and middleware.
 *
 * This store is configured with:
 * 1. Redux Persist to persist the theme state.
 * 2. RTK Query API service reducer (if applicable).
 * 3. Conditional middleware that adds `redux-logger` only in development mode.
 *
 * @see https://redux-toolkit.js.org/
 * @see https://github.com/rt2zz/redux-persist
 * @see https://github.com/lugg/react-native-config
 * @see https://github.com/LogRocket/redux-logger
 */
const persistConfig = {
  key: 'root',
  storage,
};


// Applying persistence to your reducer like themeReducer and authReducer
const persistedThemeReducer = persistReducer(persistConfig, themeReducer);
// const persistedAuthReducer = persistReducer(persistConfig, authReducer);

// Store configuration with reducers, middleware, and persistence
const store = configureStore({
  reducer: {
    theme: persistedThemeReducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) => {
    const middlewares = getDefaultMiddleware({
      serializableCheck: false, // Disable serializableCheck if necessary (for RTK Query caching)
    });

    // Conditionally add redux-logger only in development mode
    console.log("node environment:", Config.NODE_ENV)
    if (Config.NODE_ENV === 'development') {
      middlewares.push(logger);
    }

    return middlewares;
  },
});

export default store;
export const persistor = persistStore(store);

/**
 * Type definitions for the RootState and AppDispatch.
 * These types are useful for creating strongly-typed hooks with `useSelector` and `useDispatch`.
 */
type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

/**
 * Custom hooks for dispatching actions and selecting state from the Redux store.
 */
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;