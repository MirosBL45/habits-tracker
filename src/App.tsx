import { Container, Box, Typography } from '@mui/material';
import './App.css';
import AddHabitForm from './components/AddHabitForm';
import HabitList from './components/HabitList';
import HabitStats from './components/HabitStats';

function App() {
  return (
    <Container maxWidth="md">
      <Box sx={{ my: 4 }}>
        <Typography variant="h2" component="h1" gutterBottom align="center">
          Habit Tracker
        </Typography>
        <AddHabitForm />
        <HabitList />
        <HabitStats />
      </Box>
    </Container>
  );
}

export default App;
