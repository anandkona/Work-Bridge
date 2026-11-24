import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent } from '@mui/material';
import CastForEducationIcon from '@mui/icons-material/CastForEducation';
import PsychologyIcon from '@mui/icons-material/Psychology';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import HandshakeIcon from '@mui/icons-material/Handshake';

const features = [
  {
    icon: <CastForEducationIcon sx={{ fontSize: 38, color: '#153B70' }} />,
    title: 'Instructor-led Sessions',
    description: 'Learn directly from experienced industry trainers with decades of collective corporate experience.',
    tag: 'Live Interactive',
  },
  {
    icon: <PsychologyIcon sx={{ fontSize: 38, color: '#1976D2' }} />,
    title: 'Real-time Scenarios',
    description: 'Gain practical knowledge through real-world projects, live enterprise testing suites, and case studies.',
    tag: 'Hands-on Labs',
  },
  {
    icon: <MenuBookIcon sx={{ fontSize: 38, color: '#D98910' }} />,
    title: 'Well Prepared Material',
    description: 'Access structured learning materials, cheat sheets, interview Q&A banks, and recorded sessions 24/7.',
    tag: 'Curated Assets',
  },
  {
    icon: <HandshakeIcon sx={{ fontSize: 38, color: '#10B981' }} />,
    title: 'Placement Assistance',
    description: 'Get tailored career guidance, mock technical interviews, resume building, and corporate referrals.',
    tag: 'Career Driven',
  },
];

const Features = () => {
  return (
    <Box id="why-choose" sx={{ py: { xs: 6, md: 7.5 }, backgroundColor: '#F8FAFC' }}>
      <Container maxWidth="lg">
        {/* Section Header */}
        <Box sx={{ textAlign: 'center', maxWidth: 680, mx: 'auto', mb: { xs: 4, md: 5 } }}>
          <Typography
            variant="overline"
            sx={{
              color: '#1976D2',
              fontWeight: 700,
              fontSize: '0.8rem',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              display: 'block',
              mb: 0.5,
            }}
          >
            Why Choose Work Bridge
          </Typography>
          <Typography
            variant="h3"
            component="h2"
            sx={{
              color: '#153B70',
              fontWeight: 800,
              mb: 1.5,
              fontSize: { xs: '1.6rem', md: '2rem' },
            }}
          >
            Empowering Your Professional Journey
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.95rem' }}>
            We bridge the gap between academic education and industry demands with state-of-the-art software testing and development training.
          </Typography>
        </Box>

        {/* Feature Cards Grid */}
        <Grid container spacing={2.5}>
          {features.map((feature, index) => (
            <Grid key={feature.title} size={{ xs: 12, sm: 6, md: 3 }}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  backgroundColor: '#FFFFFF',
                  borderRadius: 2.5,
                  p: 0.5,
                  position: 'relative',
                  overflow: 'hidden',
                  border: '1px solid #E2E8F0',
                  boxShadow: '0 2px 10px rgba(15, 23, 42, 0.04)',
                  transition: 'all 0.25s ease',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 10px 24px rgba(21, 59, 112, 0.1)',
                    borderColor: '#93C5FD',
                    '& .icon-box': {
                      backgroundColor: 'rgba(25, 118, 210, 0.12)',
                      transform: 'scale(1.05)',
                    },
                  },
                }}
              >
                {/* Accent Top Border */}
                <Box
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 3,
                    background:
                      index === 0
                        ? '#153B70'
                        : index === 1
                        ? '#1976D2'
                        : index === 2
                        ? '#F5A623'
                        : '#10B981',
                  }}
                />

                <CardContent sx={{ p: 2, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                  <Box
                    className="icon-box"
                    sx={{
                      width: 48,
                      height: 48,
                      borderRadius: 2,
                      backgroundColor: 'rgba(21, 59, 112, 0.06)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mb: 1.8,
                      transition: 'all 0.25s ease',
                      '& svg': { fontSize: 26 },
                    }}
                  >
                    {feature.icon}
                  </Box>

                  <Typography
                    variant="h6"
                    component="h3"
                    sx={{
                      color: '#153B70',
                      fontWeight: 700,
                      mb: 1,
                      fontSize: '1.05rem',
                    }}
                  >
                    {feature.title}
                  </Typography>

                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{
                      fontSize: '0.84rem',
                      lineHeight: 1.55,
                      mb: 1.5,
                      flexGrow: 1,
                    }}
                  >
                    {feature.description}
                  </Typography>

                  <Box
                    sx={{
                      pt: 1.2,
                      borderTop: '1px solid #F1F5F9',
                      display: 'flex',
                      alignItems: 'center',
                    }}
                  >
                    <Typography
                      variant="caption"
                      sx={{
                        color: '#64748B',
                        fontWeight: 600,
                        fontSize: '0.72rem',
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em',
                      }}
                    >
                      {feature.tag}
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Features;
