import { Country } from '../types';

interface EmergencyPhrasesType {
  [countryCode: string]: {
    language: string;
    phonetic?: boolean;
    phrases: {
      help: string;
      emergency: string;
      police: string;
      ambulance: string;
      fire: string;
      understand: string;
      doctor: string;
      hospital: string;
      phonetic?: string;
    };
  };
}

export const emergencyPhrases: EmergencyPhrasesType = {
  // East Asia
  JP: {
    language: "Japanese",
    phrases: {
      help: "助けて! (Tasukete!)",
      emergency: "緊急です! (Kinkyū desu!)",
      police: "警察を呼んでください! (Keisatsu wo yonde kudasai!)",
      ambulance: "救急車を呼んでください! (Kyūkyūsha wo yonde kudasai!)",
      fire: "火事です! (Kaji desu!)",
      understand: "英語を話せる人はいますか? (Eigo wo hanaseru hito wa imasu ka?)",
      doctor: "医者を呼んでください (Isha wo yonde kudasai)",
      hospital: "病院に連れて行ってください (Byōin ni tsurete itte kudasai)"
    }
  },
  CN: {
    language: "Mandarin Chinese",
    phrases: {
      help: "救命! (Jiù mìng!)",
      emergency: "紧急情况! (Jǐnjí qíngkuàng!)",
      police: "叫警察! (Jiào jǐngchá!)",
      ambulance: "叫救护车! (Jiào jiùhù chē!)",
      fire: "着火了! (Zháohuǒ le!)",
      understand: "会说英语吗? (Huì shuō yīngyǔ ma?)",
      doctor: "需要医生 (Xūyào yīshēng)",
      hospital: "带我去医院 (Dài wǒ qù yīyuàn)"
    }
  },
  KR: {
    language: "Korean",
    phrases: {
      help: "도와주세요! (Dowajuseyo!)",
      emergency: "긴급상황입니다! (Gineupssanghwanimnida!)",
      police: "경찰을 불러주세요! (Gyeongchareul bulleojuseyo!)",
      ambulance: "구급차를 불러주세요! (Gugeupchareul bulleojuseyo!)",
      fire: "불이야! (Buriya!)",
      understand: "영어 하시는 분 계신가요? (Yeong-eo hasineun bun gyesinayo?)",
      doctor: "의사를 불러주세요 (Uisareul bulleojuseyo)",
      hospital: "병원에 데려가 주세요 (Byeongwone deryeoga juseyo)"
    }
  },
  // European Countries
  FR: {
    language: "French",
    phrases: {
      help: "Au secours!",
      emergency: "C'est une urgence!",
      police: "Appelez la police!",
      ambulance: "J'ai besoin d'une ambulance!",
      fire: "Au feu!",
      understand: "Parlez-vous anglais?",
      doctor: "J'ai besoin d'un médecin",
      hospital: "Emmenez-moi à l'hôpital"
    }
  },
  DE: {
    language: "German",
    phrases: {
      help: "Hilfe!",
      emergency: "Das ist ein Notfall!",
      police: "Rufen Sie die Polizei!",
      ambulance: "Ich brauche einen Krankenwagen!",
      fire: "Feuer!",
      understand: "Sprechen Sie Englisch?",
      doctor: "Ich brauche einen Arzt",
      hospital: "Bringen Sie mich ins Krankenhaus"
    }
  },
  IT: {
    language: "Italian",
    phrases: {
      help: "Aiuto!",
      emergency: "È un'emergenza!",
      police: "Chiamate la polizia!",
      ambulance: "Ho bisogno di un'ambulanza!",
      fire: "Al fuoco!",
      understand: "Parla inglese?",
      doctor: "Ho bisogno di un medico",
      hospital: "Portatemi all'ospedale"
    }
  },
  ES: {
    language: "Spanish",
    phrases: {
      help: "¡Ayuda!",
      emergency: "¡Es una emergencia!",
      police: "¡Llame a la policía!",
      ambulance: "¡Necesito una ambulancia!",
      fire: "¡Fuego!",
      understand: "¿Habla inglés?",
      doctor: "Necesito un médico",
      hospital: "Lléveme al hospital"
    }
  },
  PT: {
    language: "Portuguese",
    phrases: {
      help: "Socorro!",
      emergency: "É uma emergência!",
      police: "Chame a polícia!",
      ambulance: "Preciso de uma ambulância!",
      fire: "Fogo!",
      understand: "Fala inglês?",
      doctor: "Preciso de um médico",
      hospital: "Leve-me ao hospital"
    }
  },
  RU: {
    language: "Russian",
    phonetic: true,
    phrases: {
      help: "Помогите! (Pomogite!)",
      emergency: "Это чрезвычайная ситуация! (Eto chrezvychaynaya situatsiya!)",
      police: "Вызовите полицию! (Vyzovite politsiyu!)",
      ambulance: "Нужна скорая помощь! (Nuzhna skoraya pomoshch!)",
      fire: "Пожар! (Pozhar!)",
      understand: "Вы говорите по-английски? (Vy govorite po-angliyski?)",
      doctor: "Мне нужен врач (Mne nuzhen vrach)",
      hospital: "Отвезите меня в больницу (Otvezite menya v bolnitsu)"
    }
  },
  // Middle Eastern Countries
  TR: {
    language: "Turkish",
    phrases: {
      help: "İmdat!",
      emergency: "Acil durum!",
      police: "Polis çağırın!",
      ambulance: "Ambulans çağırın!",
      fire: "Yangın var!",
      understand: "İngilizce biliyor musunuz?",
      doctor: "Doktora ihtiyacım var",
      hospital: "Beni hastaneye götürün"
    }
  },
  SA: {
    language: "Arabic",
    phonetic: true,
    phrases: {
      help: "!ساعدوني (Saa'idooni!)",
      emergency: "!هذه حالة طوارئ (Hathihi halat tawari'!)",
      police: "!اتصلوا بالشرطة (Ittasilu bil-shurta!)",
      ambulance: "!أحتاج سيارة إسعاف (Ahtaju sayyarat is'af!)",
      fire: "!حريق (Hareeq!)",
      understand: "?هل تتحدث الإنجليزية (Hal tatahaddath al-injliziyya?)",
      doctor: "أحتاج طبيب (Ahtaju tabeeb)",
      hospital: "خذني إلى المستشفى (Khuthni ila al-mustashfa)",
      phonetic: "Provided in parentheses"
    }
  },
  // South Asian Countries
  IN: {
    language: "Hindi",
    phonetic: true,
    phrases: {
      help: "मदद! (Madad!)",
      emergency: "यह एक आपातकाल है! (Yeh ek aapatkal hai!)",
      police: "पुलिस को बुलाओ! (Police ko bulao!)",
      ambulance: "एम्बुलेंस बुलाओ! (Ambulance bulao!)",
      fire: "आग! (Aag!)",
      understand: "क्या आप अंग्रेजी बोलते हैं? (Kya aap angrezi bolte hain?)",
      doctor: "डॉक्टर को बुलाओ (Doctor ko bulao)",
      hospital: "मुझे अस्पताल ले चलो (Mujhe aspatal le chalo)"
    }
  },
  // Southeast Asian Countries
  TH: {
    language: "Thai",
    phrases: {
      help: "ช่วยด้วย! (Chuai duai!)",
      emergency: "เป็นเหตุฉุกเฉิน! (Pen hed chuk-chern!)",
      police: "เรียกตำรวจ! (Riak tamruat!)",
      ambulance: "เรียกรถพยาบาล! (Riak rot payaban!)",
      fire: "ไฟไหม้! (Fai mai!)",
      understand: "พูดภาษาอังกฤษได้ไหม? (Pood pasa angrit dai mai?)",
      doctor: "ต้องการหมอ (Tongkan mor)",
      hospital: "พาฉันไปโรงพยาบาล (Pa chan pai rong payaban)"
    }
  },
  VN: {
    language: "Vietnamese",
    phrases: {
      help: "Cứu tôi!",
      emergency: "Khẩn cấp!",
      police: "Gọi cảnh sát!",
      ambulance: "Gọi xe cấp cứu!",
      fire: "Cháy!",
      understand: "Bạn có nói tiếng Anh không?",
      doctor: "Tôi cần bác sĩ",
      hospital: "Đưa tôi đến bệnh viện"
    }
  },
  // Other Major Languages
  AR: {
    language: "Spanish (Argentina)",
    phrases: {
      help: "¡Socorro!",
      emergency: "¡Es una emergencia!",
      police: "¡Llame a la policía!",
      ambulance: "¡Necesito una ambulancia!",
      fire: "¡Fuego!",
      understand: "¿Habla inglés?",
      doctor: "Necesito un médico",
      hospital: "Lléveme al hospital"
    }
  },
  BR: {
    language: "Portuguese (Brazil)",
    phrases: {
      help: "Socorro!",
      emergency: "É uma emergência!",
      police: "Chame a polícia!",
      ambulance: "Preciso de uma ambulância!",
      fire: "Fogo!",
      understand: "Fala inglês?",
      doctor: "Preciso de um médico",
      hospital: "Me leve ao hospital"
    }
  },
  // Add default English for countries where English is widely spoken
  GB: {
    language: "English",
    phrases: {
      help: "Help!",
      emergency: "This is an emergency!",
      police: "Call the police!",
      ambulance: "I need an ambulance!",
      fire: "Fire!",
      understand: "Do you speak English?",
      doctor: "I need a doctor",
      hospital: "Take me to the hospital"
    }
  },
  AU: {
    language: "English",
    phrases: {
      help: "Help!",
      emergency: "This is an emergency!",
      police: "Call the police!",
      ambulance: "I need an ambulance!",
      fire: "Fire!",
      understand: "Do you speak English?",
      doctor: "I need a doctor",
      hospital: "Take me to the hospital"
    }
  }
};
