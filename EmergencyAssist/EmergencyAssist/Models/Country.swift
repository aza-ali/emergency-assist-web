import Foundation

struct Country: Identifiable, Codable {
    let id: String // ISO 3166-1 alpha-2 code
    let name: String
    let emergencyNumbers: EmergencyNumbers
    
    struct EmergencyNumbers: Codable {
        let police: String
        let fire: String
        let ambulance: String
        let additionalNumbers: [String: String]?
    }
}
