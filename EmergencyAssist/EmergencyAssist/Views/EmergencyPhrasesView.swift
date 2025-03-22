import SwiftUI

struct EmergencyPhrasesView: View {
    let countryCode: String
    private let primaryBlue = Color(hex: "29ABE2")
    
    var body: some View {
        List(EmergencyPhrase.commonPhrases) { phrase in
            VStack(alignment: .leading, spacing: 8) {
                Text(phrase.phrase)
                    .font(.headline)
                    .foregroundColor(primaryBlue)
                
                if let translation = phrase.translations[countryCode] {
                    Text(translation)
                        .font(.body)
                } else {
                    Text("Translation not available")
                        .font(.body)
                        .foregroundColor(.secondary)
                }
            }
            .padding(.vertical, 8)
        }
        .navigationTitle("Emergency Phrases")
    }
}
