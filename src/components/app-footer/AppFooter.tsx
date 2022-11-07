import { Typography } from '@mui/material';
import { Container } from '@mui/system';
import React from 'react';

function Copyright() {
  return (
    <React.Fragment>
      {'© '}
      <a color="inherit" href="https://adolconeo.com/" target="_blank" rel="noreferrer">
        {'{ adolConeo }'}
      </a>{' '}
      {new Date().getFullYear()}
    </React.Fragment>
  );
}

const AppFooter = () => {
  return (
    <Typography component="footer" sx={{ display: 'flex', bgcolor: 'secondary.light' }}>
      <Container sx={{ my: 8, display: 'flex' }}>
        <Copyright />
      </Container>
    </Typography>
  );
};

export default AppFooter;
