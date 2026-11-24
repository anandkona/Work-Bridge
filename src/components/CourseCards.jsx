import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  Chip,
} from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import GroupsIcon from '@mui/icons-material/Groups';

const courses = [
  {
    title: 'Certified SDET',
    subtitle: 'Software Development Engineer in Test',
    tag: 'Flagship Program',
    description:
      'End-to-end automation program covering Core Java, Selenium WebDriver, TestNG, Cucumber BDD, API Testing with Postman/RestAssured, CI/CD with Jenkins, and Git.',
    duration: '90 Days',
    mode: 'Classroom & Online',
    color: '#153B70',
    accentColor: '#1976D2',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'Testing Tools',
    subtitle: 'Manual Testing + Automation Combo',
    tag: 'Job Ready',
    description:
      'Master the Software Testing Life Cycle (STLC), Defect Management in Jira, Test Case Design, Agile/Scrum Methodologies, SQL for Testers, and hands-on Selenium automation.',
    duration: '60 Days',
    mode: 'Classroom & Online',
    color: '#0F766E',
    accentColor: '#14B8A6',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'Selenium Automation',
    subtitle: 'Web Application Testing Masterclass',
    tag: 'High Demand',
    description:
      'Deep dive into Selenium 4, Page Object Model (POM), Cross-Browser Testing, Hybrid Test Automation Frameworks, Grid 4, and automated report generation.',
    duration: '45 Days',
    mode: 'Classroom & Online',
    color: '#B45309',
    accentColor: '#F59E0B',
    image: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'Angular Framework',
    subtitle: 'Modern Enterprise Front-End Development',
    tag: 'Web & UI',
    description:
      'Learn TypeScript, Angular CLI, Component Architecture, RxJS Observables, Reactive Forms, State Management, and building responsive single-page applications.',
    duration: '60 Days',
    mode: 'Classroom & Online',
    color: '#DC2626',
    accentColor: '#EF4444',
    image: 'https://images.unsplash.com/photo-1593720213428-28a5b9e94613?auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'AWS Cloud Solutions',
    subtitle: 'Cloud Practitioner & Solutions Architect',
    tag: 'Cloud Specialist',
    description:
      'Comprehensive AWS training: EC2, S3, VPC, IAM, RDS, Lambda serverless, CloudWatch monitoring, and preparing for the AWS Certified Solutions Architect examination.',
    duration: '60 Days',
    mode: 'Classroom & Online',
    color: '#4338CA',
    accentColor: '#6366F1',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80',
  },
];

const CourseCards = () => {
  const scrollToContact = (courseTitle) => {
    const el = document.querySelector('#contact-form');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      // Pre-select course dropdown if found
      const selectElement = document.querySelector('#courseName');
      if (selectElement) {
        selectElement.focus();
      }
    }
  };

  return (
    <Box id="courses" sx={{ py: { xs: 6, md: 7.5 }, backgroundColor: '#FFFFFF' }}>
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
            Trending Technology Stacks
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
            Inspired By Excellence & Innovation
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.95rem' }}>
            Transform your skills with hands-on curriculum authored and delivered by leading software architects.
          </Typography>
        </Box>

        {/* 5 Course Cards Grid */}
        <Grid container spacing={2.5} justifyContent="center">
          {courses.map((course) => (
            <Grid key={course.title} size={{ xs: 12, sm: 6, lg: 4 }}>
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
                {/* Image Banner */}
                <Box sx={{ position: 'relative', height: 110, overflow: 'hidden' }}>
                  <CardMedia
                    component="img"
                    height="110"
                    image={course.image}
                    alt={course.title}
                    sx={{
                      transition: 'transform 0.4s ease',
                      '&:hover': {
                        transform: 'scale(1.05)',
                      },
                    }}
                  />
                  <Box
                    sx={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(15,23,42,0.7) 100%)',
                    }}
                  />
                  <Chip
                    label={course.tag}
                    size="small"
                    sx={{
                      position: 'absolute',
                      top: 8,
                      right: 8,
                      backgroundColor: '#FFFFFF',
                      color: course.color,
                      fontWeight: 700,
                      fontSize: '0.65rem',
                      height: 20,
                    }}
                  />
                </Box>

                <CardContent sx={{ p: 1.5, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                  <Typography
                    variant="h6"
                    component="h3"
                    sx={{
                      fontWeight: 800,
                      color: '#153B70',
                      mb: 0.2,
                      fontSize: '0.98rem',
                    }}
                  >
                    {course.title}
                  </Typography>

                  <Typography
                    variant="caption"
                    sx={{
                      color: '#1976D2',
                      fontWeight: 600,
                      fontSize: '0.72rem',
                      display: 'block',
                      mb: 1,
                    }}
                  >
                    {course.subtitle}
                  </Typography>

                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{
                      fontSize: '0.8rem',
                      lineHeight: 1.45,
                      mb: 1.5,
                      flexGrow: 1,
                    }}
                  >
                    {course.description}
                  </Typography>

                  {/* Course Quick Meta */}
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      py: 0.8,
                      mb: 1.5,
                      borderTop: '1px solid #F1F5F9',
                      borderBottom: '1px solid #F1F5F9',
                      fontSize: '0.74rem',
                      color: '#64748B',
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.4 }}>
                      <AccessTimeIcon sx={{ fontSize: 14, color: '#1976D2' }} />
                      <span>{course.duration}</span>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.4 }}>
                      <GroupsIcon sx={{ fontSize: 15, color: '#10B981' }} />
                      <span>{course.mode}</span>
                    </Box>
                  </Box>

                  <Button
                    variant="contained"
                    color="primary"
                    size="small"
                    fullWidth
                    endIcon={<ArrowForwardIcon sx={{ fontSize: 14 }} />}
                    onClick={() => scrollToContact(course.title)}
                    sx={{
                      fontWeight: 700,
                      py: 0.6,
                      borderRadius: 1.5,
                      fontSize: '0.8rem',
                    }}
                  >
                    Enroll Now
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

export default CourseCards;
