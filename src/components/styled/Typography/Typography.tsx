import React from 'react';
// eslint-disable-next-line import/named
import MuiTypography, { TypographyProps } from '@mui/material/Typography';
import theme from '../../../theme';

interface Props extends TypographyProps {
  marked?: boolean;
}

const Typography: React.FC<Props> = ({ children, marked, variant, ...other }) => {
  return (
    <MuiTypography variant={variant} {...other}>
      {children}
      {marked && (
        <span
          style={{
            height: 4,
            width: 55,
            display: 'block',
            margin: `${theme.spacing(1)} auto 0`,
            backgroundColor: theme.palette.primary.main,
          }}
        />
      )}
    </MuiTypography>
  );
};

export default Typography;
