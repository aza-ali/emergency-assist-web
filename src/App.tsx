import React, { useState, useEffect } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Box, Container } from '@mui/material';
import LocationService from './services/LocationService';
import { Country } from './types';
import Header from './components/Header';
import EmergencyButtons from './components/EmergencyButtons';
import AdditionalFeatures from './components/AdditionalFeatures';
import CountrySelector from './components/CountrySelector';

const theme = createTheme({
  palette: {
    primary: {
      main: '#29ABE2',
    },
    error: {
      main: '#FF4D4D',
    },
    background: {
      default: '#FFFFFF',
    },
  },
  typography: {
    fontFamily: '"SF Pro Display", "Roboto", "Helvetica", "Arial", sans-serif',
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 10,
          textTransform: 'none',
          padding: '12px 24px',
          fontSize: '1.1rem',
        },
      },
    },
  },
});

function App() {
  const [currentCountry, setCurrentCountry] = useState<Country | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const locationService = LocationService.getInstance();

  useEffect(() => {
    const detectLocation = async () => {
      try {
        const country = await locationService.getCurrentLocation();
        setCurrentCountry(country);
      } catch (error) {
        console.error('Error detecting location:', error);
      } finally {
        setIsLoading(false);
      }
    };

    detectLocation();
  }, []);

  const handleCountryChange = (country: Country) => {
    setCurrentCountry(country);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="sm">
        <Box sx={{ minHeight: '100vh', py: 4 }}>
          <Header 
            countryName={currentCountry?.name} 
            isLoading={isLoading} 
          />
          
          <EmergencyButtons 
            emergencyNumbers={currentCountry?.emergencyNumbers} 
          />
          
          {currentCountry && (
            <AdditionalFeatures 
              country={currentCountry} 
            />
          )}
          
          <CountrySelector 
            currentCountry={currentCountry} 
            onCountryChange={handleCountryChange} 
          />
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default App;
