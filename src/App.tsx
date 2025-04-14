import { Container, Box, Typography } from '@mui/material';
import './App.css';
import AddHabitForm from './components/AddHabitForm';
import HabitList from './components/HabitList';

function App() {
  return (
    <Container maxWidth="md">
      <Box sx={{ my: 4 }}>
        <Typography variant="h2" component="h1" gutterBottom align="center">
          Habit Tracker
        </Typography>
        <AddHabitForm />
        <HabitList />
      </Box>
    </Container>
  );
}

export default App;
