import { forwardRef } from 'react';
// @mui
import { useTheme } from '@mui/material/styles';
import Link from '@mui/material/Link';
import Box, { BoxProps } from '@mui/material/Box';
// routes
import { RouterLink } from '@/routes/components';
import { Icon } from '@iconify/react/dist/iconify';

// ----------------------------------------------------------------------


const Logo = forwardRef(
  ({ disabledLink = false, sx, ...other }, ref) => {
    const theme = useTheme();

    const logo = (
      <Box
        ref={ref}
        component="div"
        sx={{
          width: 30,
          height: 30,
          ...sx,
        }}
        {...other}
      >
        <Icon color='#FF6D6D'  icon="subway:download-1" width="30" height="30" />
      </Box>
    );

    if (disabledLink) {
      return logo;
    }

    return (
      <Link component={RouterLink} href="/" sx={{ display: 'contents' }}>
        {logo}
      </Link>
    );
  }
);

export default Logo;
