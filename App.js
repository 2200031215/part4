import React from 'react';
import { CssBaseline, Container, Typography } from '@mui/material';
import UserForm from './components/UserForm';


function App() {
  return (
    <CssBaseline>
      <Container maxWidth="sm" style={{ textAlign: 'center', paddingTop: '2rem' }}>
        <Typography variant="h4" gutterBottom>
          User Information Form
        </Typography>
        <UserForm/>
      </Container>
    </CssBaseline>
  );
}

export default App;
