'use client';

import React from 'react';
import { Container, Typography, Box, Link, useTheme } from '@mui/material';

export const OtherSitesSection = () => {

  const theme = useTheme();

  return (
    <Box
      sx={{
        backgroundColor: '#08003a',
        color: '#fff',
        overflowWrap: 'anywhere',
        py: 5,
      }}
    >
      <Container maxWidth="lg"  
        sx={{
          color: theme.palette.text.secondary,
          display: 'flex',
          flexDirection: 'column',
          gap: 2
        }}
>
        <Typography variant="h4" align="center" 
          sx={{
            color: '#fff',
          }}
        >
          Download Videos From Other Websites
        </Typography>

        <Typography variant="body1" 

        >
          Want to download YouTube Shorts from sites other than YouTube? The SSYouTube downloader supports video
          downloads from 99% of websites! Just add <strong>"sfrom.net/"</strong> or <strong>"savefrom.net/"</strong> before the website URL and press Enter.
        </Typography>

        <Typography variant="body1" >
          You'll get a list of direct links to download all available videos from that website.
        </Typography>

        <Typography variant="body1" >
          For example:{' '}
          <Link
            href="https://sfrom.net/http://www.freethechildren.com/"
            target="_blank"
            rel="nofollow noopener noreferrer"
            color="#7832e2"
            underline="hover"
          >
            sfrom.net/http://www.freethechildren.com/
          </Link>
        </Typography>
      </Container>
    </Box>
  );
};
