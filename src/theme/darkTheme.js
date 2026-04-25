import { createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#2BB673',
      contrastText: '#000000',
    },
    secondary: {
      main: '#538163',
    },
    error: {
      main: '#F97883',
    },
    background: {
      default: '#0A0E0C',
      paper: '#141C18',
    },
    text: {
      primary: '#E0F2E9',
      secondary: '#A3B8AD',
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

export default darkTheme;
