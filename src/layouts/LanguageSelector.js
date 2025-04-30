'use client';

import { useEffect, useState } from 'react';
import { MenuItem, Select, Box, Typography } from '@mui/material';
import Iconify from '@/components/iconify';
import useLocales from '@/locales/use-locales'; 
import { allLangs } from '@/locales';

export default function LanguageSelector() {
  const { currentLang, onChangeLang } = useLocales();

  const [lang, setLang] = useState(currentLang.value);

  useEffect(() => {
    setLang(currentLang.value);
  }, [currentLang]);

  const handleChange = (event) => {
    const selectedLang = event.target.value;
    setLang(selectedLang);
    onChangeLang(selectedLang); // Use onChangeLang from useLocales to change language
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <Select sx={{
        border: 0
      }} value={lang} onChange={handleChange} size="small">
        {allLangs.map((langItem) => (
          <MenuItem key={langItem.value} value={langItem.value}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Iconify icon={langItem.icon} width={20} sx={{ mr: 1 }} />
              <Typography variant="body2">{langItem.value}</Typography>
            </Box>
          </MenuItem>
        ))}
      </Select>
    </Box>
  );
}
