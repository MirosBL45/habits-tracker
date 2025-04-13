import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';

export interface Habit {
    id: string;
    name: string;
    frequency: "daily" | "weekly";
    completedDates: string[];
    createdAt: string;
}

interface HabitState {
    habits: Habit[];
}

const initialState: HabitState = {
    habits: [],
}

const habitSlice = createSlice({
    name: 'habits',
    initialState,
    reducers: {
        addHabit: (state, action: PayloadAction<{ name: string; frequency: 'daily' | 'weekly' }>) => {
            const newHabit: Habit = {
                id: uuidv4(),
                name: action.payload.name,
                frequency: action.payload.frequency,
                completedDates: [],
                createdAt: new Date().toISOString(),
            };

            state.habits.push(newHabit);
        }
    },
});

export const { addHabit } = habitSlice.actions;
export default habitSlice.reducer;