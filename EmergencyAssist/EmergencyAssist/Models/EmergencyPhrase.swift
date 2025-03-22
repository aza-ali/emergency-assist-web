import Foundation

struct EmergencyPhrase: Identifiable, Codable {
    let id: String
    let phrase: String
    let translations: [String: String] // [country_code: translated_phrase]
    
    static let commonPhrases = [
        EmergencyPhrase(
            id: "help",
            phrase: "Help!",
            translations: [
                "JP": "助けて! (Tasukete!)",
                "FR": "Au secours!",
                "ES": "¡Ayuda!"
            ]
        ),
        EmergencyPhrase(
            id: "emergency",
            phrase: "This is an emergency!",
            translations: [
                "JP": "緊急です! (Kinkyū desu!)",
                "FR": "C'est une urgence!",
                "ES": "¡Es una emergencia!"
            ]
        ),
        EmergencyPhrase(
            id: "police",
            phrase: "I need the police!",
            translations: [
                "JP": "警察を呼んでください! (Keisatsu wo yonde kudasai!)",
                "FR": "J'ai besoin de la police!",
                "ES": "¡Necesito a la policía!"
            ]
        ),
        EmergencyPhrase(
            id: "medical",
            phrase: "I need an ambulance!",
            translations: [
                "JP": "救急車を呼んでください! (Kyūkyūsha wo yonde kudasai!)",
                "FR": "J'ai besoin d'une ambulance!",
                "ES": "¡Necesito una ambulancia!"
            ]
        )
    ]
}
