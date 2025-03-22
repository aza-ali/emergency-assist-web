import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import LocalPoliceIcon from '@mui/icons-material/LocalPolice';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';

interface EmergencyButtonsProps {
  emergencyNumbers?: {
    police: string;
    fire: string;
    ambulance: string;
    additionalNumbers?: {
      [key: string]: string;
    };
  };
}

const EmergencyButton: React.FC<{
  title: string;
  number: string;
  icon: React.ReactNode;
  color: 'primary' | 'error';
}> = ({ title, number, icon, color }) => (
  <Button
    variant="contained"
    color={color}
    fullWidth
    sx={{
      py: 3,
      mb: 2,
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',
      gap: 2,
      '&:hover': {
        transform: 'scale(1.02)',
        transition: 'transform 0.2s'
      }
    }}
    onClick={() => {
      const tel = `tel:${number}`;
      window.location.href = tel;
    }}
  >
    <Box sx={{ display: 'flex', alignItems: 'center', fontSize: '2rem' }}>
      {icon}
    </Box>
    <Box sx={{ textAlign: 'left' }}>
      <Typography variant="subtitle1" sx={{ opacity: 0.9 }}>
        {title}
      </Typography>
      <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
        {number || '---'}
      </Typography>
    </Box>
  </Button>
);

const EmergencyButtons: React.FC<EmergencyButtonsProps> = ({ emergencyNumbers }) => {
  return (
    <Box sx={{ mb: 4 }}>
      <EmergencyButton
        title="Police"
        number={emergencyNumbers?.police || '---'}
        icon={<LocalPoliceIcon sx={{ fontSize: 'inherit' }} />}
        color="primary"
      />
      <EmergencyButton
        title="Fire Department"
        number={emergencyNumbers?.fire || '---'}
        icon={<LocalFireDepartmentIcon sx={{ fontSize: 'inherit' }} />}
        color="error"
      />
      <EmergencyButton
        title="Ambulance"
        number={emergencyNumbers?.ambulance || '---'}
        icon={<MedicalServicesIcon sx={{ fontSize: 'inherit' }} />}
        color="primary"
      />
      
      {emergencyNumbers?.additionalNumbers && (
        <Box sx={{ mt: 2 }}>
          <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 1 }}>
            Additional Emergency Numbers
          </Typography>
          {Object.entries(emergencyNumbers.additionalNumbers).map(([key, value]) => (
            <Button
              key={key}
              variant="outlined"
              color="primary"
              fullWidth
              sx={{ mb: 1, justifyContent: 'space-between', py: 1.5 }}
              onClick={() => {
                window.location.href = `tel:${value}`;
              }}
            >
              <Typography sx={{ textTransform: 'capitalize' }}>
                {key.replace(/_/g, ' ')}
              </Typography>
              <Typography>{value}</Typography>
            </Button>
          ))}
        </Box>
      )}
    </Box>
  );
};

export default EmergencyButtons;
