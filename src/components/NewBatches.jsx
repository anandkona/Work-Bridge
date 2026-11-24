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
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ComputerIcon from '@mui/icons-material/Computer';

const batches = [
  { course: 'Certified SDET Automation', date: 'Dec 1, 2026', time: '7:30 AM - 9:00 AM', mode: 'Online & Classroom', trainer: '12+ Yrs Exp', status: 'Filling Fast' },
  { course: 'Software Testing Tools (STLC + Jira)', date: 'Dec 4, 2026', time: '9:30 AM - 11:00 AM', mode: 'SR Nagar / Virtual', trainer: '10+ Yrs Exp', status: 'Admissions Open' },
  { course: 'Selenium 4 with Java Framework', date: 'Dec 8, 2026', time: '6:30 PM - 8:00 PM', mode: 'Evening Online', trainer: 'Lead Architect', status: 'New Batch' },
  { course: 'AWS Solutions Architect & DevOps', date: 'Dec 12, 2026', time: '8:00 AM - 9:30 AM', mode: 'Weekend & Weekday', trainer: 'AWS Certified', status: 'Admissions Open' },
  { course: 'Python for Data & Automation', date: 'Dec 15, 2026', time: '7:00 PM - 8:30 PM', mode: 'Online Batch', trainer: 'Senior Consultant', status: 'New Batch' },
];

const NewBatches = () => {
  const scrollToContact = () => {
    const el = document.querySelector('#contact-form');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Box id="new-batches" sx={{ py: { xs: 6, md: 8 }, backgroundColor: '#F8FAFC', borderTop: '1px solid #E2E8F0' }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', maxWidth: 680, mx: 'auto', mb: { xs: 4, md: 5 } }}>
          <Chip
            label="Schedule Calendar 2026"
            size="small"
            sx={{
              backgroundColor: 'rgba(16, 185, 129, 0.12)',
              color: '#059669',
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
            Upcoming New Batches Schedule
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.95rem' }}>
            Check starting dates, timings, and reserve your seat for the next interactive cohort.
          </Typography>
        </Box>

        <TableContainer
          component={Paper}
          elevation={0}
          sx={{
            borderRadius: 2.5,
            border: '1.5px solid #E2E8F0',
            overflow: 'hidden',
            boxShadow: '0 4px 16px rgba(15, 23, 42, 0.05)',
          }}
        >
          <Table sx={{ minWidth: 650 }} aria-label="new batches table">
            <TableHead sx={{ backgroundColor: '#153B70' }}>
              <TableRow>
                <TableCell sx={{ color: '#FFFFFF', fontWeight: 700, fontSize: '0.875rem' }}>Course Name</TableCell>
                <TableCell sx={{ color: '#FFFFFF', fontWeight: 700, fontSize: '0.875rem' }}>Start Date</TableCell>
                <TableCell sx={{ color: '#FFFFFF', fontWeight: 700, fontSize: '0.875rem' }}>Timing (IST)</TableCell>
                <TableCell sx={{ color: '#FFFFFF', fontWeight: 700, fontSize: '0.875rem' }}>Mode</TableCell>
                <TableCell sx={{ color: '#FFFFFF', fontWeight: 700, fontSize: '0.875rem' }}>Status</TableCell>
                <TableCell sx={{ color: '#FFFFFF', fontWeight: 700, fontSize: '0.875rem' }} align="center">Enquire</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {batches.map((row) => (
                <TableRow
                  key={row.course}
                  sx={{
                    '&:nth-of-type(even)': { backgroundColor: '#F8FAFC' },
                    '&:hover': { backgroundColor: 'rgba(25, 118, 210, 0.04)' },
                  }}
                >
                  <TableCell sx={{ fontWeight: 700, color: '#153B70', fontSize: '0.875rem' }}>
                    {row.course}
                  </TableCell>
                  <TableCell sx={{ fontSize: '0.825rem', color: '#334155' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.6 }}>
                      <CalendarMonthIcon sx={{ fontSize: 16, color: '#1976D2' }} />
                      {row.date}
                    </Box>
                  </TableCell>
                  <TableCell sx={{ fontSize: '0.825rem', color: '#334155' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.6 }}>
                      <AccessTimeIcon sx={{ fontSize: 16, color: '#D97706' }} />
                      {row.time}
                    </Box>
                  </TableCell>
                  <TableCell sx={{ fontSize: '0.825rem', color: '#475569' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.6 }}>
                      <ComputerIcon sx={{ fontSize: 16, color: '#10B981' }} />
                      {row.mode}
                    </Box>
                  </TableCell>
                  <TableCell>
                    <Chip
                      label={row.status}
                      size="small"
                      sx={{
                        fontSize: '0.7rem',
                        fontWeight: 700,
                        backgroundColor:
                          row.status === 'Filling Fast'
                            ? 'rgba(220, 38, 38, 0.1)'
                            : row.status === 'New Batch'
                            ? 'rgba(245, 166, 35, 0.15)'
                            : 'rgba(16, 185, 129, 0.12)',
                        color:
                          row.status === 'Filling Fast'
                            ? '#DC2626'
                            : row.status === 'New Batch'
                            ? '#D97706'
                            : '#059669',
                      }}
                    />
                  </TableCell>
                  <TableCell align="center">
                    <Button
                      variant="contained"
                      color="primary"
                      size="small"
                      onClick={scrollToContact}
                      sx={{
                        fontWeight: 700,
                        fontSize: '0.75rem',
                        py: 0.5,
                        px: 1.8,
                        borderRadius: 1.5,
                      }}
                    >
                      Join Batch
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </Box>
  );
};

export default NewBatches;
