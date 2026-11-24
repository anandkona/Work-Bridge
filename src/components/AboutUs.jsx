import React from 'react';
import { Box, Container, Typography, Grid, Paper, Chip } from '@mui/material';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import GroupsIcon from '@mui/icons-material/Groups';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';

const stats = [
  { label: 'Years of Training Heritage', value: '15+', icon: <HistoryEduIcon sx={{ fontSize: 28, color: '#153B70' }} /> },
  { label: 'Professionals Trained', value: '50,000+', icon: <GroupsIcon sx={{ fontSize: 28, color: '#1976D2' }} /> },
  { label: 'Hiring Companies', value: '500+', icon: <WorkspacePremiumIcon sx={{ fontSize: 28, color: '#F5A623' }} /> },
  { label: 'Placement Ratio', value: '94%', icon: <AutoGraphIcon sx={{ fontSize: 28, color: '#10B981' }} /> },
];

const AboutUs = () => {
  return (
    <Box id="about-us" sx={{ py: { xs: 6, md: 8 }, backgroundColor: '#F8FAFC' }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', maxWidth: 700, mx: 'auto', mb: { xs: 4, md: 5 } }}>
          <Chip
            label="About Work Bridge"
            size="small"
            sx={{
              backgroundColor: 'rgba(21, 59, 112, 0.1)',
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
            Pioneers in IT Software Testing & Tech Upskilling
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.95rem', lineHeight: 1.7 }}>
            Work Bridge is an ISO 9001:2015 certified training institute established to empower software professionals with practical, industry-grade competency. From Manual and Automation QA to Cloud Solutions, our real-time mentors ensure every candidate is job-ready.
          </Typography>
        </Box>

        {/* Stats Row */}
        <Grid container spacing={2.5}>
          {stats.map((s) => (
            <Grid key={s.label} size={{ xs: 6, md: 3 }}>
              <Paper
                elevation={0}
                sx={{
                  p: 2.5,
                  textAlign: 'center',
                  borderRadius: 2.5,
                  backgroundColor: '#FFFFFF',
                  border: '1.5px solid #E2E8F0',
                  transition: 'all 0.25s ease',
                  '&:hover': {
                    borderColor: '#1976D2',
                    transform: 'translateY(-3px)',
                    boxShadow: '0 8px 20px rgba(15, 23, 42, 0.08)',
                  },
                }}
              >
                <Box sx={{ mb: 1 }}>{s.icon}</Box>
                <Typography variant="h4" sx={{ fontWeight: 800, color: '#153B70', fontSize: '1.8rem', mb: 0.5 }}>
                  {s.value}
                </Typography>
                <Typography variant="caption" sx={{ color: '#64748B', fontWeight: 600, fontSize: '0.78rem' }}>
                  {s.label}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutUs;
