import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';

export interface Habit {
    id: string;
    name: string;
    frequency: "daily" | "weekly";
    completedDates: string[];
    createdAt: string;
    suggested: boolean;
}

interface HabitState {
    habits: Habit[];
    isLoading: boolean;
    error: string | null;
}

const savedHabits = localStorage.getItem('habits');

const initialState: HabitState = {
    habits: savedHabits ? JSON.parse(savedHabits) : [],
    isLoading: false,
    error: null,
}

export const fetchHabits = createAsyncThunk("habits/fetchHabits", async () => {
    // Simulating an API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const mockHabits: Habit[] = [
        {
            id: "1",
            name: "Read",
            frequency: "daily",
            completedDates: [],
            createdAt: new Date().toISOString(),
            suggested: true,
        },
        {
            id: "2",
            name: "Exercise",
            frequency: "daily",
            completedDates: [],
            createdAt: new Date().toISOString(),
            suggested: true,
        },
        {
            id: "3",
            name: "Market",
            frequency: "weekly",
            completedDates: [],
            createdAt: new Date().toISOString(),
            suggested: true,
        },
    ];
    return mockHabits;
});

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
                suggested: false,
            };

            state.habits.push(newHabit);
        },
        removeHabit: (state, action: PayloadAction<string>) => {
            state.habits = state.habits.filter(habit => habit.id !== action.payload);
        },
        toggleHabit: (state, action: PayloadAction<{ id: string; date: string }>) => {
            const habit = state.habits.find(hab => hab.id === action.payload.id);

            if (habit) {
                const index = habit.completedDates.indexOf(action.payload.date);
                if (index > -1) {
                    habit.completedDates.splice(index, 1);
                } else {
                    habit.completedDates.push(action.payload.date);
                }
            }
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchHabits.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchHabits.fulfilled, (state, action) => {
                state.isLoading = false;
                state.habits = action.payload;
            })
            .addCase(fetchHabits.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message || "Failed to fetch habits";
            });
    },
});

export const { addHabit, toggleHabit, removeHabit } = habitSlice.actions;
export default habitSlice.reducer;