"use client";

import { Container, Grid, Box, Typography, useTheme } from '@mui/material';

export const HowToDownloadSection = () => {

  const theme = useTheme();

  const steps = [
    {
      img: 'https://ssyoutube.com/img/steps/howto2.png',
      alt: 'Step 1',
      text: 'Get your favorite YouTube videos downloaded with these straightforward instructions:',
    },
    {
      img: 'https://ssyoutube.com/img/steps/howto3.png',
      alt: 'Step 2',
      text: 'Find the video you want on YouTube and grab the URL from your browser.',
    },
    {
      img: 'https://ssyoutube.com/img/steps/howto4.png',
      alt: 'Step 3',
      text: 'Insert the YouTube video link into our download box above.',
    },
  ];

  return (
    <Container sx={{ mt: 5, mb: 5, textAlign: 'center',
     gap: 5,
     display: 'flex',
     flexDirection: 'column',
     alignItems: 'center',
     justifyContent: 'center',  
     }}>
      <Typography sx={{mb: 2}} color='background.main' variant="h4" component="h2" gutterBottom>
        Download YouTube Videos: Your Complete Guide
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {steps.map((step, index) => (
          <Grid
            item
            xs={12}    // Full width on phones
            sm={4}     // 3 per row on small screens and above
            key={index}
          >
            <Box 
            textAlign="center">
              <Box
                component="img"
                src={step.img}
                alt={step.alt}
                loading="lazy"
                width={225}
                height={180}
                sx={{ mx: 'auto', mb: 2 }}
              />
              <Typography
              sx={{
                maxWidth: 300
              }}
              variant="body2" color="text.secondary">
                {step.text}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'flex-start',
        }}
      >
      <Typography sx={{alignSelf: 'center'}} color='background.main' variant="h4" component="h2" gutterBottom>
      How to Download YouTube Videos Without an Add-on
      </Typography>
        <Typography sx={{letterSpacing: 1}} variant="body2" color="text.secondary">
        Learn how to download a YouTube video without a video downloader add-on! Simply add 'ss' to the video URL to quickly save the video to your device.
        </Typography>
        <Typography sx={{letterSpacing: 1, mt: 2, mb: 2}} variant="body2" color="text.secondary">
        Here’s an example:
        </Typography>

        <ul
          style={{
            color: 'text.secondary',
          }}
        >
          <li
            style={{
              color: theme.palette.text.secondary,
              width: 'fit-content'
            }}
          >Original URL: https://youtube.com/watch?v=YOcmSsBfafg</li>
          
          <li
            style={{
              color: theme.palette.text.secondary,
              width: 'fit-content'

            }}>
              Modified URL with: {"'ss'https://www.youtube.com/watch?v=dQw4w9WgXcQ"}
              </li>
        </ul>
      </Box>


    </Container>
  );
};

