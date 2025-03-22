export interface Country {
  id: string;
  name: string;
  emergencyNumbers: {
    police: string;
    fire: string;
    ambulance: string;
    additionalNumbers?: {
      [key: string]: string;
    };
  };
  usEmbassy?: {
    address: string;
    phone: string;
    email: string;
    website: string;
    hours: string;
    emergency_phone?: string;
    notes?: string;
  };
}

export interface EmergencyPhrase {
  id: string;
  phrase: string;
  translations: {
    [countryCode: string]: string;
  };
}
