import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IData } from '../interfaces/IData';
import { Observable } from 'rxjs';
import { IBook } from '../interfaces/IBook';

@Injectable({
  providedIn: 'root',
})
export class ServiceApiService {
  private apiUrl = 'http://127.0.0.1:5000/api/books'; // Substitua pela URL da sua API

  constructor(private http: HttpClient) {}

  getData(): Observable<IData> {
    return this.http.get<IData>(this.apiUrl);
  }

  insertData(bookData: IBook): Observable<IData> {
    return this.http.post<IData>(this.apiUrl, bookData);
  }

  // updateData(data: { title: string; author: string }): Observable<IData> {
  //   return this.http.post<IData>(this.apiUrl, data);
  // }
}
