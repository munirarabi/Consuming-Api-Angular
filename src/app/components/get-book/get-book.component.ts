import { Component, OnInit } from '@angular/core';

import { IBook } from 'src/app/interfaces/IBook';

import { ServiceApi } from 'src/app/services/api/service-api.service';
import { ServiceSpinner } from 'src/app/services/spinner/service-spinner';

@Component({
  selector: 'app-get-book',
  templateUrl: './get-book.component.html',
  styleUrls: ['./get-book.component.css'],
})
export class GetBookComponent implements OnInit {
  constructor(
    private ServiceApiService: ServiceApi,
    private SpinnerService: ServiceSpinner
  ) {}

  public listBooks: Array<IBook> | undefined;

  showSpinner() {
    this.SpinnerService.showSpinner = true;
  }

  hideSpinner() {
    this.SpinnerService.showSpinner = false;
  }

  clearListBooks() {
    this.listBooks = [];
  }

  ngOnInit(): void {
    this.getBook();
  }

  public getBook() {
    this.clearListBooks();
    this.showSpinner();

    this.ServiceApiService.getData().subscribe({
      next: (response) => {
        this.listBooks = response.data;
        this.hideSpinner();
      },
      error: (error) => {
        console.error('Erro ao fazer o GET', error);
      },
    });
  }
}
