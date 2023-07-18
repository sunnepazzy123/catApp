import { configureStore, combineReducers } from '@reduxjs/toolkit';
import catReducer from './reducers/cat.reducer';

const rootReducer = combineReducers({
  cat: catReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
