import React from 'react';
import { Box, Typography } from '@mui/material';

const Logo = ({ light = false, height = 60 }) => {
  return (
    <Box
      component="a"
      href="#"
      sx={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 1.5,
        textDecoration: 'none',
        userSelect: 'none',
      }}
    >
      <Box
        component="img"
        src="/logo.png"
        alt="Work Bridge Logo"
        sx={{
          height: height,
          width: height,
          objectFit: 'contain',
          borderRadius: '10px',
          flexShrink: 0,
          backgroundColor: '#FFFFFF',
          p: 0.5,
          // border: '2px solid #153B70',
          boxShadow: '5px 5px 5px rgba(21, 59, 112, 0.15)',
        }}
      />

      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <Box sx={{ display: 'flex', alignItems: 'baseline', gap: 0.5 }}>
          <Typography
            sx={{
              fontFamily: '"Poppins", sans-serif',
              fontWeight: 800,
              fontSize: height * 0.48,
              lineHeight: 1.1,
              letterSpacing: '0.02em',
              color: light ? '#FFFFFF' : '#153B70',
            }}
          >
            WORK
          </Typography>
          <Typography
            sx={{
              fontFamily: '"Poppins", sans-serif',
              fontWeight: 800,
              fontSize: height * 0.48,
              lineHeight: 1.1,
              color: '#F5A623',
            }}
          >
            BRIDGE
          </Typography>
        </Box>
        <Typography
          sx={{
            fontFamily: '"Inter", sans-serif',
            fontWeight: 700,
            fontSize: height * 0.22,
            letterSpacing: '0.22em',
            color: light ? '#CBD5E1' : '#64748B',
            textTransform: 'uppercase',
            mt: -0.2,
          }}
        >
          TRAINING & CONSULTING
        </Typography>
      </Box>
    </Box>
  );
};

export default Logo;
