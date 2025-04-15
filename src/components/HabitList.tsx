import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { Box, Button, Paper, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../redux/store';
import { toggleHabit } from '../redux/slices/habitSlice';

export default function HabitList(): React.ReactElement {
  const { habits } = useSelector((state: RootState) => state.habits);

  const dispatch = useDispatch<AppDispatch>();

  const today = new Date().toISOString().split('T')[0];

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 4 }}>
      {habits.map((habit) => (
        <Paper key={habit.id} elevation={2} sx={{ p: 2 }}>
          <Grid container alignItems="center">
            <Grid
              sx={{
                width: { xs: '100%', sm: '50%' },
                boxSizing: 'border-box',
                paddingRight: 2,
              }}
            >
              <Typography variant="h6">{habit.name}</Typography>
              <Typography variant="body2" color="text.secondary">
                {habit.frequency.charAt(0).toUpperCase() +
                  habit.frequency.slice(1)}
              </Typography>
            </Grid>
            <Grid
              sx={{
                width: { xs: '100%', sm: '50%' },
                boxSizing: 'border-box',
                paddingLeft: 2,
                display: 'flex',
                justifyContent: 'flex-end',
                gap: 1,
              }}
            >
              <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 1 }}>
                <Button
                  variant="outlined"
                  color={
                    habit.completedDates.includes(today) ? 'success' : 'primary'
                  }
                  startIcon={<CheckCircleIcon />}
                  onClick={() => {
                    dispatch(toggleHabit({ id: habit.id, date: today }));
                  }}
                >
                  {habit.completedDates.includes(today)
                    ? 'Completed'
                    : 'Mark Complete'}
                </Button>
                <Button
                  variant="outlined"
                  color="error"
                  startIcon={<DeleteIcon />}
                >
                  Remove
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Paper>
      ))}
    </Box>
  );
}
