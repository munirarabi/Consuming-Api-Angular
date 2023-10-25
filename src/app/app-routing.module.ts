import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetBookComponent } from './components/get-book/get-book.component';
import { InsertBookComponent } from './components/insert-book/insert-book.component';
import { UpdateBookComponent } from './components/update-book/update-book.component';
import { DeleteBookComponent } from './components/delete-book/delete-book.component';

const routes: Routes = [
  { path: 'getBook', component: GetBookComponent },
  { path: 'insertBook', component: InsertBookComponent },
  { path: 'updateBook', component: UpdateBookComponent },
  { path: 'deleteBook', component: DeleteBookComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
