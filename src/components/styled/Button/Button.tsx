import React from 'react';
import { styled } from '@mui/material';
// eslint-disable-next-line import/named
import MuiButton, { ButtonProps } from '@mui/material/Button';

const ButtonRoot = styled(MuiButton)(({ theme, size }) => ({
  borderRadius: 0,
  fontWeight: theme.typography.fontWeightMedium,
  fontFamily: theme.typography.h1.fontFamily,
  padding: theme.spacing(2, 4),
  fontSize: theme.typography.pxToRem(14),
  marginTop: 3,
  marginBottom: 2,
  boxShadow: 'none',
  '&:active, &:focus': {
    boxShadow: 'none',
  },
  ...(size === 'small' && {
    padding: theme.spacing(1, 3),
    fontSize: theme.typography.pxToRem(13),
  }),
  ...(size === 'large' && {
    padding: theme.spacing(2, 5),
    fontSize: theme.typography.pxToRem(16),
  }),
}));

const Button = <C extends React.ElementType>(props: ButtonProps<C, { component?: C }>) => {
  return <ButtonRoot {...props} />;
};

export default Button;
