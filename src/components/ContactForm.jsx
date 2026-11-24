import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  TextField,
  Button,
  FormControl,
  Select,
  MenuItem,
  FormHelperText,
  Snackbar,
  Alert,
  CircularProgress,
  Chip,
  Paper,
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ShieldOutlinedIcon from '@mui/icons-material/ShieldOutlined';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const contactCards = [
  {
    icon: <PhoneInTalkIcon sx={{ fontSize: 24, color: '#153B70' }} />,
    title: 'Direct Helpline',
    primary: '+91 8978945209',
    secondary: '040-66664291 / 92',
    link: 'tel:+918978945209',
    bgColor: '#EFF6FF',
    accentColor: '#1976D2',
  },
  {
    icon: <EmailIcon sx={{ fontSize: 24, color: '#153B70' }} />,
    title: 'Email Support',
    primary: 'info@workbridge.com',
    secondary: 'online@workbridge.com',
    link: 'mailto:info@workbridge.com',
    bgColor: '#F0FDF4',
    accentColor: '#10B981',
  },
  {
    icon: <LocationOnIcon sx={{ fontSize: 24, color: '#153B70' }} />,
    title: 'Head Office',
    primary: 'SR Nagar Metro Pillar 1035',
    secondary: 'Hyderabad – 500038',
    link: '#branches',
    bgColor: '#FFFBEB',
    accentColor: '#F5A623',
  },
  {
    icon: <AccessTimeIcon sx={{ fontSize: 24, color: '#153B70' }} />,
    title: 'Counseling Timings',
    primary: 'Mon – Sat: 7:00 AM – 9:00 PM',
    secondary: 'Sunday: 9:00 AM – 6:00 PM',
    link: null,
    bgColor: '#F5F3FF',
    accentColor: '#8B5CF6',
  },
];

const courseOptions = [
  'Software Testing (Manual + Automation)',
  'Certified SDET Masterclass',
  'Selenium with Java & Python',
  'Python Data Science & AI',
  'Java Full Stack Development',
  'AWS Cloud Solutions Architect',
  'DevOps & CI/CD Pipelines',
  'Power BI & Data Analytics',
  'React & Angular UI',
  'Other / Custom Requirement',
];

const timingOptions = [
  'Morning (7:00 AM – 9:00 AM)',
  'Regular (10:00 AM – 1:00 PM)',
  'Evening (6:00 PM – 8:30 PM)',
  'Weekend (Sat & Sun)',
];

const countryOptions = [
  'India (+91)',
  'United States (+1)',
  'United Kingdom (+44)',
  'Canada (+1)',
  'Australia (+61)',
  'UAE (+971)',
  'Singapore (+65)',
  'Other',
];

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    courseName: '',
    countryName: 'India (+91)',
    preferredTimings: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [snackbar, setSnackbar] = useState({
    open: false,
    severity: 'success',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const tempErrors = {};

    if (!formData.fullName.trim()) {
      tempErrors.fullName = 'Full Name is required.';
    } else if (formData.fullName.trim().length < 2) {
      tempErrors.fullName = 'Minimum 2 characters.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      tempErrors.email = 'Email address is required.';
    } else if (!emailRegex.test(formData.email.trim())) {
      tempErrors.email = 'Please enter a valid email.';
    }

    const phoneDigits = formData.phone.replace(/[^0-9]/g, '');
    if (!formData.phone.trim()) {
      tempErrors.phone = 'Phone number is required.';
    } else if (phoneDigits.length < 8 || phoneDigits.length > 15) {
      tempErrors.phone = 'Enter valid phone (8-15 digits).';
    }

    if (!formData.courseName) {
      tempErrors.courseName = 'Please select a course.';
    }

    if (!formData.preferredTimings) {
      tempErrors.preferredTimings = 'Please select timing.';
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) {
      setSnackbar({
        open: true,
        severity: 'error',
        message: 'Please complete all required fields.',
      });
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSnackbar({
        open: true,
        severity: 'success',
        message: `Thank you, ${formData.fullName}! Your enquiry for ${formData.courseName} has been received. Our counselor will contact you within 2 hours.`,
      });

      setFormData({
        fullName: '',
        email: '',
        phone: '',
        courseName: '',
        countryName: 'India (+91)',
        preferredTimings: '',
        message: '',
      });
      setErrors({});
    }, 1000);
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === 'clickaway') return;
    setSnackbar((prev) => ({ ...prev, open: false }));
  };

  return (
    <Box
      id="contact-form"
      sx={{
        py: { xs: 5, sm: 7, md: 8 },
        backgroundColor: '#F8FAFC',
        borderTop: '1px solid #E2E8F0',
      }}
    >
      <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
        {/* Section Heading */}
        <Box sx={{ textAlign: 'center', maxWidth: 680, mx: 'auto', mb: { xs: 3.5, md: 4.5 } }}>
          <Chip
            label="Admissions Desk • Fast Response"
            size="small"
            sx={{
              backgroundColor: 'rgba(21, 59, 112, 0.08)',
              color: '#153B70',
              fontWeight: 700,
              fontSize: '0.75rem',
              mb: 1.2,
              px: 0.5,
            }}
          />
          <Typography
            variant="h2"
            component="h2"
            sx={{
              color: '#153B70',
              fontWeight: 800,
              mb: 1,
              fontSize: { xs: '1.75rem', sm: '2.1rem', md: '2.4rem' },
              letterSpacing: '-0.02em',
            }}
          >
            Get in Touch With Us
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: '#64748B',
              fontSize: { xs: '0.9rem', sm: '0.98rem' },
              lineHeight: 1.55,
            }}
          >
            Have questions about courses or upcoming batches? Fill out the form or reach out to our counseling desk directly.
          </Typography>
        </Box>

        {/* 4 Quick Info Cards Row */}
        <Grid container spacing={2} sx={{ mb: { xs: 3.5, md: 4.5 } }}>
          {contactCards.map((card) => (
            <Grid key={card.title} size={{ xs: 12, sm: 6, md: 3 }}>
              <Paper
                elevation={0}
                component={card.link ? 'a' : 'div'}
                href={card.link || undefined}
                sx={{
                  p: 2,
                  height: '100%',
                  borderRadius: 2.5,
                  backgroundColor: '#FFFFFF',
                  border: '1px solid #E2E8F0',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1.5,
                  textDecoration: 'none',
                  color: 'inherit',
                  transition: 'all 0.25s ease',
                  '&:hover': {
                    borderColor: card.accentColor,
                    transform: 'translateY(-2px)',
                    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.05)',
                  },
                }}
              >
                <Box
                  sx={{
                    width: 44,
                    height: 44,
                    borderRadius: 2,
                    backgroundColor: card.bgColor,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  {card.icon}
                </Box>
                <Box sx={{ minWidth: 0 }}>
                  <Typography variant="caption" sx={{ color: '#64748B', fontWeight: 600, display: 'block', fontSize: '0.7rem' }}>
                    {card.title}
                  </Typography>
                  <Typography variant="subtitle2" sx={{ fontWeight: 700, color: '#153B70', fontSize: '0.85rem', lineHeight: 1.3, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                    {card.primary}
                  </Typography>
                  <Typography variant="caption" sx={{ color: '#94A3B8', display: 'block', fontSize: '0.7rem' }}>
                    {card.secondary}
                  </Typography>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>

        {/* Compact Form Container Card */}
        <Card
          sx={{
            borderRadius: { xs: 2.5, md: 3 },
            boxShadow: '0 20px 45px -10px rgba(21, 59, 112, 0.12)',
            border: '1px solid #E2E8F0',
            backgroundColor: '#FFFFFF',
            maxWidth: 880,
            mx: 'auto',
            overflow: 'hidden',
          }}
        >
          {/* Header Ribbon */}
          <Box
            sx={{
              background: 'linear-gradient(135deg, #153B70 0%, #1976D2 100%)',
              color: '#FFFFFF',
              py: 2,
              px: { xs: 2.5, sm: 3.5 },
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: 1.2,
            }}
          >
            <Box>
              <Typography
                variant="h5"
                component="h3"
                sx={{
                  fontWeight: 800,
                  fontSize: { xs: '1.15rem', sm: '1.35rem' },
                  letterSpacing: '-0.01em',
                  color: '#FFFFFF',
                  mb: 0.2,
                }}
              >
                Send an Enquiry
              </Typography>
              <Typography variant="caption" sx={{ color: 'rgba(255, 255, 255, 0.85)', fontSize: '0.75rem' }}>
                Fill in your details below to get direct assistance from our mentors.
              </Typography>
            </Box>

            <Chip
              icon={<CheckCircleIcon sx={{ fontSize: '13px !important', color: '#153B70' }} />}
              label="100% Free Counseling Session"
              size="small"
              sx={{
                backgroundColor: '#F5A623',
                color: '#153B70',
                fontWeight: 800,
                fontSize: '0.7rem',
                height: 24,
              }}
            />
          </Box>

          {/* Form Fields */}
          <Box sx={{ p: { xs: 2.5, sm: 3.5 } }}>
            <Box component="form" onSubmit={handleSubmit} noValidate>
              <Grid container spacing={2}>
                {/* Full Name */}
                <Grid size={{ xs: 12, sm: 6 }}>
                  <Typography variant="caption" sx={{ fontWeight: 700, color: '#1E293B', mb: 0.4, display: 'block', fontSize: '0.75rem' }}>
                    Full Name <span style={{ color: '#DC2626' }}>*</span>
                  </Typography>
                  <TextField
                    fullWidth
                    id="contact-fullName"
                    name="fullName"
                    placeholder="e.g. Rahul Sharma"
                    value={formData.fullName}
                    onChange={handleChange}
                    error={Boolean(errors.fullName)}
                    helperText={errors.fullName}
                    size="small"
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        backgroundColor: '#F8FAFC',
                        borderRadius: 1.5,
                        '&:hover': { backgroundColor: '#FFFFFF' },
                        '&.Mui-focused': { backgroundColor: '#FFFFFF' },
                      },
                    }}
                  />
                </Grid>

                {/* Email Address */}
                <Grid size={{ xs: 12, sm: 6 }}>
                  <Typography variant="caption" sx={{ fontWeight: 700, color: '#1E293B', mb: 0.4, display: 'block', fontSize: '0.75rem' }}>
                    Email Address <span style={{ color: '#DC2626' }}>*</span>
                  </Typography>
                  <TextField
                    fullWidth
                    id="contact-email"
                    name="email"
                    type="email"
                    placeholder="e.g. rahul@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    error={Boolean(errors.email)}
                    helperText={errors.email}
                    size="small"
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        backgroundColor: '#F8FAFC',
                        borderRadius: 1.5,
                        '&:hover': { backgroundColor: '#FFFFFF' },
                        '&.Mui-focused': { backgroundColor: '#FFFFFF' },
                      },
                    }}
                  />
                </Grid>

                {/* Phone Number */}
                <Grid size={{ xs: 12, sm: 6 }}>
                  <Typography variant="caption" sx={{ fontWeight: 700, color: '#1E293B', mb: 0.4, display: 'block', fontSize: '0.75rem' }}>
                    Phone Number <span style={{ color: '#DC2626' }}>*</span>
                  </Typography>
                  <TextField
                    fullWidth
                    id="contact-phone"
                    name="phone"
                    placeholder="e.g. 9876543210"
                    value={formData.phone}
                    onChange={handleChange}
                    error={Boolean(errors.phone)}
                    helperText={errors.phone}
                    size="small"
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        backgroundColor: '#F8FAFC',
                        borderRadius: 1.5,
                        '&:hover': { backgroundColor: '#FFFFFF' },
                        '&.Mui-focused': { backgroundColor: '#FFFFFF' },
                      },
                    }}
                  />
                </Grid>

                {/* Course Dropdown */}
                <Grid size={{ xs: 12, sm: 6 }}>
                  <Typography variant="caption" sx={{ fontWeight: 700, color: '#1E293B', mb: 0.4, display: 'block', fontSize: '0.75rem' }}>
                    Select Course <span style={{ color: '#DC2626' }}>*</span>
                  </Typography>
                  <FormControl fullWidth size="small" error={Boolean(errors.courseName)}>
                    <Select
                      id="contact-courseName"
                      name="courseName"
                      displayEmpty
                      value={formData.courseName}
                      onChange={handleChange}
                      sx={{
                        backgroundColor: '#F8FAFC',
                        borderRadius: 1.5,
                        '&:hover': { backgroundColor: '#FFFFFF' },
                        '&.Mui-focused': { backgroundColor: '#FFFFFF' },
                      }}
                    >
                      <MenuItem value="" disabled>
                        <span style={{ color: '#94A3B8' }}>Choose a Course</span>
                      </MenuItem>
                      {courseOptions.map((c) => (
                        <MenuItem key={c} value={c}>{c}</MenuItem>
                      ))}
                    </Select>
                    {errors.courseName && <FormHelperText sx={{ fontSize: '0.68rem', m: 0 }}>{errors.courseName}</FormHelperText>}
                  </FormControl>
                </Grid>

                {/* Country */}
                <Grid size={{ xs: 12, sm: 6 }}>
                  <Typography variant="caption" sx={{ fontWeight: 700, color: '#1E293B', mb: 0.4, display: 'block', fontSize: '0.75rem' }}>
                    Country <span style={{ color: '#DC2626' }}>*</span>
                  </Typography>
                  <FormControl fullWidth size="small">
                    <Select
                      id="contact-countryName"
                      name="countryName"
                      value={formData.countryName}
                      onChange={handleChange}
                      sx={{
                        backgroundColor: '#F8FAFC',
                        borderRadius: 1.5,
                        '&:hover': { backgroundColor: '#FFFFFF' },
                        '&.Mui-focused': { backgroundColor: '#FFFFFF' },
                      }}
                    >
                      {countryOptions.map((c) => (
                        <MenuItem key={c} value={c}>{c}</MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>

                {/* Preferred Timings */}
                <Grid size={{ xs: 12, sm: 6 }}>
                  <Typography variant="caption" sx={{ fontWeight: 700, color: '#1E293B', mb: 0.4, display: 'block', fontSize: '0.75rem' }}>
                    Preferred Timings <span style={{ color: '#DC2626' }}>*</span>
                  </Typography>
                  <FormControl fullWidth size="small" error={Boolean(errors.preferredTimings)}>
                    <Select
                      id="contact-preferredTimings"
                      name="preferredTimings"
                      displayEmpty
                      value={formData.preferredTimings}
                      onChange={handleChange}
                      sx={{
                        backgroundColor: '#F8FAFC',
                        borderRadius: 1.5,
                        '&:hover': { backgroundColor: '#FFFFFF' },
                        '&.Mui-focused': { backgroundColor: '#FFFFFF' },
                      }}
                    >
                      <MenuItem value="" disabled>
                        <span style={{ color: '#94A3B8' }}>Select Preferred Timing</span>
                      </MenuItem>
                      {timingOptions.map((t) => (
                        <MenuItem key={t} value={t}>{t}</MenuItem>
                      ))}
                    </Select>
                    {errors.preferredTimings && <FormHelperText sx={{ fontSize: '0.68rem', m: 0 }}>{errors.preferredTimings}</FormHelperText>}
                  </FormControl>
                </Grid>

                {/* Message */}
                <Grid size={{ xs: 12 }}>
                  <Typography variant="caption" sx={{ fontWeight: 700, color: '#1E293B', mb: 0.4, display: 'block', fontSize: '0.75rem' }}>
                    Your Message (Optional)
                  </Typography>
                  <TextField
                    fullWidth
                    id="contact-message"
                    name="message"
                    placeholder="Tell us about your background or preferred start dates..."
                    multiline
                    rows={2.5}
                    value={formData.message}
                    onChange={handleChange}
                    size="small"
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        backgroundColor: '#F8FAFC',
                        borderRadius: 1.5,
                        '&:hover': { backgroundColor: '#FFFFFF' },
                        '&.Mui-focused': { backgroundColor: '#FFFFFF' },
                      },
                    }}
                  />
                </Grid>

                {/* Submit & Privacy */}
                <Grid size={{ xs: 12 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 2, mt: 1, flexWrap: 'wrap' }}>
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      disabled={isSubmitting}
                      startIcon={isSubmitting ? <CircularProgress size={16} color="inherit" /> : <SendIcon sx={{ fontSize: 16 }} />}
                      sx={{
                        py: 1,
                        px: 4,
                        fontSize: '0.9rem',
                        fontWeight: 700,
                        borderRadius: 2,
                        background: 'linear-gradient(135deg, #153B70 0%, #1976D2 100%)',
                        boxShadow: '0 4px 14px rgba(21, 59, 112, 0.25)',
                        '&:hover': {
                          background: 'linear-gradient(135deg, #0F2E5A 0%, #1565C0 100%)',
                        },
                      }}
                    >
                      {isSubmitting ? 'Submitting...' : 'Send Enquiry'}
                    </Button>

                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.8, color: '#64748B' }}>
                      <ShieldOutlinedIcon sx={{ fontSize: 17, color: '#10B981' }} />
                      <Typography variant="caption" sx={{ fontSize: '0.75rem' }}>
                        🔒 Your contact information is kept safe and confidential.
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Card>
      </Container>

      {/* Feedback Snackbar */}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbar.severity}
          variant="filled"
          sx={{ width: '100%', borderRadius: 2, fontWeight: 500, boxShadow: '0 8px 24px rgba(0,0,0,0.15)' }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default ContactForm;
