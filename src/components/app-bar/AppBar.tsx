import React from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import MuiAppBar from '@mui/material/AppBar';
import { useNavigate } from 'react-router-dom';

import Toolbar from '../styled/ToolBar';
import ColorButton from '../styled/ColorButton/ColorButton';

const AppBar = () => {
  const navigate = useNavigate();

  const signInHandler = () => {
    navigate('/sign-in');
  };

  const signUpHandler = () => {
    navigate('/sign-up');
  };

  return (
    <MuiAppBar elevation={0} position="fixed">
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-start' }}>
          <img src="/logo.png" className="logo" alt="ReadoKids logo" />
        </Box>
        <Link variant="h6" underline="none" color="inherit" href="/" sx={{ fontSize: 24 }}>
          {'ReadoKids English'}
        </Link>
        <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
          <ColorButton onClick={signInHandler} variant="contained">
            {'Sign In'}
          </ColorButton>
          <ColorButton onClick={signUpHandler} variant="contained">
            {'Sign Up'}
          </ColorButton>
        </Box>
      </Toolbar>
    </MuiAppBar>
  );
};

export default AppBar;
