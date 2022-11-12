import { Container, Paper } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import Typography from '../styled/Typography/Typography';

interface Props {
  title: string;
  children: React.ReactNode;
}

const AppForm: React.FC<Props> = ({ title, children }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        backgroundImage: 'url(/static/onepirate/appCurvyLines.png)',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <Container maxWidth="sm">
        <Box sx={{ mt: 7, mb: 12 }}>
          <Paper elevation={3} sx={{ bgcolor: '#fff4f8', py: { xs: 4, md: 8 }, px: { xs: 3, md: 6 } }}>
            <>
              <Typography variant="h3" marked gutterBottom align="center">
                {title}
              </Typography>
            </>
            {children}
          </Paper>
        </Box>
      </Container>
    </Box>
  );
};

export default AppForm;
