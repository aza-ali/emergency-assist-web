import SwiftUI

struct ContentView: View {
    @StateObject private var locationManager = LocationManager()
    @State private var showCountryPicker = false
    @State private var showSettings = false
    
    private let primaryBlue = Color(hex: "29ABE2")
    private let emergencyRed = Color(hex: "FF4D4D")
    
    var body: some View {
        NavigationView {
            VStack(spacing: 20) {
                // Country Header
                Text(locationManager.currentCountry?.name ?? "Detecting Location...")
                    .font(.title)
                    .bold()
                    .padding()
                
                // Emergency Buttons
                VStack(spacing: 16) {
                    EmergencyButton(
                        title: "Police",
                        number: locationManager.currentCountry?.emergencyNumbers.police ?? "---",
                        icon: "shield.fill",
                        color: primaryBlue
                    )
                    
                    EmergencyButton(
                        title: "Fire",
                        number: locationManager.currentCountry?.emergencyNumbers.fire ?? "---",
                        icon: "flame.fill",
                        color: emergencyRed
                    )
                    
                    EmergencyButton(
                        title: "Ambulance",
                        number: locationManager.currentCountry?.emergencyNumbers.ambulance ?? "---",
                        icon: "cross.fill",
                        color: primaryBlue
                    )
                }
                .padding()
                
                // Additional Features
                VStack(spacing: 12) {
                    if let country = locationManager.currentCountry {
                        NavigationLink(destination: EmergencyPhrasesView(countryCode: country.id)) {
                            FeatureButton(title: "Emergency Phrases", icon: "text.bubble.fill")
                        }
                        
                        NavigationLink(destination: EmbassyInfoView(embassy: Embassy(
                            id: "sample",
                            country: country.name,
                            address: "Sample Embassy Address",
                            phone: "+1234567890",
                            email: "embassy@example.com",
                            website: "https://embassy.example.com",
                            hours: "Mon-Fri: 9:00 AM - 5:00 PM",
                            notes: nil
                        ))) {
                            FeatureButton(title: "Embassy Information", icon: "building.columns.fill")
                        }
                    }
                }
                .padding(.horizontal)
                
                Spacer()
                
                // Manual Country Selection Button
                Button(action: { showCountryPicker = true }) {
                    Text("Choose Country")
                        .font(.headline)
                        .foregroundColor(.white)
                        .frame(maxWidth: .infinity)
                        .padding()
                        .background(primaryBlue)
                        .cornerRadius(10)
                }
                .padding()
            }
            .navigationBarItems(trailing: Button(action: { showSettings = true }) {
                Image(systemName: "gear")
            })
            .sheet(isPresented: $showCountryPicker) {
                CountrySelectionView(selectedCountry: $locationManager.currentCountry)
            }
            .sheet(isPresented: $showSettings) {
                SettingsView()
            }
        }
        .onAppear {
            locationManager.requestLocation()
        }
    }
}

struct EmergencyButton: View {
    let title: String
    let number: String
    let icon: String
    let color: Color
    
    var body: some View {
        Button(action: {
            guard let url = URL(string: "tel://\(number)"),
                  UIApplication.shared.canOpenURL(url) else { return }
            UIApplication.shared.open(url)
        }) {
            HStack {
                Image(systemName: icon)
                    .font(.title2)
                VStack(alignment: .leading) {
                    Text(title)
                        .font(.headline)
                    Text(number)
                        .font(.title)
                        .bold()
                }
                Spacer()
            }
            .foregroundColor(.white)
            .padding()
            .frame(maxWidth: .infinity)
            .background(color)
            .cornerRadius(15)
        }
    }
}

struct FeatureButton: View {
    let title: String
    let icon: String
    private let primaryBlue = Color(hex: "29ABE2")
    
    var body: some View {
        HStack {
            Image(systemName: icon)
                .font(.title3)
            Text(title)
                .font(.headline)
            Spacer()
            Image(systemName: "chevron.right")
                .font(.caption)
        }
        .foregroundColor(.white)
        .padding()
        .frame(maxWidth: .infinity)
        .background(primaryBlue)
        .cornerRadius(10)
    }
}

extension Color {
    init(hex: String) {
        let scanner = Scanner(string: hex)
        var rgbValue: UInt64 = 0
        scanner.scanHexInt64(&rgbValue)
        
        let r = Double((rgbValue & 0xFF0000) >> 16) / 255.0
        let g = Double((rgbValue & 0x00FF00) >> 8) / 255.0
        let b = Double(rgbValue & 0x0000FF) / 255.0
        
        self.init(red: r, green: g, blue: b)
    }
}
