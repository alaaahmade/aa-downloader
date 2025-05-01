"use client";
import Iconify from '@/components/iconify';
import { VideoInput } from '@/components/video-inpit/video-input';
import { Box, Typography, useTheme, useMediaQuery } from '@mui/material';
import React from 'react';

const HeroSection = () => {
  const theme = useTheme();
  const isSm = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-end',
        minHeight: { xs: '70vh', md: '55dvh' },
        backgroundColor: theme.palette.background.main,
        p: { xs: 2, sm: 4, md: 6 },
        textAlign: 'center',
      }}
    >
      <Box
        sx={{
          width: '100%',
          maxWidth: '800px',
          mx: 'auto',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          gap: 2,
        }}
      >
        <Typography
          variant={isSm ? 'h4' : 'h3'}
          sx={{
            letterSpacing: '2px',
            fontWeight: 700,
          }}
        >
          YouTube Video Downloader
        </Typography>

        <VideoInput />

        <Typography
          variant="body2"
          sx={{
            letterSpacing: '2px',
            color: theme.palette.text.secondary,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 1,
            fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' },
          }}
        >
          Scanned by
          <Iconify color="primary.dark" icon="mingcute:safety-certificate-fill" width="22" height="22" />
          Safe Web
        </Typography>
      </Box>
    </Box>
  );
};

export default HeroSection;
