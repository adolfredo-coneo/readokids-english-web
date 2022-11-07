import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText('#f50057'),
  backgroundColor: 'black',
  marginLeft: 10,
  '&:hover': {
    backgroundColor: '#fff',
    color: theme.palette.getContrastText('#fff'),
  },
})) as typeof Button;

export default ColorButton;
