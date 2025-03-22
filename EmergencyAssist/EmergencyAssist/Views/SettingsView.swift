import SwiftUI

struct SettingsView: View {
    @Environment(\.dismiss) private var dismiss
    @AppStorage("userHomeCountry") private var userHomeCountry: String = ""
    @AppStorage("useLocationServices") private var useLocationServices = true
    @AppStorage("showAdditionalNumbers") private var showAdditionalNumbers = true
    
    private let primaryBlue = Color(hex: "29ABE2")
    
    var body: some View {
        NavigationView {
            Form {
                Section(header: Text("Location")) {
                    Toggle("Use Location Services", isOn: $useLocationServices)
                    
                    Picker("Home Country", selection: $userHomeCountry) {
                        Text("Select Country").tag("")
                        ForEach(EmergencyDataService.shared.getAllCountries()) { country in
                            Text(country.name).tag(country.id)
                        }
                    }
                }
                
                Section(header: Text("Display")) {
                    Toggle("Show Additional Emergency Numbers", isOn: $showAdditionalNumbers)
                }
                
                Section(header: Text("About")) {
                    HStack {
                        Text("Version")
                        Spacer()
                        Text("1.0.0")
                            .foregroundColor(.secondary)
                    }
                    
                    Link(destination: URL(string: "https://example.com/privacy")!) {
                        Text("Privacy Policy")
                    }
                    
                    Link(destination: URL(string: "https://example.com/terms")!) {
                        Text("Terms of Service")
                    }
                }
            }
            .navigationTitle("Settings")
            .navigationBarItems(trailing: Button("Done") {
                dismiss()
            })
        }
    }
}
