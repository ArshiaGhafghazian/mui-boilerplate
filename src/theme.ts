'use client';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'var(--font-iranSans)',
  },
  direction: 'rtl',
  palette: {
    mode: "light",
    common: {
      black: "#11161a", // Custom black
      white: "#f7f1e3", // Off-white
    },
    primary: {
      light: "#1c242b", // A lighter shade of #11161a
      main: "#11161a", // Custom black
      dark: "#0b0c0d", // A darker shade of #11161a
      contrastText: "#f7f1e3", // Off-white for readability
    },
    secondary: {
      light: "#54b08f", // A lighter shade of #218c74
      main: "#218c74", // Green
      dark: "#165f52", // A darker shade of #218c74
      contrastText: "#f7f1e3", // Off-white
    },
    success: {
      light: "#d6c093", // A lighter shade of #ccae62
      main: "#ccae62", // Golden
      dark: "#9a8046", // A darker shade of #ccae62
      contrastText: "#11161a", // Custom black
    },
    info: {
      light: "#a6a6a6", // A lighter shade of #84817a
      main: "#84817a", // Grey
      dark: "#5e5e5e", // A darker shade of #84817a
      contrastText: "#f7f1e3", // Off-white
    },
    background: {
      default: "#f7f1e3", // Off-white
      paper: "#F1F1F1", // Soft greenish tone
    },
    text: {
      primary: "#11161a", // Custom black for primary text
      secondary: "#84817a", // Grey for secondary text
    },

  },
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: '#e3e3e3', // Border color for all input components
          },
          // '&:hover .MuiOutlinedInput-notchedOutline': {
          //   borderColor: '#e3e3e3', // Border color on hover
          // },
          // '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
          //   borderColor: '#e3e3e3', // Border color when focused
          // },
        },
      },
    },
  }

})

export default theme;
