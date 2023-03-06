import { createTheme, Theme } from '@mui/material/styles';
import { CSSProperties } from '@mui/material/styles/createTypography';

import '../assets/fonts/fonts.css';
import palette from './palette';

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    body3: true;
    body4: true;
    button2: true;
  }
}

declare module '@mui/material/styles' {
  interface Palette {
    highlight: string;
  }

  interface PaletteOptions {
    highlight: string;
  }

  interface TypographyVariants {
    body3: CSSProperties;
    body4: CSSProperties;
    button2: CSSProperties;
  }

  interface TypographyVariantsOptions {
    body3: CSSProperties;
    body4: CSSProperties;
    button2: CSSProperties;
  }
}

const baseTheme = createTheme({
  palette: {
    primary: {
      main: palette.white,
      dark: palette.black,
      light: palette.white,
      contrastText: palette.white,
    },
    secondary: {
      main: palette.black,
    },
    highlight: palette.backgroundDark,
    background: {
      default: palette.backgroundDark,
    },
    text: {
      primary: palette.white,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          margin: 0,
          padding: 0,
          fontFamily: 'Roc-Grotesk-Regular',
        },
      },
    },
  },
  breakpoints: {
    values: {
      xs: 380,
      sm: 600,
      md: 769,
      lg: 1025,
      xl: 1441,
    },
  },
  typography: {
    h1: {
      fontSize: 100,
      fontWeight: 700,
      letterSpacing: '0.03em',
      lineHeight: '120%',
      textTransform: 'uppercase',
      fontFamily: 'Roc-Grotesk-Bold',
    },
    h2: {
      fontSize: 40,
      fontWeight: 700,
      letterSpacing: 0,
      lineHeight: '120%',
      textTransform: 'uppercase',
      fontFamily: 'Roc-Grotesk-Bold',
    },
    h3: {
      fontSize: 32,
      fontWeight: 700,
      letterSpacing: 0,
      lineHeight: '120%',
      fontFamily: 'Roc-Grotesk-Bold',
    },
    h4: {
      fontSize: 16,
      fontWeight: 700,
      letterSpacing: 0,
      lineHeight: '120%',
      fontFamily: 'Roc-Grotesk-Bold',
    },
    body1: {
      fontSize: 16,
      fontWeight: 400,
      letterSpacing: 0,
      lineHeight: '120%',
      fontFamily: 'Roc-Grotesk-Regular',
    },
    body2: {
      fontSize: 16,
      fontWeight: 400,
      letterSpacing: 0,
      lineHeight: '150%',
    },
    body3: {
      fontSize: 14,
      fontWeight: 400,
      letterSpacing: 0,
      lineHeight: '120%',
    },
    body4: {
      fontSize: 16,
      fontWeight: 400,
      letterSpacing: 0,
      lineHeight: '120%',
    },
    subtitle1: {
      fontSize: 20,
      fontWeight: 400,
      letterSpacing: 0,
      lineHeight: '140%',
      fontFamily: 'Roc-Grotesk-Regular',
    },
    subtitle2: {
      fontSize: 24,
      fontWeight: 600,
      letterSpacing: '0.03em',
      lineHeight: '120%',
    },
    button: {
      fontSize: 24,
      fontWeight: 600,
      letterSpacing: '0.03em',
      lineHeight: '105%',
    },
    button2: {
      fontSize: 16,
      fontWeight: 400,
      letterSpacing: '0.05em',
      lineHeight: '120%',
    },
    allVariants: {
      color: palette.white,
    },
  },
});

const theme: Theme = {
  ...baseTheme,
  typography: {
    ...baseTheme.typography,
    h1: {
      ...baseTheme.typography.h1,
      [baseTheme.breakpoints.down('sm')]: {
        fontSize: 56,
      },
    },
    h2: {
      ...baseTheme.typography.h2,
      [baseTheme.breakpoints.down('sm')]: {
        fontSize: 36,
      },
    },
    h3: {
      ...baseTheme.typography.h3,
      [baseTheme.breakpoints.down('sm')]: {
        fontSize: 24,
      },
    },
    subtitle1: {
      ...baseTheme.typography.subtitle1,
      [baseTheme.breakpoints.down('sm')]: {
        fontSize: 20,
        fontWeight: 400,
      },
    },
    body1: {
      ...baseTheme.typography.body1,
      [baseTheme.breakpoints.down('sm')]: {
        fontSize: 16,
      },
    },
    body2: {
      ...baseTheme.typography.body2,
      [baseTheme.breakpoints.down('sm')]: {
        fontSize: 16,
      },
    },
    button: {
      ...baseTheme.typography.button,
      [baseTheme.breakpoints.down('sm')]: {
        fontSize: 16,
        fontWeight: 600,
      },
    },
    button2: {
      ...baseTheme.typography.button2,
      [baseTheme.breakpoints.down('sm')]: {
        fontSize: 20,
        fontWeight: 600,
        letterSpacing: '0',
      },
    },
  },
};

export default theme;
