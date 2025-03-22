import { emergencyNumbers } from '../data/emergencyNumbers';
import { Country } from '../types';

class LocationService {
  private static instance: LocationService;

  private constructor() {}

  static getInstance(): LocationService {
    if (!LocationService.instance) {
      LocationService.instance = new LocationService();
    }
    return LocationService.instance;
  }

  async getCurrentLocation(): Promise<Country | null> {
    try {
      const position = await this.getPosition();
      const country = await this.getCountryFromCoordinates(position.coords.latitude, position.coords.longitude);
      return emergencyNumbers[country] || null;
    } catch (error) {
      console.error('Error getting location:', error);
      return null;
    }
  }

  private getPosition(): Promise<GeolocationPosition> {
    return new Promise((resolve, reject) => {
      if (!navigator.geolocation) {
        reject(new Error('Geolocation is not supported by your browser'));
        return;
      }

      navigator.geolocation.getCurrentPosition(resolve, reject, {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
      });
    });
  }

  private async getCountryFromCoordinates(latitude: number, longitude: number): Promise<string> {
    try {
      const response = await fetch(
        `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`
      );
      const data = await response.json();
      return data.countryCode;
    } catch (error) {
      console.error('Error getting country:', error);
      throw error;
    }
  }

  getAllCountries(): Country[] {
    return Object.values(emergencyNumbers);
  }
}

export default LocationService;
