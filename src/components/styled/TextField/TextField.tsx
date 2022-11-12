import React from 'react';
// eslint-disable-next-line import/named
import MuiTextField, { TextFieldProps } from '@mui/material/TextField';

const TextField: React.FC<TextFieldProps> = (props) => {
  return <MuiTextField fullWidth margin="normal" {...props} sx={{ backgroundColor: 'white' }} />;
};

export default TextField;
