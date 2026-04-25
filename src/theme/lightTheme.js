import { createTheme } from '@mui/material/styles';

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#2BB673',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#538163',
    },
    error: {
      main: '#F97883',
    },
    background: {
      default: '#F4F9F6',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#0A1C14',
      secondary: '#538163',
    },
  },
  shape: {
    borderRadius: 16,
  },
  typography: {
    fontFamily: '"Manrope", "Inter", sans-serif',
    h1: { fontWeight: 800 },
    h2: { fontWeight: 700 },
  },
});

export default lightTheme;
