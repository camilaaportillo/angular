import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../enviroments/environment';
@Injectable({
providedIn: 'root'
})
export class CountryService {
constructor(private http: HttpClient) { }
getCountryData(countryName: string): Observable<any> {
return this.http.get<any>(`${environment.apiUrl}${countryName}`);
}
}