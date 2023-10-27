import { Component, OnInit } from '@angular/core';

import { IBook } from 'src/app/interfaces/IBook';

import { ServiceApi } from 'src/app/services/api/service-api.service';

@Component({
  selector: 'app-delete-book',
  templateUrl: './delete-book.component.html',
  styleUrls: ['./delete-book.component.css'],
})
export class DeleteBookComponent implements OnInit {
  constructor(private ServiceApiService: ServiceApi) {}

  ngOnInit(): void {
    this.getBook();
  }

  public idBookDeleted!: number;

  public listBooks: Array<IBook> | undefined;

  public getBook() {
    this.ServiceApiService.getData().subscribe({
      next: (response) => {
        this.listBooks = response.data;
        // console.log(response);
        // console.log(this.listBooks);
        // console.log('GET realizado com sucesso', response);
      },
      error: (error) => {
        console.error('Erro ao fazer o GET', error);
      },
    });
  }

  public deleteBook() {
    this.ServiceApiService.deleteBook(this.idBookDeleted).subscribe({
      next: (response) => {
        console.log('DELETE realizado com sucesso', response);
        this.getBook();
      },
      error: (error) => {
        console.error('Erro ao fazer o DELETE', error);
      },
    });
  }

  public deleteAllBooks() {
    this.ServiceApiService.deleteAllBooks().subscribe({
      next: (response) => {
        console.log(
          'DELETE em todos os livros realizado com sucesso',
          response
        );
        this.getBook();
      },
      error: (error) => {
        console.error('Erro ao fazer o DELETE em todos os livros', error);
      },
    });
  }
}
