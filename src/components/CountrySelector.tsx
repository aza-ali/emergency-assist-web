import React, { useState } from 'react';
import { Button, Dialog, DialogTitle, DialogContent, TextField, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import LocationService from '../services/LocationService';
import { Country } from '../types';

interface CountrySelectorProps {
  currentCountry: Country | null;
  onCountryChange: (country: Country) => void;
}

const CountrySelector: React.FC<CountrySelectorProps> = ({ currentCountry, onCountryChange }) => {
  const [open, setOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const locationService = LocationService.getInstance();
  const countries = locationService.getAllCountries();

  const filteredCountries = countries.filter(country =>
    country.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <Button
        variant="outlined"
        color="primary"
        fullWidth
        onClick={() => setOpen(true)}
        sx={{
          mt: 2,
          py: 1.5,
          borderWidth: 2,
          '&:hover': {
            borderWidth: 2
          }
        }}
      >
        Choose Country
      </Button>

      <Dialog open={open} onClose={() => setOpen(false)} maxWidth="sm" fullWidth>
        <DialogTitle>Select Country</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Search countries"
            type="text"
            fullWidth
            variant="outlined"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            sx={{ mb: 2 }}
          />
          <List sx={{ maxHeight: '400px', overflow: 'auto' }}>
            {filteredCountries.map((country) => (
              <ListItem key={country.id} disablePadding>
                <ListItemButton
                  onClick={() => {
                    onCountryChange(country);
                    setOpen(false);
                    setSearchQuery('');
                  }}
                  selected={currentCountry?.id === country.id}
                >
                  <ListItemText primary={country.name} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default CountrySelector;
