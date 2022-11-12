import { Box, Link } from '@mui/material';
import React from 'react';
import FormButton from '../../components/form/FormButton';
import TextField from '../../components/styled/TextField/TextField';
import Typography from '../../components/styled/Typography/Typography';

import AppForm from '../../components/views/AppForm';

const SignInPage = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log(data);
  };

  return (
    <AppForm title="SIGN IN">
      <Typography variant="body2" align="center">
        {'Not a member yet? '}
        <Link href="/sign-up/" align="center" underline="always">
          Sign Up here
        </Link>
      </Typography>
      <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 4 }}>
        <TextField required id="email" label="Email" autoComplete="current-email" />
        <TextField required id="password" label="Password" type="password" autoComplete="current-password" />
        <FormButton size="large" color="secondary" fullWidth>
          Sign In
        </FormButton>
      </Box>
      <Typography align="center">
        <Link underline="always" href="/forgot-password/">
          Forgot password?
        </Link>
      </Typography>
    </AppForm>
  );
};

export default SignInPage;
