import DownloadSection from '@/sections/DownloadSection';
import { FaqSection } from '@/sections/FaqSection';
import HeroSection from '@/sections/HeroSection';
import { HowToDownloadSection } from '@/sections/HowToDownloadSection';
import { HowToUseSection } from '@/sections/HowToUseSection';
import { OtherSitesSection } from '@/sections/OtherSitesSection';
import { Box } from '@mui/material';
import Image from "next/image";

export default function Home() {
  return (
    <Box >
      <HeroSection />
      <HowToDownloadSection/>
      <DownloadSection/>
      <OtherSitesSection/>
      <HowToUseSection/>
      <FaqSection/>
    </Box>
  );
}
