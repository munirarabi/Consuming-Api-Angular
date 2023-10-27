import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environments';

import { IData } from '../../interfaces/IData';
import { IBook } from '../../interfaces/IBook';

@Injectable({
  providedIn: 'root',
})
export class ServiceApi {
  private readonly apiUrl = environment.apiUrl; // Substitua pela URL da sua API

  constructor(private http: HttpClient) {}

  public getData(): Observable<IData> {
    return this.http.get<IData>(this.apiUrl);
  }

  public insertData(bookData: IBook): Observable<IData> {
    return this.http.post<IData>(this.apiUrl, bookData);
  }

  public deleteBook(idBookDeleted: number): Observable<IData> {
    return this.http.delete<IData>(this.apiUrl + '/' + idBookDeleted);
  }

  public deleteAllBooks(): Observable<IData> {
    return this.http.delete<IData>(this.apiUrl + '/delete-all-books');
  }
}
