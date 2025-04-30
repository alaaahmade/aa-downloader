'use client';

import { useTranslation } from 'react-i18next';
import i18n from '@/locales/i18n'; // ✅ Make sure this path is correct
import { useCallback } from 'react';
// utils
import { localStorageGetItem } from '@/utils/storage-available';
// components
//
import { allLangs, defaultLang } from './config-lang';
import { useSettingsContext } from '@/context';

// ----------------------------------------------------------------------

export default function useLocales() {
  const { t } = useTranslation();

  const settings = useSettingsContext();

  const langStorage = localStorageGetItem('i18nextLng');

  const currentLang = allLangs.find((lang) => lang.value === langStorage) || defaultLang;

  const onChangeLang = useCallback(
    (newlang) => {
      i18n.changeLanguage(newlang);
      settings.onChangeDirectionByLang(newlang);
    },
    [i18n, settings]
  );

  return {
    allLangs,
    t,
    currentLang,
    onChangeLang,
  };
}
