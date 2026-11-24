import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Container,
  Box,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Divider,
  Chip,
  Menu,
  MenuItem,
  ListItemIcon,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import PhoneInTalkOutlinedIcon from '@mui/icons-material/PhoneInTalkOutlined';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SchoolIcon from '@mui/icons-material/School';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import BusinessIcon from '@mui/icons-material/Business';
import CodeIcon from '@mui/icons-material/Code';
import BugReportIcon from '@mui/icons-material/BugReport';
import CloudIcon from '@mui/icons-material/Cloud';
import Logo from './Logo';

const trainingDropdownItems = [
  { label: 'Online Training', desc: 'Live interactive global batches', href: '#trainings', icon: <LaptopMacIcon fontSize="small" sx={{ color: '#1976D2' }} /> },
  { label: 'Classroom Training', desc: 'In-person lab sessions at centers', href: '#trainings', icon: <BusinessIcon fontSize="small" sx={{ color: '#F5A623' }} /> },
  { divider: true },
  { label: 'Certified SDET Program', desc: 'Automation, Java, Selenium, CI/CD', href: '#courses', icon: <BugReportIcon fontSize="small" sx={{ color: '#153B70' }} /> },
  { label: 'Software Testing Tools', desc: 'Manual, Jira, Agile, STLC', href: '#courses', icon: <SchoolIcon fontSize="small" sx={{ color: '#10B981' }} /> },
  { label: 'Selenium Automation', desc: 'Framework design & Page Object Model', href: '#courses', icon: <CodeIcon fontSize="small" sx={{ color: '#D97706' }} /> },
  { label: 'AWS Cloud Solutions', desc: 'Cloud Architect & SysOps training', href: '#courses', icon: <CloudIcon fontSize="small" sx={{ color: '#6366F1' }} /> },
  { label: 'Angular & React UI', desc: 'Modern frontend development', href: '#courses', icon: <CodeIcon fontSize="small" sx={{ color: '#EC4899' }} /> },
];

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Trainings', href: '#trainings', hasDropdown: true },
  { label: 'Placements', href: '#why-choose' },
  { label: 'Clients', href: '#clients' },
  { label: 'About Us', href: '#about-us' },
  { label: 'Events', href: '#events' },
  { label: 'Contact', href: '#contact-form' },
  { label: 'New Batches', href: '#new-batches' },
];

const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [trainingAnchorEl, setTrainingAnchorEl] = useState(null);
  const [mobileTrainingsOpen, setMobileTrainingsOpen] = useState(false);

  const isTrainingMenuOpen = Boolean(trainingAnchorEl);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen((prev) => !prev);
  };

  const closeTimeoutRef = React.useRef(null);

  const handleTrainingMenuOpen = (event) => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setTrainingAnchorEl(event.currentTarget);
  };

  const handleTrainingMenuClose = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
    }
    closeTimeoutRef.current = setTimeout(() => {
      setTrainingAnchorEl(null);
    }, 150);
  };

  const scrollToSection = (href) => {
    // 1. Immediately close mobile drawer and dropdown menu
    setMobileOpen(false);
    setTrainingAnchorEl(null);

    if (!href || href === '#') return;

    // 2. Normalize target ID
    let targetId = href.startsWith('#') ? href.substring(1) : href;

    // ID Aliases & fallbacks
    if (targetId === 'contact' || targetId === 'contact-info') {
      targetId = 'contact-form';
    } else if (targetId === 'placements') {
      targetId = 'why-choose';
    }

    // 3. Update URL hash cleanly
    try {
      if (window.history.pushState) {
        window.history.pushState(null, null, `#${targetId}`);
      } else {
        window.location.hash = `#${targetId}`;
      }
    } catch (e) {
      // ignore
    }

    // 4. Handle Top / Home
    if (targetId === 'home' || targetId === 'hero') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
      return;
    }

    // 5. Scroll to target element with safety delay to let mobile drawer finish closing
    const executeScroll = () => {
      const element = document.getElementById(targetId);
      if (element) {
        const headerOffset = 85;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = Math.max(0, elementPosition + window.pageYOffset - headerOffset);

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });

        // Focus first input field if scrolling to contact form
        if (targetId === 'contact-form') {
          setTimeout(() => {
            const firstInput = document.getElementById('contact-fullName');
            if (firstInput) {
              firstInput.focus();
            }
          }, 500);
        }
      }
    };

    // Execute scroll slightly deferred so mobile drawer close transition doesn't lock scroll
    setTimeout(executeScroll, 120);
  };

  // Support direct loading with URL hash (e.g. http://localhost:3000/#hero or #contact-form)
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash) {
        setTimeout(() => {
          const targetId = hash.substring(1);
          if (targetId === 'home' || targetId === 'hero') {
            window.scrollTo({
              top: 0,
              behavior: 'smooth',
            });
            return;
          }
          const element = document.getElementById(targetId);
          if (element) {
            const headerOffset = 88;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = Math.max(0, elementPosition + window.pageYOffset - headerOffset);
            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth',
            });
          }
        }, 150);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <>
      {/* Top Notification / Info Bar */}
      <Box
        sx={{
          backgroundColor: '#0D274D',
          color: '#E2E8F0',
          py: 0.9,
          fontSize: '0.825rem',
          borderBottom: '1px solid rgba(255,255,255,0.08)',
          position: 'relative',
          zIndex: 1101,
        }}
      >
        <Container maxWidth="lg">
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: 1.5,
            }}
          >
            {/* Left: Email & Phone */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: { xs: 2, sm: 3 }, flexWrap: 'wrap' }}>
              <Box
                component="a"
                href="mailto:info@workbridge.com"
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 0.8,
                  color: '#CBD5E1',
                  textDecoration: 'none',
                  fontSize: '0.825rem',
                  fontWeight: 500,
                  transition: 'color 0.2s',
                  '&:hover': { color: '#F5A623' },
                }}
              >
                <EmailOutlinedIcon sx={{ fontSize: 16, color: '#F5A623' }} />
                <span>info@workbridge.com</span>
              </Box>

              <Box
                component="a"
                href="tel:040-66664291"
                sx={{
                  display: { xs: 'none', sm: 'flex' },
                  alignItems: 'center',
                  gap: 0.8,
                  color: '#CBD5E1',
                  textDecoration: 'none',
                  fontSize: '0.825rem',
                  fontWeight: 500,
                  transition: 'color 0.2s',
                  '&:hover': { color: '#F5A623' },
                }}
              >
                <PhoneInTalkOutlinedIcon sx={{ fontSize: 16, color: '#F5A623' }} />
                <span>040-66664291 / 92</span>
              </Box>
            </Box>

            {/* Right: WhatsApp & New Batches tag */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Box
                component="a"
                href="https://wa.me/918978945209"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 0.8,
                  color: '#4ADE80',
                  textDecoration: 'none',
                  fontWeight: 600,
                  fontSize: '0.825rem',
                  transition: 'opacity 0.2s',
                  '&:hover': { opacity: 0.85 },
                }}
              >
                <WhatsAppIcon sx={{ fontSize: 17 }} />
                <span>WhatsApp: +91 8978945209</span>
              </Box>

              <Chip
                label="New Batches Starting Soon"
                size="small"
                onClick={() => scrollToSection('#contact-form')}
                sx={{
                  backgroundColor: '#F5A623',
                  color: '#153B70',
                  fontWeight: 700,
                  fontSize: '0.72rem',
                  height: 24,
                  cursor: 'pointer',
                  '&:hover': { backgroundColor: '#E09415' },
                  display: { xs: 'none', md: 'inline-flex' },
                }}
              />
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Main Sticky Navigation */}
      <AppBar
        position="sticky"
        elevation={scrolled ? 4 : 0}
        sx={{
          top: 0,
          zIndex: 1100,
          backgroundColor: '#FFFFFF',
          color: '#1E293B',
          borderBottom: scrolled ? 'none' : '1px solid #E2E8F0',
          transition: 'all 0.3s ease',
          boxShadow: scrolled ? '0 4px 20px rgba(0, 0, 0, 0.08)' : 'none',
        }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ minHeight: { xs: 68, md: 78 } }}>
            {/* Logo */}
            <Logo />

            {/* Desktop Navigation Links - Single Straight Line */}
            <Box
              sx={{
                display: { xs: 'none', md: 'flex' },
                alignItems: 'center',
                gap: { md: 0.6, lg: 1.2 },
                ml: 'auto',
                whiteSpace: 'nowrap',
              }}
            >
              {navItems.map((item) => {
                if (item.hasDropdown) {
                  return (
                    <Box
                      key={item.label}
                      onMouseEnter={handleTrainingMenuOpen}
                      onMouseLeave={handleTrainingMenuClose}
                      sx={{ position: 'relative' }}
                    >
                      <Box
                        component="button"
                        onClick={handleTrainingMenuOpen}
                        sx={{
                          background: 'none',
                          border: 'none',
                          fontFamily: 'inherit',
                          fontWeight: 600,
                          fontSize: { md: '0.82rem', lg: '0.9rem' },
                          color: isTrainingMenuOpen ? '#1976D2' : '#334155',
                          py: 1,
                          px: { md: 0.7, lg: 1 },
                          borderRadius: '6px',
                          cursor: 'pointer',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: 0.3,
                          position: 'relative',
                          transition: 'all 0.2s ease',
                          '&:hover': {
                            color: '#1976D2',
                            backgroundColor: 'rgba(25, 118, 210, 0.06)',
                          },
                          '&::after': {
                            content: '""',
                            position: 'absolute',
                            bottom: 2,
                            left: '50%',
                            transform: 'translateX(-50%)',
                            width: isTrainingMenuOpen ? '75%' : '0%',
                            height: '2px',
                            backgroundColor: '#1976D2',
                            transition: 'width 0.25s ease',
                            borderRadius: '2px',
                          },
                          '&:hover::after': {
                            width: '75%',
                          },
                        }}
                      >
                        {item.label}
                        <KeyboardArrowDownIcon
                          sx={{
                            fontSize: 17,
                            transform: isTrainingMenuOpen ? 'rotate(180deg)' : 'none',
                            transition: 'transform 0.25s ease',
                          }}
                        />
                      </Box>

                      {/* Desktop Trainings Dropdown Menu */}
                      <Menu
                        anchorEl={trainingAnchorEl}
                        open={isTrainingMenuOpen}
                        onClose={() => setTrainingAnchorEl(null)}
                        MenuListProps={{
                          onMouseEnter: () => {
                            if (closeTimeoutRef.current) {
                              clearTimeout(closeTimeoutRef.current);
                              closeTimeoutRef.current = null;
                            }
                          },
                          onMouseLeave: handleTrainingMenuClose,
                        }}
                        PaperProps={{
                          onMouseEnter: () => {
                            if (closeTimeoutRef.current) {
                              clearTimeout(closeTimeoutRef.current);
                              closeTimeoutRef.current = null;
                            }
                          },
                          onMouseLeave: handleTrainingMenuClose,
                          sx: {
                            mt: 1,
                            width: 310,
                            borderRadius: 2.5,
                            boxShadow: '0 12px 35px rgba(15, 23, 42, 0.15)',
                            border: '1px solid #E2E8F0',
                            p: 0.8,
                            pointerEvents: 'auto',
                            animation: 'fadeIn 0.2s ease-in-out',
                          },
                        }}
                        transformOrigin={{ horizontal: 'left', vertical: 'top' }}
                        anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
                        disableRestoreFocus
                      >
                        <Box sx={{ px: 1.5, py: 0.8 }}>
                          <Typography variant="caption" sx={{ fontWeight: 800, color: '#153B70', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                            Trainings
                          </Typography>
                        </Box>
                        <Divider sx={{ my: 0.5 }} />

                        {trainingDropdownItems.map((subItem, idx) => {
                          if (subItem.divider) {
                            return <Divider key={`div-${idx}`} sx={{ my: 0.8 }} />;
                          }
                          return (
                            <MenuItem
                              key={subItem.label}
                              onClick={() => scrollToSection(subItem.href)}
                              sx={{
                                borderRadius: 2,
                                py: 1,
                                px: 1.5,
                                '&:hover': {
                                  backgroundColor: 'rgba(25, 118, 210, 0.08)',
                                },
                              }}
                            >
                              <ListItemIcon sx={{ minWidth: 34 }}>{subItem.icon}</ListItemIcon>
                              <Box>
                                <Typography variant="body2" sx={{ fontWeight: 600, color: '#153B70', lineHeight: 1.2 }}>
                                  {subItem.label}
                                </Typography>
                                <Typography variant="caption" sx={{ color: '#64748B', display: 'block' }}>
                                  {subItem.desc}
                                </Typography>
                              </Box>
                            </MenuItem>
                          );
                        })}
                      </Menu>
                    </Box>
                  );
                }

                return (
                  <Box
                    key={item.label}
                    component="a"
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(item.href);
                    }}
                    sx={{
                      fontWeight: 600,
                      fontSize: { md: '0.82rem', lg: '0.9rem' },
                      color: '#334155',
                      position: 'relative',
                      py: 1,
                      px: { md: 0.7, lg: 1 },
                      borderRadius: '6px',
                      cursor: 'pointer',
                      textDecoration: 'none',
                      display: 'inline-flex',
                      alignItems: 'center',
                      transition: 'all 0.2s ease',
                      '&:hover': {
                        color: '#1976D2',
                        backgroundColor: 'rgba(25, 118, 210, 0.06)',
                      },
                      '&::after': {
                        content: '""',
                        position: 'absolute',
                        bottom: 2,
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: '0%',
                        height: '2px',
                        backgroundColor: '#1976D2',
                        transition: 'width 0.25s ease',
                        borderRadius: '2px',
                      },
                      '&:hover::after': {
                        width: '75%',
                      },
                    }}
                  >
                    {item.label}
                  </Box>
                );
              })}

              {/* Enroll Now CTA Button */}
              <Button
                variant="contained"
                color="secondary"
                size="medium"
                onClick={() => scrollToSection('#contact-form')}
                sx={{
                  ml: 0.8,
                  px: 2.2,
                  py: 0.75,
                  borderRadius: 2,
                  fontWeight: 700,
                  fontSize: '0.85rem',
                  whiteSpace: 'nowrap',
                  boxShadow: '0 4px 12px rgba(245, 166, 35, 0.3)',
                  '&:hover': {
                    boxShadow: '0 6px 16px rgba(245, 166, 35, 0.45)',
                  },
                }}
              >
                Enroll Now
              </Button>
            </Box>

            {/* Mobile Hamburger Menu Icon */}
            <IconButton
              color="inherit"
              aria-label="open navigation drawer"
              edge="end"
              onClick={handleDrawerToggle}
              sx={{ display: { md: 'none' }, ml: 'auto', color: '#153B70' }}
            >
              <MenuIcon sx={{ fontSize: 28 }} />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        PaperProps={{
          sx: {
            width: { xs: '82%', sm: 340 },
            backgroundColor: '#FFFFFF',
            p: 2.5,
          },
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
          <Logo height={38} />
          <IconButton onClick={handleDrawerToggle} sx={{ color: '#64748B' }}>
            <CloseIcon />
          </IconButton>
        </Box>
        <Divider sx={{ mb: 2 }} />

        <List sx={{ pt: 0 }}>
          {navItems.map((item) => {
            if (item.hasDropdown) {
              return (
                <React.Fragment key={item.label}>
                  <ListItem disablePadding sx={{ mb: 0.5 }}>
                    <ListItemButton
                      onClick={() => setMobileTrainingsOpen((prev) => !prev)}
                      sx={{
                        borderRadius: 2,
                        py: 1.2,
                        color: '#1E293B',
                        fontWeight: 600,
                      }}
                    >
                      <ListItemText
                        primary={item.label}
                        primaryTypographyProps={{
                          fontWeight: 600,
                          fontSize: '1rem',
                        }}
                      />
                      <KeyboardArrowDownIcon
                        sx={{
                          fontSize: 20,
                          color: '#94A3B8',
                          transform: mobileTrainingsOpen ? 'rotate(180deg)' : 'none',
                          transition: 'transform 0.2s',
                        }}
                      />
                    </ListItemButton>
                  </ListItem>

                  {/* Sub-menu on mobile */}
                  {mobileTrainingsOpen && (
                    <Box sx={{ pl: 2, pr: 1, mb: 1 }}>
                      {trainingDropdownItems
                        .filter((sub) => !sub.divider)
                        .map((sub) => (
                          <Box
                            key={sub.label}
                            component="a"
                            href={sub.href}
                            onClick={(e) => {
                              e.preventDefault();
                              scrollToSection(sub.href);
                            }}
                            sx={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: 1.2,
                              py: 0.9,
                              px: 1,
                              borderRadius: 1.5,
                              color: '#334155',
                              textDecoration: 'none',
                              fontSize: '0.9rem',
                              fontWeight: 500,
                              '&:hover': {
                                backgroundColor: 'rgba(25, 118, 210, 0.08)',
                                color: '#1976D2',
                              },
                            }}
                          >
                            {sub.icon}
                            <span>{sub.label}</span>
                          </Box>
                        ))}
                    </Box>
                  )}
                </React.Fragment>
              );
            }

            return (
              <ListItem key={item.label} disablePadding sx={{ mb: 0.5 }}>
                <ListItemButton
                  onClick={() => scrollToSection(item.href)}
                  sx={{
                    borderRadius: 2,
                    py: 1.2,
                    backgroundColor: item.active ? 'rgba(25, 118, 210, 0.08)' : 'transparent',
                    color: item.active ? '#1976D2' : '#1E293B',
                    fontWeight: item.active ? 700 : 500,
                    '&:hover': {
                      backgroundColor: 'rgba(25, 118, 210, 0.05)',
                    },
                  }}
                >
                  <ListItemText
                    primary={item.label}
                    primaryTypographyProps={{
                      fontWeight: item.active ? 700 : 500,
                      fontSize: '1rem',
                    }}
                  />
                  <ArrowForwardIosIcon sx={{ fontSize: 14, color: '#94A3B8' }} />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>

        <Box sx={{ mt: 3, pt: 2, borderTop: '1px solid #E2E8F0' }}>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={() => scrollToSection('#contact-form')}
            sx={{ py: 1.2, mb: 2, fontWeight: 700 }}
          >
            Enquire Now
          </Button>

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5, fontSize: '0.85rem', color: '#64748B' }}>
            <Box component="a" href="tel:+918978945209" sx={{ display: 'flex', alignItems: 'center', gap: 1, color: 'inherit' }}>
              <PhoneInTalkOutlinedIcon sx={{ fontSize: 18, color: '#153B70' }} />
              <span>+91 8978945209</span>
            </Box>
            <Box component="a" href="mailto:info@workbridge.com" sx={{ display: 'flex', alignItems: 'center', gap: 1, color: 'inherit' }}>
              <EmailOutlinedIcon sx={{ fontSize: 18, color: '#153B70' }} />
              <span>info@workbridge.com</span>
            </Box>
          </Box>
        </Box>
      </Drawer>
    </>
  );
};

export default Header;
