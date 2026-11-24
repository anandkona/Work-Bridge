import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, Button, Chip } from '@mui/material';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const events = [
  {
    title: 'Free Webinar: AI in Test Automation 2026',
    date: 'Saturday, Dec 5, 2026',
    time: '11:00 AM - 1:00 PM IST',
    mode: 'Online Live Stream',
    speaker: 'Senior QA Architect (Ex-Microsoft)',
    tag: 'Webinar',
  },
  {
    title: 'Hands-on Workshop: Selenium 4 & Cucumber BDD',
    date: 'Sunday, Dec 13, 2026',
    time: '10:00 AM - 2:00 PM IST',
    mode: 'SR Nagar Lab & Virtual',
    speaker: 'Principal SDET Consultant',
    tag: 'Workshop',
  },
  {
    title: 'Career Meetup & Resume Clinic for Freshers',
    date: 'Saturday, Dec 19, 2026',
    time: '2:00 PM - 5:00 PM IST',
    mode: 'Kukatpally Center',
    speaker: 'HR & Placement Panel',
    tag: 'Career Meetup',
  },
];

const Events = () => {
  const scrollToContact = () => {
    const el = document.querySelector('#contact-form');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Box id="events" sx={{ py: { xs: 6, md: 8 }, backgroundColor: '#FFFFFF', borderTop: '1px solid #E2E8F0' }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', maxWidth: 680, mx: 'auto', mb: { xs: 4, md: 5 } }}>
          <Chip
            label="Knowledge Hub & Workshops"
            size="small"
            sx={{
              backgroundColor: 'rgba(245, 166, 35, 0.15)',
              color: '#D97706',
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
            Upcoming Events & Free Webinars
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.95rem' }}>
            Join our interactive masterclasses, tech sessions, and industry career workshops at zero cost.
          </Typography>
        </Box>

        <Grid container spacing={2.5} justifyContent="center">
          {events.map((evt) => (
            <Grid key={evt.title} size={{ xs: 12, md: 4 }}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  backgroundColor: '#F8FAFC',
                  borderRadius: 2.5,
                  p: 0.5,
                  border: '1.5px solid #E2E8F0',
                  boxShadow: '0 2px 10px rgba(15, 23, 42, 0.04)',
                  transition: 'all 0.25s ease',
                  '&:hover': {
                    borderColor: '#1976D2',
                    transform: 'translateY(-3px)',
                    boxShadow: '0 10px 24px rgba(25, 118, 210, 0.1)',
                  },
                }}
              >
                <CardContent sx={{ p: 2, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1.5 }}>
                    <Chip
                      label={evt.tag}
                      size="small"
                      sx={{
                        backgroundColor: '#153B70',
                        color: '#FFFFFF',
                        fontWeight: 700,
                        fontSize: '0.7rem',
                        height: 22,
                      }}
                    />
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, color: '#10B981', fontSize: '0.75rem', fontWeight: 600 }}>
                      <span className="pulse-indicator" style={{ width: 6, height: 6 }} />
                      Free Registration
                    </Box>
                  </Box>

                  <Typography variant="h6" sx={{ fontWeight: 800, color: '#153B70', fontSize: '1.05rem', mb: 1.5, lineHeight: 1.35 }}>
                    {evt.title}
                  </Typography>

                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.8, mb: 2, fontSize: '0.8rem', color: '#475569' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.8 }}>
                      <EventAvailableIcon sx={{ fontSize: 16, color: '#1976D2' }} />
                      <span>{evt.date}</span>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.8 }}>
                      <AccessTimeIcon sx={{ fontSize: 16, color: '#1976D2' }} />
                      <span>{evt.time}</span>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.8 }}>
                      <LocationOnIcon sx={{ fontSize: 16, color: '#1976D2' }} />
                      <span>{evt.mode}</span>
                    </Box>
                  </Box>

                  <Typography variant="caption" sx={{ color: '#64748B', display: 'block', mb: 2, fontStyle: 'italic' }}>
                    Mentor: {evt.speaker}
                  </Typography>

                  <Button
                    variant="outlined"
                    color="primary"
                    size="small"
                    fullWidth
                    onClick={scrollToContact}
                    sx={{ mt: 'auto', fontWeight: 700, borderRadius: 1.8, py: 0.8, fontSize: '0.825rem' }}
                  >
                    Reserve Free Seat
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Events;
