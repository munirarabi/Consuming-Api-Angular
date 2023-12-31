import { Component } from '@angular/core';

import { IBook } from 'src/app/interfaces/IBook';

import { ServiceApi } from 'src/app/services/api/service-api.service';

@Component({
  selector: 'app-insert-book',
  templateUrl: './insert-book.component.html',
  styleUrls: ['./insert-book.component.css'],
})
export class InsertBookComponent {
  constructor(private ServiceApiService: ServiceApi) {}

  public nameBook: string = '';
  public authorBook: string = '';

  public insertBook() {
    const bookData: IBook = {
      title: this.nameBook,
      author: this.authorBook,
    };

    this.ServiceApiService.insertData(bookData).subscribe({
      next: (response) => {
        console.log('POST realizado com sucesso', response);
      },
      error: (error) => {
        console.error('Erro ao fazer o POST', error);
      },
    });
  }
}
