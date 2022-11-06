import React from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import MuiAppBar from '@mui/material/AppBar';

import Toolbar from '../styled/ToolBar';

const rightLink = {
  fontSize: 16,
  color: 'common.white',
  ml: 3,
};

const AppBar = () => {
  return (
    <div>
      <MuiAppBar elevation={0} position="fixed">
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Box sx={{ flex: 1 }} />
          <Link variant="h6" underline="none" color="inherit" href="/" sx={{ fontSize: 24 }}>
            {'ReadoKids English'}
          </Link>
          <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
            <Link color="inherit" variant="h6" underline="none" href="/sign-in/" sx={rightLink}>
              {'Sign In'}
            </Link>
            <Link variant="h6" underline="none" href="/sign-up/" sx={{ ...rightLink, color: 'secondary.main' }}>
              {'Sign Up'}
            </Link>
          </Box>
        </Toolbar>
      </MuiAppBar>
    </div>
  );
};

export default AppBar;
