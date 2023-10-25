import { Component } from '@angular/core';
import { IBook } from 'src/app/interfaces/IBook';
import { IData } from 'src/app/interfaces/IData';
import { ServiceApiService } from 'src/app/service-api.service';

@Component({
  selector: 'app-get-book',
  templateUrl: './get-book.component.html',
  styleUrls: ['./get-book.component.css'],
})
export class GetBookComponent {
  constructor(private ServiceApiService: ServiceApiService) {}

  listBooks: any = [];

  getBook() {
    this.ServiceApiService.getData().subscribe(
      (response) => {
        this.listBooks = response.data;
        console.log(this.listBooks);
        // console.log('GET realizado com sucesso', response);
      },
      (error) => {
        console.error('Erro ao fazer o GET', error);
      }
    );
  }
}
