"use client";
import { useLocalStorage } from '@/hooks/use-local-storage';
import { FormControl, InputLabel, MenuItem, Select, Stack } from '@mui/material'
import React from 'react'
import LanguageSelector from './LanguageSelector';

const Header = () => {
  return (
    <Stack>
      {/* <Logo /> */}
      <LanguageSelector/>
    </Stack>
  )
}

export default Header
