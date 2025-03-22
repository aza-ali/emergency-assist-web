import React from 'react';
import { Box, Typography, CircularProgress } from '@mui/material';

interface HeaderProps {
  countryName?: string;
  isLoading: boolean;
}

const Header: React.FC<HeaderProps> = ({ countryName, isLoading }) => {
  return (
    <Box sx={{ textAlign: 'center', mb: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Emergency Assist
      </Typography>
      <Typography variant="h5" color="primary">
        {isLoading ? (
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 2 }}>
            <CircularProgress size={20} />
            <span>Detecting Location...</span>
          </Box>
        ) : (
          countryName || 'Select Country'
        )}
      </Typography>
    </Box>
  );
};

export default Header;
