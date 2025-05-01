import { InputBase, InputAdornment, IconButton, useTheme, useMediaQuery } from '@mui/material';
import React from 'react';
import Iconify from '../iconify';

export function VideoInput() {
  const theme = useTheme();
  const isSm = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <InputBase
      placeholder="Paste your video link here"
      fullWidth
      sx={{
        width: { xs: '100%', sm: '80%', md: '60%', lg: '60%' },
        height: '3.5em',
        borderRadius: 1,
        px: 2,
        py: 4,
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.secondary,
        fontSize: { xs: '0.9rem', sm: '1rem' },
        boxShadow: theme.shadows[1],
      }}
      endAdornment={
        <InputAdornment position="end">
          <IconButton
            onClick={() => {
              // Handle click
            }}
            edge="end"
            sx={{
              backgroundColor: theme.palette.primary.main,
              color: '#fff',
              borderRadius: 1,
              p: { xs: 1, sm: 1.5 },
              fontSize: '16px',
              ml: 1,
              display: 'flex',
              alignItems: 'center',
              gap: 0.5,
              '&:hover': {
                backgroundColor: theme.palette.primary.dark,
              },
            }}
          >
            Download
            <Iconify icon="icons8:right-arrow" width={isSm ? 24 : 32} height={isSm ? 24 : 32} />
          </IconButton>
        </InputAdornment>
      }
    />
  );
}
