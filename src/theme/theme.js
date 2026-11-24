import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#153B70', // Navy Blue
      dark: '#0D274D',
      light: '#245296',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#1976D2', // Vibrant Blue
      dark: '#115293',
      light: '#4791db',
      contrastText: '#FFFFFF',
    },
    accent: {
      main: '#F5A623', // Vibrant Amber/Orange
      dark: '#D98910',
      light: '#FFBA4D',
      contrastText: '#153B70',
    },
    background: {
      default: '#F8FAFC',
      paper: '#FFFFFF',
      subtle: '#EEF2F6',
    },
    text: {
      primary: '#1E293B',
      secondary: '#475569',
      disabled: '#94A3B8',
    },
    divider: '#E2E8F0',
    success: {
      main: '#10B981',
      dark: '#059669',
    },
  },
  typography: {
    fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    h1: {
      fontFamily: '"Poppins", "Inter", sans-serif',
      fontWeight: 800,
      fontSize: '2.75rem',
      lineHeight: 1.2,
      letterSpacing: '-0.02em',
      '@media (max-width:600px)': {
        fontSize: '2rem',
      },
    },
    h2: {
      fontFamily: '"Poppins", "Inter", sans-serif',
      fontWeight: 700,
      fontSize: '2.25rem',
      lineHeight: 1.25,
      letterSpacing: '-0.01em',
      '@media (max-width:600px)': {
        fontSize: '1.75rem',
      },
    },
    h3: {
      fontFamily: '"Poppins", "Inter", sans-serif',
      fontWeight: 700,
      fontSize: '1.75rem',
      lineHeight: 1.3,
      '@media (max-width:600px)': {
        fontSize: '1.4rem',
      },
    },
    h4: {
      fontWeight: 600,
      fontSize: '1.35rem',
      lineHeight: 1.35,
    },
    h5: {
      fontWeight: 600,
      fontSize: '1.15rem',
      lineHeight: 1.4,
    },
    h6: {
      fontWeight: 600,
      fontSize: '1rem',
      lineHeight: 1.45,
    },
    subtitle1: {
      fontSize: '1.1rem',
      lineHeight: 1.6,
      color: '#475569',
    },
    subtitle2: {
      fontSize: '0.925rem',
      fontWeight: 500,
      lineHeight: 1.5,
      color: '#64748B',
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.65,
      color: '#334155',
    },
    body2: {
      fontSize: '0.885rem',
      lineHeight: 1.6,
      color: '#475569',
    },
    button: {
      fontWeight: 600,
      textTransform: 'none',
      letterSpacing: '0.01em',
    },
  },
  shape: {
    borderRadius: 10,
  },
  shadows: [
    'none',
    '0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04)',
    '0 3px 6px rgba(0,0,0,0.06), 0 2px 4px rgba(0,0,0,0.04)',
    '0 6px 12px rgba(0,0,0,0.06), 0 4px 6px rgba(0,0,0,0.04)',
    '0 10px 20px rgba(0,0,0,0.07), 0 6px 6px rgba(0,0,0,0.04)',
    '0 14px 28px rgba(0,0,0,0.08), 0 10px 10px rgba(0,0,0,0.05)',
    '0 18px 36px rgba(0,0,0,0.09), 0 12px 12px rgba(0,0,0,0.05)',
    '0 22px 44px rgba(0,0,0,0.10), 0 14px 14px rgba(0,0,0,0.06)',
    '0 25px 50px -12px rgba(0, 0, 0, 0.15)',
    ...Array(16).fill('0 25px 50px -12px rgba(0, 0, 0, 0.15)'),
  ],
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: '10px 22px',
          fontSize: '0.95rem',
          transition: 'all 0.25s ease-in-out',
          boxShadow: 'none',
          '&:hover': {
            boxShadow: '0 6px 16px rgba(21, 59, 112, 0.2)',
            transform: 'translateY(-1px)',
          },
        },
        containedPrimary: {
          background: 'linear-gradient(135deg, #153B70 0%, #1976D2 100%)',
          '&:hover': {
            background: 'linear-gradient(135deg, #0F2E59 0%, #1565C0 100%)',
          },
        },
        containedSecondary: {
          backgroundColor: '#F5A623',
          color: '#153B70',
          fontWeight: 700,
          '&:hover': {
            backgroundColor: '#E09415',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 14,
          border: '1px solid #E2E8F0',
          boxShadow: '0 4px 16px rgba(15, 23, 42, 0.05)',
          transition: 'transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease',
          '&:hover': {
            transform: 'translateY(-4px)',
            boxShadow: '0 12px 28px rgba(15, 23, 42, 0.1)',
            borderColor: '#CBD5E1',
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: 8,
            backgroundColor: '#FFFFFF',
            '&:hover fieldset': {
              borderColor: '#1976D2',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#153B70',
              borderWidth: '2px',
            },
          },
        },
      },
    },
  },
});

export default theme;
