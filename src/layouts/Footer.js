'use client';

import React from 'react';
import {
  Box,
  Container,
  Typography,
  Link,
  Grid,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import Iconify from '@/components/iconify';

export const Footer = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: 'black',
        color: 'white',
        pt: 4,
        pb: 5,
        mt: 'auto',
      }}
    >
      <Container>
        <Typography align="center" sx={{ mt: 3, color: 'gray',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: .5
         }}>
          © 2025 YouTube Downloader, made with{' '}
          <Iconify color="#ff5916" icon="mdi:heart" width="24" height="24" />
          by AAYoutube.
        </Typography>

        {isMobile ? (
          // Mobile Footer (Accordion layout)
          <Box mt={3}>
            <Accordion>
              <AccordionSummary expandIcon={<Iconify icon="ooui:expand" width="20" height="20" />}>
                <Link href="https://ssyoutube.com/en227OJ/youtube-to-mp4" underline="hover" color="inherit">
                  Download Youtube to mp4
                </Link>
              </AccordionSummary>
            </Accordion>

            <Accordion>
              <AccordionSummary expandIcon={<Iconify icon="ooui:expand" width="20" height="20" />}>
                <Link href="https://ssyoutube.com/en79AU/how-to-download-facebook-video" underline="hover" color="inherit">
                  Facebook Video Downloader
                </Link>
              </AccordionSummary>
            </Accordion>

            <Accordion>
              <AccordionSummary expandIcon={<Iconify icon="ooui:expand" width="20" height="20" />}>
                <Link href="https://ssyoutube.com/en36PR/download-from-twitter" underline="hover" color="inherit">
                  Twitter Video Downloader
                </Link>
              </AccordionSummary>
            </Accordion>

            <Accordion>
              <AccordionSummary expandIcon={<Iconify icon="ooui:expand" width="20" height="20" />}>About Us</AccordionSummary>
              <AccordionDetails>
                <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
                  <li><Link href="/en5um/privacy-policy" color="inherit">Privacy Policy</Link></li>
                  <li><Link href="/en6Na/terms-of-service" color="inherit">Terms of Service</Link></li>
                  <li><Link href="/en6fx/contact" color="inherit">Contact</Link></li>
                </ul>
              </AccordionDetails>
            </Accordion>

            <Accordion>
              <AccordionSummary expandIcon={<Iconify icon="ooui:expand" width="20" height="20" />}>
                <Link href="/en8HZ/api-faq" underline="hover" color="inherit">API</Link>
              </AccordionSummary>
            </Accordion>

            <Accordion>
              <AccordionSummary expandIcon={<Iconify icon="ooui:expand" width="20" height="20" />}>
                <Typography sx={{ color: '#20c997' }}>Partners</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Link href="https://ssstik.live/" target="_blank" color="inherit">AASTIK</Link>
              </AccordionDetails>
            </Accordion>
          </Box>
        ) : (
          // Desktop Footer
          <Grid container color='#20c997' p={4} spacing={4} mt={4} alignContent={'center'} justifyContent={'space-between'}>
            <Grid item spacing={3}>
              <Typography variant="subtitle1" gutterBottom>
                <Link href="https://ssyoutube.com/en227OJ/youtube-to-mp4" color="inherit">Download Youtube to mp4</Link>
              </Typography>
              <ul style={{ listStyle: 'none', paddingLeft: 0, display: 'flex', flexDirection: 'column', gap: '10px'  }}>
                <li
                ><Link href="https://ssyoutube.com/en45yi/youtube-shorts-downloader" color="inherit">Youtube Shorts</Link></li>
                <li><Link href="https://ssyoutube.com/en36PR/download-from-twitter" color="inherit">Twitter Video Downloader</Link></li>
              </ul>
            </Grid>

            <Grid item>
              <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
                <li><Link href="https://ssyoutube.com/en79AU/how-to-download-facebook-video" color="inherit">Facebook Video Downloader</Link></li>
              </ul>
            </Grid>

            <Grid item>
              <Typography variant="subtitle1" gutterBottom>
                <Link href="/en6vY/about" color="inherit">About us</Link>
              </Typography>
              <ul style={{ listStyle: 'none', paddingLeft: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <li><Link href="/en5um/privacy-policy" color="inherit">Privacy Policy</Link></li>
                <li><Link href="/en6Na/terms-of-service" color="inherit">Terms of Service</Link></li>
                <li><Link href="/en6fx/contact" color="inherit">Contact</Link></li>
                <li><Link href="/en8HZ/api-faq" color="inherit">API</Link></li>
              </ul>
            </Grid>

            <Grid item>
              <Typography variant="subtitle1" gutterBottom sx={{ color: '#20c997' }}>
                Partners
              </Typography>
              <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
                <li><Link href="https://ssstik.live/" target="_blank" color="inherit">AASTIK</Link></li>
              </ul>
            </Grid>
          </Grid>
        )}
      </Container>
    </Box>
  );
};
