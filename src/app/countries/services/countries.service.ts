import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Country} from "../interfaces/country";
import {catchError, firstValueFrom, Observable, tap} from "rxjs";
import {CacheStore} from "../interfaces/cache-store.interface";
import {Region} from "../interfaces/region.type";

@Injectable({providedIn: 'root'})
export class CountriesService {
  private apiUrl: string = 'https://restcountries.com/v3.1';
  cacheStore : CacheStore;

  constructor(private httpClient: HttpClient) {
    this.cacheStore = this.fetchCacheFromLocalStorage() || {
      byCapital:   {term: '', countries: []},
      byCountries: {term: '', countries: []},
      byRegion:    {countries: []},
    };
  }

  fetchCacheFromLocalStorage(): CacheStore | undefined {
    const lData = localStorage.getItem('countriesCacheStore');
    if (!lData) return;
    return JSON.parse(lData);
  }

  saveCacheToLocalStorage() {
    localStorage.setItem('countriesCacheStore', JSON.stringify(this.cacheStore));
  }

  private getCountriesRequest( url: string ) : Observable<Country[]> {
    return this.httpClient.get<Country[]>(url).pipe(catchError((err) => []));
  }

  searchCapital( terms: string ) : Observable<Country[]> {
    const url = `${this.apiUrl}/capital/${terms}`;
    return this.getCountriesRequest(url).pipe(
      tap(countries => this.cacheStore.byCapital = {term: terms, countries: countries}),
      tap(() => this.saveCacheToLocalStorage()),
    );
  }

  searchCountry( terms: string ) : Observable<Country[]> {
    const url = `${this.apiUrl}/name/${terms}`;
    return this.getCountriesRequest(url).pipe(
      tap(countries => this.cacheStore.byCountries = {term: terms, countries: countries}),
      tap(() => this.saveCacheToLocalStorage()),
    );
  }

  searchRegion( region: Region ) : Observable<Country[]> {
    const url = `${this.apiUrl}/region/${region}`;
    return this.getCountriesRequest(url).pipe(
      tap(countries => this.cacheStore.byRegion = {region: region, countries: countries}),
      tap(() => this.saveCacheToLocalStorage()),
    );
  }

  searchByCode( id: string ) : Observable<Country[]> {
    const url = `${this.apiUrl}/alpha?codes=${id}`;
    return this.getCountriesRequest(url);
  }
}
