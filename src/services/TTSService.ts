interface VoiceConfig {
  lang: string;
  name?: string;
  rate?: number;
  pitch?: number;
}

class TTSService {
  private static instance: TTSService;
  private preferredVoices: { [key: string]: string } = {
    'ja': 'Google 日本語',      // Japanese
    'zh': 'Google 普通话',      // Mandarin
    'ko': 'Google 한국의',      // Korean
    'fr': 'Google français',    // French
    'de': 'Google Deutsch',     // German
    'it': 'Google italiano',    // Italian
    'es': 'Google español',     // Spanish
    'pt': 'Google português',   // Portuguese
    'ru': 'Google русский',     // Russian
    'ar': 'Google العربية',     // Arabic
    'hi': 'Google हिन्दी',      // Hindi
    'th': 'Google ไทย',        // Thai
    'vi': 'Google Tiếng Việt',  // Vietnamese
    'en': 'Google UK English Female' // English
  };
  
  private constructor() {}

  static getInstance(): TTSService {
    if (!TTSService.instance) {
      TTSService.instance = new TTSService();
    }
    return TTSService.instance;
  }

  private async getVoices(): Promise<SpeechSynthesisVoice[]> {
    const voices = speechSynthesis.getVoices();
    if (voices.length > 0) {
      return voices;
    }

    // If voices aren't loaded yet, wait for them
    return new Promise((resolve) => {
      speechSynthesis.onvoiceschanged = () => {
        resolve(speechSynthesis.getVoices());
      };
    });
  }

  private async findBestVoice(language: string): Promise<SpeechSynthesisVoice | null> {
    const voices = await this.getVoices();
    const langCode = language.toLowerCase().split('-')[0];
    const preferredVoiceName = this.preferredVoices[langCode];

    // First try to find the preferred voice for the language
    let voice = voices.find(v => 
      v.name === preferredVoiceName || 
      v.name.toLowerCase().includes(preferredVoiceName?.toLowerCase() || '')
    );

    // If preferred voice not found, try to find any voice for the language
    if (!voice) {
      voice = voices.find(v => v.lang.toLowerCase().startsWith(langCode));
    }

    // If still no voice found, try finding any voice that supports the language
    if (!voice) {
      voice = voices.find(v => v.lang.toLowerCase().includes(langCode));
    }

    return voice || null;
  }

  async speakText(text: string, language: string, options: Partial<VoiceConfig> = {}): Promise<void> {
    return new Promise(async (resolve, reject) => {
      try {
        // Cancel any ongoing speech
        speechSynthesis.cancel();

        const utterance = new SpeechSynthesisUtterance(text);
        
        // Find the best voice for the language
        const voice = await this.findBestVoice(language);
        if (voice) {
          utterance.voice = voice;
          console.log(`Using voice: ${voice.name} (${voice.lang})`);
        } else {
          console.warn(`No specific voice found for ${language}, using default`);
          utterance.lang = language;
        }

        // Set speech properties
        utterance.rate = options.rate || 0.9; // Slightly slower for clarity
        utterance.pitch = options.pitch || 1;
        
        // Handle events
        utterance.onend = () => resolve();
        utterance.onerror = (event) => {
          console.error('Speech synthesis error:', event);
          reject(new Error('Speech synthesis failed'));
        };

        // Start speaking
        speechSynthesis.speak(utterance);

        // Chrome bug workaround: utterance stops after 15s
        const checkAndResume = setInterval(() => {
          if (speechSynthesis.paused) {
            speechSynthesis.resume();
          }
        }, 14000);

        utterance.onend = () => {
          clearInterval(checkAndResume);
          resolve();
        };
      } catch (error) {
        console.error('TTS error:', error);
        reject(error);
      }
    });
  }

  cancelSpeech(): void {
    speechSynthesis.cancel();
  }
}

export default TTSService;
