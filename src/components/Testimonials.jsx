import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Avatar,
  Rating,
  IconButton,
  Grid,
} from '@mui/material';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const testimonials = [
  {
    name: 'Sailaja Peddoji',
    role: 'QA Automation Engineer',
    quote:
      'I have taken training from Work Bridge and it was really a good platform where I fulfilled my ambition. Work Bridge has a good environment for learning, effective training by real-time resources and lab facility.',
    rating: 5,
    avatar: 'SP',
    avatarBg: '#153B70',
    batch: 'Testing Tools Batch',
  },
  {
    name: 'D Chandrasekhar',
    role: 'QA Team Lead',
    quote:
      'I learned QTP and Manual Testing at Work Bridge. I learned lots of things in both manual and automation. Now I am working as a Team Lead.',
    rating: 5,
    avatar: 'DC',
    avatarBg: '#1976D2',
    batch: 'Automation Specialist',
  },
  {
    name: 'Naga Divya',
    role: 'Software Test Engineer',
    quote:
      'I have completed my course. It was the best experience for me. Teaching was extraordinary and every point was explained clearly.',
    rating: 5,
    avatar: 'ND',
    avatarBg: '#059669',
    batch: 'Full Stack QA Batch',
  },
  {
    name: 'Shyam',
    role: 'Senior QA Analyst',
    quote:
      'Work Bridge helped me get into the right career and make the right decision. The training and placement department helped me move towards corporate opportunities.',
    rating: 5,
    avatar: 'S',
    avatarBg: '#D97706',
    batch: 'SDET Program',
  },
];

const Testimonials = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleNext = () => {
    setActiveTab((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActiveTab((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <Box id="testimonials" sx={{ py: { xs: 6, md: 7.5 }, backgroundColor: '#F8FAFC' }}>
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
            Verified Alumni Feedback
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
            Here's What Our Students Have Been Saying About Us
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.95rem' }}>
            We offer high-quality training and practical learning experiences to help students achieve their career goals.
          </Typography>
        </Box>

        {/* Testimonials Grid for Responsive Desktop */}
        <Grid container spacing={2.5}>
          {testimonials.map((item) => (
            <Grid key={item.name} size={{ xs: 12, sm: 6, lg: 3 }}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  backgroundColor: '#FFFFFF',
                  borderRadius: 2.5,
                  p: 0.5,
                  position: 'relative',
                  border: '1px solid #E2E8F0',
                  boxShadow: '0 2px 10px rgba(0,0,0,0.03)',
                  transition: 'all 0.25s ease',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 10px 24px rgba(21, 59, 112, 0.08)',
                    borderColor: '#93C5FD',
                  },
                }}
              >
                <CardContent sx={{ p: 2, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1.5 }}>
                    <Rating value={item.rating} readOnly size="small" sx={{ color: '#F5A623', fontSize: '1rem' }} />
                    <FormatQuoteIcon sx={{ color: '#CBD5E1', fontSize: 24 }} />
                  </Box>

                  <Typography
                    variant="body2"
                    sx={{
                      color: '#334155',
                      fontStyle: 'italic',
                      fontSize: '0.84rem',
                      lineHeight: 1.55,
                      mb: 2,
                      flexGrow: 1,
                    }}
                  >
                    "{item.quote}"
                  </Typography>

                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 1.2,
                      pt: 1.5,
                      borderTop: '1px solid #F1F5F9',
                    }}
                  >
                    <Avatar
                      sx={{
                        bgcolor: item.avatarBg,
                        width: 36,
                        height: 36,
                        fontWeight: 700,
                        fontSize: '0.825rem',
                      }}
                    >
                      {item.avatar}
                    </Avatar>
                    <Box>
                      <Typography variant="subtitle2" sx={{ fontWeight: 700, color: '#153B70', lineHeight: 1.2, fontSize: '0.875rem' }}>
                        {item.name}
                      </Typography>
                      <Typography variant="caption" sx={{ color: '#64748B', display: 'block', fontSize: '0.72rem' }}>
                        {item.role}
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Trust Score 3-Card Stat Grid */}
        <Grid container spacing={2.5} sx={{ mt: 3.5 }} justifyContent="center">
          <Grid size={{ xs: 12, sm: 4 }}>
            <Box
              sx={{
                p: 2.2,
                borderRadius: 2.5,
                background: 'linear-gradient(135deg, #FFFFFF 0%, #F8FAFC 100%)',
                border: '1.5px solid #E2E8F0',
                boxShadow: '0 4px 16px rgba(15, 23, 42, 0.04)',
                textAlign: 'center',
                transition: 'all 0.25s ease',
                position: 'relative',
                overflow: 'hidden',
                '&:hover': {
                  borderColor: '#153B70',
                  transform: 'translateY(-3px)',
                  boxShadow: '0 8px 24px rgba(21, 59, 112, 0.1)',
                },
              }}
            >
              <Box
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: 3,
                  backgroundColor: '#153B70',
                }}
              />
              <Typography variant="h4" sx={{ fontWeight: 800, color: '#153B70', fontSize: '1.75rem', mb: 0.5 }}>
                4.8 / 5.0
              </Typography>
              <Typography variant="body2" sx={{ fontWeight: 600, color: '#334155', fontSize: '0.85rem' }}>
                Average Student Satisfaction
              </Typography>
              <Typography variant="caption" sx={{ color: '#64748B', display: 'block', mt: 0.3, fontSize: '0.72rem' }}>
                Based on 12,000+ verified learner reviews
              </Typography>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, sm: 4 }}>
            <Box
              sx={{
                p: 2.2,
                borderRadius: 2.5,
                background: 'linear-gradient(135deg, #FFFFFF 0%, #F0FDF4 100%)',
                border: '1.5px solid #BBF7D0',
                boxShadow: '0 4px 16px rgba(16, 185, 129, 0.06)',
                textAlign: 'center',
                transition: 'all 0.25s ease',
                position: 'relative',
                overflow: 'hidden',
                '&:hover': {
                  borderColor: '#10B981',
                  transform: 'translateY(-3px)',
                  boxShadow: '0 8px 24px rgba(16, 185, 129, 0.15)',
                },
              }}
            >
              <Box
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: 3,
                  backgroundColor: '#10B981',
                }}
              />
              <Typography variant="h4" sx={{ fontWeight: 800, color: '#059669', fontSize: '1.75rem', mb: 0.5 }}>
                95%
              </Typography>
              <Typography variant="body2" sx={{ fontWeight: 600, color: '#065F46', fontSize: '0.85rem' }}>
                Placement Referral Rate
              </Typography>
              <Typography variant="caption" sx={{ color: '#047857', display: 'block', mt: 0.3, fontSize: '0.72rem' }}>
                Alumni transition within 90 days of graduation
              </Typography>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, sm: 4 }}>
            <Box
              sx={{
                p: 2.2,
                borderRadius: 2.5,
                background: 'linear-gradient(135deg, #FFFFFF 0%, #EFF6FF 100%)',
                border: '1.5px solid #BFDBFE',
                boxShadow: '0 4px 16px rgba(25, 118, 210, 0.06)',
                textAlign: 'center',
                transition: 'all 0.25s ease',
                position: 'relative',
                overflow: 'hidden',
                '&:hover': {
                  borderColor: '#1976D2',
                  transform: 'translateY(-3px)',
                  boxShadow: '0 8px 24px rgba(25, 118, 210, 0.15)',
                },
              }}
            >
              <Box
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: 3,
                  backgroundColor: '#1976D2',
                }}
              />
              <Typography variant="h4" sx={{ fontWeight: 800, color: '#1976D2', fontSize: '1.75rem', mb: 0.5 }}>
                500+
              </Typography>
              <Typography variant="body2" sx={{ fontWeight: 600, color: '#1E40AF', fontSize: '0.85rem' }}>
                Hiring Corporate Partners
              </Typography>
              <Typography variant="caption" sx={{ color: '#2563EB', display: 'block', mt: 0.3, fontSize: '0.72rem' }}>
                MNCs, startups & software enterprises hiring regularly
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Testimonials;
