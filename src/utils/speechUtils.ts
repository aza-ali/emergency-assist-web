import TTSService from '../services/TTSService';

interface SpeechOptions {
  text: string;
  lang: string;
  rate?: number;
  pitch?: number;
}

// Map of country codes to language codes for speech synthesis
const languageMap: { [key: string]: string } = {
  JP: 'ja',  // Japanese
  CN: 'zh',  // Chinese (Mandarin)
  KR: 'ko',  // Korean
  FR: 'fr',  // French
  DE: 'de',  // German
  IT: 'it',  // Italian
  ES: 'es',  // Spanish
  PT: 'pt',  // Portuguese
  BR: 'pt',  // Brazilian Portuguese
  RU: 'ru',  // Russian
  TR: 'tr',  // Turkish
  SA: 'ar',  // Arabic
  IN: 'hi',  // Hindi
  TH: 'th',  // Thai
  VN: 'vi',  // Vietnamese
  GB: 'en',  // English (UK)
  AU: 'en'   // English (Australia)
};

// Extract the actual phrase text from a phrase that might include phonetic pronunciation
export const extractPhraseText = (phrase: string): string => {
  // For languages with phonetic pronunciations in parentheses
  const match = phrase.match(/^([^(]+)/);
  if (match) {
    // Remove trailing spaces but preserve language-specific punctuation
    return match[1].replace(/\s+$/, '').trim();
  }
  return phrase;
};

export const speak = async ({ text, lang, rate = 0.9, pitch = 1 }: SpeechOptions): Promise<void> => {
  try {
    const ttsService = TTSService.getInstance();
    const langCode = languageMap[lang] || lang;
    
    // Clean the text
    const cleanText = extractPhraseText(text);
    
    // Debug logging
    console.log('Speech Debug:', {
      originalText: text,
      cleanText,
      language: langCode
    });

    // Use Chrome's advanced TTS with language-specific voices
    await ttsService.speakText(cleanText, langCode, { rate, pitch });
  } catch (error) {
    console.error('Speech synthesis error:', error);
    throw error;
  }
};

export const cancelSpeech = (): void => {
  TTSService.getInstance().cancelSpeech();
};
