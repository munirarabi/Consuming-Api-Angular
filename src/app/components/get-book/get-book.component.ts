import { Component } from '@angular/core';
import { IBook } from 'src/app/interfaces/IBook';
import { ServiceApiService } from 'src/app/services/service-api.service';

@Component({
  selector: 'app-get-book',
  templateUrl: './get-book.component.html',
  styleUrls: ['./get-book.component.css'],
})
export class GetBookComponent {
  constructor(private ServiceApiService: ServiceApiService) {}

  listBooks: Array<IBook> | undefined;

  getBook() {
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
}
