'use client';

import React from 'react';
import { Container, Typography, Grid, Box, useTheme } from '@mui/material';

const steps = [
  {
    title: 'Find Your Video',
    img: '/img/steps/yt-video-downloader_how-to_1.svg',
    description:
      'First, find the YouTube video you want to download and copy its URL from the address bar.',
  },
  {
    title: 'Modify the URL',
    img: '/img/steps/yt-video-downloader_how-to_2.svg',
    description:
      'Add "ss" before the video URL. This prefix is how you initiate the YouTube download process.',
  },
  {
    title: 'Download Your Video',
    img: '/img/steps/how_can_i_save_3.svg',
    description:
      "Hit Enter. You'll be taken to a new page where your YouTube video download will start automatically.",
  },
];

export const HowToUseSection = () => {

  const theme = useTheme();

  return (
    <Container maxWidth="lg" sx={{ my: 8, color: '#08003a' }}>
      <Typography sx={{mb: 4}} variant="h4" align="center" gutterBottom>
        Using SSYouTube&apos;s Short Domain to Download Videos
      </Typography>

      <Grid sx={{p: '2em 0'}} container spacing={6} alignItems={'center'} textAlign="center" justifyContent="center" >
        {steps.map((step, index) => (
          <Grid item xs={12} md={4} key={index}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 5
            }}
          >
            <Typography variant="h6" gutterBottom>
              {step.title}
            </Typography>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 0,
                color: theme.palette.text.secondary,
              }}
            >
            <Box
              component="img"
              src={'https://ssyoutube.com/'+step.img}
              alt={step.title}
              sx={{ width: '100%', maxWidth: 350, mb: 2 }}
            />
            <Typography sx={{width: '100%', maxWidth: 320}} variant="body1">{step.description}</Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};
