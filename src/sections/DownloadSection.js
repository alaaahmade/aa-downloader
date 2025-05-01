import React from 'react';
import { Container, Grid, Typography, Box } from '@mui/material';

const platforms = [
  { src: 'https://ssyoutube.com/img/platforms/windows.svg', alt: 'Windows' },
  { src: 'https://ssyoutube.com/img/platforms/apple.svg', alt: 'Apple' },
  { src: 'https://ssyoutube.com/img/platforms/android.svg', alt: 'Android' },
  { src: 'https://ssyoutube.com/img/platforms/linux.svg', alt: 'Linux' },
];

const features = [
  "Experience the best YouTube video downloading with our top-rated tool - completely free.",
  "Download content in your preferred quality: from MP4 to MP3, standard to Full HD resolution.",
  "Perfect compatibility across all devices - grab your favorite videos on desktop or mobile.",
  "Convert YouTube videos with just a few simple clicks using our streamlined platform.",
  "Get lightning-fast downloads and unlimited video access without spending a dime.",
  "Master YouTube downloading with our comprehensive guide and expert tips."
];

const DownloadSection = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 5, mb: 5 }}>
      <Grid container spacing={4} justifyContent="center" alignItems="center">
        <Grid item xs={12}>
          <Typography variant="body1" color="text.secondary">
            SSYouTube is your go-to online video downloader, crafted to bypass YouTube's download restrictions. 
            We bridge the gap by offering a fast and reliable way to download YouTube videos. 
            With our user-friendly interface, accessing your favorite content has never been easier.
          </Typography>
        </Grid>

        <Grid item xs={12}>
        </Grid>

        <Grid item xs={12}>
          <Typography variant="h5" align="center" color="text.secondary" gutterBottom>
            Supported Platforms:
          </Typography>
          <Grid container spacing={8} justifyContent="center">
            {platforms.map((platform, index) => (
              <Grid item xs={6} sm={3} key={index} textAlign="center">
                <Box
                  component="img"
                  src={platform.src}
                  alt={platform.alt}
                  sx={{ width: 120, height: 120 }}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>

        <Grid item xs={12}>
          <ul style={{ paddingLeft: '1.2rem' }}>
            {features.map((item, index) => (
              <li key={index} style={{ color: '#6c757d', marginBottom: '0.5rem' }}>
                {item}
              </li>
            ))}
          </ul>
        </Grid>
      </Grid>
    </Container>
  );
};

export default DownloadSection;
