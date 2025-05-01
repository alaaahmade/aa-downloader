'use client';
import React, { useState } from 'react';
import {
  Container,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box,
  useTheme,
} from '@mui/material';
import Iconify from '@/components/iconify';

const faqItems = [
  {
    question: 'What is SSYouTube and What Does It Do?',
    answer:
      'SSYouTube is a free online YouTube video downloader that allows you to download videos in multiple formats and resolutions. Enjoy fast downloads, high-quality video and audio, and convenient offline viewing.',
  },
  {
    question: 'How Do I Download YouTube Videos with SSYouTube?',
    answer:
      'Copy the YouTube video URL and paste it into the search bar on the SSYouTube website. Select your preferred format and resolution, and click download. It’s that simple!',
  },
  {
    question: 'Which Video Formats Does SSYouTube Support?',
    answer:
      'SSYouTube supports various video and audio formats, including MP4, AVI, FLV, MOV, WMV, and more. You can also select different resolutions, such as 720p or 1080p.',
  },
  {
    question: 'Can I Download YouTube Playlists and Channels with SSYouTube?',
    answer:
      'Yes, you can download entire YouTube playlists and channels using SSYouTube. Copy the playlist or channel URL, paste it into the SSYouTube search bar, select the videos you want, and start your download.',
  },
  {
    question: 'Is SSYouTube Safe?',
    answer:
      'Yes, SSYouTube is a secure platform. We prioritize user privacy and do not store any personal information. The site is regularly updated to protect against viruses and malware.',
  },
];

export const FaqSection = () => {
  const theme = useTheme();
  const [expandedIndex, setExpandedIndex] = useState('null');

  const handleChange = (index) => (_event, isExpanded) => {
    setExpandedIndex(isExpanded ? index : null);
  };

  return (
    <Container maxWidth="lg " id="faq" itemScope itemType="https://schema.org/FAQPage"
    sx={{ my: 8,
     display: 'flex',
     flexDirection: 'column',
     alignItems: 'center',
     justifyContent: 'center',
     gap: 3
     }}
    >
      <Typography
      sx={{
        color: theme.palette.background.main,
      }}
      variant="h4" align="center" gutterBottom id="accordion_header">
        FAQ
      </Typography>

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 2,
          width: '90%',
        }}
      >
      {faqItems.map((item, index) => (
        <Box
          key={index}
          itemScope
          itemProp="mainEntity"
          itemType="https://schema.org/Question"
          sx={{
            borderRadius: 8
          }}
          
        >
          <Accordion
            expanded={expandedIndex === index}
            onChange={handleChange(index)}
            sx={{
              border: expandedIndex == index ? '2px solid #ddd' : '0px solid #ddd',
              borderRadius: '8px',
              mb: 2,
              backgroundColor: expandedIndex == index ? theme.palette.grey[100] : 'transparent',
              boxShadow: expandedIndex == index ? `0 0 10px ${theme.palette.background.main}` : 'none',
              transition: 'all 0.3s ease',
            }}
          >
            <AccordionSummary
              sx={{
                backgroundColor: theme.palette.background.main,
                p: '1em 2.5em',
                borderRadius: expandedIndex == index ? '8px 8px 0px 0px': '8px' ,
                }}
              onClick={(e) => {
                
              }}
              expandIcon={<Iconify icon="ooui:expand" width="20" height="20" />}
              aria-controls={`faq-content-${index}`}
              id={`faq-header-${index}`}
            >
              <Typography itemProp="name">{item.question}</Typography>
            </AccordionSummary>
            <AccordionDetails
              itemProp="acceptedAnswer"
              itemScope
              itemType="https://schema.org/Answer"
              sx={{
                color: theme.palette.text.secondary,
              }}
            >
              <Typography itemProp="text">{item.answer}</Typography>
            </AccordionDetails>
          </Accordion>
        </Box>
      ))}
      </Box>
    </Container>
  );
};