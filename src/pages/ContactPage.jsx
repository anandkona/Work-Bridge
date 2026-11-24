import React from 'react';
import { Box } from '@mui/material';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Features from '../components/Features';
import TrainingOptions from '../components/TrainingOptions';
import Testimonials from '../components/Testimonials';
import ContactForm from '../components/ContactForm';
import BranchLocations from '../components/BranchLocations';
import CourseCards from '../components/CourseCards';
import AboutUs from '../components/AboutUs';
import Clients from '../components/Clients';
import Events from '../components/Events';
import NewBatches from '../components/NewBatches';
import Footer from '../components/Footer';
import BackToTop from '../components/BackToTop';

const ContactPage = () => {
  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />
      <Hero />
      <Features />
      <TrainingOptions />
      <Testimonials />
      <ContactForm />
      <BranchLocations />
      <CourseCards />
      <AboutUs />
      <Clients />
      <Events />
      <NewBatches />
      <Footer />
      <BackToTop />
    </Box>
  );
};

export default ContactPage;
