import { createTheme } from '@mui/material/styles';
import { blue, green } from '@mui/material/colors';

const lightTheme = createTheme({
  typography: {
    fontFamily: 'Ubuntu, Arial, sans-serif',
  },
  palette: {
    primary: {
      main: blue[700],
    },
    secondary: {
      main: green[700],
    },
    background: {
      default: '#ffffff',
      paper: '#f5f5f5',
    },
    text: {
      primary: '#000000',
      secondary: '#ffffff',
    },
  },
});

const darkTheme = createTheme({
  typography: {
    fontFamily: 'Ubuntu, Arial, sans-serif',
  },
  palette: {
    primary: {
      main: blue[300],
    },
    secondary: {
      main: green[300],
    },
    background: {
      default: '#353434',
      paper: '#424242',
    },
    text: {
      primary: '#ffffff',
      secondary: '#000000',
    },
  },
});

export { lightTheme, darkTheme };
