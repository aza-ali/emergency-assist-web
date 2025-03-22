import Foundation

struct Embassy: Identifiable, Codable {
    let id: String
    let country: String
    let address: String
    let phone: String
    let email: String?
    let website: String?
    let hours: String?
    let notes: String?
    
    var formattedAddress: String {
        return address.replacingOccurrences(of: ", ", with: "\n")
    }
}
