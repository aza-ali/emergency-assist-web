// Cache for loaded voices
let loadedVoices: SpeechSynthesisVoice[] | null = null;

export const loadVoices = async (): Promise<SpeechSynthesisVoice[]> => {
  return new Promise((resolve) => {
    // If voices are already loaded, return them
    if (loadedVoices) {
      resolve(loadedVoices);
      return;
    }

    // For browsers that load voices synchronously
    const voices = window.speechSynthesis.getVoices();
    if (voices.length > 0) {
      loadedVoices = voices;
      resolve(voices);
      return;
    }

    // For browsers that load voices asynchronously (like Chrome)
    const handleVoicesLoaded = () => {
      loadedVoices = window.speechSynthesis.getVoices();
      resolve(loadedVoices);
      window.speechSynthesis.removeEventListener('voiceschanged', handleVoicesLoaded);
    };

    window.speechSynthesis.addEventListener('voiceschanged', handleVoicesLoaded);
  });
};
