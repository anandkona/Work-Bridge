import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  Chip,
} from '@mui/material';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import BusinessIcon from '@mui/icons-material/Business';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import EmailIcon from '@mui/icons-material/Email';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const TrainingOptions = () => {
  const scrollToContact = (mode) => {
    const el = document.querySelector('#contact-form');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Box
      id="trainings"
      sx={{
        py: { xs: 6, md: 7.5 },
        backgroundColor: '#FFFFFF',
        borderTop: '1px solid #E2E8F0',
        borderBottom: '1px solid #E2E8F0',
      }}
    >
      <Container maxWidth="lg">
        {/* Section Heading */}
        <Box sx={{ textAlign: 'center', maxWidth: 680, mx: 'auto', mb: { xs: 4, md: 5 } }}>
          <Chip
            label="Flexible Modes of Learning"
            size="small"
            sx={{
              backgroundColor: 'rgba(25, 118, 210, 0.1)',
              color: '#153B70',
              fontWeight: 700,
              fontSize: '0.75rem',
              mb: 1,
            }}
          />
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
            Looking for IT Training?
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.95rem' }}>
            Choose the delivery mode that best matches your lifestyle, schedule, and career goals.
          </Typography>
        </Box>

        {/* Side-by-Side Cards */}
        <Grid container spacing={3} justifyContent="center">
          {/* Card 1: Online Training */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Card
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                borderRadius: 3,
                border: '1.5px solid #E2E8F0',
                background: 'linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 100%)',
                p: { xs: 2, sm: 3 },
                position: 'relative',
                overflow: 'hidden',
                transition: 'all 0.25s ease',
                '&:hover': {
                  borderColor: '#1976D2',
                  boxShadow: '0 12px 28px rgba(25, 118, 210, 0.1)',
                  transform: 'translateY(-4px)',
                },
              }}
            >
              <Box
                sx={{
                  position: 'absolute',
                  top: 0,
                  right: 0,
                  backgroundColor: '#1976D2',
                  color: '#FFFFFF',
                  px: 2,
                  py: 0.4,
                  borderBottomLeftRadius: 10,
                  fontSize: '0.7rem',
                  fontWeight: 700,
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase',
                }}
              >
                Global Access
              </Box>

              <CardContent sx={{ p: 0, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2 }}>
                  <Box
                    sx={{
                      width: 48,
                      height: 48,
                      borderRadius: 2,
                      backgroundColor: 'rgba(25, 118, 210, 0.1)',
                      color: '#1976D2',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <LaptopMacIcon sx={{ fontSize: 26 }} />
                  </Box>
                  <Box>
                    <Typography variant="h5" component="h3" sx={{ fontWeight: 800, color: '#153B70', fontSize: '1.2rem' }}>
                      Online Training
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      Live interactive sessions from anywhere
                    </Typography>
                  </Box>
                </Box>

                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, mb: 2.5 }}>
                  {[
                    'Live video sessions with screen sharing and hands-on coding',
                    'Cloud-based lab instances with 24/7 access',
                    'Session recordings & digital course assets provided daily',
                    'Flexible timings for working professionals & international students',
                  ].map((point) => (
                    <Box key={point} sx={{ display: 'flex', alignItems: 'flex-start', gap: 1 }}>
                      <CheckCircleOutlineIcon sx={{ fontSize: 17, color: '#10B981', mt: 0.3, flexShrink: 0 }} />
                      <Typography variant="body2" sx={{ color: '#334155', fontSize: '0.84rem' }}>
                        {point}
                      </Typography>
                    </Box>
                  ))}
                </Box>

                {/* Direct Contact Links */}
                <Box
                  sx={{
                    backgroundColor: '#FFFFFF',
                    borderRadius: 2,
                    p: 1.5,
                    mb: 2.5,
                    border: '1px solid #E2E8F0',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 0.8,
                  }}
                >
                  <Box
                    component="a"
                    href="tel:+918978945209"
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 1.2,
                      color: '#153B70',
                      textDecoration: 'none',
                      fontWeight: 600,
                      fontSize: '0.875rem',
                      '&:hover': { color: '#1976D2' },
                    }}
                  >
                    <PhoneInTalkIcon sx={{ fontSize: 17, color: '#1976D2' }} />
                    <span>Phone: +91 8978945209</span>
                  </Box>
                  <Box
                    component="a"
                    href="mailto:online@workbridge.com"
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 1.2,
                      color: '#153B70',
                      textDecoration: 'none',
                      fontWeight: 600,
                      fontSize: '0.875rem',
                      '&:hover': { color: '#1976D2' },
                    }}
                  >
                    <EmailIcon sx={{ fontSize: 17, color: '#1976D2' }} />
                    <span>Email: online@workbridge.com</span>
                  </Box>
                </Box>

                <Button
                  variant="contained"
                  color="primary"
                  size="medium"
                  fullWidth
                  onClick={() => scrollToContact('Online')}
                  sx={{
                    py: 1,
                    fontSize: '0.9rem',
                    fontWeight: 700,
                    mt: 'auto',
                  }}
                >
                  Contact for Online Training
                </Button>
              </CardContent>
            </Card>
          </Grid>

          {/* Card 2: Classroom Training */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Card
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                borderRadius: 3,
                border: '1.5px solid #E2E8F0',
                background: 'linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 100%)',
                p: { xs: 2, sm: 3 },
                position: 'relative',
                overflow: 'hidden',
                transition: 'all 0.25s ease',
                '&:hover': {
                  borderColor: '#F5A623',
                  boxShadow: '0 12px 28px rgba(245, 166, 35, 0.12)',
                  transform: 'translateY(-4px)',
                },
              }}
            >
              <Box
                sx={{
                  position: 'absolute',
                  top: 0,
                  right: 0,
                  backgroundColor: '#F5A623',
                  color: '#153B70',
                  px: 2,
                  py: 0.4,
                  borderBottomLeftRadius: 10,
                  fontSize: '0.7rem',
                  fontWeight: 800,
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase',
                }}
              >
                In-Person & Labs
              </Box>

              <CardContent sx={{ p: 0, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2 }}>
                  <Box
                    sx={{
                      width: 48,
                      height: 48,
                      borderRadius: 2,
                      backgroundColor: 'rgba(245, 166, 35, 0.15)',
                      color: '#D98910',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <BusinessIcon sx={{ fontSize: 26 }} />
                  </Box>
                  <Box>
                    <Typography variant="h5" component="h3" sx={{ fontWeight: 800, color: '#153B70', fontSize: '1.2rem' }}>
                      Classroom Training
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      Hands-on offline training at prime IT hubs
                    </Typography>
                  </Box>
                </Box>

                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, mb: 2.5 }}>
                  {[
                    'Face-to-face mentorship with senior corporate specialists',
                    'Dedicated lab workstations with modern test tools and software',
                    'Group discussions, peer code reviews, and mock interview rooms',
                    'Multiple centers in Hyderabad (SR Nagar, Kukatpally, Madhapur) & Bangalore',
                  ].map((point) => (
                    <Box key={point} sx={{ display: 'flex', alignItems: 'flex-start', gap: 1 }}>
                      <CheckCircleOutlineIcon sx={{ fontSize: 17, color: '#10B981', mt: 0.3, flexShrink: 0 }} />
                      <Typography variant="body2" sx={{ color: '#334155', fontSize: '0.84rem' }}>
                        {point}
                      </Typography>
                    </Box>
                  ))}
                </Box>

                {/* Direct Contact Links */}
                <Box
                  sx={{
                    backgroundColor: '#FFFFFF',
                    borderRadius: 2,
                    p: 1.5,
                    mb: 2.5,
                    border: '1px solid #E2E8F0',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 0.8,
                  }}
                >
                  <Box
                    component="a"
                    href="tel:040-66664291"
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 1.2,
                      color: '#153B70',
                      textDecoration: 'none',
                      fontWeight: 600,
                      fontSize: '0.875rem',
                      '&:hover': { color: '#F5A623' },
                    }}
                  >
                    <PhoneInTalkIcon sx={{ fontSize: 17, color: '#F5A623' }} />
                    <span>Phone: 040-66664291 / 92</span>
                  </Box>
                  <Box
                    component="a"
                    href="mailto:info@workbridge.com"
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 1.2,
                      color: '#153B70',
                      textDecoration: 'none',
                      fontWeight: 600,
                      fontSize: '0.875rem',
                      '&:hover': { color: '#F5A623' },
                    }}
                  >
                    <EmailIcon sx={{ fontSize: 17, color: '#F5A623' }} />
                    <span>Email: info@workbridge.com</span>
                  </Box>
                </Box>

                <Button
                  variant="contained"
                  color="secondary"
                  size="medium"
                  fullWidth
                  onClick={() => scrollToContact('Classroom')}
                  sx={{
                    py: 1,
                    fontSize: '0.9rem',
                    fontWeight: 700,
                    mt: 'auto',
                  }}
                >
                  Contact for Classroom Training
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default TrainingOptions;
