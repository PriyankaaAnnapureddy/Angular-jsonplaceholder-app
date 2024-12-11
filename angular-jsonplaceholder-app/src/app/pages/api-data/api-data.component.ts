import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { JsonPlaceholderService } from '../../services/jsonplaceholder.service';

@Component({
  standalone: true,
  selector: 'app-api-data',
  imports: [CommonModule, FormsModule],
  templateUrl: './api-data.component.html',
  styleUrls: ['./api-data.component.css'],
})
export class ApiDataComponent implements OnInit {
  countries: any[] = [];
  displayedCountries: any[] = [];
  isLoading = true;
  hasError = false;

  currentPage = 1;
  itemsPerPage = 10;
  searchQuery = '';

  constructor(private jsonPlaceholderService: JsonPlaceholderService) {}

  ngOnInit(): void {
    this.fetchCountries();
  }

  fetchCountries(): void {
    this.jsonPlaceholderService.getPosts().subscribe(
      (data) => {
        this.countries = data.map((country: any) => ({
          name: country.name.common,
          population: country.population,
          region: country.region,
          languages: country.languages
            ? Object.values(country.languages).join(', ')
            : 'N/A',
          capital: country.capital ? country.capital.join(', ') : 'N/A',
          flag: country.flags ? country.flags.png : null, // Use flags if available
        }));
        this.updateDisplayedCountries();
        this.isLoading = false;
      },
      (error) => {
        console.error('Error fetching countries:', error);
        this.hasError = true;
        this.isLoading = false;
      }
    );
  }

  updateDisplayedCountries(): void {
    const filteredCountries = this.countries.filter((country) =>
      country.name.toLowerCase().includes(this.searchQuery.toLowerCase())
    );

    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;

    this.displayedCountries = filteredCountries.slice(startIndex, endIndex);
  }

  onSearch(): void {
    this.currentPage = 1;
    this.updateDisplayedCountries();
  }

  changePage(direction: number): void {
    this.currentPage += direction;
    this.updateDisplayedCountries();
  }

  isNextDisabled(): boolean {
    const filteredCountries = this.countries.filter((country) =>
      country.name.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
    return this.currentPage * this.itemsPerPage >= filteredCountries.length;
  }
}
