import { red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'Outfit, sans-serif',
  },
  palette: {
    primary: {
      main: '#556cd6',
      dark: '#121212',
      light: '#f9f4da',
    },
    secondary: {
      main: '#19857b',
      light: '#efd81d',
    },
    error: {
      main: red.A400,
    },
    text: {
      primary: '#f9f4da',
      secondary: '#000000',
    },
    background: {
      paper: '#383838',
    },
  },
});

export default theme;
