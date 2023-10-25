import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IData } from './interfaces/IData';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ServiceApiService {
  private apiUrl = 'http://127.0.0.1:5000/api/books'; // Substitua pela URL da sua API

  constructor(private http: HttpClient) {}

  getData(): Observable<IData> {
    return this.http.get<IData>(this.apiUrl);
  }

  insertData(data: any) {
    return this.http.post(this.apiUrl, data);
  }
}
