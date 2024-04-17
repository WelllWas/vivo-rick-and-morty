import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { apiResult, character } from '../utils/types';


@Injectable({
  providedIn: 'root',
})
export class RickAndMortyService {
  constructor(private http: HttpClient) {}

  async load(): Promise<character[]> {
    let allResults: character[] = [];
    const totalPages = 42;
    const resultsPerPage = 20;

    for(let page = 1; page<=totalPages; page++) {
      const url = `https://rickandmortyapi.com/api/character?page=${page}`;
      const response = await fetch(url);
      const data:apiResult = await response.json();
      allResults.push(...data.results);
    }
    return allResults
  }

  async searchCharacter(filter:string ) {
    const url = `https://rickandmortyapi.com/api/character/?name=${filter}`;
    const response = await fetch(url);
    const data = await response.json();
    return data.results
  }
}