import { Country } from '../types';

export const emergencyNumbers: { [key: string]: Country } = {
  US: {
    id: "US",
    name: "United States",
    emergencyNumbers: {
      police: "911",
      fire: "911",
      ambulance: "911",
      additionalNumbers: {
        poison_control: "1-800-222-1222"
      }
    }
  },
  GB: {
    id: "GB",
    name: "United Kingdom",
    emergencyNumbers: {
      police: "999",
      fire: "999",
      ambulance: "999",
      additionalNumbers: {
        non_emergency: "101",
        coastguard: "999"
      }
    }
  },
  AU: {
    id: "AU",
    name: "Australia",
    emergencyNumbers: {
      police: "000",
      fire: "000",
      ambulance: "000",
      additionalNumbers: {
        poison_info: "13 11 26"
      }
    }
  },
  JP: {
    id: "JP",
    name: "Japan",
    emergencyNumbers: {
      police: "110",
      fire: "119",
      ambulance: "119",
      additionalNumbers: {
        coast_guard: "118"
      }
    }
  },
  FR: {
    id: "FR",
    name: "France",
    emergencyNumbers: {
      police: "17",
      fire: "18",
      ambulance: "15",
      additionalNumbers: {
        european_emergency: "112"
      }
    }
  },
  DE: {
    id: "DE",
    name: "Germany",
    emergencyNumbers: {
      police: "110",
      fire: "112",
      ambulance: "112",
      additionalNumbers: {
        poison_control: "19240"
      }
    }
  },
  IT: {
    id: "IT",
    name: "Italy",
    emergencyNumbers: {
      police: "113",
      fire: "115",
      ambulance: "118",
      additionalNumbers: {
        carabinieri: "112"
      }
    }
  },
  ES: {
    id: "ES",
    name: "Spain",
    emergencyNumbers: {
      police: "091",
      fire: "080",
      ambulance: "061",
      additionalNumbers: {
        civil_guard: "062",
        european_emergency: "112"
      }
    }
  },
  CA: {
    id: "CA",
    name: "Canada",
    emergencyNumbers: {
      police: "911",
      fire: "911",
      ambulance: "911",
      additionalNumbers: {
        poison_control: "1-800-268-9017"
      }
    }
  },
  CN: {
    id: "CN",
    name: "China",
    emergencyNumbers: {
      police: "110",
      fire: "119",
      ambulance: "120",
      additionalNumbers: {
        traffic_police: "122"
      }
    }
  },
  IN: {
    id: "IN",
    name: "India",
    emergencyNumbers: {
      police: "100",
      fire: "101",
      ambulance: "102",
      additionalNumbers: {
        women_helpline: "1091"
      }
    }
  },
  BR: {
    id: "BR",
    name: "Brazil",
    emergencyNumbers: {
      police: "190",
      fire: "193",
      ambulance: "192",
      additionalNumbers: {
        civil_police: "197"
      }
    }
  },
  RU: {
    id: "RU",
    name: "Russia",
    emergencyNumbers: {
      police: "102",
      fire: "101",
      ambulance: "103",
      additionalNumbers: {
        gas_emergency: "104",
        unified_emergency: "112"
      }
    }
  },
  KR: {
    id: "KR",
    name: "South Korea",
    emergencyNumbers: {
      police: "112",
      fire: "119",
      ambulance: "119",
      additionalNumbers: {
        coast_guard: "122"
      }
    }
  },
  SG: {
    id: "SG",
    name: "Singapore",
    emergencyNumbers: {
      police: "999",
      fire: "995",
      ambulance: "995",
      additionalNumbers: {
        non_emergency_ambulance: "1777"
      }
    }
  },
  NZ: {
    id: "NZ",
    name: "New Zealand",
    emergencyNumbers: {
      police: "111",
      fire: "111",
      ambulance: "111",
      additionalNumbers: {
        poison_control: "0800 764 766"
      }
    }
  },
  AE: {
    id: "AE",
    name: "United Arab Emirates",
    emergencyNumbers: {
      police: "999",
      fire: "997",
      ambulance: "998",
      additionalNumbers: {
        electricity_emergency: "991"
      }
    }
  },
  IL: {
    id: "IL",
    name: "Israel",
    emergencyNumbers: {
      police: "100",
      fire: "102",
      ambulance: "101",
      additionalNumbers: {
        home_front_command: "104"
      }
    }
  },
  ZA: {
    id: "ZA",
    name: "South Africa",
    emergencyNumbers: {
      police: "10111",
      fire: "10177",
      ambulance: "10177",
      additionalNumbers: {
        flying_squad: "10111"
      }
    }
  },
  SE: {
    id: "SE",
    name: "Sweden",
    emergencyNumbers: {
      police: "112",
      fire: "112",
      ambulance: "112",
      additionalNumbers: {
        non_emergency_police: "114 14"
      }
    }
  },
  NO: {
    id: "NO",
    name: "Norway",
    emergencyNumbers: {
      police: "112",
      fire: "110",
      ambulance: "113",
      additionalNumbers: {
        sea_rescue: "120"
      }
    }
  },
  DK: {
    id: "DK",
    name: "Denmark",
    emergencyNumbers: {
      police: "112",
      fire: "112",
      ambulance: "112",
      additionalNumbers: {
        non_emergency_police: "114"
      }
    }
  },
  FI: {
    id: "FI",
    name: "Finland",
    emergencyNumbers: {
      police: "112",
      fire: "112",
      ambulance: "112",
      additionalNumbers: {
        maritime_rescue: "02941000"
      }
    }
  },
  TH: {
    id: "TH",
    name: "Thailand",
    emergencyNumbers: {
      police: "191",
      fire: "199",
      ambulance: "1669",
      additionalNumbers: {
        tourist_police: "1155"
      }
    }
  },
  MY: {
    id: "MY",
    name: "Malaysia",
    emergencyNumbers: {
      police: "999",
      fire: "994",
      ambulance: "999",
      additionalNumbers: {
        civil_defense: "991"
      }
    }
  },
  MX: {
    id: "MX",
    name: "Mexico",
    emergencyNumbers: {
      police: "911",
      fire: "911",
      ambulance: "911",
      additionalNumbers: {
        red_cross: "065"
      }
    }
  },
  AR: {
    id: "AR",
    name: "Argentina",
    emergencyNumbers: {
      police: "911",
      fire: "100",
      ambulance: "107",
      additionalNumbers: {
        civil_defense: "103"
      }
    }
  },
  CL: {
    id: "CL",
    name: "Chile",
    emergencyNumbers: {
      police: "133",
      fire: "132",
      ambulance: "131",
      additionalNumbers: {
        search_rescue: "137"
      }
    }
  },
  PH: {
    id: "PH",
    name: "Philippines",
    emergencyNumbers: {
      police: "117",
      fire: "117",
      ambulance: "117",
      additionalNumbers: {
        coast_guard: "143"
      }
    }
  },
  ID: {
    id: "ID",
    name: "Indonesia",
    emergencyNumbers: {
      police: "110",
      fire: "113",
      ambulance: "118",
      additionalNumbers: {
        search_rescue: "115"
      }
    }
  },
  VN: {
    id: "VN",
    name: "Vietnam",
    emergencyNumbers: {
      police: "113",
      fire: "114",
      ambulance: "115",
      additionalNumbers: {
        traffic_police: "128"
      }
    }
  },
  TR: {
    id: "TR",
    name: "Turkey",
    emergencyNumbers: {
      police: "155",
      fire: "110",
      ambulance: "112",
      additionalNumbers: {
        coast_guard: "158"
      }
    }
  },
  EG: {
    id: "EG",
    name: "Egypt",
    emergencyNumbers: {
      police: "122",
      fire: "180",
      ambulance: "123",
      additionalNumbers: {
        tourist_police: "126"
      }
    }
  },
  SA: {
    id: "SA",
    name: "Saudi Arabia",
    emergencyNumbers: {
      police: "999",
      fire: "998",
      ambulance: "997",
      additionalNumbers: {
        traffic_police: "993"
      }
    }
  },
  PL: {
    id: "PL",
    name: "Poland",
    emergencyNumbers: {
      police: "997",
      fire: "998",
      ambulance: "999",
      additionalNumbers: {
        municipal_guard: "986"
      }
    }
  },
  GR: {
    id: "GR",
    name: "Greece",
    emergencyNumbers: {
      police: "100",
      fire: "199",
      ambulance: "166",
      additionalNumbers: {
        tourist_police: "171"
      }
    }
  },
  PT: {
    id: "PT",
    name: "Portugal",
    emergencyNumbers: {
      police: "112",
      fire: "112",
      ambulance: "112",
      additionalNumbers: {
        forest_fire: "117"
      }
    }
  },
  IE: {
    id: "IE",
    name: "Ireland",
    emergencyNumbers: {
      police: "999",
      fire: "999",
      ambulance: "999",
      additionalNumbers: {
        coast_guard: "112"
      }
    }
  },
  NL: {
    id: "NL",
    name: "Netherlands",
    emergencyNumbers: {
      police: "112",
      fire: "112",
      ambulance: "112",
      additionalNumbers: {
        non_emergency: "0900-8844"
      }
    }
  },
  BE: {
    id: "BE",
    name: "Belgium",
    emergencyNumbers: {
      police: "101",
      fire: "100",
      ambulance: "100",
      additionalNumbers: {
        child_focus: "116000"
      }
    }
  },
  AT: {
    id: "AT",
    name: "Austria",
    emergencyNumbers: {
      police: "133",
      fire: "122",
      ambulance: "144",
      additionalNumbers: {
        mountain_rescue: "140"
      }
    }
  },
  CH: {
    id: "CH",
    name: "Switzerland",
    emergencyNumbers: {
      police: "117",
      fire: "118",
      ambulance: "144",
      additionalNumbers: {
        poison_control: "145",
        air_rescue: "1414"
      }
    }
  },
  CZ: {
    id: "CZ",
    name: "Czech Republic",
    emergencyNumbers: {
      police: "158",
      fire: "150",
      ambulance: "155",
      additionalNumbers: {
        municipal_police: "156"
      }
    }
  },
  SK: {
    id: "SK",
    name: "Slovakia",
    emergencyNumbers: {
      police: "158",
      fire: "150",
      ambulance: "155",
      additionalNumbers: {
        mountain_rescue: "18300"
      }
    }
  },
  HU: {
    id: "HU",
    name: "Hungary",
    emergencyNumbers: {
      police: "107",
      fire: "105",
      ambulance: "104",
      additionalNumbers: {
        unified_emergency: "112"
      }
    }
  },
  RO: {
    id: "RO",
    name: "Romania",
    emergencyNumbers: {
      police: "112",
      fire: "112",
      ambulance: "112",
      additionalNumbers: {
        child_protection: "116111"
      }
    }
  },
  BG: {
    id: "BG",
    name: "Bulgaria",
    emergencyNumbers: {
      police: "166",
      fire: "160",
      ambulance: "150",
      additionalNumbers: {
        mountain_rescue: "1470"
      }
    }
  },
  HR: {
    id: "HR",
    name: "Croatia",
    emergencyNumbers: {
      police: "192",
      fire: "193",
      ambulance: "194",
      additionalNumbers: {
        search_rescue: "112"
      }
    }
  },
  RS: {
    id: "RS",
    name: "Serbia",
    emergencyNumbers: {
      police: "192",
      fire: "193",
      ambulance: "194",
      additionalNumbers: {
        emergency: "112"
      }
    }
  },
  UA: {
    id: "UA",
    name: "Ukraine",
    emergencyNumbers: {
      police: "102",
      fire: "101",
      ambulance: "103",
      additionalNumbers: {
        gas_emergency: "104"
      }
    }
  },
  KZ: {
    id: "KZ",
    name: "Kazakhstan",
    emergencyNumbers: {
      police: "102",
      fire: "101",
      ambulance: "103",
      additionalNumbers: {
        emergency: "112"
      }
    }
  },
  IR: {
    id: "IR",
    name: "Iran",
    emergencyNumbers: {
      police: "110",
      fire: "125",
      ambulance: "115",
      additionalNumbers: {
        traffic_police: "120"
      }
    }
  },
  PK: {
    id: "PK",
    name: "Pakistan",
    emergencyNumbers: {
      police: "15",
      fire: "16",
      ambulance: "115",
      additionalNumbers: {
        emergency: "1122"
      }
    }
  },
  BD: {
    id: "BD",
    name: "Bangladesh",
    emergencyNumbers: {
      police: "999",
      fire: "999",
      ambulance: "999",
      additionalNumbers: {
        emergency: "999"
      }
    }
  },
  LK: {
    id: "LK",
    name: "Sri Lanka",
    emergencyNumbers: {
      police: "119",
      fire: "110",
      ambulance: "110",
      additionalNumbers: {
        emergency: "112"
      }
    }
  },
  MM: {
    id: "MM",
    name: "Myanmar",
    emergencyNumbers: {
      police: "199",
      fire: "191",
      ambulance: "192",
      additionalNumbers: {
        emergency: "112"
      }
    }
  },
  KH: {
    id: "KH",
    name: "Cambodia",
    emergencyNumbers: {
      police: "117",
      fire: "118",
      ambulance: "119",
      additionalNumbers: {
        traffic_police: "148"
      }
    }
  },
  LA: {
    id: "LA",
    name: "Laos",
    emergencyNumbers: {
      police: "191",
      fire: "190",
      ambulance: "195",
      additionalNumbers: {
        tourist_police: "192"
      }
    }
  },
  MO: {
    id: "MO",
    name: "Macau",
    emergencyNumbers: {
      police: "999",
      fire: "999",
      ambulance: "999",
      additionalNumbers: {
        tourism_crisis: "2833 3000"
      }
    }
  },
  HK: {
    id: "HK",
    name: "Hong Kong",
    emergencyNumbers: {
      police: "999",
      fire: "999",
      ambulance: "999",
      additionalNumbers: {
        crime_hotline: "2527 7177"
      }
    }
  },
  TW: {
    id: "TW",
    name: "Taiwan",
    emergencyNumbers: {
      police: "110",
      fire: "119",
      ambulance: "119",
      additionalNumbers: {
        coast_guard: "118"
      }
    }
  },
  UZ: {
    id: "UZ",
    name: "Uzbekistan",
    emergencyNumbers: {
      police: "102",
      fire: "101",
      ambulance: "103",
      additionalNumbers: {
        gas_service: "104"
      }
    }
  },
  KE: {
    id: "KE",
    name: "Kenya",
    emergencyNumbers: {
      police: "999",
      fire: "999",
      ambulance: "999",
      additionalNumbers: {
        flying_squad: "0721032333"
      }
    }
  },
  NG: {
    id: "NG",
    name: "Nigeria",
    emergencyNumbers: {
      police: "112",
      fire: "112",
      ambulance: "112",
      additionalNumbers: {
        emergency: "767"
      }
    }
  },
  GH: {
    id: "GH",
    name: "Ghana",
    emergencyNumbers: {
      police: "191",
      fire: "192",
      ambulance: "193",
      additionalNumbers: {
        emergency: "112"
      }
    }
  },
  MA: {
    id: "MA",
    name: "Morocco",
    emergencyNumbers: {
      police: "19",
      fire: "15",
      ambulance: "15",
      additionalNumbers: {
        royal_gendarmerie: "177"
      }
    }
  },
  TN: {
    id: "TN",
    name: "Tunisia",
    emergencyNumbers: {
      police: "197",
      fire: "198",
      ambulance: "190",
      additionalNumbers: {
        national_guard: "193"
      }
    }
  },
  PE: {
    id: "PE",
    name: "Peru",
    emergencyNumbers: {
      police: "105",
      fire: "116",
      ambulance: "117",
      additionalNumbers: {
        civil_defense: "115"
      }
    }
  },
  CO: {
    id: "CO",
    name: "Colombia",
    emergencyNumbers: {
      police: "123",
      fire: "123",
      ambulance: "123",
      additionalNumbers: {
        civil_defense: "144"
      }
    }
  },
  VE: {
    id: "VE",
    name: "Venezuela",
    emergencyNumbers: {
      police: "911",
      fire: "911",
      ambulance: "911",
      additionalNumbers: {
        civil_protection: "171"
      }
    }
  },
  EC: {
    id: "EC",
    name: "Ecuador",
    emergencyNumbers: {
      police: "911",
      fire: "911",
      ambulance: "911",
      additionalNumbers: {
        transit_emergency: "103"
      }
    }
  },
  UY: {
    id: "UY",
    name: "Uruguay",
    emergencyNumbers: {
      police: "911",
      fire: "104",
      ambulance: "105",
      additionalNumbers: {
        coast_guard: "106"
      }
    }
  },
  PY: {
    id: "PY",
    name: "Paraguay",
    emergencyNumbers: {
      police: "911",
      fire: "132",
      ambulance: "141",
      additionalNumbers: {
        civil_emergencies: "130"
      }
    }
  },
  JO: {
    id: "JO",
    name: "Jordan",
    emergencyNumbers: {
      police: "911",
      fire: "911",
      ambulance: "911",
      additionalNumbers: {
        traffic_police: "190"
      }
    }
  },
  LB: {
    id: "LB",
    name: "Lebanon",
    emergencyNumbers: {
      police: "112",
      fire: "175",
      ambulance: "140",
      additionalNumbers: {
        civil_defense: "125"
      }
    }
  },
  QA: {
    id: "QA",
    name: "Qatar",
    emergencyNumbers: {
      police: "999",
      fire: "999",
      ambulance: "999",
      additionalNumbers: {
        coast_guard: "994"
      }
    }
  },
  KW: {
    id: "KW",
    name: "Kuwait",
    emergencyNumbers: {
      police: "112",
      fire: "112",
      ambulance: "112",
      additionalNumbers: {
        coast_guard: "1880888"
      }
    }
  },
  BH: {
    id: "BH",
    name: "Bahrain",
    emergencyNumbers: {
      police: "999",
      fire: "999",
      ambulance: "999",
      additionalNumbers: {
        traffic_police: "199"
      }
    }
  },
  OM: {
    id: "OM",
    name: "Oman",
    emergencyNumbers: {
      police: "9999",
      fire: "9999",
      ambulance: "9999",
      additionalNumbers: {
        coast_guard: "1888"
      }
    }
  }
};
