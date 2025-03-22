import Foundation

class EmergencyDataService {
    static let shared = EmergencyDataService()
    private var countries: [String: Country] = [:]
    
    private init() {
        loadEmergencyData()
    }
    
    private func loadEmergencyData() {
        guard let url = Bundle.main.url(forResource: "emergency_numbers", withExtension: "json"),
              let data = try? Data(contentsOf: url) else {
            print("Error: Could not load emergency numbers database")
            return
        }
        
        do {
            let decoder = JSONDecoder()
            countries = try decoder.decode([String: Country].self, from: data)
        } catch {
            print("Error decoding emergency numbers: \(error)")
        }
    }
    
    func getCountry(byCode code: String) -> Country? {
        return countries[code]
    }
    
    func getAllCountries() -> [Country] {
        return Array(countries.values).sorted(by: { $0.name < $1.name })
    }
}
