import React from 'react';
import { Box, Container, Typography, Grid, Paper, Chip } from '@mui/material';
import BusinessIcon from '@mui/icons-material/Business';

const clients = [
  { name: 'TCS', domain: 'IT Services & Consulting', color: '#0052CC' },
  { name: 'Infosys', domain: 'Enterprise Software', color: '#007CC3' },
  { name: 'Wipro', domain: 'Digital Transformation', color: '#1B365D' },
  { name: 'Cognizant', domain: 'Global IT Solutions', color: '#1F3A93' },
  { name: 'Capgemini', domain: 'Consulting & Engineering', color: '#0070AD' },
  { name: 'Accenture', domain: 'Cloud & Automated Testing', color: '#A100FF' },
  { name: 'Tech Mahindra', domain: 'Telecom & Automation', color: '#E31837' },
  { name: 'HCLTech', domain: 'Engineering & R&D', color: '#0083CA' },
];

const Clients = () => {
  return (
    <Box id="clients" sx={{ py: { xs: 6, md: 8 }, backgroundColor: '#FFFFFF', borderTop: '1px solid #E2E8F0' }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', maxWidth: 680, mx: 'auto', mb: { xs: 4, md: 5 } }}>
          <Chip
            label="Corporate Hiring Partners"
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
            Our Corporate Clients & Recruiters
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.95rem' }}>
            Work Bridge alumni are placed at top Fortune 500 enterprises and global tech consultancies.
          </Typography>
        </Box>

        <Grid container spacing={2.5} justifyContent="center">
          {clients.map((client) => (
            <Grid key={client.name} size={{ xs: 6, sm: 4, md: 3 }}>
              <Paper
                elevation={0}
                sx={{
                  p: 2.2,
                  textAlign: 'center',
                  borderRadius: 2.5,
                  border: '1.5px solid #E2E8F0',
                  backgroundColor: '#F8FAFC',
                  transition: 'all 0.25s ease',
                  '&:hover': {
                    borderColor: '#1976D2',
                    transform: 'translateY(-3px)',
                    boxShadow: '0 8px 20px rgba(25, 118, 210, 0.08)',
                    backgroundColor: '#FFFFFF',
                  },
                }}
              >
                <Box
                  sx={{
                    width: 44,
                    height: 44,
                    borderRadius: 2,
                    backgroundColor: 'rgba(21, 59, 112, 0.08)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mx: 'auto',
                    mb: 1.2,
                  }}
                >
                  <BusinessIcon sx={{ color: client.color, fontSize: 24 }} />
                </Box>
                <Typography variant="h6" sx={{ fontWeight: 800, color: '#153B70', fontSize: '1.05rem', mb: 0.3 }}>
                  {client.name}
                </Typography>
                <Typography variant="caption" sx={{ color: '#64748B', display: 'block', fontSize: '0.75rem' }}>
                  {client.domain}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Clients;
