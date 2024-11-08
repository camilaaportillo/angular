import { Component } from '@angular/core';
import { CountryService } from '../Services/country.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-country-search',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './country-search.component.html',
})
export class CountrySearchComponent {
  countryName: string = '';
  countryData: any;
  moneda: string = '';
  simbolo: string = '';
  constructor(private countryService: CountryService) { }
  searchCountry() {
    if (this.countryName) {
      this.countryService.getCountryData(this.countryName).subscribe(
        (data) => {
          this.countryData = data[0];
          console.log(this.countryData);
          this.moneda = this.countryData.currencies.USD.name;
          this.simbolo = this.countryData.currencies.USD.symbol;
          console.log(this.moneda);
        },
        (error) => {
          console.error('Error consultando datos de busqueda', error);
          this.countryData = null;
        }
      );
    }
  }
}
