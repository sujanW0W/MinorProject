import React from 'react'
import './App.css';
import {Grid,Paper} from '@mui/material';
import Header from './Header'
import Login from './Login.js'

function App() {
  return (
    <div className='outermostContainer'>
      <Grid>
        <Paper elevation = {16} className='paper'>
          <Header />
          <Login />
        </Paper>
      </Grid>
    </div>
  );
}

export default App;
