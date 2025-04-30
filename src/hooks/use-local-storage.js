"use client";

import { useState, useEffect } from 'react';
import { localStorageAvailable } from '@/utils/storage-available';


export function useLocalStorage(key, defaultValue) {
  const storageAvailable = localStorageAvailable();

  const [value, setValue] = useState(defaultValue); 
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    if (storageAvailable && !initialized) {
      const storedValue = localStorage.getItem(key);
      setValue(storedValue === null ? defaultValue : JSON.parse(storedValue));
      setInitialized(true);
    }
  }, [key, defaultValue, initialized, storageAvailable]);

  useEffect(() => {
    const listener = (e) => {
      if (e.storageArea === localStorage && e.key === key) {
        setValue(e.newValue ? JSON.parse(e.newValue) : e.newValue);
      }
    };
    window.addEventListener('storage', listener);
    return () => window.removeEventListener('storage', listener);
  }, [key]);

  const setValueInLocalStorage = (newValue) => {
    setValue((currentValue) => {
      const result = typeof newValue === 'function' ? newValue(currentValue) : newValue;
      if (storageAvailable) {
        localStorage.setItem(key, JSON.stringify(result));
      }
      return result;
    });
  };

  return [value, setValueInLocalStorage];
}
