import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Divider,
  IconButton,
} from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import EmailIcon from '@mui/icons-material/Email';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import Logo from './Logo';

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about-us' },
  { label: 'Trainings', href: '#trainings' },
  { label: 'Courses', href: '#courses' },
  { label: 'Placements', href: '#why-choose' },
  { label: 'Clients', href: '#clients' },
  { label: 'Events', href: '#events' },
  { label: 'New Batches', href: '#new-batches' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact Us', href: '#contact-form' },
];

const coursesLinks = [
  'Certified SDET',
  'Software Testing Tools',
  'Selenium Automation',
  'Angular Framework',
  'AWS Cloud Solutions',
  'Python Data Science',
];

const Footer = () => {
  const scrollTo = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#0D274D',
        color: '#CBD5E1',
        pt: { xs: 8, md: 10 },
        pb: 4,
        position: 'relative',
        borderTop: '3px solid #1976D2',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Column 1: About Us */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Box sx={{ mb: 2.5 }}>
              <Logo light={true} height={44} />
            </Box>
            <Typography variant="body2" sx={{ lineHeight: 1.7, color: '#94A3B8', mb: 3 }}>
              Work Bridge is a premier training organization offering IT technology training, technology consultancy services, and software testing services. Since our establishment, we have empowered thousands of IT aspirants with industry-certified career trajectories.
            </Typography>
            <Typography variant="caption" sx={{ color: '#F5A623', fontWeight: 600 }}>
              ISO 9001:2015 Certified IT Training Academy
            </Typography>
          </Grid>

          {/* Column 2: Quick Links */}
          <Grid size={{ xs: 6, sm: 3, md: 2 }}>
            <Typography
              variant="h6"
              sx={{
                color: '#FFFFFF',
                fontWeight: 700,
                fontSize: '1.05rem',
                mb: 2.5,
                position: 'relative',
                display: 'inline-block',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: -6,
                  left: 0,
                  width: 32,
                  height: 2,
                  backgroundColor: '#F5A623',
                },
              }}
            >
              Quick Links
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              {quickLinks.map((link) => (
                <Box
                  key={link.label}
                  component="a"
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo(link.href);
                  }}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    color: '#94A3B8',
                    textDecoration: 'none',
                    fontSize: '0.9rem',
                    transition: 'all 0.2s',
                    '&:hover': {
                      color: '#F5A623',
                      transform: 'translateX(4px)',
                    },
                  }}
                >
                  <ArrowRightIcon sx={{ fontSize: 18, color: '#1976D2' }} />
                  {link.label}
                </Box>
              ))}
            </Box>
          </Grid>

          {/* Column 2b: Top Courses */}
          <Grid size={{ xs: 6, sm: 3, md: 2 }}>
            <Typography
              variant="h6"
              sx={{
                color: '#FFFFFF',
                fontWeight: 700,
                fontSize: '1.05rem',
                mb: 2.5,
                position: 'relative',
                display: 'inline-block',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: -6,
                  left: 0,
                  width: 32,
                  height: 2,
                  backgroundColor: '#F5A623',
                },
              }}
            >
              Top Courses
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              {coursesLinks.map((name) => (
                <Box
                  key={name}
                  component="a"
                  href="#courses"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo('#courses');
                  }}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    color: '#94A3B8',
                    textDecoration: 'none',
                    fontSize: '0.875rem',
                    transition: 'all 0.2s',
                    '&:hover': {
                      color: '#F5A623',
                      transform: 'translateX(4px)',
                    },
                  }}
                >
                  <ArrowRightIcon sx={{ fontSize: 18, color: '#1976D2' }} />
                  {name}
                </Box>
              ))}
            </Box>
          </Grid>

          {/* Column 3: Contact Information */}
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <Typography
              variant="h6"
              sx={{
                color: '#FFFFFF',
                fontWeight: 700,
                fontSize: '1.05rem',
                mb: 2.5,
                position: 'relative',
                display: 'inline-block',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: -6,
                  left: 0,
                  width: 32,
                  height: 2,
                  backgroundColor: '#F5A623',
                },
              }}
            >
              Contact Information
            </Typography>

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mb: 3 }}>
              <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5 }}>
                <LocationOnIcon sx={{ color: '#F5A623', fontSize: 20, mt: 0.3 }} />
                <Typography variant="body2" sx={{ color: '#94A3B8', lineHeight: 1.5 }}>
                  SR Nagar, Hyderabad, Telangana, India – 500038
                </Typography>
              </Box>

              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                <PhoneInTalkIcon sx={{ color: '#F5A623', fontSize: 20 }} />
                <Box
                  component="a"
                  href="tel:040-66664291"
                  sx={{ color: '#CBD5E1', textDecoration: 'none', fontSize: '0.9rem', '&:hover': { color: '#F5A623' } }}
                >
                  040-66664291 / 92
                </Box>
              </Box>

              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                <EmailIcon sx={{ color: '#F5A623', fontSize: 20 }} />
                <Box
                  component="a"
                  href="mailto:info@workbridge.com"
                  sx={{ color: '#CBD5E1', textDecoration: 'none', fontSize: '0.9rem', '&:hover': { color: '#F5A623' } }}
                >
                  info@workbridge.com
                </Box>
              </Box>
            </Box>

            {/* Column 4: Follow Us */}
            <Typography variant="subtitle2" sx={{ color: '#FFFFFF', fontWeight: 600, mb: 1.5 }}>
              Follow Us
            </Typography>
            <Box sx={{ display: 'flex', gap: 1.5 }}>
              <IconButton
                component="a"
                href="https://www.linkedin.com/company/work-bridge/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Work Bridge on LinkedIn"
                sx={{
                  backgroundColor: 'rgba(255, 255, 255, 0.08)',
                  color: '#FFFFFF',
                  '&:hover': {
                    backgroundColor: '#0A66C2',
                    transform: 'translateY(-2px)',
                  },
                }}
              >
                <LinkedInIcon />
              </IconButton>

              <IconButton
                component="a"
                href="https://www.facebook.com/WorkBridge"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Work Bridge on Facebook"
                sx={{
                  backgroundColor: 'rgba(255, 255, 255, 0.08)',
                  color: '#FFFFFF',
                  '&:hover': {
                    backgroundColor: '#1877F2',
                    transform: 'translateY(-2px)',
                  },
                }}
              >
                <FacebookIcon />
              </IconButton>

              <IconButton
                component="a"
                href="https://www.youtube.com/@WorkBridge"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Work Bridge on YouTube"
                sx={{
                  backgroundColor: 'rgba(255, 255, 255, 0.08)',
                  color: '#FFFFFF',
                  '&:hover': {
                    backgroundColor: '#FF0000',
                    transform: 'translateY(-2px)',
                  },
                }}
              >
                <YouTubeIcon />
              </IconButton>
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4, borderColor: 'rgba(255, 255, 255, 0.1)' }} />

        {/* Bottom Bar */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 2,
            textAlign: { xs: 'center', sm: 'left' },
          }}
        >
          <Typography variant="body2" sx={{ color: '#64748B', fontSize: '0.85rem' }}>
            © 2026 Work Bridge. All Rights Reserved.
          </Typography>
          <Typography variant="body2" sx={{ color: '#64748B', fontSize: '0.85rem' }}>
            Designed for Excellence in IT Education & Professional Growth.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
