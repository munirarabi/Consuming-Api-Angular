import { Component } from '@angular/core';
import { ServiceApiService } from 'src/app/service-api.service';

@Component({
  selector: 'app-insert-book',
  templateUrl: './insert-book.component.html',
  styleUrls: ['./insert-book.component.css'],
})
export class InsertBookComponent {
  constructor(private ServiceApiService: ServiceApiService) {}

  nameBook: string = '';
  authorBook: string = '';

  insertBook() {
    const data = {
      title: this.nameBook,
      author: this.authorBook,
    };

    this.ServiceApiService.insertData(data).subscribe(
      (response) => {
        console.log('POST realizado com sucesso', response);
      },
      (error) => {
        console.error('Erro ao fazer o POST', error);
      }
    );
  }
}
