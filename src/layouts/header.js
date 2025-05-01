"use client";
import { useLocalStorage } from '@/hooks/use-local-storage';
import { Box, FormControl, InputLabel, Link, MenuItem, Select, Stack, Typography } from '@mui/material'
import React from 'react'
import LanguageSelector from './LanguageSelector';
import Logo from '@/components/logo';
import { RouterLink } from '@/routes/components';

const Header = () => {
  return (
    <Box
    sx={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      maxWidth: '100vw',
      padding:'1em 2rem',
      backgroundColor: 'background.main'
    }}
    >
      <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 1
      }}
      >
      <Logo sx={{ color: '#fff' }} />
      <Link component={RouterLink} href="/" sx={{ display: 'contents',  
      color: '#fff'
       }}>
      <Typography variant="h6">aayoutube</Typography>
      </Link>
      </Box>
      <LanguageSelector/>
    </Box>
  )
}

export default Header
