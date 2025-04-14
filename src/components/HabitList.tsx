import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { Box, Button, Grid, Paper, Typography } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

export default function HabitList(): React.ReactElement {
  const { habits } = useSelector((state: RootState) => state.habits);

  const today = new Date().toISOString().split('T')[0];

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 4 }}>
      {habits.map((habit) => (
        <Paper key={habit.id} elevation={2} sx={{ p: 2 }}>
          <Grid container alignItems="center">
            <Grid>
              <Typography variant="h6">{habit.name}</Typography>
              <Typography variant="body2" color="text.secondary">
                {habit.frequency.charAt(0).toUpperCase() +
                  habit.frequency.slice(1)}
              </Typography>
            </Grid>
            <Grid xs={12} sm={6}>
              <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 1 }}>
                <Button
                  variant="outlined"
                  color={
                    habit.completedDates.includes(today) ? 'success' : 'primary'
                  }
                  //   onClick={() =>
                  //     dispatch(toggleHabit({ id: habit.id, date: today }))
                  //   }
                  startIcon={<CheckCircleIcon />}
                >
                  {habit.completedDates.includes(today)
                    ? 'Completed'
                    : 'Mark Complete'}
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Paper>
      ))}
    </Box>
  );
}
