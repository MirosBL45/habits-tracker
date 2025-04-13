import { Container, Box, Typography } from '@mui/material';
import './App.css';
import AddHabitForm from './components/addHabitForm';

function App() {
  return (
    <Container maxWidth="md">
      <Box sx={{ my: 4 }}>
        <Typography variant="h2" component="h1" gutterBottom align="center">
          Habit Tracker
        </Typography>
        <AddHabitForm />
      </Box>
    </Container>
  );
}

export default App;
