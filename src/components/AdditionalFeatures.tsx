import React, { useState, useEffect } from 'react';
import { Box, Button, Dialog, DialogTitle, DialogContent, Typography, List, ListItem, ListItemText, Link, Paper, Divider, Chip, IconButton, Tooltip, Alert, CircularProgress } from '@mui/material';
import TranslateIcon from '@mui/icons-material/Translate';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LanguageIcon from '@mui/icons-material/Language';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import WarningIcon from '@mui/icons-material/Warning';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import StopIcon from '@mui/icons-material/Stop';
import { Country } from '../types';
import { embassyData } from '../data/embassyData';
import { emergencyPhrases } from '../data/emergencyPhrases';
import { speak, cancelSpeech } from '../utils/speechUtils';

interface AdditionalFeaturesProps {
  country: Country;
}

const AdditionalFeatures: React.FC<AdditionalFeaturesProps> = ({ country }) => {
  const [phrasesOpen, setPhrasesOpen] = useState(false);
  const [embassyOpen, setEmbassyOpen] = useState(false);
  const [speakingPhraseId, setSpeakingPhraseId] = useState<string | null>(null);
  const [voicesLoaded, setVoicesLoaded] = useState(false);
  const [speechError, setSpeechError] = useState<string | null>(null);
  const embassy = embassyData[country.id];
  const phrases = emergencyPhrases[country.id];

  // Handle voice loading
  useEffect(() => {
    const handleVoicesChanged = () => {
      setVoicesLoaded(true);
    };

    // Chrome loads voices asynchronously
    window.speechSynthesis.addEventListener('voiceschanged', handleVoicesChanged);

    // For browsers that load voices synchronously
    if (window.speechSynthesis.getVoices().length > 0) {
      setVoicesLoaded(true);
    }

    return () => {
      window.speechSynthesis.removeEventListener('voiceschanged', handleVoicesChanged);
      // Cancel any ongoing speech when component unmounts
      cancelSpeech();
    };
  }, []);

  // Cancel speech when dialog closes
  useEffect(() => {
    if (!phrasesOpen) {
      cancelSpeech();
      setSpeakingPhraseId(null);
    }
  }, [phrasesOpen]);

  const handleSpeak = async (phraseKey: string, phraseText: string) => {
    try {
      // If this phrase is already speaking, stop it
      if (speakingPhraseId === phraseKey) {
        cancelSpeech();
        setSpeakingPhraseId(null);
        return;
      }

      // Cancel any other ongoing speech
      cancelSpeech();
      setSpeechError(null);
      setSpeakingPhraseId(phraseKey);
      
      await speak({
        text: phraseText,
        lang: country.id,
        rate: 0.9, // Slightly slower for better clarity
        pitch: 1
      });

      setSpeakingPhraseId(null);
    } catch (error) {
      console.error('Speech synthesis error:', error);
      setSpeechError('Speech synthesis failed. Your browser might not support this language.');
      setSpeakingPhraseId(null);
    }
  };

  const EmbassyContent = () => {
    if (!embassy) {
      return (
        <Box sx={{ p: 2, textAlign: 'center' }}>
          <Typography color="text.secondary">
            U.S. Embassy information is not available for this country.
            Please visit the <Link href="https://www.usembassy.gov" target="_blank" rel="noopener">U.S. Embassy website</Link> for more information.
          </Typography>
        </Box>
      );
    }

    return (
      <Box sx={{ p: 2 }}>
        <Paper elevation={0} sx={{ p: 2, mb: 2, bgcolor: 'background.default' }}>
          <Typography variant="h6" gutterBottom color="primary" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <AccountBalanceIcon /> U.S. Embassy in {country.name}
          </Typography>
          <Typography paragraph sx={{ whiteSpace: 'pre-wrap' }}>{embassy.address}</Typography>
          
          <List sx={{ width: '100%', bgcolor: 'background.default' }}>
            {/* Emergency Phone */}
            {embassy.emergency_phone && (
              <ListItem sx={{ px: 0 }}>
                <ListItemText
                  primary={
                    <Typography color="error" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <WarningIcon color="error" /> 24/7 Emergency Number
                    </Typography>
                  }
                  secondary={
                    <Link href={`tel:${embassy.emergency_phone}`} color="error" sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 0.5 }}>
                      <PhoneIcon /> {embassy.emergency_phone}
                    </Link>
                  }
                />
              </ListItem>
            )}
            
            <Divider sx={{ my: 1 }} />

            {/* Main Phone */}
            <ListItem sx={{ px: 0 }}>
              <ListItemText
                primary="Main Phone"
                secondary={
                  <Link href={`tel:${embassy.phone}`} color="primary" sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 0.5 }}>
                    <PhoneIcon /> {embassy.phone}
                  </Link>
                }
              />
            </ListItem>

            {/* Email */}
            <ListItem sx={{ px: 0 }}>
              <ListItemText
                primary="Email"
                secondary={
                  <Link href={`mailto:${embassy.email}`} color="primary" sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 0.5 }}>
                    <EmailIcon /> {embassy.email}
                  </Link>
                }
              />
            </ListItem>

            {/* Website */}
            <ListItem sx={{ px: 0 }}>
              <ListItemText
                primary="Website"
                secondary={
                  <Link href={embassy.website} target="_blank" rel="noopener" color="primary" sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 0.5 }}>
                    <LanguageIcon /> Visit Embassy Website
                  </Link>
                }
              />
            </ListItem>

            {/* Hours */}
            <ListItem sx={{ px: 0 }}>
              <ListItemText
                primary="Hours of Operation"
                secondary={
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 0.5 }}>
                    <AccessTimeIcon color="action" /> {embassy.hours}
                  </Box>
                }
              />
            </ListItem>
          </List>

          {embassy.notes && (
            <Paper elevation={0} sx={{ p: 2, mt: 2, bgcolor: '#fff3e0' }}>
              <Typography variant="body2" color="warning.dark" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <WarningIcon color="warning" fontSize="small" />
                {embassy.notes}
              </Typography>
            </Paper>
          )}
        </Paper>
      </Box>
    );
  };

  const EmergencyPhrasesContent = () => {
    if (!phrases) {
      return (
        <Box sx={{ p: 2, textAlign: 'center' }}>
          <Typography color="text.secondary">
            Emergency phrases are not available for this country.
          </Typography>
        </Box>
      );
    }

    return (
      <Box sx={{ p: 2 }}>
        <Box sx={{ mb: 2 }}>
          <Chip
            icon={<TranslateIcon />}
            label={`Language: ${phrases.language}`}
            color="primary"
            sx={{ fontWeight: 'medium' }}
          />
          {!voicesLoaded && (
            <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mt: 1 }}>
              Loading speech capabilities...
            </Typography>
          )}
          {phrases.phonetic && (
            <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mt: 1 }}>
              Note: Phonetic pronunciations are provided in parentheses
            </Typography>
          )}
        </Box>

        {speechError && (
          <Alert 
            severity="warning" 
            sx={{ mb: 2 }} 
            onClose={() => setSpeechError(null)}
            action={
              <Button color="inherit" size="small" onClick={() => setSpeechError(null)}>
                Dismiss
              </Button>
            }
          >
            {speechError}
          </Alert>
        )}

        <List sx={{ width: '100%' }}>
          {Object.entries(phrases.phrases).map(([key, phrase]) => (
            <ListItem
              key={key}
              divider
              secondaryAction={
                <Tooltip title={
                  !voicesLoaded ? "Loading voices..." :
                  speakingPhraseId === key ? "Stop speaking" :
                  "Play pronunciation"
                }>
                  <span>
                    <IconButton
                      edge="end"
                      aria-label={speakingPhraseId === key ? "stop pronunciation" : "play pronunciation"}
                      onClick={() => handleSpeak(key, phrase)}
                      disabled={!voicesLoaded}
                      color={speakingPhraseId === key ? "secondary" : "primary"}
                    >
                      {speakingPhraseId === key ? (
                        <StopIcon />
                      ) : !voicesLoaded ? (
                        <VolumeOffIcon color="disabled" />
                      ) : (
                        <VolumeUpIcon />
                      )}
                    </IconButton>
                  </span>
                </Tooltip>
              }
            >
              <ListItemText
                primary={
                  <Typography color="primary" sx={{ fontWeight: 'medium', mb: 0.5 }}>
                    {key.charAt(0).toUpperCase() + key.slice(1)}
                  </Typography>
                }
                secondary={
                  <Typography 
                    variant="body1" 
                    sx={{ 
                      whiteSpace: 'pre-wrap',
                      opacity: speakingPhraseId === key ? 0.7 : 1,
                      direction: phrases.language === "Arabic" ? "rtl" : "ltr",
                      fontFamily: phrases.language === "Japanese" || phrases.language === "Chinese" ? 
                        '"Noto Sans JP", "Noto Sans SC", sans-serif' : 'inherit'
                    }}
                  >
                    {phrase}
                  </Typography>
                }
              />
            </ListItem>
          ))}
        </List>

        <Box sx={{ mt: 2, display: 'flex', justifyContent: 'center' }}>
          <Typography variant="caption" color="text.secondary">
            Click the speaker icon next to any phrase to hear it spoken by a native speaker
          </Typography>
        </Box>
      </Box>
    );
  };

  return (
    <Box sx={{ mb: 4 }}>
      <Box sx={{ display: 'grid', gap: 2, gridTemplateColumns: '1fr 1fr' }}>
        <Button
          variant="contained"
          onClick={() => setPhrasesOpen(true)}
          startIcon={<TranslateIcon />}
          sx={{
            height: '80px',
            backgroundColor: phrases ? 'primary.main' : 'action.disabledBackground',
            '&:hover': { backgroundColor: phrases ? 'primary.dark' : 'action.disabledBackground' }
          }}
        >
          Emergency Phrases
        </Button>

        <Button
          variant="contained"
          onClick={() => setEmbassyOpen(true)}
          startIcon={<AccountBalanceIcon />}
          sx={{
            height: '80px',
            backgroundColor: embassy ? 'primary.main' : 'action.disabledBackground',
            '&:hover': { backgroundColor: embassy ? 'primary.dark' : 'action.disabledBackground' }
          }}
        >
          U.S. Embassy Info
        </Button>
      </Box>

      {/* Emergency Phrases Dialog */}
      <Dialog 
        open={phrasesOpen} 
        onClose={() => setPhrasesOpen(false)} 
        maxWidth="sm" 
        fullWidth
        PaperProps={{
          sx: { borderRadius: 2 }
        }}
      >
        <DialogTitle sx={{ bgcolor: 'primary.main', color: 'white' }}>
          Emergency Phrases - {country.name}
        </DialogTitle>
        <DialogContent>
          <EmergencyPhrasesContent />
        </DialogContent>
      </Dialog>

      {/* Embassy Information Dialog */}
      <Dialog 
        open={embassyOpen} 
        onClose={() => setEmbassyOpen(false)} 
        maxWidth="sm" 
        fullWidth
        PaperProps={{
          sx: { borderRadius: 2 }
        }}
      >
        <DialogTitle sx={{ bgcolor: 'primary.main', color: 'white' }}>
          U.S. Embassy Information
        </DialogTitle>
        <DialogContent>
          <EmbassyContent />
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default AdditionalFeatures;
