import SwiftUI

struct CountrySelectionView: View {
    @Environment(\.dismiss) private var dismiss
    @Binding var selectedCountry: Country?
    @State private var searchText = ""
    
    // Sample countries - in production this would be loaded from JSON
    private let countries: [Country] = []
    
    var filteredCountries: [Country] {
        if searchText.isEmpty {
            return countries
        }
        return countries.filter { $0.name.localizedCaseInsensitiveContains(searchText) }
    }
    
    var body: some View {
        NavigationView {
            List(filteredCountries) { country in
                Button(action: {
                    selectedCountry = country
                    dismiss()
                }) {
                    Text(country.name)
                        .foregroundColor(.primary)
                }
            }
            .searchable(text: $searchText, prompt: "Search countries")
            .navigationTitle("Select Country")
            .navigationBarItems(trailing: Button("Done") {
                dismiss()
            })
        }
    }
}
