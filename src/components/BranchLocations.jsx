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
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import EmailIcon from '@mui/icons-material/Email';
import NavigationIcon from '@mui/icons-material/Navigation';

const branches = [
  {
    city: 'Hyderabad',
    area: 'S.R. Nagar (Head Office)',
    address:
      'Work Bridge, 8-3-214/7, 2nd Floor, Srinivasa Nagar Colony (W), Metro Pillar Number 1035, Above HDFC Bank, S.R. Nagar, Hyderabad – 500038.',
    mobile: '+91 8978945209',
    phone: '040-66664291 / 040-66664292 / 040-66664293',
    email: 'info@workbridge.com',
    mapQuery: 'Work+Bridge+SR+Nagar+Hyderabad',
    isHeadOffice: true,
  },
  {
    city: 'Hyderabad',
    area: 'Kukatpally',
    address:
      'Work Bridge, Alluri Trade Centre, Flat No. 408, 5th Floor, Bhagya Nagar Colony, K.P.H.B, Hyderabad – 500072.',
    mobile: '+91 9121084409',
    phone: '040-66664291 / 92',
    email: 'info@workbridge.com',
    mapQuery: 'Work+Bridge+KPHB+Kukatpally+Hyderabad',
    isHeadOffice: false,
  },
  {
    city: 'Hyderabad',
    area: 'Madhapur',
    address:
      'Work Bridge, 4th Floor, Sri Sai Enclave, Above Federal Bank, Arunodaya Colony, Madhapur, Hyderabad – 500081.',
    mobile: '+91 8978945209',
    phone: '040-66664291 / 92',
    email: 'madhapur@workbridge.com',
    mapQuery: 'Work+Bridge+Madhapur+Hyderabad',
    isHeadOffice: false,
  },
  {
    city: 'Bangalore',
    area: 'Marathahalli',
    address:
      'Work Bridge, No. 92/5, ACR Greens, III Floor, Opp. Innovative Multiplex, Munne Kolalu, Outer Ring Road, Marathahalli, Bangalore – 560037.',
    mobile: '+91 8978945209',
    phone: '+91 8978945209',
    email: 'info.mth@workbridge.com',
    mapQuery: 'Work+Bridge+Marathahalli+Bangalore',
    isHeadOffice: false,
  },
];

const BranchLocations = () => {
  return (
    <Box id="branches" sx={{ py: { xs: 6, md: 7.5 }, backgroundColor: '#F8FAFC' }}>
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
            Visit Our Campuses
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
            Our Training Centers
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.95rem' }}>
            Walk into any of our state-of-the-art training facilities across Hyderabad and Bangalore for live classroom counseling, lab visits, and batch enrollments.
          </Typography>
        </Box>

        {/* Branch Cards Grid */}
        <Grid container spacing={2.5}>
          {branches.map((branch) => (
            <Grid key={branch.area} size={{ xs: 12, md: 6 }}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  backgroundColor: '#FFFFFF',
                  borderRadius: 2.5,
                  overflow: 'hidden',
                  border: '1px solid #E2E8F0',
                  boxShadow: '0 2px 10px rgba(15, 23, 42, 0.04)',
                  transition: 'all 0.25s ease',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 10px 24px rgba(21, 59, 112, 0.1)',
                    borderColor: '#93C5FD',
                  },
                }}
              >
                {/* Branch Header Banner */}
                <Box
                  sx={{
                    p: 1.8,
                    backgroundColor: branch.isHeadOffice ? '#153B70' : '#F1F5F9',
                    color: branch.isHeadOffice ? '#FFFFFF' : '#153B70',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    gap: 1,
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.8 }}>
                    <LocationOnIcon sx={{ color: branch.isHeadOffice ? '#F5A623' : '#1976D2', fontSize: 20 }} />
                    <Typography variant="h6" sx={{ fontWeight: 700, color: 'inherit', fontSize: '1.05rem' }}>
                      {branch.city} – {branch.area}
                    </Typography>
                  </Box>
                  {branch.isHeadOffice && (
                    <Chip
                      label="Head Office"
                      size="small"
                      sx={{
                        backgroundColor: '#F5A623',
                        color: '#153B70',
                        fontWeight: 700,
                        fontSize: '0.68rem',
                        height: 22,
                      }}
                    />
                  )}
                </Box>

                <CardContent sx={{ p: 1.5, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                  {/* Complete Address */}
                  <Typography
                    variant="body2"
                    sx={{
                      color: '#475569',
                      fontSize: '0.8rem',
                      lineHeight: 1.45,
                      mb: 1.5,
                    }}
                  >
                    {branch.address}
                  </Typography>

                  {/* Contact Numbers and Email Info Box */}
                  <Box
                    sx={{
                      backgroundColor: '#F8FAFC',
                      borderRadius: 1.5,
                      p: 1.2,
                      mb: 1.5,
                      border: '1px solid #E2E8F0',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: 0.6,
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.8, fontSize: '0.78rem' }}>
                      <PhoneInTalkIcon sx={{ fontSize: 14, color: '#1976D2' }} />
                      <Typography variant="body2" sx={{ color: '#1E293B', fontSize: '0.78rem' }}>
                        <strong>Mobile:</strong>{' '}
                        <Box
                          component="a"
                          href={`tel:${branch.mobile.replace(/[^0-9+]/g, '')}`}
                          sx={{ color: '#153B70', textDecoration: 'none', fontWeight: 600, '&:hover': { color: '#1976D2' } }}
                        >
                          {branch.mobile}
                        </Box>
                      </Typography>
                    </Box>

                    {branch.phone && (
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.8, fontSize: '0.78rem' }}>
                        <PhoneInTalkIcon sx={{ fontSize: 14, color: '#1976D2' }} />
                        <Typography variant="body2" sx={{ color: '#1E293B', fontSize: '0.78rem' }}>
                          <strong>Phone:</strong> {branch.phone}
                        </Typography>
                      </Box>
                    )}

                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.8, fontSize: '0.78rem' }}>
                      <EmailIcon sx={{ fontSize: 14, color: '#1976D2' }} />
                      <Typography variant="body2" sx={{ color: '#1E293B', fontSize: '0.78rem' }}>
                        <strong>Email:</strong>{' '}
                        <Box
                          component="a"
                          href={`mailto:${branch.email}`}
                          sx={{ color: '#153B70', textDecoration: 'none', fontWeight: 600, '&:hover': { color: '#1976D2' } }}
                        >
                          {branch.email}
                        </Box>
                      </Typography>
                    </Box>
                  </Box>

                  {/* Interactive Map Visual Box */}
                  <Box
                    sx={{
                      width: '100%',
                      height: 110,
                      borderRadius: 1.5,
                      overflow: 'hidden',
                      mb: 1.5,
                      backgroundColor: '#E2E8F0',
                      position: 'relative',
                      border: '1px solid #CBD5E1',
                    }}
                  >
                    <iframe
                      title={`${branch.city} ${branch.area} Map`}
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      loading="lazy"
                      src={`https://maps.google.com/maps?q=${encodeURIComponent(
                        branch.address
                      )}&t=&z=14&ie=UTF8&iwloc=&output=embed`}
                    />
                  </Box>

                  {/* Action Buttons: Call Now, Email Us, Get Directions */}
                  <Box
                    sx={{
                      display: 'flex',
                      gap: 0.8,
                      flexWrap: 'wrap',
                      mt: 'auto',
                    }}
                  >
                    <Button
                      variant="contained"
                      color="primary"
                      size="small"
                      component="a"
                      href={`tel:${branch.mobile.replace(/[^0-9+]/g, '')}`}
                      startIcon={<PhoneInTalkIcon sx={{ fontSize: 14 }} />}
                      sx={{ flex: '1 1 auto', fontWeight: 600, py: 0.5, fontSize: '0.75rem' }}
                    >
                      Call Now
                    </Button>

                    <Button
                      variant="outlined"
                      color="primary"
                      size="small"
                      component="a"
                      href={`mailto:${branch.email}`}
                      startIcon={<EmailIcon sx={{ fontSize: 14 }} />}
                      sx={{ flex: '1 1 auto', fontWeight: 600, py: 0.5, fontSize: '0.75rem' }}
                    >
                      Email Us
                    </Button>

                    <Button
                      variant="outlined"
                      color="secondary"
                      size="small"
                      component="a"
                      href={`https://maps.google.com/?q=${encodeURIComponent(branch.address)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      startIcon={<NavigationIcon sx={{ fontSize: 14 }} />}
                      sx={{
                        flex: '1 1 100%',
                        fontWeight: 600,
                        py: 0.5,
                        fontSize: '0.75rem',
                        borderColor: '#CBD5E1',
                        color: '#153B70',
                        '&:hover': {
                          borderColor: '#153B70',
                          backgroundColor: 'rgba(21, 59, 112, 0.04)',
                        },
                      }}
                    >
                      Get Directions
                    </Button>
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

export default BranchLocations;
