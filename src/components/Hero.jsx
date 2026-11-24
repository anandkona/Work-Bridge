import React from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Chip,
  Grid,
  Stack,
  Avatar,
  AvatarGroup,
  Rating,
  Card,
} from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import VerifiedIcon from '@mui/icons-material/Verified';
import SchoolIcon from '@mui/icons-material/School';
import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import StarsIcon from '@mui/icons-material/Stars';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';

const Hero = () => {
  const scrollToContact = () => {
    const el = document.querySelector('#contact-info');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToCourses = () => {
    const el = document.querySelector('#courses');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Box
      id="home"
      sx={{
        position: 'relative',
        minHeight: { xs: 'auto', md: '88vh' },
        display: 'flex',
        alignItems: 'center',
        background: 'linear-gradient(135deg, #07172F 0%, #0D264E 40%, #153B70 80%, #194685 100%)',
        color: '#FFFFFF',
        pt: { xs: 6, sm: 8, md: 9 },
        pb: { xs: 6, sm: 8, md: 9 },
        overflow: 'hidden',
      }}
    >
      {/* Dynamic Ambient Background Elements */}
      <Box
        sx={{
          position: 'absolute',
          top: -120,
          right: -100,
          width: { xs: 320, md: 620 },
          height: { xs: 320, md: 620 },
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(25, 118, 210, 0.3) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: -120,
          left: -80,
          width: { xs: 280, md: 540 },
          height: { xs: 280, md: 540 },
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(245, 166, 35, 0.2) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      {/* Tech Grid Pattern */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            radial-gradient(rgba(255, 255, 255, 0.08) 1.2px, transparent 1.2px)
          `,
          backgroundSize: '28px 28px',
          opacity: 0.65,
          pointerEvents: 'none',
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
        <Grid container spacing={{ xs: 4, md: 5 }} alignItems="center">
          {/* Left Column: High-Impact Typography & Action Buttons */}
          <Grid size={{ xs: 12, md: 6.5 }}>
            {/* Admissions Announcement Pill */}
            <Chip
              icon={<span className="pulse-indicator" style={{ marginLeft: 8 }} />}
              label="Admissions &amp; Batches Open for 2026"
              size="small"
              sx={{
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(8px)',
                color: '#FFFFFF',
                fontWeight: 600,
                fontSize: { xs: '0.72rem', sm: '0.8rem' },
                border: '1px solid rgba(255, 255, 255, 0.2)',
                mb: 2.2,
                py: 0.3,
              }}
            />

            {/* Main Headline */}
            <Typography
              variant="h1"
              component="h1"
              sx={{
                fontWeight: 800,
                fontSize: { xs: '2.1rem', sm: '2.9rem', md: '3.3rem' },
                lineHeight: 1.16,
                letterSpacing: '-0.025em',
                color: '#FFFFFF',
                mb: 2,
                textShadow: '0 2px 14px rgba(0,0,0,0.35)',
              }}
            >
              Master In-Demand IT Skills With{' '}
              <Box
                component="span"
                sx={{
                  color: '#F5A623',
                  position: 'relative',
                  display: 'inline-block',
                }}
              >
                Work Bridge
              </Box>
            </Typography>

            {/* Subheading */}
            <Typography
              variant="body1"
              sx={{
                color: '#E2E8F0',
                fontSize: { xs: '0.925rem', sm: '1.05rem' },
                lineHeight: 1.65,
                maxWidth: 560,
                mb: 3.5,
              }}
            >
              Accelerate your software career with hands-on training from senior industry mentors. Real-time live projects, 1-on-1 interview preparation, and guaranteed placement assistance.
            </Typography>

            {/* Action Buttons */}
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.8} sx={{ mb: 4 }}>
              <Button
                variant="contained"
                color="secondary"
                size="large"
                onClick={scrollToContact}
                endIcon={<ArrowForwardIcon />}
                sx={{
                  px: 3.5,
                  py: 1.25,
                  fontSize: '0.95rem',
                  fontWeight: 700,
                  borderRadius: 2,
                  boxShadow: '0 6px 20px rgba(245, 166, 35, 0.35)',
                  '&:hover': {
                    boxShadow: '0 8px 24px rgba(245, 166, 35, 0.5)',
                  },
                }}
              >
                Enroll For Free Demo
              </Button>

              <Button
                variant="outlined"
                size="large"
                onClick={scrollToCourses}
                sx={{
                  px: 3,
                  py: 1.25,
                  fontSize: '0.95rem',
                  fontWeight: 600,
                  borderRadius: 2,
                  color: '#FFFFFF',
                  borderColor: 'rgba(255, 255, 255, 0.35)',
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  '&:hover': {
                    borderColor: '#FFFFFF',
                    backgroundColor: 'rgba(255, 255, 255, 0.12)',
                  },
                }}
              >
                Explore All Courses
              </Button>
            </Stack>

            {/* Key Trust Checkpoints */}
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: { xs: 2, sm: 3 },
                flexWrap: 'wrap',
                pt: 2.5,
                borderTop: '1px solid rgba(255, 255, 255, 0.15)',
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.8 }}>
                <CheckCircleIcon sx={{ color: '#10B981', fontSize: 18 }} />
                <Typography variant="body2" sx={{ color: '#F1F5F9', fontWeight: 600, fontSize: '0.85rem' }}>
                  100% Placement Assistance
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.8 }}>
                <CheckCircleIcon sx={{ color: '#10B981', fontSize: 18 }} />
                <Typography variant="body2" sx={{ color: '#F1F5F9', fontWeight: 600, fontSize: '0.85rem' }}>
                  Live Project Training
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.8 }}>
                <CheckCircleIcon sx={{ color: '#10B981', fontSize: 18 }} />
                <Typography variant="body2" sx={{ color: '#F1F5F9', fontWeight: 600, fontSize: '0.85rem' }}>
                  Mock Technical Interviews
                </Typography>
              </Box>
            </Box>
          </Grid>

          {/* Right Column: Visual Showcase Photo & Student Highlights */}
          <Grid size={{ xs: 12, md: 5.5 }}>
            <Box
              sx={{
                position: 'relative',
                mx: 'auto',
                maxWidth: { xs: 440, md: 520 },
              }}
            >
              {/* Main Visual Image Card */}
              <Box
                sx={{
                  position: 'relative',
                  borderRadius: 4,
                  overflow: 'hidden',
                  boxShadow: '0 25px 60px rgba(0, 0, 0, 0.45)',
                  border: '2px solid rgba(255, 255, 255, 0.15)',
                  backgroundColor: '#0F172A',
                }}
              >
                <Box
                  component="img"
                  src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200&q=85"
                  alt="Work Bridge Hands-on Software Engineering, Coding & Tech Training"
                  sx={{
                    width: '100%',
                    height: { xs: 320, sm: 380, md: 440 },
                    objectFit: 'cover',
                    display: 'block',
                    filter: 'contrast(1.06) brightness(0.96)',
                  }}
                />

                {/* Gradient shade overlay */}
                <Box
                  sx={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(15, 23, 42, 0.85) 0%, rgba(15, 23, 42, 0.15) 50%, transparent 100%)',
                  }}
                />

                {/* Bottom caption overlay inside image */}
                <Box
                  sx={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    p: { xs: 2, sm: 2.5 },
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Box>
                      <Typography variant="subtitle2" sx={{ fontWeight: 800, color: '#FFFFFF', fontSize: '0.95rem' }}>
                        Modern Interactive Classrooms
                      </Typography>
                      <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.75rem' }}>
                        Hyderabad (SR Nagar, Kukatpally, Madhapur) &amp; Bangalore
                      </Typography>
                    </Box>
                    <Chip
                      icon={<StarsIcon sx={{ fontSize: '14px !important', color: '#153B70' }} />}
                      label="ISO Certified"
                      size="small"
                      sx={{
                        backgroundColor: '#F5A623',
                        color: '#153B70',
                        fontWeight: 800,
                        fontSize: '0.7rem',
                      }}
                    />
                  </Box>
                </Box>
              </Box>

              {/* Floating Badge 1: Top Left - 50,000+ Alumni with Avatars */}
              <Card
                sx={{
                  position: 'absolute',
                  top: { xs: 8, sm: -15 },
                  left: { xs: 8, sm: -15 },
                  backgroundColor: 'rgba(255, 255, 255, 0.95)',
                  backdropFilter: 'blur(12px)',
                  borderRadius: 2.5,
                  p: { xs: 1, sm: 1.5 },
                  boxShadow: '0 12px 30px rgba(0, 0, 0, 0.25)',
                  border: '1px solid rgba(255, 255, 255, 0.8)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: { xs: 1, sm: 1.5 },
                  zIndex: 3,
                }}
              >
                <AvatarGroup max={3} sx={{ '& .MuiAvatar-root': { width: { xs: 26, sm: 30 }, height: { xs: 26, sm: 30 }, fontSize: '0.7rem' } }}>
                  <Avatar alt="Student" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80" />
                  <Avatar alt="Student" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80" />
                  <Avatar alt="Student" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80" />
                </AvatarGroup>
                <Box>
                  <Typography variant="subtitle2" sx={{ color: '#153B70', fontWeight: 800, fontSize: { xs: '0.78rem', sm: '0.85rem' }, lineHeight: 1.1 }}>
                    50,000+
                  </Typography>
                  <Typography variant="caption" sx={{ color: '#64748B', fontWeight: 600, fontSize: { xs: '0.65rem', sm: '0.7rem' } }}>
                    Successful Alumni
                  </Typography>
                </Box>
              </Card>

              {/* Floating Badge 2: Bottom Right - 95% Placement Rate */}
              <Card
                sx={{
                  position: 'absolute',
                  bottom: { xs: 10, sm: 25 },
                  right: { xs: 8, sm: -15 },
                  backgroundColor: 'rgba(21, 59, 112, 0.95)',
                  backdropFilter: 'blur(12px)',
                  borderRadius: 2.5,
                  p: { xs: 1, sm: 1.5 },
                  boxShadow: '0 14px 35px rgba(0, 0, 0, 0.35)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: { xs: 1, sm: 1.5 },
                  zIndex: 3,
                  color: '#FFFFFF',
                }}
              >
                <Box
                  sx={{
                    width: { xs: 32, sm: 38 },
                    height: { xs: 32, sm: 38 },
                    borderRadius: 1.8,
                    backgroundColor: 'rgba(245, 166, 35, 0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <TrendingUpIcon sx={{ color: '#F5A623', fontSize: { xs: 18, sm: 22 } }} />
                </Box>
                <Box>
                  <Typography variant="subtitle2" sx={{ color: '#FFFFFF', fontWeight: 800, fontSize: { xs: '0.8rem', sm: '0.9rem' }, lineHeight: 1.1 }}>
                    95% Placed
                  </Typography>
                  <Typography variant="caption" sx={{ color: '#CBD5E1', fontSize: { xs: '0.65rem', sm: '0.7rem' } }}>
                    Top MNC Referrals
                  </Typography>
                </Box>
              </Card>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Hero;
