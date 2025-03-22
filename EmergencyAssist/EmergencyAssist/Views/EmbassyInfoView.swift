import SwiftUI

struct EmbassyInfoView: View {
    let embassy: Embassy
    private let primaryBlue = Color(hex: "29ABE2")
    
    var body: some View {
        List {
            Section(header: Text("Contact Information")) {
                VStack(alignment: .leading, spacing: 12) {
                    Text(embassy.country)
                        .font(.headline)
                    
                    Text(embassy.formattedAddress)
                        .font(.body)
                    
                    Button(action: {
                        guard let url = URL(string: "tel://\(embassy.phone)"),
                              UIApplication.shared.canOpenURL(url) else { return }
                        UIApplication.shared.open(url)
                    }) {
                        Label(embassy.phone, systemImage: "phone.fill")
                            .foregroundColor(primaryBlue)
                    }
                    
                    if let email = embassy.email {
                        Button(action: {
                            guard let url = URL(string: "mailto:\(email)") else { return }
                            UIApplication.shared.open(url)
                        }) {
                            Label(email, systemImage: "envelope.fill")
                                .foregroundColor(primaryBlue)
                        }
                    }
                    
                    if let website = embassy.website {
                        Button(action: {
                            guard let url = URL(string: website) else { return }
                            UIApplication.shared.open(url)
                        }) {
                            Label("Visit Website", systemImage: "globe")
                                .foregroundColor(primaryBlue)
                        }
                    }
                }
                .padding(.vertical, 8)
            }
            
            if let hours = embassy.hours {
                Section(header: Text("Opening Hours")) {
                    Text(hours)
                        .font(.body)
                }
            }
            
            if let notes = embassy.notes {
                Section(header: Text("Additional Information")) {
                    Text(notes)
                        .font(.body)
                }
            }
        }
        .navigationTitle("Embassy Information")
    }
}
