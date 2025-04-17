import { configureStore } from '@reduxjs/toolkit';
import habitsReducer from './slices/habitSlice';

const store = configureStore({
    reducer: {
        habits: habitsReducer,
    },
});

store.subscribe(() => {
    const state = store.getState();
    localStorage.setItem('habits', JSON.stringify(state.habits.habits));
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;