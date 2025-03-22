import { Country } from '../types';

// Update existing countries with U.S. Embassy information
export const embassyData: { [key: string]: Country['usEmbassy'] } = {
  GB: {
    address: "33 Nine Elms Lane, London SW11 7US",
    phone: "+44 20 7499 9000",
    email: "SCSLondon@state.gov",
    website: "https://uk.usembassy.gov",
    hours: "Monday-Friday 8:30am-5:30pm",
    emergency_phone: "+44 20 7499 9000"
  },
  FR: {
    address: "2 Avenue Gabriel, 75008 Paris",
    phone: "+33 1 43 12 22 22",
    email: "CitizenInfo@state.gov",
    website: "https://fr.usembassy.gov",
    hours: "Monday-Friday 9:00am-6:00pm",
    emergency_phone: "+33 1 43 12 22 22"
  },
  DE: {
    address: "Clayallee 170, 14191 Berlin",
    phone: "+49 30 8305 0",
    email: "GermanyACS@state.gov",
    website: "https://de.usembassy.gov",
    hours: "Monday-Friday 8:30am-5:00pm",
    emergency_phone: "+49 30 8305 0"
  },
  JP: {
    address: "1-10-5 Akasaka, Minato-ku, Tokyo 107-8420",
    phone: "+81 3 3224 5000",
    email: "TokyoACS@state.gov",
    website: "https://jp.usembassy.gov",
    hours: "Monday-Friday 8:30am-5:30pm",
    emergency_phone: "+81 3 3224 5000"
  },
  CN: {
    address: "55 Anjialou Road, Chaoyang District, Beijing 100600",
    phone: "+86 10 8531 4000",
    email: "BeijingACS@state.gov",
    website: "https://china.usembassy.gov",
    hours: "Monday-Friday 8:30am-5:00pm",
    emergency_phone: "+86 10 8531 4000"
  },
  AU: {
    address: "Moonah Place, Yarralumla, Canberra ACT 2600",
    phone: "+61 2 6214 5600",
    email: "ACSCanberra@state.gov",
    website: "https://au.usembassy.gov",
    hours: "Monday-Friday 8:30am-5:00pm",
    emergency_phone: "+61 2 6214 5600"
  },
  BR: {
    address: "SES - Av. das Nações, Quadra 801, Lote 03, 70403-900 Brasília, DF",
    phone: "+55 61 3312 7000",
    email: "BrasiliaACS@state.gov",
    website: "https://br.usembassy.gov",
    hours: "Monday-Friday 8:30am-5:00pm",
    emergency_phone: "+55 61 3312 7000"
  },
  IN: {
    address: "Shantipath, Chanakyapuri, New Delhi 110021",
    phone: "+91 11 2419 8000",
    email: "acsnd@state.gov",
    website: "https://in.usembassy.gov",
    hours: "Monday-Friday 8:30am-5:00pm",
    emergency_phone: "+91 11 2419 8000"
  },
  RU: {
    address: "Bolshoy Deviatinsky Pereulok No. 8, Moscow 121099",
    phone: "+7 495 728 5000",
    email: "MoscowACS@state.gov",
    website: "https://ru.usembassy.gov",
    hours: "Monday-Friday 9:00am-6:00pm",
    emergency_phone: "+7 495 728 5000",
    notes: "Due to current circumstances, services may be limited. Check website for updates."
  },
  ZA: {
    address: "877 Pretorius Street, Arcadia, Pretoria 0083",
    phone: "+27 12 431 4000",
    email: "ACSJohannesburg@state.gov",
    website: "https://za.usembassy.gov",
    hours: "Monday-Friday 8:00am-5:00pm",
    emergency_phone: "+27 12 431 4000"
  },
  AE: {
    address: "Embassies District, Plot 38, Sector W59-02, Street No. 4, Abu Dhabi",
    phone: "+971 2 414 2200",
    email: "AbuDhabiACS@state.gov",
    website: "https://ae.usembassy.gov",
    hours: "Sunday-Thursday 8:00am-4:30pm",
    emergency_phone: "+971 2 414 2200"
  },
  IL: {
    address: "71 Hayarkon Street, Tel Aviv 6343229",
    phone: "+972 3 519 7475",
    email: "TelAvivACS@state.gov",
    website: "https://il.usembassy.gov",
    hours: "Monday-Friday 8:00am-4:30pm",
    emergency_phone: "+972 3 519 7575"
  },
  SG: {
    address: "27 Napier Road, Singapore 258508",
    phone: "+65 6476 9100",
    email: "Singapore_ACS@state.gov",
    website: "https://sg.usembassy.gov",
    hours: "Monday-Friday 8:30am-5:00pm",
    emergency_phone: "+65 6476 9100"
  },
  MX: {
    address: "Paseo de la Reforma 305, Colonia Cuauhtémoc, 06500 Mexico City",
    phone: "+52 55 8526 2561",
    email: "ACSMexicoCity@state.gov",
    website: "https://mx.usembassy.gov",
    hours: "Monday-Friday 8:30am-4:30pm",
    emergency_phone: "+52 55 8526 2561"
  },
  KR: {
    address: "188 Sejong-daero, Jongno-gu, Seoul 03141",
    phone: "+82 2 397 4114",
    email: "SeoulACS@state.gov",
    website: "https://kr.usembassy.gov",
    hours: "Monday-Friday 8:30am-5:00pm",
    emergency_phone: "+82 2 397 4114"
  },
  IT: {
    address: "Via Vittorio Veneto 121, 00187 Rome",
    phone: "+39 06 4674 1",
    email: "RomeACS@state.gov",
    website: "https://it.usembassy.gov",
    hours: "Monday-Friday 8:30am-5:30pm",
    emergency_phone: "+39 06 4674 1"
  },
  ES: {
    address: "Calle de Serrano 75, 28006 Madrid",
    phone: "+34 91 587 2200",
    email: "askACS@state.gov",
    website: "https://es.usembassy.gov",
    hours: "Monday-Friday 8:30am-5:30pm",
    emergency_phone: "+34 91 587 2200"
  },
  TH: {
    address: "95 Wireless Road, Bangkok 10330",
    phone: "+66 2 205 4000",
    email: "acsbkk@state.gov",
    website: "https://th.usembassy.gov",
    hours: "Monday-Friday 7:30am-4:00pm",
    emergency_phone: "+66 2 205 4000"
  },
  PL: {
    address: "Aleje Ujazdowskie 29/31, 00-540 Warsaw",
    phone: "+48 22 504 2000",
    email: "ACSWarsaw@state.gov",
    website: "https://pl.usembassy.gov",
    hours: "Monday-Friday 8:30am-5:00pm",
    emergency_phone: "+48 22 504 2000"
  },
  EG: {
    address: "5 Tawfik Diab Street, Garden City, Cairo",
    phone: "+20 2 2797 3300",
    email: "ConsularCairoACS@state.gov",
    website: "https://eg.usembassy.gov",
    hours: "Sunday-Thursday 8:00am-4:30pm",
    emergency_phone: "+20 2 2797 3300"
  }
};
